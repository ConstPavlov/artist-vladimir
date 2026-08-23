import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const srcRoot = path.join(root, 'newFoto')
const worksRoot = path.join(srcRoot, 'все новые фото')
const artistRoot = path.join(worksRoot, 'Фото художника')
const oilRoot = path.join(worksRoot, 'МАСЛО')
const outRoot = path.join(root, 'public', 'media')
const dataOut = path.join(root, 'src', 'data', 'media.ts')

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true })
}

function copyFile(from, to) {
  ensureDir(path.dirname(to))
  fs.copyFileSync(from, to)
}

function stripExt(name) {
  return name.replace(/\.[^.]+$/, '')
}

function displayCaption(filename) {
  return stripExt(filename)
    .replace(/\s+/g, ' ')
    .replace(/_+/g, ', ')
    .replace(/\s+,/g, ',')
    .replace(/,+/g, ',')
    .replace(/\.$/, '')
    .trim()
}

function titleFromFilename(filename) {
  const stem = stripExt(filename)
  const first = stem.split('_')[0].replace(/^\d+\.\s*/, '').trim()
  return first.replace(/\.$/, '')
}

function techniqueFrom(filename, inOilFolder) {
  const n = filename.toLowerCase()
  if (inOilFolder || /масло/.test(n)) return 'масло'
  if (/пастел/.test(n)) return 'пастель'
  if (/тушь|перо/.test(n)) return 'акварель, графика'
  if (/акварель/.test(n)) return 'акварель'
  return 'акварель'
}

function classifyGroup(filename) {
  const n = filename.toLowerCase().replace(/ё/g, 'е')
  if (/буратино|вий|рождеств|вакула|гоголь/.test(n)) return 'illustrations'
  if (/зимн|оттепел/.test(n)) return 'winter'
  if (/(цвет|роз|букет|салют)/.test(n) && !/аккорд/.test(n)) return 'flowers'
  if (/храм|иисус|с нами бог|истина|птичка небесн/.test(n)) return 'spiritual'
  if (/бабочк|птиц|феникс|кот|охотник|лакомк/.test(n)) return 'nature'
  if (
    /катакл|наводн|руин|разруш|чернобыл|гори все|урбан|тревог|остатки цивил|край земли/.test(
      n
    )
  )
    return 'drama'
  if (
    /абстракц|всплеск|импровиз|ритм|фантаз|аккорд|оранжев|странн|мираж|порыв|зарожден|безназвания/.test(
      n
    )
  )
    return 'fantasy'
  if (
    /вечер у воды|дальн|дворик|закат|залив|дорог|пейзаж|родн|вечерн город|старый сад|отражен|уходящ|осень|источник|лестниц/.test(
      n
    )
  )
    return 'landscape'
  if (
    /двое|догонял|карлыч|шукшин|запорож|казач|кабачк|паром|свидан|сам пью|бурлеск|хоровод|крыльцо|шинок|дома ждут|скорее домой|банка/.test(
      n
    )
  )
    return 'people'
  return 'lyric'
}

const IMAGE_RE = /\.(jpe?g|png|webp|gif)$/i
const VIDEO_RE = /\.(mp4|webm|mov)$/i

function listFiles(dir) {
  if (!fs.existsSync(dir)) return []
  return fs.readdirSync(dir, { withFileTypes: true }).filter((d) => d.isFile())
}

ensureDir(outRoot)
ensureDir(path.join(outRoot, 'works'))
ensureDir(path.join(outRoot, 'artist'))
ensureDir(path.join(outRoot, 'home'))
ensureDir(path.join(outRoot, 'texture'))
ensureDir(path.join(outRoot, 'publications'))

copyFile(
  path.join(srcRoot, 'textura-akvarel.jpg'),
  path.join(outRoot, 'texture', 'textura-akvarel.jpg')
)
copyFile(path.join(srcRoot, 'plenka.jpg'), path.join(outRoot, 'home', 'plenka.jpg'))

const works = []
let workIndex = 0

function addWork(absPath, filename, inOilFolder) {
  if (!IMAGE_RE.test(filename)) return
  workIndex += 1
  const ext = path.extname(filename).toLowerCase()
  const id = `w${String(workIndex).padStart(3, '0')}`
  const destName = `${id}${ext === '.jpeg' ? '.jpg' : ext}`
  copyFile(absPath, path.join(outRoot, 'works', destName))
  works.push({
    id,
    src: `/media/works/${destName}`,
    file: filename,
    caption: displayCaption(filename),
    title: titleFromFilename(filename),
    technique: techniqueFrom(filename, inOilFolder),
    group: classifyGroup(filename),
  })
}

