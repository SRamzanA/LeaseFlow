import './HeaderLogo.css'
import IconLogo from '../images/icon.png'
import HeaderIcon from '../../../Shared/HeaderIcon/ui/HeaderIcon'


export default function HeaderLogo() {
    return (
        <a href='#' className="header__logo">
            <span>LeaseFlow</span>
            <HeaderIcon imgSrc={IconLogo} />
        </a>
    )
}