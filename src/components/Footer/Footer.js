import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__description">
                <img
                    src="../assets/icons/icono-bike-store.svg"
                    alt="Logo de Bike Store"
                    className="logo-bike-store"
                />
                <p className="footer-text">Bikestore es una empresa familiar que nació por la necesidad de acercar a las personas al mundo del ciclismo, nuestro objetivo es ayudarte a alcanzar tu máximo rendimiento y que disfrutes el proceso</p>
            </div>
            <div className="footer__extra-data">
                <ul>
                    <li>Legales</li>
                    <li>Política de devolución</li>
                    <li>Política de datos</li>
                    <li>Seguros para bicicletas</li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
