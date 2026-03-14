import './IntroSection.css'
import PageBackground from '../image/fonIntro.jpg'
import ButtonGoToCarSelection from '../../../Shared/ButtonGoToCarSelection/ui/ButtonGoToCarSelection'


export default function IntroSection() {
    return (
        <div className="intro">

            <div className="intro-page-background ">
                <img src={PageBackground} alt="" />
            </div>

            <div className="intro__text">
                <h1>LeaseFlow:</h1>
                <h3>Ваш поток к выгодному <span style={{ color: 'var(--main-color-orange)' }}>лизингу</span></h3>
                <ButtonGoToCarSelection>Выбрать автомобиль</ButtonGoToCarSelection>
            </div>

        </div>
    )
}