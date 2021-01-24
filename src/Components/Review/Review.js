import React from 'react'
import {FaQuoteLeft} from 'react-icons/fa'
import {RiQuillPenFill} from 'react-icons/ri'
export default function Contact() {
    return (
        <div className='Review'>
            <p className='TitleReview'>Clients Opinion</p>
            
<div className='ReviewContent'>
<p className='ReviewDes'> <span className='QuoteIcon'><FaQuoteLeft /></span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            </p>
            <p className='ReviewAurthor'>MD Jamil Kashem, CEO - wecubs <span className='PenIcon'><RiQuillPenFill /></span></p>
</div>
        </div>
    )
}
