import React, { useState } from 'react'

const Navbar = () => {
    const [navbar, setNavbar] = useState(false);
    const changeBackground = () => {
        if (window.scrollY >= 1) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    }
    window.addEventListener('scroll', changeBackground);
    return (
        <div>
            <nav className={navbar ? 'navbar active navbar-expand-lg shadow-sm' : 'navbar navbar-expand-lg'}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img src="../images/logo_main.png" alt="" className="navbar-brand-img" />
                        <span className={navbar ? 'dark-color' : 'text-light'}>Glassberry</span>
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="fas fa-bars"></i>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="#"><span className={navbar ? 'dark-color' : 'text-light'}>HOME</span><span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#"><span className={navbar ? 'dark-color' : 'text-light'}>ABOUT US</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#"><span className={navbar ? 'dark-color' : 'text-light'}>SERVICES</span></a>
                                <ul id="submenu">
                                    <li><a href="#who">Search Engine Optimization</a></li>
                                    <li><a href="">Pay Per Click</a></li>
                                    <li><a href="">Social Media Marketing</a></li>
                                    <li><a href="">Online Reputation Management</a></li>
                                    <li><a href="">Website Development</a></li>
                                    <li><a href="">Content Management</a></li>
                                    <li><a href="">Graphic Designing</a></li>
                                    <li><a href="">Business Consulting</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#"><span className={navbar ? 'dark-color' : 'text-light'}>PACKAGES</span></a>
                                <ul id="submenu">
                                    <li><a href="#who">Advance Digital Marketing</a></li>
                                    <li><a href="">Search Engine Optimization</a></li>
                                    <li><a href="">Pay Per Click / SEM</a></li>
                                    <li><a href="">Social Media Marketing</a></li>
                                    <li><a href="">Online Reputation Management</a></li>
                                    <li><a href="">Website Development</a></li>
                                </ul>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link" href="#"><span className={navbar ? 'dark-color' : 'text-light'}>BLOGS</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#"><span className={navbar ? 'dark-color' : 'text-light'}>CAREER</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#"><span className={navbar ? 'dark-color' : 'text-light'}>CONTACT US</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#"><span className={navbar ? 'dark-color' : 'text-light'}>FAQ's</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    <button className='btn btn-sm btn-outline-primary px-3'>CONSULT NOW!</button>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar