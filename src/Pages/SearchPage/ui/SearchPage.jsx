import './SearchPage.css'
import Header from "../../../Widgets/Header/ui/Header"
import AutoCard from '../../../Entities/AutoCard/ui/AutoCard';

import { passengerCarsObj, LCVCarsObj } from '../../../Shared/api/client'
import { useState } from 'react';

import passengerCarImage from '../images/Легковые.png'
import LCVCarImage from '../images/Грузовики.png'
import CommerceCarImage from '../images/Коммерческие.png'
import BusAutoImage from '../images/Автобусы.png'
import SpecialCarImage from '../images/Спецтехника.png'
import TrailerCarsImage from '../images/Прицепы.png'
import MotoCarImage from '../images/Мототехника.png'



export default function SearchPage() {
  const [category, setCategory] = useState(passengerCarsObj)
  const [visibleCount, setVisibleCount] = useState(8)

  function updateCategory(typeCategory) {
    setCategory(typeCategory)
    setVisibleCount(8)
  }

  return (
    <>
      <Header />

      <main className='search-page-main'>
        <h1>Популярные Авто</h1>

        <div className="category">
          <button className="category__item" onClick={() => updateCategory(passengerCarsObj)}>
            <span>Легковые</span>
            <img src={passengerCarImage} alt="" />
          </button>

          <button className="category__item" onClick={() => updateCategory(LCVCarsObj)}>
            <span>Грузовые и LCV</span>
            <img src={LCVCarImage} alt="" />
          </button>

          <button className="category__item" onClick={() => updateCategory("noCategory")}>
            <span>Коммерческие</span>
            <img src={CommerceCarImage} alt="" />
          </button>

          <button className="category__item" onClick={() => updateCategory("noCategory")}>
            <span>Автобусы</span>
            <img src={BusAutoImage} alt="" />
          </button>

          <button className="category__item" onClick={() => updateCategory("noCategory")}>
            <span>Спецтехника</span>
            <img src={SpecialCarImage} alt="" />
          </button>

          <button className="category__item" onClick={() => updateCategory("noCategory")}>
            <span>Прицепы и полуприцепы</span>
            <img src={TrailerCarsImage} alt="" />
          </button>

          <button className="category__item" onClick={() => updateCategory("noCategory")}>
            <span>Мототехника</span>
            <img src={MotoCarImage} alt="" />
          </button>

        </div>

        <div className="filter">
          Фильтр
          {/* выборка с Марка, Модель, Кузов, Коробка передач, Цена, Двигатель, Привод, Объём бака */}
        </div>

        <div className="cards-container">
          {
            category == "noCategory"
              ?
              <span className='data-undefined'>Не найдено информации по данной категории</span>
              :
              Array.from({ length: visibleCount }, (_, index) => (
                <AutoCard key={category[index].id} index={index} data={category} />
              ))
          }
        </div>

        {
          category != "noCategory" &&
          <div className="button-container">
            <button className="show-more-button"
              onClick={() => setVisibleCount(visibleCount + 4)}
            >
              Показать больше
            </button>
          </div>
        }

      </main>

    </>
  );
}
