import React from 'react';

const BookingFormPage = () => {

    const handleSubmit = e => {
        e.preventDefault();
    };


    return (
        <div className='bookings__temp'>
            <div className="booking__place">
                <form onSubmit={handleSubmit}>
                    <ul className="errors">
                        {/* {errors.map((error, idx) => <li key={idx}>{error}</li>)} */}
                    </ul>
                    <div className='reserve__box'>
                        <div className='reserve__title'>
                            Reservation
                        </div>
                        <div className='reserve__welcome'>
                            $100 / Night
                        </div>
                        <div className='info__reserve__box'>

                            <label className='reserve__label'>
                                Check in
                                <input
                                    className='input__reserve__box'
                                    type="date"
                                    // value={lastName}
                                    // onChange={(e) => setLastName(e.target.value)}
                                    required
                                />
                            </label>
                            <label className='reserve__label'>
                                Checkout
                                <input
                                    className='input__reserve__box'
                                    type="date"
                                    // value={username}
                                    // onChange={(e) => setUsername(e.target.value)}
                                    required
                                />
                            </label>
                            <label className='reserve__label'>
                                Ghosts
                                <input
                                    className='input__reserve__box'
                                    type="number"
                                    // value={email}
                                    // onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </label>

                        </div>
                        <button className="reserve__button" type="submit">Reserve</button>
                    </div>
                </form >
            </div>
        </div >
    );
}

export default BookingFormPage;
