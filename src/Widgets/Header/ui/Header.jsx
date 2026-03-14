import './Header.css'
import HeaderFeature from '../../../Features/HeaderFeature/ui/HeaderFeature'
import HeaderLogo from '../../HeaderLogo/ui/HeaderLogo'

export default function Header() {
    return (
        <header>
            <HeaderLogo />
            <HeaderFeature />
        </header>
    )
}