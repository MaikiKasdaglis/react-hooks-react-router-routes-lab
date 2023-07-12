import React from "react";

function MovieCard({movie}){
    const {title, time, genres} = movie
    return(
        <div>
            <fieldset>
           <legend>
             <h3>{title}</h3>
             </legend>
            <h5>Time:  {time}</h5>
            <ul>
                {genres.map((item) => <li key={item}>{item}</li>)}
            </ul>
            </fieldset>
        </div>
    )
}

export default MovieCard; 