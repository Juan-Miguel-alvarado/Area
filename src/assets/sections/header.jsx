import React, { useEffect } from 'react'
import '../../App.css'

function Header() {
    const toggleMenu = () => {
        document.querySelector('.nav-mobile').classList.toggle('nav-mobile--open')
        document.querySelector('.menu-toggle').classList.toggle('menu-toggle--open')
    }

    useEffect(() => {
        const DESKTOP_BREAKPOINT = 1024

        const handleScroll = () => {
            const nav = document.querySelector('.nav-desktop')
            if (!nav) return

            if (window.innerWidth >= DESKTOP_BREAKPOINT && window.scrollY > 0) {
                nav.classList.add('nav-desktop--scrolled')
            } else {
                nav.classList.remove('nav-desktop--scrolled')
            }
        }

        window.addEventListener('scroll', handleScroll)
        window.addEventListener('resize', handleScroll)

        handleScroll()

        return () => {
            window.removeEventListener('scroll', handleScroll)
            window.removeEventListener('resize', handleScroll)
        }
    }, [])

    return (
        <header className="header">
        <span className="header__logo">Area</span>

        <nav className="nav-desktop">
            <ul className="nav-desktop__list">
            <li><a href="#benefits">Benefits</a></li>
            <li><a href="#specifications">Specifications</a></li>
            <li><a href="#how-to">How-to</a></li>
            <li><a href="#contact-us">Contact Us</a></li>
            </ul>
        </nav>

        <button className="btn-secondary header__btn">Learn More</button>

        <div className="menu-toggle" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
        </div>

        <div className="nav-mobile">
            <ul className="nav-mobile__list">
            <li><a href="#benefits">Benefits</a></li>
            <li><a href="#specifications">Specifications</a></li>
            <li><a href="#how-to">How-to</a></li>
            <li><a href="#contact-us">Contact Us</a></li>
            </ul>
            <button className="btn-secondary">Learn More</button>
        </div>
    </header>
    )
}

export default Header
