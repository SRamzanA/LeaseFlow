import { useState } from 'react'
import './Filter.css'

export default function Filter({ fullCars, category, setCategory }) {
    const [markFilter, setMarkFilter] = useState('')
    const [modelFilter, setModelFilter] = useState('')
    const [bodyTypeFilter, setBodyTypeFilter] = useState('')
    const [transmissionFilter, setTransmissionFilter] = useState('')
    const [priceRubFilter, setpriceRubFilter] = useState(0)
    const [engineTypeFilter, setEngineTypeFilter] = useState('')
    const [driveTypeFilter, setDriveTipeFilter] = useState('')
    const [horsePowerFilter, setHorsePowerFilter] = useState('')


    let marks = []
    let models = []
    category.map(item => {
        marks.push(item.mark)
        models.push(item.model)
    })

    marks = [...new Set(marks)]
    models = [...new Set(models)]

    function updateCategory() {
        category.map(item => {
            if (item.mark.includes(markFilter)) {
                return item
            }
        })

        setCategory()
    }

    return (
        <div className="filter">
            <input list='marks' type="text" className='filter__input' placeholder='Марка (доступная в категории)'
                // onChange={(e) => {
                //     setMarkFilter(e.target.value)
                //     updateCategory()
                // }}
            />
            <datalist id='marks'>
                {
                    marks.map(mark => {
                        return (<option key={mark}>{mark}</option>)
                    })
                }
            </datalist>

            <input list='models' type="text" className='filter__input' placeholder='Модель' />
            <datalist id='models'>
                {
                    models.map(model => {
                        return (<option key={model}>{model}</option>)
                    })
                }
            </datalist>

            <input type="text" className='filter__input' placeholder='Кузов' />

            <input type="text" className='filter__input' placeholder='Коробка передач' />

            <input type="text" className='filter__input' placeholder='Цена' />

            <input type="text" className='filter__input' placeholder='Двигатель' />

            <input type="text" className='filter__input' placeholder='Привод' />

            <input type="text" className='filter__input' placeholder='Мощность' />
        </div>
    )
}