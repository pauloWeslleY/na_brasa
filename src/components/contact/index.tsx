import "./contact.sass";

const Contact = () => {
  return (
    <div className="form__card">
      <div className="card__heading">
        <h1>Entre em Contato</h1>
      </div>

      <form className="body__card">
        <div className="input-group-wrapper">
          <div className="input-group">
            <span className="input-group-icon" id="input-text">
              <i className="fas fa-user"></i>
            </span>
            <input
              id="text"
              type="text"
              className="form-control form-control-lg"
              placeholder="Informe o seu nome aqui..."
            />
          </div>

          <div className="input-group">
            <span className="input-group-icon" id="input-phone">
              <i className="fas fa-phone"></i>
            </span>
            <input
              id="phone"
              type="text"
              className="form-control form-control-lg"
              placeholder="Informe o seu telefone aqui..."
            />
          </div>

          <div className="input-group">
            <span className="input-group-icon" id="input-email">
              <i className="fas fa-envelope"></i>
            </span>
            <input
              id="email"
              type="text"
              className="form-control form-control-lg"
              placeholder="Informe o seu e-mail aqui..."
            />
          </div>
        </div>

        <div className="input-group">
          <textarea
            id="message"
            rows={5}
            className="form-control form-control-lg"
            placeholder="Escreva sua mensagem aqui..."
          />
        </div>

        <button type="submit" className="contact__btn">
          <i className="far fa-hand-point-right" />
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Contact;
