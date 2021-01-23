import React from 'react'
import {Link} from 'react-router-dom';
export default function NewsCard() {
    return (
<div className='NewsCard'>
<p className='NewsDate'>JANUARY 4 , PRESS RELEASE</p>
        <p className='NewsDes'>
        Engine Lease Finance and Bamboo Airways close spare LEAP SLB
        Engine Lease Finance and Bamboo Airways close spare LEAP SLB
        </p>
        <Link className='NewsBtn' to='#'>Read More</Link>
</div>
    )
}
