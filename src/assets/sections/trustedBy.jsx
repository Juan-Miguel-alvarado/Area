import logo0 from '../imgs/logos/Logo (0).png'
import logo1 from '../imgs/logos/Logo (1).png'
import logo2 from '../imgs/logos/Logo (2).png'
import logo3 from '../imgs/logos/Logo (3).png'
import logo4 from '../imgs/logos/Logo (4).png'
import logo5 from '../imgs/logos/Logo (5).png'
import '../../App.css'

function TrustedBy() {
    const logos = [logo0, logo1, logo2, logo3, logo4, logo5]

    return (
        <section className="trusted">
        <h3 className="trusted__title">Trusted by:</h3>
        <div className="trusted__logos">
            {logos.map((logo, i) => (
            <div key={i} className="trusted__logo-item">
                <img src={logo} alt={`Trusted brand ${i + 1}`} />
            </div>
            ))}
        </div>
        </section>
    )
}

export default TrustedBy
