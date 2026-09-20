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

      <a
        href="#icons_top"
        id="back_to_top"
        className="p-1"
        title="Voltar ao Topo da pagina"
      >
        <i className="fas fa-arrow-circle-up fa-3x"></i>
      </a>
    </footer>
  );
};

export default Footer;
