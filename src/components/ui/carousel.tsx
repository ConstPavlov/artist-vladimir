import * as React from 'react'
import useEmblaCarousel from 'embla-carousel-react'

type CarouselContextValue = {
  api: ReturnType<typeof useEmblaCarousel>[1]
  scrollPrev: () => void
  scrollNext: () => void
  canScrollPrev: boolean
  canScrollNext: boolean
}

const CarouselContext = React.createContext<CarouselContextValue | null>(null)

function useCarousel() {
  const ctx = React.useContext(CarouselContext)
  if (!ctx) throw new Error('Carousel components must be used within Carousel')
  return ctx
}

type CarouselProps = React.HTMLAttributes<HTMLDivElement> & {
  opts?: Parameters<typeof useEmblaCarousel>[0]
  setApi?: (api: ReturnType<typeof useEmblaCarousel>[1]) => void
}

const Carousel = React.forwardRef<HTMLDivElement, CarouselProps>(
  ({ opts, setApi, className, children, ...props }, ref) => {
    const [emblaRef, emblaApi] = useEmblaCarousel(opts)
    const [canScrollPrev, setCanScrollPrev] = React.useState(false)
    const [canScrollNext, setCanScrollNext] = React.useState(false)

    const scrollPrev = React.useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
    const scrollNext = React.useCallback(() => emblaApi?.scrollNext(), [emblaApi])

    React.useEffect(() => {
      setApi?.(emblaApi)
      return undefined
    }, [emblaApi, setApi])

    React.useEffect(() => {
      if (!emblaApi) return
      const onSelect = () => {
        setCanScrollPrev(emblaApi.canScrollPrev())
        setCanScrollNext(emblaApi.canScrollNext())
      }
      onSelect()
      emblaApi.on('select', onSelect)
      return () => {
        emblaApi.off('select', onSelect)
      }
    }, [emblaApi])

    const value = React.useMemo<CarouselContextValue>(
      () => ({ api: emblaApi, scrollPrev, scrollNext, canScrollPrev, canScrollNext }),
      [emblaApi, scrollPrev, scrollNext, canScrollPrev, canScrollNext],
    )

    return (
      <CarouselContext.Provider value={value}>
        <div ref={ref} className={className} {...props}>
          <div ref={emblaRef} className="overflow-hidden">
            {children}
          </div>
        </div>
      </CarouselContext.Provider>
    )
  },
)
Carousel.displayName = 'Carousel'

const CarouselContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={`flex -ml-4 ${className ?? ''}`} {...props} />
  ),
)
CarouselContent.displayName = 'CarouselContent'

const CarouselItem = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={`pl-4 flex-[0_0_100%] min-w-0 sm:flex-[0_0_calc(50%-0.5rem)] ${className ?? ''}`}
      {...props}
    />
  ),
)
CarouselItem.displayName = 'CarouselItem'

function CarouselPrevious({ className, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const { scrollPrev, canScrollPrev } = useCarousel()
  return (
    <button
      type="button"
      onClick={scrollPrev}
      disabled={!canScrollPrev}
      className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 h-10 w-10 rounded-full border border-[#2a2a32] bg-[#1a1a1f] text-[#e8e6e3] shadow hover:bg-[#2a2a32] disabled:opacity-50 disabled:pointer-events-none ${className ?? ''}`}
      aria-label="Предыдущий слайд"
      {...props}
    >
      <span className="text-xl leading-none">‹</span>
    </button>
  )
}

function CarouselNext({ className, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const { scrollNext, canScrollNext } = useCarousel()
  return (
    <button
      type="button"
      onClick={scrollNext}
      disabled={!canScrollNext}
      className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 h-10 w-10 rounded-full border border-[#2a2a32] bg-[#1a1a1f] text-[#e8e6e3] shadow hover:bg-[#2a2a32] disabled:opacity-50 disabled:pointer-events-none ${className ?? ''}`}
      aria-label="Следующий слайд"
      {...props}
    >
      <span className="text-xl leading-none">›</span>
    </button>
  )
}

export {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
}
