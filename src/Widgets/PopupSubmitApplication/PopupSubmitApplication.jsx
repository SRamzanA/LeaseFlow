import { useRef, useState } from 'react'
import './PopupSubmitApplication.css'

export default function PopupSubmitApplication({ openPopup, setOpenPopup }) {
    const [face, setFace] = useState(null) // Юр.лицо/физ.лицо/ИП
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')

    const popupRef = useRef(null)
    const redTextRef = useRef(null)
    function closePopup() {
        setOpenPopup('none')
    }

    function radioOnChange(value) {
        redTextRef.current.style.color = '#999'
        setFace(value)
    }

    function phoneOnChange(e) {
        let value = e.target.value.replace(/\D/g, '') // убирает всё, кроме цифр
        if (value.length > 11) value = value.slice(0, 11)
        setPhone(value)
    }

    function handleSubmitButton() {
        redTextRef.current.style.color = '#999'
        if (
            face !== null &&
            name.trim() !== '' &&
            phone.trim() !== ''
        ) {
            alert("В скором времени мы с вами свяжемся!")
            closePopup()
        } else {
            redTextRef.current.style.color = 'red'
        }
    }

    return (
        <div ref={popupRef} style={{display:openPopup}} className="popup" onClick={() => closePopup()}>
            
            <div className="popup__container" onClick={(e) => e.stopPropagation()}>

                <div className="popup__title-container">
                    <h1 className='popup__title'>Оставьте заявку на лизинг</h1>
                    <button className="popup__close-button" onClick={() => closePopup()}>
                        <div className="stick1"></div>
                        <div className="stick2"></div>
                    </button>
                </div>

                <form className="popup__face-selection">

                    <h2 className='popup__form-title'>С кем будет заключён договор</h2>

                    <div className="popup__face-inputs">
                        <label className='popup__radio-input'>
                            <input type="radio" name='face-group' value='Юридическое лицо' onChange={(e) => radioOnChange(e.target.value)} />
                            Юридическое лицо
                        </label>
                        <label className='popup__radio-input'>
                            <input type="radio" name='face-group' value='ИП' onChange={(e) => radioOnChange(e.target.value)} />
                            ИП
                        </label>
                        <span></span>
                        <label className='popup__radio-input'>
                            <input type="radio" name='face-group' value='Физическое лицо' onChange={(e) => radioOnChange(e.target.value)} />
                            Физическое лицо
                        </label>
                    </div>

                </form>

                <form className="popup__name-and-phone-form">
                    <input
                        type="text"
                        className='popup__text-input'
                        placeholder='Имя'
                        value={name}
                        onChange={(e) => {
                            redTextRef.current.style.color = '#999'
                            setName(e.target.value)
                        }}
                    />
                    <input
                        type="tel"
                        className='popup__text-input'
                        placeholder='Телефон'
                        value={phone}
                        onChange={(e) => {
                            redTextRef.current.style.color = '#999'
                            phoneOnChange(e)
                        }}
                    />
                </form>

                <div className="popup__submit-container">
                    <button className="popup__submit-button" onClick={() => handleSubmitButton()}>Оставить заявку</button>
                    <p ref={redTextRef} className='popup__red-text'>Все поля обязательны для заполения</p>
                </div>

            </div>
        </div>
    )
}