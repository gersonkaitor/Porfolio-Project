import React from 'react';
import {Animate} from 'react-simple-animate'
import {FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa';
import './styles.scss';



const Home = () =>{
    return(
        <section className='home' id="home">
            <div className='home-text-wrapper'>
                <h1>
                    Hello, I'm Gerson <br/>
                    Web Developer
                </h1>
            </div>
            <Animate
                play={true}
                duration={1.5}
                delay={1}
                start={{
                    transform : 'translateY(600px)'
                }}
                end={{
                    transform : 'translateX(0)'
                }}
            >
                <div className='contact-me'>
                    <div className='contact-me-buttons-wrapper'>
                        <button>Hire me</button>
                        <a>Download Resume</a>
                    </div>
                    <div className='contact-me-social-wrapper'>
                        <FaLinkedin size={40}/>
                        <FaGithub size={40}/>
                        <FaFacebook size={40}/>
                    </div>
                </div>
            </Animate>

        </section>
    );
}

export default Home;