import React from 'react'
import Navigation from '../Components/Navigation/Navigation'
import AboutUs from '../Pages/AboutUs'
import Exp from '../Components/EXP/Exp'
import News from '../Components/News/News'
function Home() {
    return (
        <div>
        <div className='Nav_Cta'>
            <Navigation />
            <p className='Cta_Text'>
            Spectre Air Capital is the global leader in aircraft leasing
            </p>
            <p className='Cta_Btn'>
            Discover Spectre
            </p>
        </div>
        <AboutUs />
        <Exp />
        <News />
        </div>
    )
}

export default Home
