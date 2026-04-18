import './ButtonGoToCarSelection.css'

export default function ButtonGoToCarSelection(props) {
    function handleButton() {
        window.location.href = '/SearchPage'
    }

    return (
        <button className="button-goto-car-selection" onClick={handleButton}>
            {props.children}
        </button>
    )
}