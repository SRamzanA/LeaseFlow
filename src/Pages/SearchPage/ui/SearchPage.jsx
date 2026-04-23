import './SearchPage.css'
import Header from "../../../Widgets/Header/ui/Header"
import AutoCard from '../../../Entities/AutoCard/ui/AutoCard';
import Footer from '../../../Widgets/Footer/ui/Footer';
import CarCategories from '../../../Widgets/CarCategories/ui/CarCategories';
import Filter from '../../../Widgets/Filter/ui/Filter';

import { passengerCarsObj } from '../../../Shared/api/client'
import { useState } from 'react';


export default function SearchPage() {
  const [fullCars, setFullCars] = useState(passengerCarsObj) // Все машины
  const [category, setCategory] = useState(passengerCarsObj) // Изменяемый список машин (фильтрацией)
  const [visibleCount, setVisibleCount] = useState(8)

  return (
    <>
      <Header />

      <main className='search-page-main'>
        <h1>Популярные Авто</h1>

        <CarCategories
          setFullCars={setFullCars}
          setCategory={setCategory}
          setVisibleCount={setVisibleCount}
        />

        <Filter
          fullCars={fullCars}
          setCategory={setCategory}
        />

        <div className="cards-container">
          {
            category.length == 0
              ?
              <span className='data-undefined'>Не найдено информации по данной категории</span>
              :
              Array.from({ length: Math.min(visibleCount, category.length) }, (_, index) => (
                <AutoCard key={category[index].id} index={index} data={category} />
              ))
          }
        </div>

        {
          category.length != 0 &&
          <div className="button-container">
            <button className="show-more-button"
              onClick={() => setVisibleCount(visibleCount + 4)}
            >
              Показать больше
            </button>
          </div>
        }

      </main>

      <Footer />

      {/* Сделай фотки при нажатии на картинку */}
      {/* Нужна фильтрация */}
    </>
  );
}
