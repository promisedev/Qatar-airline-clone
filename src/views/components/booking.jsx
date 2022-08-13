import FlightIcon from '@material-ui/icons/Flight';
import DateRangeIcon from '@material-ui/icons/DateRange';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import AirlineSeatReclineExtraIcon from '@material-ui/icons/AirlineSeatReclineExtra';
import { useRef, useState } from 'react';
import Book from './booking/book'
import Check from './booking/check'
import Status from './booking/status'
import Trip from './booking/trip'
import { useEffect } from 'react';


const Booking = ()=>{
const book = useRef(null)
const check = useRef(null)
const trip = useRef(null)
const flight = useRef(null)
 const [isbook, setisBook]= useState(true)
const [ischeck, setisCheck]= useState(false)
const [isstatus, setisStatus]= useState(false)
const [istrip, setisTrip]= useState(false)

useEffect(()=>{
const book_ele = book.current;
    book_ele.classList.add('active_booking_button')
},[])

    const activeBooking = (e)=>{

const book_ele = book.current;
const flight_ele = flight.current;
const check_ele = check.current;
const trip_ele = trip.current;

        const ele = e.currentTarget;
        const text = e.currentTarget.textContent;
        ele.classList.add('active_booking_button')
        if(text ==='Book'){
            flight_ele.classList.remove('active_booking_button')
            check_ele.classList.remove('active_booking_button')
            trip_ele.classList.remove('active_booking_button')
            //book_ele.classList.remove('active_booking_button')
            // --------------------------------------
            setisBook(true);setisTrip(false);setisCheck(false);setisStatus(false)
        }else
if(text ==='My Trips'){
            flight_ele.classList.remove('active_booking_button')
            check_ele.classList.remove('active_booking_button')
            //trip_ele.classList.remove('active_booking_button')
            book_ele.classList.remove('active_booking_button')
        // --------------------------
    setisBook(false);setisTrip(true);setisCheck(false);setisStatus(false)}else
if(text ==='Check-in'){
    flight_ele.classList.remove('active_booking_button')
            //check_ele.classList.remove('active_booking_button')
            trip_ele.classList.remove('active_booking_button')
            book_ele.classList.remove('active_booking_button')
            // ---------------------------------------------
            setisBook(false);setisTrip(false);setisCheck(true);setisStatus(false)
}else
if(text ==='Flight status'){
    //flight_ele.classList.remove('active_booking_button')
            check_ele.classList.remove('active_booking_button')
            trip_ele.classList.remove('active_booking_button')
            book_ele.classList.remove('active_booking_button')
            // ----------------------------------------------
            setisBook(false);setisTrip(false);setisCheck(false);setisStatus(true)
}
    }

return(
    <section className='booking_cont'>
        <article className="qatar_booking">
       <div className="booking_nav">
        {/* -------------------- */}
        <div className="booking_button" onClick={activeBooking}ref={book}><FlightIcon/>Book</div>
        <div className="booking_button" onClick={activeBooking}ref={trip}><DateRangeIcon/>My Trips</div>
        <div className="booking_button" onClick={activeBooking}ref={check}><CheckCircleOutlineIcon/>Check-in</div>
        <div className="booking_button" onClick={activeBooking}ref={flight}><AirlineSeatReclineExtraIcon/>Flight status</div>
        {/* -------------------- */}
       </div>

       <div className="booking_cont">
        {isbook&&<Book/>}
        {istrip&&<Trip/>}
        {ischeck&&<Check/>}
        {isstatus&&<Status/>}
        </div>      
        </article>

        {/* ------------------------------------------- */}

{/* <article className="qatar_ads">   </article> */}
        
    </section>
)

}

export default Booking