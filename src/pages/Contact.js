import React from 'react';
import { Container, Row, Button } from 'react-bootstrap';

const Contact = (props) => {
    return (
        <div>
            <Container className='container text-center'>
                <Row>
                    <div className="col-lg-4 col-md-auto">
                        <h4>Contact</h4>
                        <Button className='btn btn-success mt-2' href='tel: 09386511681'>Call me Now</Button><br />
                        <h5 className="text-center mt-3">093865 11681</h5>
                    </div>
                    <div className="col-lg-4 col-md-auto">
                        <h4>Address</h4>
                        <a type='button' href='./map' className="btn btn-success mt-2">Get Directions</a>
                        <p className='text-center mt-3' style={{ fontFamily: 'sans-serif', fontWeight: '600' }}>
                            1st floor,Prakash Market <br />
                            near GD college<br />
                            Begusarai, Bihar, India<br />
                            851101<br />
                        </p>
                    </div>
                    <div className="col-lg-4 col-md-auto">
                        <h4>Opening Hours</h4>
                        <button className='btn btn-success disabled mt-2'>Opening Hours</button>
                        <p className='text-center mt-3' style={{ fontFamily: 'sans-serif', fontWeight: '600' }}>
                            Mon:	5:30 – 11:30 am, 3:00 – 10:00 pm <br />
                            Tue:	5:30 – 11:30 am, 3:00 – 10:00 pm<br />
                            Wed:	5:30 – 11:30 am, 3:00 – 10:00 pm<br />
                            Thu:	5:30 – 11:30 am, 3:00 – 10:00 pm<br />
                            Fri:	5:30 – 11:30 am, 3:00 – 10:00 pm<br />
                            Sat:	5:30 – 11:30 am, 3:00 – 10:00 pm<br/>
                            Sun:	Closed</p>
                    </div>
                </Row>
            </Container>
        </div>
    )
}

export default Contact