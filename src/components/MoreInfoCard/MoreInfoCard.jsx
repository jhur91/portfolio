import React from 'react';
import './MoreInfoCard.css'

function MoreInfoCard(){
    return(
        <div className='MoreInfoCard'>

          <div className="MoreAboutMe"><h2>More about me</h2><br></br><h5>I have full stack capabilities, but more specifically, I love creating MERN Stack apps!</h5></div>
          <div><img src="https://i.imgur.com/BHJUJTP.png" alt="" className="workflowImage" /></div>
          <div className="TopExpertise"><h2>TOP EXPERTISE</h2><h5>MERN (MongoDB, Express, React, Node.js), Javascript, HTML, CSS</h5></div>
          <div className="QuickLinks">
            <h2>Quick Links:</h2>
            <a href="https://github.com/jhur91">github.com/jhur91</a>
            <br/>
            <a href="https://www.linkedin.com/in/jasonhur/">linkedin.com/in/jasonhur</a>
          </div>

        </div>
    )
}




export default MoreInfoCard;
