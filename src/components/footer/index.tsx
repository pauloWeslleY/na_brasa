import "./footer.sass";

const Footer = () => {
  return (
    <footer>
      <div className="footer__wrapper" id="icons_top">
        <div className="footer__wrapper_icons">
          <i className="fa-brands fa-facebook fa-2x"></i>
          <i className="fa-brands fa-instagram fa-2x"></i>
          <i className="fa-brands fa-twitter fa-2x"></i>
          <i className="fa-brands fa-whatsapp fa-2x"></i>
        </div>

        <h2 id="footer__copyright" className="footer__copyright">
          <a href="#" title="Voltar ao Inicio">
            &copy; Copyright 2018
          </a>
        </h2>
      </div>
    </footer>
  );
};

export default Footer;
