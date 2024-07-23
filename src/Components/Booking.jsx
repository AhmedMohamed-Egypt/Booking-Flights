import { useState } from "react";
import BookTickets from "./BookTickets";
import FlightStatus from "./FlightStatus";


function Booking() {
  //  const btns=['Buy Tickets','']
    const [show,setShow] = useState(0)
    return (
        <div>
            <p>Book Now</p>
            <div className="shadow-book pt-4 rounded-lg	">
                <div className="book_Tabs border-b border-grey pb-1">
                    <button onClick={()=>setShow(0)} className={`${show===0?'text-orange-c after:w-full':''} btnBook `}>Buy Tickets</button>
                    <button onClick={()=>setShow(1)} className={`${show===1?'text-orange-c after:w-full':''} btnBook ml-[50px]`}>Check your Flights</button>
                </div>
                <div>
                    {show===0&&<BookTickets/>}
                    {show===1&&<FlightStatus/>}
                </div>

            </div>
        </div>
    )
}

export default Booking
