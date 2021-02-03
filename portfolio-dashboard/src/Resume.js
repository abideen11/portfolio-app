import { faFile } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

import resumescreenshot1 from './Screenshot-2021-02-02-175809.png'

export default function Resume() {
    return(
        <div className="div-res">
            <div className="res-div"></div>
            <div className="res-div2">
                {/* <h1>Resume</h1> */}
                <div className="res-div2-h1"><h1>Resume</h1></div>
                <div className="dv2-res-div">
                    <img src={resumescreenshot1} alt="screenshot of resume" />
                    <div onClick={() => {window.open("https://docs.google.com/document/d/1Me4f37fxhjWXo2iJGs_tpXUGGo0a8Rhj/edit")}}><FontAwesomeIcon icon={faFile} /></div>
                </div>
                <div className="dv2-res-div2">
                    <h2>
                        Besides my current competency, I believe
                        that my penchant to grow and challenge myself 
                        will be a valuable asset for any enterprise.
                    </h2>
                </div>
            </div>
            <div className="res-div3"></div>
        </div>
    )
}