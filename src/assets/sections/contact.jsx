import img from '../imgs/logos/Logo (6).png'
import '../../App.css'

function Contact() {
  return (
    <section className="contact" id="contact-us">
      <div className="contact__content">
        <h2 className="contact__title">Connect with us</h2>
        <p className="contact__subtitle">
          Schedule a quick call to learn how Area can turn your regional data into a powerful advantage.
        </p>

        <button className="btn-secondary contact__btn">Learn More </button>
      </div>

      <footer className="footer">
        <div className="footer__links">
          <a href="#benefits">Benefits</a>
          <a href="#specifications">Specifications</a>
          <a href="#how-to">How-to</a>
        </div>
        <div className="footer__bottom">

            <div className="footer__brand">
              <span className="footer__logo"><img src={img} alt="" /></span>
              <span>© Area. 2025</span>
            </div>

            <div className="footer__rights">All Rights Reserved</div>
        </div>
      </footer>
    </section>
  )
}

export default Contact