import React from "react";

function DirectorCard({director}){
    console.log(director)
    const{name, movies} = director
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

export default DirectorCard; 