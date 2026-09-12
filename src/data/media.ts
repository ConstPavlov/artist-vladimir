export type WorkGroup =
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

export const artworks: Artwork[] = [
  {
    "id": "w001",
    "src": "/media/works/w001.jpg",
    "file": "А дома ждут_акварель_23х36_92г..jpg",
    "caption": "А дома ждут, акварель, 23х36, 92г",
    "title": "А дома ждут",
    "technique": "акварель",
    "group": "people"
  },
  {
    "id": "w002",
    "src": "/media/works/w002.jpg",
    "file": "Абстракция_акварель_46х32_94г..JPG",
    "caption": "Абстракция, акварель, 46х32, 94г",
    "title": "Абстракция",
    "technique": "акварель",
    "group": "fantasy"
  },
  {
    "id": "w003",
    "src": "/media/works/w003.jpg",
    "file": "Бабочка_акварель_37х25_91г..jpg",
    "caption": "Бабочка, акварель, 37х25, 91г",
    "title": "Бабочка",
    "technique": "акварель",
    "group": "nature"
  },
  {
    "id": "w004",
    "src": "/media/works/w004.jpg",
    "file": "Букет_акварель_34х23х90г..JPG",
    "caption": "Букет, акварель, 34х23х90г",
    "title": "Букет",
    "technique": "акварель",
    "group": "flowers"
  },
  {
    "id": "w005",
    "src": "/media/works/w005.jpg",
    "file": "Буратино идёт в школу_акварель_35Х23.jpg",
    "caption": "Буратино идёт в школу, акварель, 35Х23",
    "title": "Буратино идёт в школу",
    "technique": "акварель",
    "group": "illustrations"
  },
  {
    "id": "w006",
    "src": "/media/works/w006.jpg",
    "file": "Буратино обложка_акварель_35х23.jpg",
    "caption": "Буратино обложка, акварель, 35х23",
    "title": "Буратино обложка",
    "technique": "акварель",
    "group": "illustrations"
  },
  {
    "id": "w007",
    "src": "/media/works/w007.jpg",
    "file": "Бурлеск_акварель_33х23_91г..JPG",
    "caption": "Бурлеск, акварель, 33х23, 91г",
    "title": "Бурлеск",
    "technique": "акварель",
    "group": "people"
  },
  {
    "id": "w008",
    "src": "/media/works/w008.jpg",
    "file": "Вакула и черт_акварель_35х23_91г..jpg",
    "caption": "Вакула и черт, акварель, 35х23, 91г",
    "title": "Вакула и черт",
    "technique": "акварель",
    "group": "illustrations"
  },
  {
    "id": "w009",
    "src": "/media/works/w009.jpg",
    "file": "Вечер у воды_акварель_22х34_93г..jpg",
    "caption": "Вечер у воды, акварель, 22х34, 93г",
    "title": "Вечер у воды",
    "technique": "акварель",
    "group": "landscape"
  },
  {
    "id": "w010",
    "src": "/media/works/w010.jpg",
    "file": "Вий,обложка_акварель_35х23.JPG",
    "caption": "Вий,обложка, акварель, 35х23",
    "title": "Вий,обложка",
    "technique": "акварель",
    "group": "illustrations"
  },
  {
    "id": "w011",
    "src": "/media/works/w011.jpg",
    "file": "Всплеск_акварель_37х25_93г..JPG",
    "caption": "Всплеск, акварель, 37х25, 93г",
    "title": "Всплеск",
    "technique": "акварель",
    "group": "fantasy"
  },
  {
    "id": "w012",
    "src": "/media/works/w012.jpg",
    "file": "Гоголь_акварель_22х35_94г..jpg",
    "caption": "Гоголь, акварель, 22х35, 94г",
    "title": "Гоголь",
    "technique": "акварель",
    "group": "illustrations"
  },
  {
    "id": "w013",
    "src": "/media/works/w013.jpg",
    "file": "Гори все огнем..._акварель_22х35_94г..jpg",
    "caption": "Гори все огнем..., акварель, 22х35, 94г",
    "title": "Гори все огнем..",
    "technique": "акварель",
    "group": "drama"
  },
  {
    "id": "w014",
    "src": "/media/works/w014.jpg",
    "file": "Дальняя дорога_акварель_22х35_94г..jpg",
    "caption": "Дальняя дорога, акварель, 22х35, 94г",
    "title": "Дальняя дорога",
    "technique": "акварель",
    "group": "landscape"
  },
  {
    "id": "w015",
    "src": "/media/works/w015.jpg",
    "file": "Двое_акварель_37х24_94г..JPG",
    "caption": "Двое, акварель, 37х24, 94г",
    "title": "Двое",
    "technique": "акварель",
    "group": "people"
  },
  {
    "id": "w016",
    "src": "/media/works/w016.jpg",
    "file": "Дворик_акварель_23х36_92г..JPG",
    "caption": "Дворик, акварель, 23х36, 92г",
    "title": "Дворик",
    "technique": "акварель",
    "group": "landscape"
  },
  {
    "id": "w017",
    "src": "/media/works/w017.jpg",
    "file": "Догонялки_акварель_31х20_91г..jpg",
    "caption": "Догонялки, акварель, 31х20, 91г",
    "title": "Догонялки",
    "technique": "акварель",
    "group": "people"
  },
  {
    "id": "w018",
    "src": "/media/works/w018.jpg",
    "file": "Запорожец_акварель_33х48_94г..jpg",
    "caption": "Запорожец, акварель, 33х48, 94г",
    "title": "Запорожец",
    "technique": "акварель",
    "group": "people"
  },
  {
    "id": "w019",
    "src": "/media/works/w019.jpg",
    "file": "Зарождение жизни_акварель_34х22_91г..JPG",
    "caption": "Зарождение жизни, акварель, 34х22, 91г",
    "title": "Зарождение жизни",
    "technique": "акварель",
    "group": "fantasy"
  },
  {
    "id": "w020",
    "src": "/media/works/w020.jpg",
    "file": "Зимний пейзаж_акварель_24х37_93г..jpg",
    "caption": "Зимний пейзаж, акварель, 24х37, 93г",
    "title": "Зимний пейзаж",
    "technique": "акварель",
    "group": "winter"
  },
  {
    "id": "w021",
    "src": "/media/works/w021.jpg",
    "file": "Зимняя песня_акварель_33х24_93г..jpg",
    "caption": "Зимняя песня, акварель, 33х24, 93г",
    "title": "Зимняя песня",
    "technique": "акварель",
    "group": "winter"
  },
  {
    "id": "w022",
    "src": "/media/works/w022.jpg",
    "file": "Зимняя фантазия_акварель_22х35_93г..jpg",
    "caption": "Зимняя фантазия, акварель, 22х35, 93г",
    "title": "Зимняя фантазия",
    "technique": "акварель",
    "group": "winter"
  },
  {
    "id": "w023",
    "src": "/media/works/w023.jpg",
    "file": "Из кабачка_акварель_34Х22_91г..JPG",
    "caption": "Из кабачка, акварель, 34Х22, 91г",
    "title": "Из кабачка",
    "technique": "акварель",
    "group": "people"
  },
  {
    "id": "w024",
    "src": "/media/works/w024.jpg",
    "file": "Иисус Христос_акварель_33Х22_91г..JPG",
    "caption": "Иисус Христос, акварель, 33Х22, 91г",
    "title": "Иисус Христос",
    "technique": "акварель",
    "group": "spiritual"
  },
  {
    "id": "w025",
    "src": "/media/works/w025.jpg",
    "file": "Импровизация в ре-мажоре_акварель_35х23_92г..JPG",
    "caption": "Импровизация в ре-мажоре, акварель, 35х23, 92г",
    "title": "Импровизация в ре-мажоре",
    "technique": "акварель",
    "group": "fantasy"
  },
  {
    "id": "w026",
    "src": "/media/works/w026.jpg",
    "file": "Истина_акварель_36х27_94г..JPG",
    "caption": "Истина, акварель, 36х27, 94г",
    "title": "Истина",
    "technique": "акварель",
    "group": "spiritual"
  },
  {
    "id": "w027",
    "src": "/media/works/w027.jpg",
    "file": "Источник_акварель_37х24_92г..JPG",
    "caption": "Источник, акварель, 37х24, 92г",
    "title": "Источник",
    "technique": "акварель",
    "group": "landscape"
  },
  {
    "id": "w028",
    "src": "/media/works/w028.jpg",
    "file": "Карлыч_акварель_46х33_94г..JPG",
    "caption": "Карлыч, акварель, 46х33, 94г",
    "title": "Карлыч",
    "technique": "акварель",
    "group": "people"
  },
  {
    "id": "w029",
    "src": "/media/works/w029.jpg",
    "file": "Катаклизм_акварель_34х22_90г..JPG",
    "caption": "Катаклизм, акварель, 34х22, 90г",
    "title": "Катаклизм",
    "technique": "акварель",
    "group": "drama"
  },
  {
    "id": "w030",
    "src": "/media/works/w030.jpg",
    "file": "Край земли_акварель_33х22_90г..JPG",
    "caption": "Край земли, акварель, 33х22, 90г",
    "title": "Край земли",
    "technique": "акварель",
    "group": "drama"
  },
  {
    "id": "w031",
    "src": "/media/works/w031.jpg",
    "file": "Лакомка_акварель,тушь,перо_47х33_94г..JPG",
    "caption": "Лакомка, акварель,тушь,перо, 47х33, 94г",
    "title": "Лакомка",
    "technique": "акварель, графика",
    "group": "nature"
  },
  {
    "id": "w032",
    "src": "/media/works/w032.jpg",
    "file": "Лестница_акварель_49х35_93г..JPG",
    "caption": "Лестница, акварель, 49х35, 93г",
    "title": "Лестница",
    "technique": "акварель",
    "group": "landscape"
  },
  {
    "id": "w033",
    "src": "/media/works/w033.jpg",
    "file": "Мираж_акварель,перо_25х18_90г..JPG",
    "caption": "Мираж, акварель,перо, 25х18, 90г",
    "title": "Мираж",
    "technique": "акварель, графика",
    "group": "fantasy"
  },
  {
    "id": "w034",
    "src": "/media/works/w034.jpg",
    "file": "На закате_акварель_35х23_92г..jpg",
    "caption": "На закате, акварель, 35х23, 92г",
    "title": "На закате",
    "technique": "акварель",
    "group": "landscape"
  },
  {
    "id": "w035",
    "src": "/media/works/w035.jpg",
    "file": "Наводнение_акварель_49х35_92г..JPG",
    "caption": "Наводнение, акварель, 49х35, 92г",
    "title": "Наводнение",
    "technique": "акварель",
    "group": "drama"
  },
  {
    "id": "w036",
    "src": "/media/works/w036.jpg",
    "file": "Надежда_акварель_36х23_92г..JPG",
    "caption": "Надежда, акварель, 36х23, 92г",
    "title": "Надежда",
    "technique": "акварель",
    "group": "lyric"
  },
  {
    "id": "w037",
    "src": "/media/works/w037.jpg",
    "file": "Нежность_32х22_акварель_94г..jpg",
    "caption": "Нежность, 32х22, акварель, 94г",
    "title": "Нежность",
    "technique": "акварель",
    "group": "lyric"
  },
  {
    "id": "w038",
    "src": "/media/works/w038.jpg",
    "file": "Нежность_акварель_37х24_94г..JPG",
    "caption": "Нежность, акварель, 37х24, 94г",
    "title": "Нежность",
    "technique": "акварель",
    "group": "lyric"
  },
  {
    "id": "w039",
    "src": "/media/works/w039.jpg",
    "file": "Ностальгия_акварель,тушь_33х49_94г..JPG",
    "caption": "Ностальгия, акварель,тушь, 33х49, 94г",
    "title": "Ностальгия",
    "technique": "акварель, графика",
    "group": "lyric"
  },
  {
    "id": "w040",
    "src": "/media/works/w040.jpg",
    "file": "Ночь перед Рождеством I,обложка_акварель-35х23.JPG",
    "caption": "Ночь перед Рождеством I,обложка, акварель-35х23",
    "title": "Ночь перед Рождеством I,обложка",
    "technique": "акварель",
    "group": "illustrations"
  },
  {
    "id": "w041",
    "src": "/media/works/w041.jpg",
    "file": "Ночь перед Рождеством II,обложка_акварель_35х23.JPG",
    "caption": "Ночь перед Рождеством II,обложка, акварель, 35х23",
    "title": "Ночь перед Рождеством II,обложка",
    "technique": "акварель",
    "group": "illustrations"
  },
  {
    "id": "w042",
    "src": "/media/works/w042.jpg",
    "file": "Одиночество_акварель_21х32_90г..jpg",
    "caption": "Одиночество, акварель, 21х32, 90г",
    "title": "Одиночество",
    "technique": "акварель",
    "group": "lyric"
  },
  {
    "id": "w043",
    "src": "/media/works/w043.jpg",
    "file": "Ожидание чуда_акварель_34х48_93г..JPG",
    "caption": "Ожидание чуда, акварель, 34х48, 93г",
    "title": "Ожидание чуда",
    "technique": "акварель",
    "group": "lyric"
  },
  {
    "id": "w044",
    "src": "/media/works/w044.jpg",
    "file": "Оранжевое_акварель_33х23_92г..jpg",
    "caption": "Оранжевое, акварель, 33х23, 92г",
    "title": "Оранжевое",
    "technique": "акварель",
    "group": "fantasy"
  },
  {
    "id": "w045",
    "src": "/media/works/w045.jpg",
    "file": "Осень_пастель_30х20_91г..JPG",
    "caption": "Осень, пастель, 30х20, 91г",
    "title": "Осень",
    "technique": "пастель",
    "group": "landscape"
  },
  {
    "id": "w046",
    "src": "/media/works/w046.jpg",
    "file": "Остатки цивилизации_акварель_33х21_90г..jpg",
    "caption": "Остатки цивилизации, акварель, 33х21, 90г",
    "title": "Остатки цивилизации",
    "technique": "акварель",
    "group": "drama"
  },
  {
    "id": "w047",
    "src": "/media/works/w047.jpg",
    "file": "Отражение_акварель_37х25_93г..jpg",
    "caption": "Отражение, акварель, 37х25, 93г",
    "title": "Отражение",
    "technique": "акварель",
    "group": "landscape"
  },
  {
    "id": "w048",
    "src": "/media/works/w048.jpg",
    "file": "Охотничий кот II_акварель_34х49_94г..JPG",
    "caption": "Охотничий кот II, акварель, 34х49, 94г",
    "title": "Охотничий кот II",
    "technique": "акварель",
    "group": "nature"
  },
  {
    "id": "w049",
    "src": "/media/works/w049.jpg",
    "file": "Полевая роза_акварель_42х37_91г..JPG",
    "caption": "Полевая роза, акварель, 42х37, 91г",
    "title": "Полевая роза",
    "technique": "акварель",
    "group": "flowers"
  },
  {
    "id": "w050",
    "src": "/media/works/w050.jpg",
    "file": "Порыв_акварель_43х30_91г..JPG",
    "caption": "Порыв, акварель, 43х30, 91г",
    "title": "Порыв",
    "technique": "акварель",
    "group": "fantasy"
  },
  {
    "id": "w051",
    "src": "/media/works/w051.jpg",
    "file": "Птица феникс_акварель_36х25_94г..JPG",
    "caption": "Птица феникс, акварель, 36х25, 94г",
    "title": "Птица феникс",
    "technique": "акварель",
    "group": "nature"
  },
  {
    "id": "w052",
    "src": "/media/works/w052.jpg",
    "file": "Птицы_акварель_51х37_94г..JPG",
    "caption": "Птицы, акварель, 51х37, 94г",
    "title": "Птицы",
    "technique": "акварель",
    "group": "nature"
  },
  {
    "id": "w053",
    "src": "/media/works/w053.jpg",
    "file": "Птичка небесная_акварель_51х18_92г..jpg",
    "caption": "Птичка небесная, акварель, 51х18, 92г",
    "title": "Птичка небесная",
    "technique": "акварель",
    "group": "spiritual"
  },
  {
    "id": "w054",
    "src": "/media/works/w054.jpg",
    "file": "Ритм_акварель_24х36_91г..JPG",
    "caption": "Ритм, акварель, 24х36, 91г",
    "title": "Ритм",
    "technique": "акварель",
    "group": "fantasy"
  },
  {
    "id": "w055",
    "src": "/media/works/w055.jpg",
    "file": "Руины_акварель_29Х20_90г..jpg",
    "caption": "Руины, акварель, 29Х20, 90г",
    "title": "Руины",
    "technique": "акварель",
    "group": "drama"
  },
  {
    "id": "w056",
    "src": "/media/works/w056.jpg",
    "file": "С легким паром_акварель_20х31_91г..JPG",
    "caption": "С легким паром, акварель, 20х31, 91г",
    "title": "С легким паром",
    "technique": "акварель",
    "group": "people"
  },
  {
    "id": "w057",
    "src": "/media/works/w057.jpg",
    "file": "С нами Бог_акварель_33х48_90г..JPG",
    "caption": "С нами Бог, акварель, 33х48, 90г",
    "title": "С нами Бог",
    "technique": "акварель",
    "group": "spiritual"
  },
  {
    "id": "w058",
    "src": "/media/works/w058.jpg",
    "file": "Салют цветов_акварель_34х23_93г..jpg",
    "caption": "Салют цветов, акварель, 34х23, 93г",
    "title": "Салют цветов",
    "technique": "акварель",
    "group": "flowers"
  },
  {
    "id": "w059",
    "src": "/media/works/w059.jpg",
    "file": "Сам пью,сам гуляю..._акварель_49х35_94г..JPG",
    "caption": "Сам пью,сам гуляю..., акварель, 49х35, 94г",
    "title": "Сам пью,сам гуляю..",
    "technique": "акварель",
    "group": "people"
  },
  {
    "id": "w060",
    "src": "/media/works/w060.jpg",
    "file": "Свет_акварель_35х24_94г..JPG",
    "caption": "Свет, акварель, 35х24, 94г",
    "title": "Свет",
    "technique": "акварель",
    "group": "lyric"
  },
  {
    "id": "w061",
    "src": "/media/works/w061.jpg",
    "file": "Свидание_акварель_40х31_94г..jpg",
    "caption": "Свидание, акварель, 40х31, 94г",
    "title": "Свидание",
    "technique": "акварель",
    "group": "people"
  },
  {
    "id": "w062",
    "src": "/media/works/w062.jpg",
    "file": "Символ разрушения_акварель_36х23_90г..jpg",
    "caption": "Символ разрушения, акварель, 36х23, 90г",
    "title": "Символ разрушения",
    "technique": "акварель",
    "group": "drama"
  },
  {
    "id": "w063",
    "src": "/media/works/w063.jpg",
    "file": "Скорее домой_акварель,тушь_13х12_90г..JPG",
    "caption": "Скорее домой, акварель,тушь, 13х12, 90г",
    "title": "Скорее домой",
    "technique": "акварель, графика",
    "group": "people"
  },
  {
    "id": "w064",
    "src": "/media/works/w064.jpg",
    "file": "Старый сад_акварель_37х24_93г..jpg",
    "caption": "Старый сад, акварель, 37х24, 93г",
    "title": "Старый сад",
    "technique": "акварель",
    "group": "landscape"
  },
  {
    "id": "w065",
    "src": "/media/works/w065.jpg",
    "file": "Странный сон_акварель_38х29_91г..JPG",
    "caption": "Странный сон, акварель, 38х29, 91г",
    "title": "Странный сон",
    "technique": "акварель",
    "group": "fantasy"
  },
  {
    "id": "w066",
    "src": "/media/works/w066.jpg",
    "file": "Сухое дерево_акварель_34х22_90г..JPG",
    "caption": "Сухое дерево, акварель, 34х22, 90г",
    "title": "Сухое дерево",
    "technique": "акварель",
    "group": "lyric"
  },
  {
    "id": "w067",
    "src": "/media/works/w067.jpg",
    "file": "Уходящий день_34х49_акварель_92г..jpg",
    "caption": "Уходящий день, 34х49, акварель, 92г",
    "title": "Уходящий день",
    "technique": "акварель",
    "group": "landscape"
  },
  {
    "id": "w068",
    "src": "/media/works/w068.jpg",
    "file": "Фантазия_акварель_34х23_91г..JPG",
    "caption": "Фантазия, акварель, 34х23, 91г",
    "title": "Фантазия",
    "technique": "акварель",
    "group": "fantasy"
  },
  {
    "id": "w069",
    "src": "/media/works/w069.jpg",
    "file": "Хоровод_акварель_35х23_93г..jpg",
    "caption": "Хоровод, акварель, 35х23, 93г",
    "title": "Хоровод",
    "technique": "акварель",
    "group": "people"
  },
  {
    "id": "w070",
    "src": "/media/works/w070.jpg",
    "file": "Храм II_акварель_29х42_89г..JPG",
    "caption": "Храм II, акварель, 29х42, 89г",
    "title": "Храм II",
    "technique": "акварель",
    "group": "spiritual"
  },
  {
    "id": "w071",
    "src": "/media/works/w071.jpg",
    "file": "Храм духа_акварель_29х43_90г..jpg",
    "caption": "Храм духа, акварель, 29х43, 90г",
    "title": "Храм духа",
    "technique": "акварель",
    "group": "spiritual"
  },
  {
    "id": "w072",
    "src": "/media/works/w072.jpg",
    "file": "Храм у воды_35х47_акварель_92г..jpg",
    "caption": "Храм у воды, 35х47, акварель, 92г",
    "title": "Храм у воды",
    "technique": "акварель",
    "group": "spiritual"
  },
  {
    "id": "w073",
    "src": "/media/works/w073.jpg",
    "file": "Цветной аккорд_акварель_34х23_93г..jpg",
    "caption": "Цветной аккорд, акварель, 34х23, 93г",
    "title": "Цветной аккорд",
    "technique": "акварель",
    "group": "fantasy"
  },
  {
    "id": "w074",
    "src": "/media/works/w074.jpg",
    "file": "Цветок.jpg",
    "caption": "Цветок",
    "title": "Цветок",
    "technique": "акварель",
    "group": "flowers"
  },
  {
    "id": "w075",
    "src": "/media/works/w075.jpg",
    "file": "Цветочный шум_66Х25_93г..jpg",
    "caption": "Цветочный шум, 66Х25, 93г",
    "title": "Цветочный шум",
    "technique": "акварель",
    "group": "flowers"
  },
  {
    "id": "w076",
    "src": "/media/works/w076.jpg",
    "file": "Цветы_акварель_33х21_94г..jpg",
    "caption": "Цветы, акварель, 33х21, 94г",
    "title": "Цветы",
    "technique": "акварель",
    "group": "flowers"
  },
  {
    "id": "w077",
    "src": "/media/works/w077.jpg",
    "file": "Цветы_акварель_33х23_93г..jpg",
    "caption": "Цветы, акварель, 33х23, 93г",
    "title": "Цветы",
    "technique": "акварель",
    "group": "flowers"
  },
  {
    "id": "w078",
    "src": "/media/works/w078.jpg",
    "file": "Чернобыль_акварель_33х22_90г..JPG",
    "caption": "Чернобыль, акварель, 33х22, 90г",
    "title": "Чернобыль",
    "technique": "акварель",
    "group": "drama"
  },
  {
    "id": "w079",
    "src": "/media/works/w079.jpg",
    "file": "Шукшин_акварель_34х22_91г..JPG",
    "caption": "Шукшин, акварель, 34х22, 91г",
    "title": "Шукшин",
    "technique": "акварель",
    "group": "people"
  },
  {
    "id": "w080",
    "src": "/media/works/w080.jpg",
    "file": "дорога_акварель_34х49_94г..JPG",
    "caption": "дорога, акварель, 34х49, 94г",
    "title": "дорога",
    "technique": "акварель",
    "group": "landscape"
  },
  {
    "id": "w081",
    "src": "/media/works/w081.jpg",
    "file": "жизнь продолжается_акварель_51х37_92г..JPG",
    "caption": "жизнь продолжается, акварель, 51х37, 92г",
    "title": "жизнь продолжается",
    "technique": "акварель",
    "group": "lyric"
  },
  {
    "id": "w082",
    "src": "/media/works/w082.jpg",
    "file": "залив_акварель_33х22_94г..JPG",
    "caption": "залив, акварель, 33х22, 94г",
    "title": "залив",
    "technique": "акварель",
    "group": "landscape"
  },
  {
    "id": "w083",
    "src": "/media/works/w083.jpg",
    "file": "охотник_акварель_35х50_93г..JPG",
    "caption": "охотник, акварель, 35х50, 93г",
    "title": "охотник",
    "technique": "акварель",
    "group": "nature"
  },
  {
    "id": "w084",
    "src": "/media/works/w084.jpg",
    "file": "розы_акварель_36х26_91г..JPG",
    "caption": "розы, акварель, 36х26, 91г",
    "title": "розы",
    "technique": "акварель",
    "group": "flowers"
  },
  {
    "id": "w085",
    "src": "/media/works/w085.jpg",
    "file": "танец цветов_акварель_33х23_94г..jpg",
    "caption": "танец цветов, акварель, 33х23, 94г",
    "title": "танец цветов",
    "technique": "акварель",
    "group": "flowers"
  },
  {
    "id": "w086",
    "src": "/media/works/w086.jpg",
    "file": "тревога_акварель_43Х29_91г..JPG",
    "caption": "тревога, акварель, 43Х29, 91г",
    "title": "тревога",
    "technique": "акварель",
    "group": "drama"
  },
  {
    "id": "w087",
    "src": "/media/works/w087.jpg",
    "file": "урбанизация_акварель_48х35_94г..JPG",
    "caption": "урбанизация, акварель, 48х35, 94г",
    "title": "урбанизация",
    "technique": "акварель",
    "group": "drama"
  },
  {
    "id": "w088",
    "src": "/media/works/w088.jpg",
    "file": "фантазия на обоях_акварель_39х29_91г..JPG",
    "caption": "фантазия на обоях, акварель, 39х29, 91г",
    "title": "фантазия на обоях",
    "technique": "акварель",
    "group": "fantasy"
  },
  {
    "id": "w089",
    "src": "/media/works/w089.jpg",
    "file": "храм_акварель_34х22_90г..JPG",
    "caption": "храм, акварель, 34х22, 90г",
    "title": "храм",
    "technique": "акварель",
    "group": "spiritual"
  },
  {
    "id": "w090",
    "src": "/media/works/w090.jpg",
    "file": "цветы III_акварель_37х24_91г..jpg",
    "caption": "цветы III, акварель, 37х24, 91г",
    "title": "цветы III",
    "technique": "акварель",
    "group": "flowers"
  },
  {
    "id": "w091",
    "src": "/media/works/w091.jpg",
    "file": "Банка_масло_32х54_92г..JPG",
    "caption": "Банка, масло, 32х54, 92г",
    "title": "Банка",
    "technique": "масло",
    "group": "people"
  },
  {
    "id": "w092",
    "src": "/media/works/w092.jpg",
    "file": "Вечерний город_39х30_масло,фанера_91г..JPG",
    "caption": "Вечерний город, 39х30, масло,фанера, 91г",
    "title": "Вечерний город",
    "technique": "масло",
    "group": "lyric"
  },
  {
    "id": "w093",
    "src": "/media/works/w093.jpg",
    "file": "Зимний вечер_масло_40х30_91г..JPG",
    "caption": "Зимний вечер, масло, 40х30, 91г",
    "title": "Зимний вечер",
    "technique": "масло",
    "group": "winter"
  },
  {
    "id": "w094",
    "src": "/media/works/w094.jpg",
    "file": "Казачка и казак_масло_39х51_92г..jpg",
    "caption": "Казачка и казак, масло, 39х51, 92г",
    "title": "Казачка и казак",
    "technique": "масло",
    "group": "people"
  },
  {
    "id": "w095",
    "src": "/media/works/w095.jpg",
    "file": "Крыльцо Серова_масло_35х25_93г..JPG",
    "caption": "Крыльцо Серова, масло, 35х25, 93г",
    "title": "Крыльцо Серова",
    "technique": "масло",
    "group": "people"
  },
  {
    "id": "w096",
    "src": "/media/works/w096.jpg",
    "file": "Оттепель_масло_42х51.JPG",
    "caption": "Оттепель, масло, 42х51",
    "title": "Оттепель",
    "technique": "масло",
    "group": "winter"
  },
  {
    "id": "w097",
    "src": "/media/works/w097.jpg",
    "file": "Пейзаж_масло_51х56_93г..jpg",
    "caption": "Пейзаж, масло, 51х56, 93г",
    "title": "Пейзаж",
    "technique": "масло",
    "group": "landscape"
  },
  {
    "id": "w098",
    "src": "/media/works/w098.jpg",
    "file": "Родной дом_масло_63х80.jpg",
    "caption": "Родной дом, масло, 63х80",
    "title": "Родной дом",
    "technique": "масло",
    "group": "landscape"
  },
  {
    "id": "w099",
    "src": "/media/works/w099.jpg",
    "file": "Фантазия цветы_масло_80х62_91г..jpg",
    "caption": "Фантазия цветы, масло, 80х62, 91г",
    "title": "Фантазия цветы",
    "technique": "масло",
    "group": "flowers"
  },
  {
    "id": "w100",
    "src": "/media/works/w100.jpg",
    "file": "Храм_масло_78х100_92г..jpg",
    "caption": "Храм, масло, 78х100, 92г",
    "title": "Храм",
    "technique": "масло",
    "group": "spiritual"
  },
  {
    "id": "w101",
    "src": "/media/works/w101.jpg",
    "file": "Шинок_масло_76х51_93г..jpg",
    "caption": "Шинок, масло, 76х51, 93г",
    "title": "Шинок",
    "technique": "масло",
    "group": "people"
  },
  {
    "id": "w102",
    "src": "/media/works/w102.jpg",
    "file": "безназвания_масло_29х39.JPG",
    "caption": "безназвания, масло, 29х39",
    "title": "безназвания",
    "technique": "масло",
    "group": "fantasy"
  }
]

