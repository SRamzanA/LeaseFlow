import { useEffect } from 'react'
import './PopupGaleryCar.css'

export default function PopupGaleryCar({ galeryDisplay, imageArray, onClose }) {
    // блокируем прокрутку body при открытии галереи
    useEffect(() => {
        if (galeryDisplay) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = ''
        }

        return () => {
            document.body.style.overflow = ''
        }
    }, [galeryDisplay])

    if (!galeryDisplay) return null

    // парсим imageArray (если это строка JSON)
    let images = []
    try {
        images = typeof imageArray === 'string' ? JSON.parse(imageArray) : imageArray
    } catch (e) {
        console.error('Ошибка парсинга imageArray', e)
    }

    return (
        <div className="galery" onClick={onClose}>
            <div className="galery__content" onClick={(e) => e.stopPropagation()}>
                <button className="galery__close" onClick={onClose}>✕</button>
                <div className="galery__images">
                    {images.map((img, idx) => (
                        <img key={idx} src={img.url} alt={`Фото ${idx + 1}`} />
                    ))}
                </div>
            </div>
        </div>
    )
}