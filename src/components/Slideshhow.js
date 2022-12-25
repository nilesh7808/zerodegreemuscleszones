import React from 'react';
import gym1 from '../images/gym1.jpg';
import gym2 from '../images/gym2.jpg';
import gym3 from '../images/gym3.jpg';
import '../css/slideshow.css';

const Slideshhow = () => {
    return (
        <div id="caraousel">
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={gym1} className="d-block w-100" alt="Gym One..." />
                    </div>
                    <div className="carousel-item">
                        <img src={gym2} className="d-block w-100" alt="Gym Two ..." />
                    </div>
                    <div className="carousel-item">
                        <img src={gym3} className="d-block w-100" alt="Gym Three..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

export default Slideshhow