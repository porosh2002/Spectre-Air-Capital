import React from 'react'
import NewsCard from './NewsCard'

function News() {
    return (
<div style={{marginTop:"100px"}}> 
<p className='SectionTitle'>News</p>
        <div className='News'>
            <NewsCard />
            <NewsCard />
            <NewsCard />
        </div>
</div>
    )
}

export default News
