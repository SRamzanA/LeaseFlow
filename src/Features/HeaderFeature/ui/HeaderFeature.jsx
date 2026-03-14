import './HeaderFeature.css'
import HeaderIcon from "../../../Shared/HeaderIcon/ui/HeaderIcon"

import IconProfile from '../image/profile.png'
import IconFavorites from '../image/favorites.png'

export default function HeaderFeature() {
    return (
        <div className="header__feature">
            <a href="#">
                <HeaderIcon imgSrc={IconFavorites} />
            </a>
            <a href="#">
                <HeaderIcon imgSrc={IconProfile} />
            </a>
        </div>
    )
}