for (const f of listFiles(worksRoot)) {
  addWork(path.join(worksRoot, f.name), f.name, false)
}
for (const f of listFiles(oilRoot)) {
  addWork(path.join(oilRoot, f.name), f.name, true)
}

const homePhotos = []
const memoryPhotos = []
const videos = []
let artistIndex = 0
let memoryIndex = 0

for (const f of listFiles(artistRoot)) {
  const abs = path.join(artistRoot, f.name)
  if (VIDEO_RE.test(f.name)) {
    const dest = `exhibition${path.extname(f.name).toLowerCase()}`
    copyFile(abs, path.join(outRoot, 'artist', dest))
    videos.push({
      src: `/media/artist/${dest}`,
      caption: displayCaption(f.name),
      title: titleFromFilename(f.name),
    })
    continue
  }
  if (!IMAGE_RE.test(f.name)) continue
  const isHome = /главн/i.test(f.name)
  if (isHome) {
    const num = (f.name.match(/^(\d+)/) || [])[1] || String(homePhotos.length + 1)
    const dest = `home-${num}${path.extname(f.name).toLowerCase()}`
    copyFile(abs, path.join(outRoot, 'home', dest))
    homePhotos.push({
      src: `/media/home/${dest}`,
      caption: displayCaption(f.name),
      order: Number(num) || homePhotos.length + 1,
    })
  } else {
    memoryIndex += 1
    const dest = `m${String(memoryIndex).padStart(2, '0')}${path.extname(f.name).toLowerCase()}`
    copyFile(abs, path.join(outRoot, 'artist', dest))
    memoryPhotos.push({
      id: `m${String(memoryIndex).padStart(2, '0')}`,
      src: `/media/artist/${dest}`,
      caption: displayCaption(f.name),
      title: titleFromFilename(f.name),
    })
  }
  artistIndex += 1
}

homePhotos.sort((a, b) => a.order - b.order)

const publications = listFiles(path.join(outRoot, 'publications'))
  .filter((f) => IMAGE_RE.test(f.name) || /\.pdf$/i.test(f.name))
  .map((f) => ({
    src: `/media/publications/${encodeURIComponent(f.name)}`,
    caption: displayCaption(f.name),
    title: titleFromFilename(f.name),
  }))

const ts = `export type WorkGroup =
  | 'illustrations'
  | 'winter'
  | 'flowers'
  | 'landscape'
  | 'spiritual'
  | 'nature'
  | 'people'
  | 'fantasy'
  | 'drama'
  | 'lyric'

export type Artwork = {
  id: string
  src: string
  file: string
  caption: string
  title: string
  technique: string
  group: WorkGroup
}

export type MemoryPhoto = {
  id: string
  src: string
  caption: string
  title: string
}

export const WORK_GROUPS: { id: WorkGroup; title: string; description: string }[] = [
  { id: 'illustrations', title: 'Иллюстрации', description: 'Обложки и образы по Гоголю, сказкам и книгам' },
  { id: 'winter', title: 'Зима', description: 'Снег, тишина и зимний свет' },
  { id: 'flowers', title: 'Цветы', description: 'Букеты, розы и цветочные фантазии' },
  { id: 'landscape', title: 'Пейзаж', description: 'Дороги, дворики, вода и дома' },
  { id: 'spiritual', title: 'Духовное', description: 'Храмы, свет и образы веры' },
  { id: 'nature', title: 'Природа и животные', description: 'Птицы, звери и живой мир' },
  { id: 'people', title: 'Люди и сюжеты', description: 'Быт, характеры и сцены' },
  { id: 'fantasy', title: 'Фантазия и абстракция', description: 'Ритм, цвет и сновидения' },
  { id: 'drama', title: 'Драма и стихия', description: 'Разрушение, тревога и сила природы' },
  { id: 'lyric', title: 'Лирика и образы', description: 'Настроение, ожидание и тишина' },
]

export const artworks: Artwork[] = ${JSON.stringify(works, null, 2)}

export const homeFilmPhotos = ${JSON.stringify(
  homePhotos.map(({ src, caption }) => ({ src, caption })),
  null,
  2
)}

export const memoryPhotos: MemoryPhoto[] = ${JSON.stringify(memoryPhotos, null, 2)}

export const memoryVideos = ${JSON.stringify(videos, null, 2)}

export const publications: { src: string; caption: string; title: string }[] = ${JSON.stringify(publications, null, 2)}

export const FILM_STRIP_SRC = '/media/home/plenka.jpg'
export const PAPER_TEXTURE_SRC = '/media/texture/textura-akvarel.jpg'
`

ensureDir(path.dirname(dataOut))
fs.writeFileSync(dataOut, ts)
console.log(
  `Synced ${works.length} works, ${homePhotos.length} home photos, ${memoryPhotos.length} memory photos, ${videos.length} videos`
)
