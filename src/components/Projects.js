import React from 'react'
import './Projects.css'
const Projects=({details})=>{
    const lan=details.length?details.map(element=>{
        return(
           <div className="border">
                <div key={element.id}>
                <h1 class="title">{element.title}</h1>
                <p class="pro">{element.Language}</p>
                 <span>{element.qualities}</span>
            </div>
           </div>
        )
    }):(<p>Loading..</p>)
    return(
        <div className="container1">
            {lan}
        </div>
    )
}

export default Projects;