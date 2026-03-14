import './AboutUs.css'
import ButtonGoToCarSelection from '../../../Shared/ButtonGoToCarSelection/ui/ButtonGoToCarSelection'
import PageBackground from '../image/fonAboutUs.jpg'


export default function AboutUs() {
    return (
        <div className="about-us">
            <div className="about-us-page-background">
                <img src={PageBackground} alt="" />
            </div>

            <div className="about-us__text">
                <h1>О нашей команде:</h1>
                <p>В современном мире скорость и быстрота решают всё. Но когда дело доходит до приобретения нового транспорта, на пути часто встают сложности: поиск надёжной лизинговой компании и большой выбор транспорта</p>

                <h2><span style={{ color: 'var(--main-color-orange)' }}>LeaseFlow</span> <br />поможет с этим</h2>
                <p>Мы не просто агрегатор предложений. Мы - идеальная платформа, превращающая сложный процесс выбора лизинга транспорта в простой и быстрый поток выгодных решений.</p>
                
                <ButtonGoToCarSelection>Выбрать авто</ButtonGoToCarSelection>

            </div>

        </div>
    )
}