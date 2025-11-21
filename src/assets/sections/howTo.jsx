import img from '../imgs/landscape/Image (2).png'
import '../../App.css'

function HowTo() {
    return (

        <section className="how-to" id='how-to'>
            <div className='how-to__container'>
                <div className='how-to__container-text'>
                    <h2>Map Your Success</h2>
                    <button className='btn-primary'>Discover More</button>
                </div>
                <div className='how-to__steps'>
                    <div className='how-to__step'>
                        <span className='how-to__step-number'>01</span>
                        <h4 className='how-to__step-title'>Get Started</h4>
                        <p className='how-to__step-text'>With our intuitive setup, you’re up and running in minutes.</p>
                    </div>

                    <div className='how-to__step'>
                        <span className='how-to__step-number'>02</span>
                        <h4 className='how-to__step-title'>Customize and Configure</h4>
                        <p className='how-to__step-text'>Adapt Area to your specific requirements and preferences.</p>
                    </div>

                    <div className='how-to__step'>
                        <span className='how-to__step-number'>03</span>
                        <h4 className='how-to__step-title'>Grow Your Business</h4>
                        <p className='how-to__step-text'>Make informed decisions to exceed your goals.</p>
                    </div>
                </div>
            </div>
            <div className='how-to__image'>
                <img src={img} alt="" />
            </div>
        </section>
            
    )
}

export default HowTo
