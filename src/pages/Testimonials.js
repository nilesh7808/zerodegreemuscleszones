import React, { useState } from 'react';
import { Rating } from 'react-simple-star-rating';

const Testimonials = () => {

    // const [count, setCount] = useState();
    const [rating, setRating] = useState();
    const [initialSubmit, setSubmit] = useState();

    const handleSubmit = (e) => {
        let comment = document.getElementById('comment').value;
        setSubmit(comment);
        e.preventDefault();
        document.getElementById('forms').reset();
    }
  

    const handleRating = (e) => {
        setRating(e);
    }
    return (
        <div>
            <div className="container">
                <h4 className='text-start'>Reviews</h4>
                
                    { rating ? rating +' out of 5' : ''}<br />
                    <p>{initialSubmit}</p>
                
                <div className="row">
                    <form className='text-center' id="forms" method='put' onSubmit={handleSubmit}>
                        <Rating
                            onClick={handleRating}
                            ratingValue={rating}
                            size={30} 
                        /> <br />
                        
                        <textarea className='text-center' name="comments" id="comment" cols="20" rows="2" placeholder='write down your comment here' required></textarea><br />
                        <button className='btn btn-primary' type="submit">Add a comment</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Testimonials