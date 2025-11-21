import '../../App.css'
import img from '../imgs/landscape/bharath-kumar-q3cEHSpaPfI-unsplash.jpg'

function Specifications() {
    return (
            <section className="specifications" id='specifications'>
                <div className='specifications__container-text'>
                    <h3>Specs</h3>
                    <h2 className='specifications__title'>Why Choose Area?</h2>
                    <p className='specifications__description'>You need a solution that keeps up. That’s why we developed Area. A developer-friendly approach to streamline your business. </p>

                    <button className='btn-primary'>Discover more</button>
                </div>

                <div className="specifications__container">
                    <table className="specifications__table">
                            <thead className='specifications__table-head'>
                                <tr>
                                    <th className='specifications__table-area-class'>Area</th>
                                    <th>WebSurge</th>
                                    <th>HyperView</th>
                                </tr>
                            </thead>
                        <tbody className='specifications__table-body'>
                            <tr>
                                <td>✓ Ultra-fast browsing</td>
                                <td>✓ Fast browsing</td>
                                <td>✗ Moderate speeds</td>
                            </tr>
                            <tr>
                                <td>✓ Advanced AI insights</td>
                                <td>✓ Basic AI recommendations</td>
                                <td>✗ No AI assistance</td>
                            </tr>
                            <tr>
                                <td>✓ Seamless integration</td>
                                <td>✓ Restricts customization</td>
                                <td>✗ Steep learning curve</td>
                            </tr>
                            <tr>
                                <td>✓ Advanced AI insights</td>
                                <td>✗ Basic AI insights</td>
                                <td>✗ No AI assistance</td>
                            </tr>
                            <tr>
                                <td>✓ Ultra-fast browsing</td>
                                <td>✓ Fast browsing</td>
                                <td>✗ Moderate speeds</td>
                            </tr>
                            <tr>
                                <td>✓ Full UTF-8 support</td>
                                <td>✗ Potential display errors</td>
                                <td>✗ Partial UTF-8 support</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className='specifications__testimonial'>
                    <div className='specifications__testimonial-image'>
                        <img src={img} alt="" />
                    </div>
                    <div className='specifications__testimonial-text'>
                        <p>“I was skeptical, but Area has completely transformed the way I manage my business. The data visualizations are so clear and intuitive, and the platform is so easy to use. I can't imagine running my company without it.”</p>
                        <p>Jhon Smith</p>
                        <h3>Head of Data</h3>
                    </div>
                </div>

            </section>
    )
}

export default Specifications
