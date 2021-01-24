import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <div className='Footer'>
            <p className='FooterLink'>© 2021 Spectre Air Capital All rights reserved</p>
            <Link className='FooterLink' to='#'>Terms and Condition</Link>
            <Link className='FooterLink' to='#'>Privacy Policy</Link>
        </div>
    )
}
