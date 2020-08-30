import React from 'react'
import'./Languages.css'
function Languages({details}){
    const lan=details.length?details.map(element=>{
        return(
           <div className="border">
                <div key={element.id}>
                <h1 class="title">{element.title}</h1>
                <p class="pro">{element.prof}</p>
            </div>
           </div>
        )
    }):(<p>loading</p>)
    return (
        <div class="lang">
            {lan}
        </div>
    )

}

export default Languages;