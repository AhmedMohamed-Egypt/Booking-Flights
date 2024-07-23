import Booking from "../Components/Booking"
import Hero from "./Hero"

function LandingPage() {
    return (
       <>
        <Hero/>
        <div className="w-container-shrink mx-auto">
        <Booking/>
        </div>
       
       </>
    )
}

export default LandingPage


