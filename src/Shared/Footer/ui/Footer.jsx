import './Footer.css'

export default function Footer() {
    return (
        <footer>
            <h1 className="footer__category-title">Контакты</h1>
            <a className="footer__contact-link" href="#">&#9658; Телеграмм</a>
            <a className="footer__contact-link" href="#">&#9658; WhatsApp</a>
            <hr />
            <span className="footer__copyright-text">© 2026 LeaseFlow | Учебный проект</span>
            <span className="footer__copyright-text">Данные получены из парсинга данных с auto.ru</span>
        </footer>
    )
}