import React from 'react'
import { Link } from 'react-router-dom'

export default function Introduction() {
    // const scrollToPortfolio = () => {
    //     window.scrollTo(0,500)
    // }
    return(
        <div className="div-intro">
            <div className="intro-div">
                {/* <h1>This is a test</h1> */}
                <div className="dv-intro-div">
                    <div className="d-intro" onClick={() => window.scrollTo(0,700)}>Portfolio</div>
                    <div className="d-intro2" onClick={() => window.scrollTo(0,1600)}>Resume</div>
                    <div className="d-intro3" onClick={() => window.scrollTo(0,2200)}>Connect</div>
                </div>
                <div className="dv-intro">
                    {/* <p></p> */}
                    <h1>Hi</h1>
                    <h1>
                        My name is Abideen Kareem and I'm a 
                        Software Engineer that utilizes React,
                        Node.js, JavaScript and more to develop
                        immersive and interactive projects.
                    </h1>
                </div>
                <span onClick={() => window.scrollTo(0,2200)}>Let Connect!</span>
                {/* <div className="dv-intro-div3">
                    <div className="d3-intro"></div>
                </div> */}
            </div>
        </div>
    )
}