import React from 'react'
import './css/aboutme.css'
import me from '../assets/images/me.jpg'
import dj from '../assets/images/dj.png'
import rea from '../assets/images/rea.png'
import java from '../assets/images/java.png'
import nodejs from '../assets/images/nodejs.jpg'
function Aboutme() {
  return (
    <div className="container">
        <div className="card">
            <div className="card-items">
                <div className="card-image">
                    <img src={me} alt="me"/>
                </div>
                <div className="name">
                    <p>Mugisha Jedidiah Eddy</p> 
                </div>
                <div className="card-des">
                <p>
                    Hi, I am a Web developer who specializes in full-stack
                    web development. 
                </p>
                </div>
            </div>
        </div>
        <div className="card2">
            <div className="skills">
                <div className="skill">
                    <div className="skill-image">
                        <img src={dj} alt="django"/>
                    </div>
                    <div className="skill-des">
                    <p>Django</p>
                    <span>Specialized</span>
                    <a href="/certifications:id">Certification</a>
                    </div>
                </div>

                <div className="skill">
                    <div className="skill-image">
                        <img src={rea} alt="React"/>
                    </div>
                    <div className="skill-des">
                    <p>React</p>
                    <span>Professional</span>
                    <a href="/">Certification</a>
                    </div>
                </div>
                <div className="skill">
                    <div className="skill-image">
                        <img src={java} alt="javaee"/>
                    </div>
                    <div className="skill-des">
                    <p>Java EE</p>
                    <span>Learning</span>
                    <a href="/">Certification</a>
                    </div>
                </div>

                <div className="skill">
                    <div className="skill-image">
                        <img src={nodejs} alt="node"/>
                    </div>
                    <div className="skill-des">
                    <p>Node</p>
                    <span>Intermidiate</span>
                    <a href="/">Certification</a>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Aboutme