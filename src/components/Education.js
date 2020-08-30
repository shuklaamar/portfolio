import React from 'react'
import './Education.css'
function Education({details}){
        const detail=details.length?details.map(element=>{
            return(
                <div key={element.id}>
                <h1 className="class1">{element.class}</h1>
                <p className="school">{element.school}</p>
                <p className="percentage">{element.percentage}</p>
                <p className="year">{element.year}</p>
                </div>
            )
        }
        ):(<p>Loding Data</p>)
        return(
            <div>
                <div className="container">
                {detail}
                </div>
            </div>
        )
}


export default Education;