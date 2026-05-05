import './Filter.css'

// Данные с полей
let markFilter = ""
let modelFilter = ""
let bodyTypeFilter = ""
let transmissionFilter = ""
let priceRubFilter = 0
let engineTypeFilter = ""
let driveTypeFilter = ""
let horsePowerFilter = 0

export default function Filter({ fullCars, setCategory }) {
    let filteredCategory = fullCars

    // Данные в datalist
    // Для помощи заполнения полей
    let marks = []
    let models = []
    let bodyTypes = []
    let transmissions = []
    let engineTypes = []
    let driveTypes = []

    filteredCategory.map(item => {
        marks.push(item.mark)
        models.push(item.model)
        bodyTypes.push(item.body_type)
        transmissions.push(item.transmission)
        engineTypes.push(item.engine_type)
        driveTypes.push(item.drive_type)
    })

    // Убираем повторы значений
    marks = [...new Set(marks)]
    models = [...new Set(models)]
    bodyTypes = [...new Set(bodyTypes)]
    transmissions = [...new Set(transmissions)]
    engineTypes = [...new Set(engineTypes)]
    driveTypes = [...new Set(driveTypes)]

    function checkFilters() {
        filteredCategory = fullCars // сбрасываем до исходных данных

        if (markFilter) {
            filteredCategory = filteredCategory.filter(item => item.mark.toUpperCase().includes(markFilter.toUpperCase()))
        }
        if (modelFilter) {
            filteredCategory = filteredCategory.filter(item => item.model.toUpperCase().includes(modelFilter.toUpperCase()))
        }
        if (bodyTypeFilter) {
            filteredCategory = filteredCategory.filter(item => item.body_type && item.body_type.toUpperCase().includes(bodyTypeFilter.toUpperCase()))
        }
        if (transmissionFilter) {
            filteredCategory = filteredCategory.filter(item => item.transmission && item.transmission.toUpperCase().includes(transmissionFilter.toUpperCase()))
        }
        if (priceRubFilter > 0) {
            filteredCategory = filteredCategory.filter(item => item.price_rub < priceRubFilter)
        }
        if (engineTypeFilter) {
            filteredCategory = filteredCategory.filter(item => item.engine_type && item.engine_type.toUpperCase().includes(engineTypeFilter.toUpperCase()))
        }
        if (driveTypeFilter) {
            filteredCategory = filteredCategory.filter(item => item.drive_type && item.drive_type.toUpperCase().includes(driveTypeFilter.toUpperCase()))
        }
        if (horsePowerFilter > 0) {
            filteredCategory = filteredCategory.filter(item => item.horse_power > horsePowerFilter)
        }

        setCategory(filteredCategory)
    }

    return (
        <div className="filter">
            {/* Марка */}
            <input list='marks' type="text" className='filter__input' placeholder='Марка (доступная в категории)'
                onChange={(e) => {
                    markFilter = e.target.value
                    checkFilters()
                }}
            />
            <datalist id='marks'>
                {marks.map(mark => <option key={mark}>{mark}</option>)}
            </datalist>

            {/* Модель */}
            <input list='models' type="text" className='filter__input' placeholder='Модель'
                onChange={(e) => {
                    modelFilter = e.target.value
                    checkFilters()
                }}
            />
            <datalist id='models'>
                {models.map(model => <option key={model}>{model}</option>)}
            </datalist>

            {/* Кузов */}
            <input list='bodyTypes' type="text" className='filter__input' placeholder='Кузов'
                onChange={(e) => {
                    bodyTypeFilter = e.target.value
                    checkFilters()
                }}
            />
            <datalist id='bodyTypes'>
                {bodyTypes.map(type => <option key={type}>{type}</option>)}
            </datalist>

            {/* Коробка передач */}
            <input list='transmissions' type="text" className='filter__input' placeholder='Коробка передач'
                onChange={(e) => {
                    transmissionFilter = e.target.value
                    checkFilters()
                }}
            />
            <datalist id='transmissions'>
                {transmissions.map(trans => <option key={trans}>{trans}</option>)}
            </datalist>

            {/* Цена */}
            <input type="number" className='filter__input' placeholder='Цена (максимум)'
                onChange={(e) => {
                    priceRubFilter = Number(e.target.value)
                    checkFilters()
                }}
            />

            {/* Двигатель */}
            <input list='engineTypes' type="text" className='filter__input' placeholder='Двигатель'
                onChange={(e) => {
                    engineTypeFilter = e.target.value
                    checkFilters()
                }}
            />
            <datalist id='engineTypes'>
                {engineTypes.map(type => <option key={type}>{type}</option>)}
            </datalist>

            {/* Привод */}
            <input list='driveTypes' type="text" className='filter__input' placeholder='Привод'
                onChange={(e) => {
                    driveTypeFilter = e.target.value
                    checkFilters()
                }}
            />
            <datalist id='driveTypes'>
                {driveTypes.map(type => <option key={type}>{type}</option>)}
            </datalist>

            {/* Мощность */}
            <input type="number" className='filter__input' placeholder='Мощность (минимум, л.с.)'
                onChange={(e) => {
                    horsePowerFilter = Number(e.target.value)
                    checkFilters()
                }}
            />
        </div>
    )
}