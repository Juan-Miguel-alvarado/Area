import mainImage from '../imgs/landscape/Hero Image.png'
import statsImage from '../imgs/landscape/Image (1).png'
import icon0 from '../imgs/icons/Vector (0).svg'
import icon1 from '../imgs/icons/Vector (4).svg'
import icon2 from '../imgs/icons/Vector (5).svg'
import icon3 from '../imgs/icons/Vector (3).svg'
import '../../App.css'

function Benefits() {
    const benefits = [
        {
        icon: icon0,
        title: 'Amplify Insights',
        text: 'Unlock data-driven decisions with comprehensive analytics, revealing key opportunities for strategic regional growth.'
        },
        {
        icon: icon1,
        title: 'Control Your Global Presence',
        text: 'Manage and track satellite offices, ensuring consistent performance and streamlined operations everywhere.'
        },
        {
        icon: icon2,
        title: 'Localized Communication',
        text: 'Adapt to diverse markets with built-in localization for clear communication and enhanced user experience.'
        },
        {
        icon: icon3,
        title: 'Visualize Growth',
        text: 'Generate precise, visually compelling reports that illustrate your growth trajectories across all regions.'
        }
    ]

    const stats = [
        'Spot Trends in Seconds: No more digging through numbers.',
        'Get Everyone on the Same Page: Share easy-to-understand reports with your team.',
        'Make Presentations Pop: Interactive maps and dashboards keep your audience engaged.',
        'Your Global Snapshot: Get a quick, clear overview of your entire operation.'
    ]

    return (
    <section className="benefits" id="benefits">
        <div className="benefits__intro">
            <h3>Benefits</h3>
            <h2>We’ve cracked the code.</h2>
            <p>Area provides real insights, without the data overload.</p>
        </div>

        <div className="benefits__grid">
            {benefits.map((b, i) => (
            <div key={i} className="benefits__item">
                <img src={b.icon} alt={b.title} />
                <h4>{b.title}</h4>
                <p>{b.text}</p>
            </div>
            ))}
        </div>

        <img className="benefits__image" src={mainImage} alt="Benefits section visual" />

        <div className="benefits__stats">
            <div className="benefits__stats-text">
                <h2>See the Big Picture</h2>
                <p>Area turns your data into clear, vibrant visuals that show you exactly what's happening in each region.</p>

                <div className="benefits__stats-list">
                    {stats.map((text, index) => (
                    <div key={index} className="benefits__stats-item">
                        <span>{String(index + 1).padStart(2, '0')}</span>
                        <p>{text}</p>
                    </div>
                    ))}
                </div>

                <button className="btn-primary">Discover More</button>
            </div>

            <div className="benefits__stats-image">
                <img src={statsImage} alt="Statistics visualization" />
            </div>
        </div>
    </section>
    )
}

export default Benefits
