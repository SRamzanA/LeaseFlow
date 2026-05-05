import { useState, useEffect } from 'react'
import './LeaseCalculator.css'

export default function LeaseCalculator({ setOpenPopup }) {
    //  Стэйты для инпутов
    const [carPrice, setCarPrice] = useState(3000000)
    const [initialPayment, setInitialPayment] = useState(375000)
    const [leaseTerm, setLeaseTerm] = useState(24)

    // Результаты расчётов
    const [totalLeaseSum, setTotalLeaseSum] = useState(0)
    const [monthlyPayment, setMonthlyPayment] = useState(0)
    const [percentOfPrice, setPercentOfPrice] = useState(0)

    // Константы для инпутов
    const CAR_PRICE_MIN = 500_000
    const CAR_PRICE_MAX = 50_000_000
    const CAR_PRICE_STEP = 1

    const INITIAL_PAYMENT_MIN = carPrice * 0.05
    const INITIAL_PAYMENT_MAX = carPrice * 1.2 * 0.5
    const INITIAL_PAYMENT_STEP = 5000

    const LEASE_TERM_MIN = 12
    const LEASE_TERM_MAX = 84
    const LEASE_TERM_STEP = 1

    // Расчёт цен ДОГОВОРА
    const calculateLease = () => {
        // Сумма договора лизинга = цена авто + 20%
        const total = Math.floor(carPrice / 100 * 120)
        // Ежемесячный платёж = (сумма договора - первоначальный взнос) / срок
        const monthly = Math.floor((total - initialPayment) / leaseTerm)
        // Процент от суммы договора
        const percent = Math.floor(initialPayment / (total / 100))

        setTotalLeaseSum(total)
        setMonthlyPayment(monthly)
        setPercentOfPrice(percent)
    }

    useEffect(() => {
        calculateLease()
    }, [carPrice, initialPayment, leaseTerm])

    // Форматирование числа с пробелами
    const formatNumber = (num) => {
        return num.toLocaleString('ru-RU')
    }

    return (
        <div className="calc">
            <hr className='calc__hr'/>

            <h2 className="calc__title">Рассчитайте стоимость автомобиля в лизинг</h2>
            
            <div className="calc__inputs-container">
                {/* Стоимость автомобиля */}
                <div className="calc__slider-container">
                    <p>Стоимость автомобиля</p>
                    <div className="calc__input-container">
                        <span className="input__value">{formatNumber(carPrice)} ₽</span>
                        <input 
                            type="range"
                            min={CAR_PRICE_MIN}
                            max={CAR_PRICE_MAX}
                            step={CAR_PRICE_STEP}
                            value={carPrice}
                            onChange={(e) => setCarPrice(Number(e.target.value))}
                            className="calc__input"
                        />
                    </div>
                </div>

                {/* Первоначальный взнос */}
                <div className="calc__slider-container">
                    <p>Первоначальный взнос</p>
                    <div className="calc__input-container">
                        <span className="input__value">{formatNumber(initialPayment)} ₽</span>
                        <span className="input__percent">{percentOfPrice}%</span>
                        <input 
                            type="range"
                            min={INITIAL_PAYMENT_MIN}
                            max={INITIAL_PAYMENT_MAX}
                            step={INITIAL_PAYMENT_STEP}
                            value={initialPayment}
                            onChange={(e) => setInitialPayment(Number(e.target.value))}
                            className="calc__input"
                        />
                    </div>
                </div>

                {/* Срок лизинга */}
                <div className="calc__slider-container">
                    <p>Срок лизинга</p>
                    <div className="calc__input-container">
                        <span className="input__value">{leaseTerm} мес.</span>
                        <input 
                            type="range"
                            min={LEASE_TERM_MIN}
                            max={LEASE_TERM_MAX}
                            step={LEASE_TERM_STEP}
                            value={leaseTerm}
                            onChange={(e) => setLeaseTerm(Number(e.target.value))}
                            className="calc__input"
                        />
                    </div>
                </div>
            </div>

            <div className="calc__results-container">
                <div className="calc__result">
                    <p>Сумма договора лизинга</p>
                    <span>{formatNumber(totalLeaseSum)} ₽</span>
                </div>

                <div className="calc__result">
                    <p>Ежемесячный платеж от</p>
                    <span>{formatNumber(monthlyPayment)} ₽</span>
                </div>

                <button className='calc__submit-button' onClick={() => setOpenPopup('flex')}>Оставить заявку</button>
            </div>
        </div>
    )
}