import  { useState, useMemo } from 'react'


import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Modal from '../contact_popup/index'


import Select from "react-select";

import { ImLocation } from 'react-icons/im';
import { AiOutlineMinus } from 'react-icons/ai';
import airData from './airData';
import {MdOutlineFlight} from 'react-icons/md'

 import Axios from "axios";
 import Swal from 'sweetalert2';
 import { Router } from 'next/router';
 import Image from 'next/image';
 import Plane from '../../images/plane.png'


const SearchFlight = ({ }) => {
    const [open, setOpen] = useState(false);

    const [adultValue, setAdultValue] = useState(0);

    const [childValue, setchildValue] = useState(0);

    const [perentValue, setperentValue] = useState(0);
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const [active, setActive] = useState(false);

    
    
    const optionsAir = airData;


    const [user, setUser] = useState({
        name: "",
        email: "",
        phone: "",
        class: "",
    });


    let name;
    let value;
    const handleInput = (e) => {
        name = e.target.name;
        value = e.target.value;


        setUser({ ...user, [name]: value });
    }

    // api for submit form

    const handleSubmit = async () => {
        // e.preventDefault();


        if (!(user.email) || !(user.phone) || !(user.name) ||!(user.class)) {
            Swal.fire({
                position: 'centre',

                title: 'Please fill All Data',
                showConfirmButton: true,
                timer: 2000
            })

        }
        else {


            await Axios.post('https://virtuelegalservices.com/api/travels', {

                "email": user.email,
                "name": user.name,
                "phone": user.phone,
                "class": user.class

            }).then(res => {

                Swal.fire({
                    position: 'centre',
                    icon: 'success',
                    title: 'Thanks for Your Response',
                    showConfirmButton: false,
                    timer: 1500
                })



                const delay = () => {
                    Router.push('/all-search-flight');
                }

                const myTimeout = setTimeout(delay, 1600);





            })

        }


    }



    const incrementAdult = () => {
        const count = adultValue + 1;
        setAdultValue(count);
    }

    const decremetAdult = () => {
        if (adultValue > 0) {
            const count = adultValue - 1;
            setAdultValue(count);


        }

    }

    const incrementChild = () => {
        const count = childValue + 1;
        setchildValue(count);
    }

    const decremetChild = () => {
        if (childValue > 0) {
            const count = childValue - 1;
            setchildValue(count);


        }

    }


    const incrementParent = () => {
        const count = perentValue + 1;
        setperentValue(count);
    }

    const decremetParent = () => {
        if (perentValue > 0) {
            const count = perentValue - 1;
            setperentValue(count);


        }

    }



    return (
        
        <div className="filter-section">

            <h1 className="hero-title">Fly Responsibly, Save and Book the latest<br /> Flights and grab the best deals! </h1>
            <ul className="nav nav-pills" id="pills-tab" role="tablist">
                <li className="nav-item" role="presentation">
                    <button  className="nav-link active" id="pills-home-tab" onClick={() => {
                                            setShowDatePicker(false);
                                        }} data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true"><MdOutlineFlight className='mdflight'/>   Round trip</button>

                </li>
                <li className="nav-item"  role="presentation">
                    <button className="nav-link" id="pills-home-tab"  onClick={() => {
                                            setShowDatePicker(true);
                                        }} data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true"> <MdOutlineFlight className='mdflight'/> One Way</button>

                </li>
            </ul>
            <section className="search-form-section">
                <div className="tab-content" id="pills-tabContent">
                    <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabIndex="0">
                        <form>
                            {/* <div className="d-flex flex-wrap mb-2">
                                <div className="pe-2 ps-0">
                                    <div className="form-check">
                                        <input className="form-check-input"  type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                                        <label className="form-check-label" htmlFor="flexRadioDefault2">
                                            Round Trip
                                        </label>
                                    </div>
                                </div>

                                <div className="pe-2">
                                    <div className="form-check">
                                        <input className="form-check-input " type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                        <label className="form-check-label" htmlFor="flexRadioDefault1">
                                            Oneway
                                        </label>
                                    </div>
                                </div>
                            </div> */}
                            <div className="row">
                                <div className="col-xl-3 col-lg-4 col-md-6">
                                    <div className="mb-2 position-relative">
                                        <label htmlFor="exampleInputEmail1" className="form-label">From</label>
                                        <Select placeholder="City or Airport" options={optionsAir} name="form" />

                                        <ImLocation className="search-location-icon" />
                                    </div>
                                </div>
                                <div className="col-xl-2 col-lg-4 col-md-6">
                                    <div className="mb-2 position-relative">
                                        <label htmlFor="exampleInputPassword1" className="form-label">To</label>
                                        <Select placeholder="City or Airport" options={optionsAir} name="to" />
                                        <ImLocation className="search-location-icon" />
                                    </div>
                                </div>
                                <div className="col-xl-2 col-lg-4 col-md-6">
                                    <div>
                                        <label htmlFor="exampleInputPassword1" className="form-label">Departure Date</label>
                                        <DatePicker type="date" selected={startDate} onChange={(date) => setStartDate(date)} className="form-control" />
                                    </div>
                                </div>


                                <div className="col-xl-2 col-lg-4 col-md-6">
                                    <div>

                                        <label htmlFor="exampleInputPassword1" className="form-label">Return Date</label>


                                        {
                                            showDatePicker ? <DatePicker type="date" placeholder="Return Date" className="form-control disaable-date-input" disabled selected={endDate} onChange={(date) => setEndDate(date)} />
                                                : <DatePicker type="date" placeholder="Return Date" className="form-control " selected={endDate} onChange={(date) => setEndDate(date)} />
                                        }

                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6">
                                    <div className='room-book-wrapper'>
                                        <label htmlFor="exampleInputPassword1" className="form-label">Room Booking</label>
                                        <div className="nav-item position-relative">
                                            <div className="select-drop" onClick={() => {
                                                if (open === false) {
                                                    setOpen(true)
                                                }
                                                else {
                                                    setOpen(false)
                                                }
                                            }}>
                                                Guest : Adult {adultValue} || Children {childValue} || Rooms {perentValue}
                                            </div>
                                            {open ? <ul className="select-menu">
                                                <li>
                                                    <div className='d-flex justify-content-between p-2'>
                                                        <div className="">
                                                            Adult
                                                        </div>
                                                        <div className='d-flex'>


                                                            <button type='button' onClick={decremetAdult} className='dicrement-btn'><span>-</span></button>
                                                            <span className='px-2'>{adultValue}</span>
                                                            <button type='button' onClick={incrementAdult} className='increment-btn'> <span>+</span></button>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className='d-flex justify-content-between p-2'>
                                                        <div className="">
                                                            Children
                                                        </div>
                                                        <div className='d-flex'>



                                                            <button type='button' onClick={decremetChild} className='dicrement-btn'>-</button>
                                                            <span className='px-2'>{childValue}</span>
                                                            <button type='button' onClick={incrementChild} className='increment-btn'>+</button>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className='d-flex justify-content-between p-2'>
                                                        <div className="">
                                                            Rooms
                                                        </div>
                                                        <div className='d-flex'>


                                                            <button type='button' onClick={decremetParent} className='dicrement-btn'><span>-</span></button>
                                                            <span className='px-2'>{perentValue}</span>
                                                            <button type='button' onClick={incrementParent} className='increment-btn'><span>+</span></button>
                                                        </div>
                                                    </div>
                                                </li>
                                                <div className='text-center'>
                                                    <button className='buttonnn' onClick={() => {
                                                        setOpen(false)
                                                    }}>Ok</button>
                                                </div>

                                            </ul> : <></>

                                            }
                                        </div>
                                    </div>
                                </div>
                                <div className='col-xl-3 col-lg-4 col-md-6'>
                                    <div className=''>
                                        <div>
                                            <label htmlFor="exampleInputPassword1" className="form-label">Class </label>
                                            <select className="form-select form-select-lg" aria-label="Default select example" name='class' value={user.class} onChange={handleInput}>
                                                <option value> select </option>
                                                <option value="Economy">Economy</option>
                                                <option value="Premium economy">Premium economy</option>
                                                <option value="Business class">Business class</option>
                                                <option value="First class">First class</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-xl-2 col-lg-4 col-md-6'>
                                    <div>
                                        <label htmlFor="exampleInputPassword1" className="form-label">Name <span className="req">*</span></label>
                                        <div className="nav-item position-relative">
                                            <div className="name">
                                                <input type="text" id='name' name='name' className='form-control' value={user.name} onChange={handleInput} placeholder='Enter your Name' required />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-xl-2 col-lg-4 col-md-6'>
                                    <div className=''>
                                        <div>
                                            <label htmlFor="exampleInputPassword1" className="form-label">Email <span className="req">*</span></label>
                                            <div className="nav-item position-relative">
                                                <div className="name">

                                                    <input type="email" id='email' placeholder='Enter your Email' name='email' value={user.email} onChange={handleInput} className='form-control' required />

                                                </div>


                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-xl-2 col-lg-4 col-md-6'>
                                    <div className=''>
                                        <div>
                                            <label htmlFor="exampleInputPassword1" className="form-label">Phone No. <span className="req">*</span> </label>
                                            <div className="nav-item position-relative">
                                                <div className="name">

                                                    <input type="text" id='phone' placeholder='Enter your Phone No. ' value={user.phone} onChange={handleInput} className='form-control' required name='phone' />

                                                </div>


                                            </div>
                                        </div>


                                    </div>

                                </div>

                                <div className="col-lg-3 col-md-12 align-self-center text-end" >
                                    <button className="btn search-form-button mt-4 py-2" type="button" onClick={handleSubmit} > <Image className="flight-img"  src={Plane}  width={500} height={500} alt="" /> Search Flight</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabIndex="0">
                        <form>
                            <div className="row">
                                <div className="col-xl-3 col-lg-4 col-md-6">
                                    {/* <div className='mb-2 position-relative'>
                                        <label htmlFor="exampleInputEmail1" className="form-label">Your Destination</label>
                                        <Select options={options} name="form" />
                                        <ImLocation className="search-location-icon" />
                                    </div> */}
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6">
                                    {/* <div>
                                        <label htmlFor="exampleInputPassword1" className="form-label">Departure Date</label>
                                        <DatePicker type="date" selected={startDate} onChange={(date) => setStartDate(date)} placeholder="Departure Date" className="form-control" />
                                    </div> */}
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6">
                                    <div>
                                        <label htmlFor="exampleInputPassword1" className="form-label">Return Date</label>
                                        <DatePicker type="date" placeholder="Return Date" className="form-control" selected={endDate} onChange={(date) => setEndDate(date)} />
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6">
                                    <div className='room-book-wrapper'>
                                        <label htmlFor="exampleInputPassword1" className="form-label">Room Booking</label>
                                        <div className="nav-item position-relative">
                                            <div className="select-drop" onClick={() => {
                                                if (open === false) {
                                                    setOpen(true)
                                                }
                                                else {
                                                    setOpen(false)
                                                }
                                            }}>
                                                Guest : Adult {adultValue} || Children {childValue} || Rooms {perentValue}
                                            </div>
                                            {open ? <ul className="select-menu">
                                                <li>
                                                    <div className='d-flex justify-content-between p-2'>
                                                        <div className="">
                                                            Adult
                                                        </div>
                                                        <div className='d-flex'>

                                                            <button type='button' onClick={decremetAdult} className='dicrement-btn'><span>-</span></button>
                                                            <span className='px-2'>{adultValue}</span>
                                                            <button type='button' onClick={incrementAdult} className='increment-btn'> <span>+</span></button>

                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className='d-flex justify-content-between p-2'>
                                                        <div className="">
                                                            Children
                                                        </div>
                                                        <div className='d-flex'>



                                                            <button type='button' onClick={decremetChild} className='dicrement-btn'>-</button>
                                                            <span className='px-2'>{childValue}</span>
                                                            <button type='button' onClick={incrementChild} className='increment-btn'>+</button>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className='d-flex justify-content-between p-2'>
                                                        <div className="">
                                                            Rooms
                                                        </div>
                                                        <div className='d-flex'>


                                                            <button type='button' onClick={decremetParent} className='dicrement-btn'><span>-</span></button>
                                                            <span className='px-2'>{perentValue}</span>
                                                            <button type='button' onClick={incrementParent} className='increment-btn'><span>+</span></button>
                                                        </div>
                                                    </div>
                                                </li>
                                                <div className='text-center'>
                                                    <button className='buttonnn' onClick={() => {
                                                        setOpen(false)
                                                    }}>Ok</button>
                                                </div>

                                            </ul> : <></>

                                            }
                                        </div>
                                    </div>
                                </div>
                                <div className='col-xl-3 col-lg-4 col-md-6'>
                                    <div>
                                        <label htmlFor="exampleInputPassword1" className="form-label">Name<span className="req">*</span></label>
                                        <div className="nav-item position-relative">
                                            <div className="name">

                                                <input type="text" id='name' className='form-control' value={user.name} onChange={handleInput} placeholder='Enter your Name' required name='name' />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-xl-3 col-lg-4 col-md-6'>
                                    <div className=''>
                                        <div>
                                            <label htmlFor="exampleInputPassword1" className="form-label">Email<span className="req">*</span></label>
                                            <div className="nav-item position-relative">
                                                <div className="name">

                                                    <input type="email" id='name' placeholder='Enter your Email' value={user.email} onChange={handleInput} className='form-control' required name='email' />

                                                </div>


                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-xl-3 col-lg-4 col-md-6'>
                                    <div className=''>
                                        <div>
                                            <label htmlFor="exampleInputPassword1" className="form-label">Phone No. <span className="req">*</span> </label>
                                            <div className="nav-item position-relative">
                                                <div className="name">

                                                    <input type="text" id='name' placeholder='Enter your Phone No.' value={user.phone} onChange={handleInput} className='form-control' required name='phone' />

                                                </div>


                                            </div>
                                        </div>


                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-12 align-self-center text-end" >


                                    <button className="btn search-form-button mt-4" type="button" onClick={handleSubmit}> <Image className="flight-img" src={Plane} width={500} height={500} alt="plane" /> Search Flight</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab" tabIndex="0">
                        <form>
                            <div className="row">
                                <div className="col-xl-3 col-lg-4 col-md-6">
                                    {/* <div className="mb-2 position-relative">
                                        <label htmlFor="exampleInputEmail1" className="form-label">From</label>
                                        <Select options={options} value={user.form} onChange={handleInput} />
                                        <ImLocation className="search-location-icon" />
                                    </div> */}
                                </div>
                                <div className="col-xl-2 col-lg-4 col-md-6">
                                    {/* <div className="mb-2 position-relative">
                                        <label htmlFor="exampleInputPassword1" className="form-label">To</label>
                                        <Select options={toOptions} value={user.to} onChange={handleInput} />
                                        <ImLocation className="search-location-icon" />
                                    </div> */}
                                </div>
                                <div className="col-xl-2 col-lg-4 col-md-6">
                                    <div>
                                        <label htmlFor="exampleInputPassword1" className="form-label">Departure Date</label>
                                        <DatePicker type="date" selected={startDate} onChange={(date) => setStartDate(date)} placeholder="Departure Date" className="form-control" />

                                    </div>
                                </div>
                                <div className="col-xl-2 col-lg-4 col-md-6">
                                    <div>
                                        <label htmlFor="exampleInputPassword1" className="form-label">Return Date</label>
                                        <DatePicker type="date" placeholder="Return Date" className="form-control" selected={endDate} onChange={(date) => setEndDate(date)} />
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6">
                                    <div className='room-book-wrapper'>
                                        <label htmlFor="exampleInputPassword1" className="form-label">Room Booking</label>
                                        <div className="nav-item position-relative">
                                            <div className="select-drop" onClick={() => {
                                                if (open === false) {
                                                    setOpen(true)
                                                }
                                                else {
                                                    setOpen(false)
                                                }
                                            }}>
                                                Guest : Adult {adultValue} || Children {childValue} || Rooms {perentValue}
                                            </div>
                                            {open ? <ul className="select-menu">
                                                <li>
                                                    <div className='d-flex justify-content-between p-2'>
                                                        <div className="">
                                                            Adult
                                                        </div>
                                                        <div className='d-flex'>


                                                            <button type='button' onClick={decremetAdult} className='dicrement-btn'><span>-</span></button>
                                                            <span className='px-2'>{adultValue}</span>
                                                            <button type='button' onClick={incrementAdult} className='increment-btn'> <span>+</span></button>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className='d-flex justify-content-between p-2'>
                                                        <div className="">
                                                            Children
                                                        </div>
                                                        <div className='d-flex'>



                                                            <button type='button' onClick={decremetChild} className='dicrement-btn'>-</button>
                                                            <span className='px-2'>{childValue}</span>
                                                            <button type='button' onClick={incrementChild} className='increment-btn'>+</button>

                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className='d-flex justify-content-between p-2'>
                                                        <div className="">
                                                            Rooms
                                                        </div>
                                                        <div className='d-flex'>


                                                            <button type='button' onClick={decremetParent} className='dicrement-btn'><span>-</span></button>
                                                            <span className='px-2'>{perentValue}</span>
                                                            <button type='button' onClick={incrementParent} className='increment-btn'><span>+</span></button>
                                                        </div>
                                                    </div>
                                                </li>
                                                <div className='text-center'>
                                                    <button className='buttonnn' onClick={() => {
                                                        setOpen(false)
                                                    }}>Ok</button>
                                                </div>

                                            </ul> : <></>

                                            }
                                        </div>

                                    </div>
                                </div>
                                <div className='col-xl-3 col-lg-4 col-md-6'>
                                    <div>
                                        <label htmlFor="exampleInputPassword1" className="form-label">Name<span className="req">*</span></label>
                                        <div className="nav-item position-relative">
                                            <div className="name">

                                                <input type="text" id='name' className='form-control' placeholder='Enter your Name' value={user.name} onChange={handleInput} required name='name' />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-xl-3 col-lg-4 col-md-6'>
                                    <div className=''>
                                        <div>
                                            <label htmlFor="exampleInputPassword1" className="form-label">Email<span className="req">*</span></label>
                                            <div className="nav-item position-relative">
                                                <div className="name">

                                                    <input type="email" id='phone' placeholder='Enter your Email' value={user.email} onChange={handleInput} className='form-control' required name='email' />
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-xl-3 col-lg-4 col-md-6'>
                                    <div className=''>
                                        <div>
                                            <label htmlFor="exampleInputPassword1" className="form-label">Phone No. <span className="req">*</span> </label>
                                            <div className="nav-item position-relative">
                                                <div className="name">

                                                    <input type="text" id='phone' placeholder='Enter your Phone No.' value={user.phone} onChange={handleInput} className='form-control' required name='phone' />

                                                </div>


                                            </div>
                                        </div>


                                    </div>
                                </div>

                                <div className="col-lg-3 col-md-12 align-self-center text-end" >
                                    <button className="btn search-form-button mt-4" type="button" onClick={handleSubmit}> <Image className="flight-img" src={Plane} width={500} height={500} alt="plane"  /> Search Flight</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <Modal  close={() => setShowModal(false)}/>
            </section>
        </div>
    );
};

export default SearchFlight;
