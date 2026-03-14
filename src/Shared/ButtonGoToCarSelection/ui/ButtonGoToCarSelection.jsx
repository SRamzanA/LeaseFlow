import './ButtonGoToCarSelection.css'

export default function ButtonGoToCarSelection(props) {
    return (
        <button className="button-goto-car-selection">
            {props.children}
        </button>
    )
}