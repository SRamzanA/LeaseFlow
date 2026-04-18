import './CardReverseButton.css'

export default function ({ children, card }) {
    function handleClickReverse() {
        card.current.classList.toggle('reverse-180deg')
    }

    return (
        <button
            className='item__reverse-button'
            onClick={() => handleClickReverse()}
        >
            {children}
        </button>
    )
}