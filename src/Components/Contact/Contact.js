import React from 'react'
import {Link} from 'react-router-dom'
import {AiFillFacebook,AiOutlineTwitter,AiFillLinkedin,AiFillInstagram} from 'react-icons/ai'
export default function Contact() {
    return (
        <div className='ContactSection'>
           <div className='ContactSectionWrap'>
<div>
<p className='ContactTitle'>Contact & Connect</p>
               <p className='ContactDes'>12 Building ex,Free Zone,Clare, example</p>
               <p className='ContactDes'> +512 551-1211</p>
               <p className='ContactDes'> ex@example.com</p>
</div>
<div>
    <Link to='#' className='ContactLink'><AiFillFacebook /></Link>
    <Link to='#' className='ContactLink'><AiOutlineTwitter /></Link>
    <Link to='#' className='ContactLink'><AiFillLinkedin /></Link>
    <Link to='#' className='ContactLink'><AiFillInstagram /></Link>
</div>
           </div>
        </div>
    )
}
