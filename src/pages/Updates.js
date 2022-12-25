import React, { useEffect, useState } from 'react';
import winter_offer from "../images/winter_offer.jpg";
import normalFees from "../images/normalFees.jpg";
import membership from "../images/membership.jpg"

const Updates = () => {

    const [initialTimeOne, setFinalTimeOne] = useState();
    const [initialTimeTwo, setFinalTimeTwo] = useState();
    const [initialTimeThree, setFinalTimeThree] = useState();
    const [mins, setMins] = useState();
    const [date, setDate] = useState();

    const getTimeOne = () => {
        const date = new Date();
        setDate(date.toDateString());
        const minutes = date.getMinutes();
        setFinalTimeOne(minutes);
    }

    const getTimeTwo = () => {
        const date = new Date();
        const hours = date.getHours().toLocaleString();
        const minutes = date.getMinutes();
        if (minutes >= 60) {
            setMins("Hours");
        }
        else if (hours >= 24) {
            setMins("Days");
        }
        else {
            setMins("Minutes")
        }

        setFinalTimeTwo(minutes);
    }

    const getTimeThree = () => {
        const date = new Date();
        const minutes = date.getMinutes();
        setFinalTimeThree(minutes);
    }

    useEffect(() => {
        getTimeOne();
        getTimeTwo();
        getTimeThree();
    }, [])


    return (
        <div>
            <div className="container-fluid">
                <h1 className='text-center' style={{ textDecorationLine: "overline", fontSize: '2.5rem' }}>UPDATES</h1>
                <div className="container">
                    <div class="card-group">
                        <div class="card m-4" style={{ border: "1px solid black" }}>
                            <img src={winter_offer} class="card-img-top" alt="winter offer" />
                            <div class="card-body">
                                <h5 class="card-title bold">Winter Offer</h5>
                                <p class="card-text">Winter offer for the limited time.</p>
                                <p>Show this code at the Gym or call at &nbsp;+91 9386511681 for more details.</p>
                            </div>
                            <div class="card-footer">
                                <small class="text-muted">Posted on {date} at {initialTimeOne} {mins} ago</small>
                            </div>
                        </div>
                        <div class="card m-4" style={{ border: "1px solid black" }}>
                            <img src={normalFees} class="card-img-top" alt="winter offer" />
                            <div class="card-body">
                                <h5 class="card-title bold">Normal Charge</h5>
                                <p class="card-text">Affordable fees.</p>
                                <p>Join us only on 699/- monthly and be healthy.</p>
                            </div>
                            <div class="card-footer">
                                <small class="text-muted">Posted on {date} at {initialTimeTwo} {mins} ago</small>
                            </div>
                        </div>
                        <div class="card m-4" style={{ border: "1px solid black" }}>
                            <img src={membership} class="card-img-top" alt="winter offer" />
                            <div class="card-body">
                                <h5 class="card-title bold">Membership Plan</h5>
                                <p class="card-text">Special Offers</p>
                                <p>Join today to avail special offers on Zero° Muscles Zone.Start your fitness journey today.</p>
                            </div>
                            <div class="card-footer">
                                <small class="text-muted">Posted on {date} at {initialTimeThree} {mins} ago</small>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <a type="button" className='btn btn-success float-start' href='tel: 09386511681' style={{ marginTop: '1rem', marginRight: '5rem', marginBottom: '2rem', marginLeft: '7rem' }}>Book Now</a>
                        </div>
                        <div className="col">
                            <a type="button" className='btn btn-success float-end' href='tel: 09386511681' style={{ marginTop: '1rem', marginRight: '6.6rem', marginBottom: '2rem', marginLeft: '1rem' }}>Call Now</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Updates