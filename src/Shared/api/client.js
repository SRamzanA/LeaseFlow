import Papa from "papaparse"

const parseCSV = async (filePath) => {
    const response = await fetch(filePath)
    const csvText = await response.text()

    return new Promise((resolve) => {
        Papa.parse(csvText, {
            header: true,
            delimiter: ",",
            skipEmptyLines: true,
            complete: (results) => {
                resolve(results.data)
            }
        })
    })
}

export const passengerCarsObj = await parseCSV('/data/autoru_car_active.csv')
export const LCVCarsObj = await parseCSV('/data/autoru_lcv_active.csv')

// Пример объекта данных
// const data = {
//   "id": 5705745,
//   "inner_id": "1117684760-295b480e",
//   "mark": "Kia",
//   "model": "Sorento",
//   "generation": "II Рестайлинг",
//   "configuration": "Внедорожник 5 дв.",
//   "complectation": "",
//   "url": "https://auto.ru/cars/used/sale/kia/sorento/1117684760-295b480e/",
//   "price_rub": 1880000,
//   "year": 2017,
//   "km_age": 120001,
//   "color": "серый",
//   "wheel": "левый",
//   "vin": "XWE**************",
//   "pts": "оригинал",
//   "owners_count": 2,
//   "condition": "среднее",
//   "in_stock": "IN_STOCK",
//   "custom": "растаможен",
//   "seller": "Максимум Авто - автомобили с пробегом",
//   "region": "Санкт-Петербург и Ленинградская область",
//   "city": "Санкт-Петербург",
//   "address": "территория Транспортная, 6",
//   "engine_type": "бензин",
//   "displacement": 2.4,
//   "horse_power": 175,
//   "body_type": "пятидверный внедорожник",
//   "transmission": "автомат",
//   "drive_type": "полный",
//   "no_accidents": false,
//   "options": [
//     "cruise-control",
//     "multi-wheel",
//     "airbag-passenger",
//     "lock",
//     "electro-mirrors",
//     "mirrors-heat",
//     "start-stop-function",
//     "collision-prevention-assist",
//     "computer",
//     "seat-transformation",
//     "wheel-power",
//     "light-cleaner",
//     "fabric-seats",
//     "airbag-side",
//     "abs",
//     "wheel-leather",
//     "climate-control-1",
//     "auto-mirrors",
//     "tinted-glass",
//     "esp",
//     "usb",
//     "audiopreparation",
//     "front-centre-armrest",
//     "electro-window-back",
//     "17-inch-wheels",
//     "airbag-driver",
//     "isofix",
//     "aux",
//     "electro-window-front",
//     "light-sensor",
//     "airbag-curtain",
//     "leather-gear-stick",
//     "start-button",
//     "ptf",
//     "rain-sensor",
//     "tyre-pressure",
//     "audiosystem-cd",
//     "migration-flag",
//     "front-seats-heat",
//     "bluetooth",
//     "wheel-configuration2",
//     "wheel-configuration1",
//     "immo",
//     "third-rear-headrest"
//   ],
//   "image_urls": [
//     "https://avatars.mds.yandex.net/get-autoru-vos/2166186/823f5452c86e4322517321f611171c37/1200x900",
//     "https://avatars.mds.yandex.net/get-autoru-vos/2170669/1d609b903631e1680c46096c2d58d4cf/1200x900",
//     "https://avatars.mds.yandex.net/get-autoru-vos/2071343/55b33e5c98157b4d4bfd2bf816d9a716/1200x900",
//     "https://avatars.mds.yandex.net/get-autoru-vos/2156128/fb9b453e9f0f266711ea4ddbdc43c700/1200x900",
//     "https://avatars.mds.yandex.net/get-autoru-vos/2143497/986bc42553f867edd8a3c3c4fddf4d82/1200x900",
//     "https://avatars.mds.yandex.net/get-autoru-vos/1651028/f0cfa901a0cb0ff9ea112c4bfc1a8582/1200x900",
//     "https://avatars.mds.yandex.net/get-autoru-vos/2057331/5db850b857b1d9e59fec2dcb15547458/1200x900",
//     "https://avatars.mds.yandex.net/get-autoru-vos/1950392/c5428c08a998d6ae75c2a9c7c5b576a2/1200x900",
//     "https://avatars.mds.yandex.net/get-autoru-vos/2165557/d3b625ea239a4faa2c343863586c612e/1200x900",
//     "https://avatars.mds.yandex.net/get-autoru-vos/1960172/005a805caeef777beb66c71cd85ea8c0/1200x900",
//     "https://avatars.mds.yandex.net/get-autoru-vos/1906600/ad7bced256851df6b6fb353ea1b85879/1200x900",
//     "https://avatars.mds.yandex.net/get-autoru-vos/1870907/e850f851c0b05bcbfaf8bcc78c4e990a/1200x900",
//     "https://avatars.mds.yandex.net/get-autoru-vos/1906600/5ef98df5b32a71fc4ff5d0b84029b31b/1200x900",
//     "https://avatars.mds.yandex.net/get-autoru-vos/1863716/c6e263e9d57924a4c571a2d1ee5f6c42/1200x900",
//     "https://avatars.mds.yandex.net/get-autoru-vos/4119814/ec633390c29027e434503e4cf0e5daf5/1200x900",
//     "https://avatars.mds.yandex.net/get-autoru-vos/1960172/22de826689144e8212becebce9823a15/1200x900",
//     "https://avatars.mds.yandex.net/get-autoru-vos/2159933/61ef0d2db298284710dc2ac1c6e30efa/1200x900",
//     "https://avatars.mds.yandex.net/get-autoru-vos/2167398/4bcfe64f60765aa93168d85c049d628e/1200x900",
//     "https://avatars.mds.yandex.net/get-autoru-vos/2164969/b8a8b8d51bde703f94d7af3222d8a861/1200x900"
//   ]
// }