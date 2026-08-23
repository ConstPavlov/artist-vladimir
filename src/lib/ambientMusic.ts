/** Тихий акварельный аккомпанемент для слайд-шоу (без внешних файлов). */

type Handle = {
  stop: () => void
}

export function startAmbientMusic(): Handle {
  const Ctor = window.AudioContext
  if (!Ctor) {
    return { stop: () => undefined }
  }

  const ctx = new Ctor()
  const master = ctx.createGain()
  master.gain.value = 0
  master.connect(ctx.destination)
  master.gain.linearRampToValueAtTime(0.07, ctx.currentTime + 1.2)

  const notes = [196, 246.94, 293.66, 329.63, 392, 329.63, 293.66, 246.94]
  let step = 0
  let stopped = false

  const playNote = () => {
    if (stopped) return
    const osc = ctx.createOscillator()
    const gain = ctx.createGain()
    const filter = ctx.createBiquadFilter()
    osc.type = 'triangle'
    osc.frequency.value = notes[step % notes.length]
    filter.type = 'lowpass'
    filter.frequency.value = 900
    gain.gain.setValueAtTime(0, ctx.currentTime)
    gain.gain.linearRampToValueAtTime(0.22, ctx.currentTime + 0.4)
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 2.8)
    osc.connect(filter)
    filter.connect(gain)
    gain.connect(master)
    osc.start()
    osc.stop(ctx.currentTime + 3)
    step += 1
  }

  playNote()
  const timer = window.setInterval(playNote, 2200)

  void ctx.resume()

  return {
    stop: () => {
      stopped = true
      window.clearInterval(timer)
      master.gain.cancelScheduledValues(ctx.currentTime)
      master.gain.linearRampToValueAtTime(0.0001, ctx.currentTime + 0.4)
      window.setTimeout(() => {
        void ctx.close()
      }, 500)
    },
  }
}
