import React from 'react';
import './IntroCard.css'

function IntroCard(){
    return(
        <div className='IntroCard' id="aboutMe">

          {/* <div className="IntroInfo"><h3>What I Do</h3><br></br><h5>I develop full stack web applications!</h5></div> */}

          <h1 className='introHeading'>Hello World...</h1>
				<div className='intro-wrapper'>
					<div className='left-column'>
						<div className='actionsContainer'>
							<div className='picThemeContainer'>
								<div className='Profile'>
                <img src="https://i.imgur.com/FqtriAq.png" alt="" className="Headshot" />
								</div>
							</div>
							<div className='ctaBtn'>
								<h3 className='headingBtnContainer'>
									<a
										className='headingBtn'
										href='https://github.com/jhur91'>
										<i
											className='fa fa-github'
											aria-hidden='true'></i>{' '}
										Github
									</a>
								</h3>
								<h3 className='linkedInBtnTextContainer'>
									<a
										className='headingBtn'
										href='https://www.linkedin.com/in/jasonhur/'>
										<i
											className='fa fa-linkedin-square'
											aria-hidden='true'></i>{' '}
										LinkedIn
									</a>
								</h3>
							</div>
						</div>
					</div>
					<div className='right-column'>
						<div className='rightContainer'>

							<div id='introTextContainer'>
								<div
									id='corner-tl'
									className='corner'></div>
								<div
									id='corner-tr'
									className='corner'></div>
								<h2 className='boxTitle'>What I do</h2>
								<p className='boxText'>
									I am a full-stack developer with a passion
									for designing modern, highly responsive,
									web-based user interfaces.
								</p>
								<div
									id='corner-br'
									className='corner'></div>
								<div
									id='corner-bl'
									className='corner'></div>
							</div>
						</div>
					</div>
				</div>

        </div>
    )
}
export default IntroCard;