import React from 'react';
import gym1 from '../images/gym1.jpg';
import gym2 from '../images/gym2.jpg'
import gym3 from '../images/gym3.jpg'


const Gallery = () => {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <iframe width="337" height="200" src="https://www.youtube.com/embed/HnoPHqrdXQ8" title="I'M ALONE - Gym Motivation 😔" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>&nbsp;
          </div>
          <div className="col">
            <img src={gym1} alt="..loading" height={'200'} width={'337'} />&nbsp;
          </div>
          <div className="col">
            <img src={gym2} alt="..loading" height={'200'} width={'337'} />&nbsp;
          </div>
        </div>
        <div className="row">
          <div className="col">
            <img src={gym3} alt="..loading" height={'200'} width={'337'} />&nbsp;
          </div>
          <div className="col">
            <img src={gym2} alt="..loading" height={'200'} width={'337'} />&nbsp;
          </div>
          <div className="col">
            <img src={gym1} alt="..loading" height={'200'} width={'337'} />&nbsp;
          </div>
        </div>
      </div>

    </div>
  )
}

export default Gallery