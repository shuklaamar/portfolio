import React from 'react'

function Certificates({details}){
    const lan=details.length?details.map(element=>{
        return(
           <div className="border">
                <div key={element.id}>
                <h1 class="title">{element.title}</h1>
                <p class="pro">{element.Language}</p>
            </div>
           </div>
        )
    }):(<p>Loading..</p>)
    return(
        <div>
            {lan}
        </div>
    )
}

export default Certificates;