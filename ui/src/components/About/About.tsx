import './About.css'
import Data from '../../services/data'
import katy from '../../assets/katy.png'
import ComingSoonLink from '../ComingSoonLink/ComingSoonLink'
import { useCallback, useEffect, useState } from 'react';

function About() {

    const timeoutSecs = 5;
    const content: JSX.Element[] = [
        Section1(),
        Section2(),
        Section3()
    ];

    const [section, setSection] = useState<number>(0)
    const [progressBarClass, setprogressBarClass] = useState<string>('about-section-progress-bar')
  
    const changeSection = useCallback(() => {
        setSection((current) => {
            if (current + 1 < content.length) {
                return current + 1
            } else {
                return 0
            }
        })
        
    }, [content.length])

    useEffect(() => {
        const timeout = setTimeout(() => {
            setprogressBarClass('')
            setTimeout(() => { 
                setprogressBarClass('about-section-progress-bar')
            }, 20)
            changeSection()
          }, timeoutSecs*1000);
        
          return () => clearTimeout(timeout);
    }, [section, changeSection])
    
    return (
        <div id='about'>
            <div className='about-container'>
                <div className='about-section'>
                    <h3>a bit about me... </h3>
                    <div>{content[section]}</div>
                    <div>
                        <div className='about-section-timeout-bar'></div>
                        <div className={`${progressBarClass}`}></div>
                    </div>
                </div>
                <div className='katy'><img src={katy} alt="Katy"></img></div>
            </div>
        </div>
    )
}

function Section1(): JSX.Element {
    return (
        <><p>
        I started my tech career as a Physics MSci graduate,
        who liked the “coding bits” of my course. 👩🏼‍🔬
        </p>
        <p>
        Fast forward to today, and I have been working as a Software Developer for 5 years, moving up quickly from Junior to Senior and Lead roles.
        </p>
        <p>Previously, I managed a small team of 4-5 developers and QA engineers, and right now I am focusing on technical leadership.
        </p></>
    )
}

function Section2(): JSX.Element {
    return (<>
     <p>
    Over my development career, I've worked in the</p>
    <ul>
        <li>📞 telephony industry</li>
        <li>☕ food and beverage industry</li>
        <li>⚡ energy industry</li>
    </ul>
    <p>
    My latest endeavour is into the energy industry! {<ComingSoonLink text="Find out more here." />}
    </p>
    </>)
}

function Section3(): JSX.Element {
    return (<>
    <p>
    I started my Twitter account in September 2021 as a means to share my insights into being a Senior Developer and leader within tech.<br /> 
    Since then it has grown into a community of over {Data.twitterFollowerCount.long}!
    <br /><a href='https://twitter.com/KatyCodesStuff'>Check out my Twitter here.</a>
    </p>
    <p>Since building my online presence, I have had the opportunity to take part in podcasts, live streams, Twitter spaces; 
        I've met numerous people for virtual coffee chats to share my story and offer advice and support; 
        I've connected with loads of great people, some of whom I've been able to meet in real-life!  
    </p> 
    </>)
}

export default About
