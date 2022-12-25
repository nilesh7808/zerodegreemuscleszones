import React from 'react';
import '../css/navbar.css';
import '../pages/Testimonials';

const Navbar = (props) => {
    // console.log(props.value);
    const handleSearch = (event) => {
        const searchedInput = document.getElementById('searchedItem').value;
        window.location = searchedInput;
        event.preventDefault();
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <a className="navbar-brand" href="./">Zero&deg; Muscles Zone</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span></button><div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item"><a className="nav-link active" aria-current="page" href="/">Home</a></li>
                            <li className="nav-item dropdown">
                                <a className="nav-link active dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">More</a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="/updates">Updates</a></li>
                                    <li><a className="dropdown-item" href="./testimonials">Testimonials</a></li >
                                    <li><a className="dropdown-item" href="./about">About Us</a></li>
                                    <li><a className="dropdown-item" href="./contact">Contact</a></li >
                                    <li><a className="dropdown-item" href="./gallery">Gallery</a></li>
                                </ul>
                            </li>
                            <li className="nav-item"><a className="nav-link active" href="tel: 09386511681">Call</a></li>
                            <li className="nav-item"><a className="nav-link active" href="./map">Map</a></li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" id='searchedItem' type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" onClick={handleSearch} type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;