export const homeFilmPhotos = [
  {
    "src": "/media/home/home-1.jpg",
    "caption": "1.Для главной страницы"
  },
  {
    "src": "/media/home/home-2.jpg",
    "caption": "2. Для главной страницы"
  },
  {
    "src": "/media/home/home-3.jpg",
    "caption": "3. Для главной страницы"
  }
]

export const memoryPhotos: MemoryPhoto[] = [
  {
    "id": "m01",
    "src": "/media/artist/m01.jpg",
    "caption": "Ансамбль, г. Прокопьевск",
    "title": "Ансамбль, г. Прокопьевск"
  },
  {
    "id": "m02",
    "src": "/media/artist/m02.jpg",
    "caption": "Армия, муз.взвод",
    "title": "Армия, муз.взвод"
  },
  {
    "id": "m03",
    "src": "/media/artist/m03.jpg",
    "caption": "В мастерской, на работе",
    "title": "В мастерской, на работе"
  },
  {
    "id": "m04",
    "src": "/media/artist/m04.jpg",
    "caption": "Володя с мамой, Ниной Федоровной",
    "title": "Володя с мамой, Ниной Федоровной"
  },
  {
    "id": "m05",
    "src": "/media/artist/m05.jpg",
    "caption": "Володя, 6 лет",
    "title": "Володя, 6 лет"
  },
  {
    "id": "m06",
    "src": "/media/artist/m06.jpg",
    "caption": "Дома, 1990 г",
    "title": "Дома, 1990 г"
  },
  {
    "id": "m07",
    "src": "/media/artist/m07.jpg",
    "caption": "Муз.взвод, 1973 г",
    "title": "Муз.взвод, 1973 г"
  },
  {
    "id": "m08",
    "src": "/media/artist/m08.jpg",
    "caption": "На репетицию",
    "title": "На репетицию"
  },
  {
    "id": "m09",
    "src": "/media/artist/m09.jpg",
    "caption": "Родители Владимира (Нина и Николай)",
    "title": "Родители Владимира (Нина и Николай)"
  },
  {
    "id": "m10",
    "src": "/media/artist/m10.png",
    "caption": "С другом и с супругой",
    "title": "С другом и с супругой"
  },
  {
    "id": "m11",
    "src": "/media/artist/m11.jpg",
    "caption": "С другом, 1963 г",
    "title": "С другом, 1963 г"
  },
  {
    "id": "m12",
    "src": "/media/artist/m12.jpg",
    "caption": "С любимой гитарой..",
    "title": "С любимой гитарой.."
  },
  {
    "id": "m13",
    "src": "/media/artist/m13.jpg",
    "caption": "С любимой женой. 1975 г",
    "title": "С любимой женой. 1975 г"
  },
  {
    "id": "m14",
    "src": "/media/artist/m14.jpg",
    "caption": "С семьей (родители и старшая сестра)",
    "title": "С семьей (родители и старшая сестра)"
  },
  {
    "id": "m15",
    "src": "/media/artist/m15.jpg",
    "caption": "С семьей (родители, жена, дочь Оля)",
    "title": "С семьей (родители, жена, дочь Оля)"
  },
  {
    "id": "m16",
    "src": "/media/artist/m16.jpg",
    "caption": "С сестрой Тамарой",
    "title": "С сестрой Тамарой"
  },
  {
    "id": "m17",
    "src": "/media/artist/m17.jpg",
    "caption": "Семья. 1980 г",
    "title": "Семья. 1980 г"
  }
]

export const memoryVideos = [
  {
    "src": "/media/artist/exhibition.mp4",
    "caption": "Выставка",
    "title": "Выставка"
  }
]

export const publications: { src: string; caption: string; title: string }[] = []

export const FILM_STRIP_SRC = '/media/home/plenka.jpg'
export const PAPER_TEXTURE_SRC = '/media/texture/textura-akvarel.jpg'
export const SLIDESHOW_MUSIC_SRC = encodeURI(
  '/media/artist/Claude_Debussy.mp3'
)
