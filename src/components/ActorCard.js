import React from "react";

function ActorCard({actor}){
    const{name, movies} = actor
    
   console.log(actor)
    return(
        <div>
            <fieldset>
           <legend>
             <h3>{name}</h3>
             </legend>
            <ul>
                {movies.map((item) => <li key={item}>{item}</li>)}
            </ul>
            </fieldset>
        </div>
    )
}

export default ActorCard; 