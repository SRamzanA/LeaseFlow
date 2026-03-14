import './HeaderIcon.css'

export default function HeaderIcon({ imgSrc }) {
    return (
        <div className='header-icon'>
            <img src={imgSrc} alt="" />
        </div>
    )
}
