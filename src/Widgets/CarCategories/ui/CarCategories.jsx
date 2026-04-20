import './CarCategories.css'

import passengerCarImage from '../images/Легковые.png'
import LCVCarImage from '../images/Грузовики.png'
import CommerceCarImage from '../images/Коммерческие.png'
import BusAutoImage from '../images/Автобусы.png'
import SpecialCarImage from '../images/Спецтехника.png'
import TrailerCarsImage from '../images/Прицепы.png'
import MotoCarImage from '../images/Мототехника.png'

import { passengerCarsObj, LCVCarsObj } from '../../../Shared/api/client'


export default function CarCategories({ setFullCars, setCategory, setVisibleCount }) {
    const categoryItems = document.getElementsByClassName('category__item')

    function updateCategory(typeCategory, id) {
        setFullCars(typeCategory)
        setCategory(typeCategory)
        setVisibleCount(8)
        for (let item of categoryItems) {
            item.classList.remove('category__item_active')
        }
        categoryItems[id].classList.add('category__item_active')
    }

    return (
        <div className="category">
            <button id='0' className="category__item category__item_active" onClick={(e) => updateCategory(passengerCarsObj, e.currentTarget.id)}>
                <span>Легковые</span>
                <img src={passengerCarImage} alt="" />
            </button>

            <button id='1' className="category__item" onClick={(e) => updateCategory(LCVCarsObj, e.currentTarget.id)}>
                <span>Грузовые и LCV</span>
                <img src={LCVCarImage} alt="" />
            </button>

            <button id='2' className="category__item" onClick={(e) => updateCategory([], e.currentTarget.id)}>
                <span>Коммерческие</span>
                <img src={CommerceCarImage} alt="" />
            </button>

            <button id='3' className="category__item" onClick={(e) => updateCategory([], e.currentTarget.id)}>
                <span>Автобусы</span>
                <img src={BusAutoImage} alt="" />
            </button>

            <button id='4' className="category__item" onClick={(e) => updateCategory([], e.currentTarget.id)}>
                <span>Спецтехника</span>
                <img src={SpecialCarImage} alt="" />
            </button>

            <button id='5' className="category__item" onClick={(e) => updateCategory([], e.currentTarget.id)}>
                <span>Прицепы и полуприцепы</span>
                <img src={TrailerCarsImage} alt="" />
            </button>

            <button id='6' className="category__item" onClick={(e) => updateCategory([], e.currentTarget.id)}>
                <span>Мототехника</span>
                <img src={MotoCarImage} alt="" />
            </button>

        </div>
    )
}