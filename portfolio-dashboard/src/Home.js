import React from 'react'
import Introduction from './Introduction'
import Resume from './Resume'

export default function Home() {
    return(
        <div className="div-hme">
            <Introduction />
            <Resume />
            {/* {<Introduction />} */}
        </div>
    )
}