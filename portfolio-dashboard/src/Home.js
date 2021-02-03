import React from 'react'
import Contact from './Contact'
import Introduction from './Introduction'
import PortfolioProjects from './PortfolioProjects'
import Resume from './Resume'

export default function Home() {
    return(
        <div className="div-hme">
            <Introduction />
            <PortfolioProjects />
            <Resume />
            <Contact />
            {/* {<Introduction />} */}
        </div>
    )
}