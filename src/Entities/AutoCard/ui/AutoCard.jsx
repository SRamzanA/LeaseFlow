import CardReverseButton from '../../../Shared/CardReverseButton/ui/CardReverseButton'
import PopupGaleryCar from '../../../Widgets/PopupGaleryCar/ui/PopupGaleryCar'
import './AutoCard.css'

import { useRef, useState } from 'react'
import { createPortal } from 'react-dom'

export default function AutoCard({ index, data, setOpenPopup }) {
    const card = useRef(null)
    const item = data[index]

    const [galeryDisplay, setGaleryDisplay] = useState(false)

    function openGalery() {
        setGaleryDisplay(true)
    }

    function closeGalery() {
        setGaleryDisplay(false)
    }

    return (
        <>
            <div className="cards-container__item" ref={card}>
                <div className="item__front-content">
                    <img
                        src={JSON.parse(data[index].image_urls)[0]?.url}
                        alt=""
                        className="item__image"
                        onClick={() => openGalery()}
                    />
                    <span className="item__mark">{data[index].mark}</span>

                    <div className="item__model-and-price">
                        <span className="item__model">{data[index].model}</span>
                        <span className="item__price">{data[index].price_rub.toLocaleString('ru-RU')}₽</span>
                    </div>

                    <div className="item__buttons-container">
                        <button className='item__submit-button' onClick={() => setOpenPopup('flex')}>Оставить заявку</button>
                        <CardReverseButton card={card}>Подробнее</CardReverseButton>
                    </div>
                </div>
                <div className="item__back-content">
                    <div className="item__statistic-title">Характеристики</div>
                    <hr />
                    <ul>
                        <li>Год: {item.year}</li>
                        <li>Пробег: {item.km_age} км</li>
                        <li>Двигатель: {item.engine_type + " " + item.displacement}л.</li>
                        <li>Мощность: {item.horse_power}л.с.</li>
                        <li>Коробка: {item.transmission}</li>
                        <li>Привод: {item.drive_type}</li>
                        <li>Кузов: {item.body_type}</li>
                        <li>Цвет: {item.color}</li>
                    </ul>

                    <div className="item__statistic-title">Опции</div>
                    <hr />
                    <ul>
                        <li>Оставьте заявку, что бы узнать</li>
                    </ul>

                    <div className="item__statistic-title">Доп.Инфа</div>
                    <hr />
                    <ul>
                        <li>Продавец: {data[index].seller}</li>
                        <li>{item.city}</li>
                        <li>{item.owners_count} владельцев</li>
                        <li>ПТС: {item.pts}</li>
                        <li><a href={item.url}>Предложение на авто.ру</a></li>
                        <li onClick={() => openGalery()} style={{ textDecoration: "underline", cursor: "pointer" }} >Открыть другие фото</li>
                    </ul>
                    <div className="item__buttons-container">
                        <button className='item__submit-button' onClick={() => setOpenPopup('flex')}>Оставить заявку</button>
                        <CardReverseButton card={card}>Обратно</CardReverseButton>
                    </div>
                </div>
            </div>

            {createPortal(
                <PopupGaleryCar
                    galeryDisplay={galeryDisplay}
                    imageArray={item.image_urls}
                    onClose={closeGalery}
                />,
                document.body
            )}
        </>
    )
}