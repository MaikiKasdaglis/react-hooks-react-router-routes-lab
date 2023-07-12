import React from "react";
import { actors } from "../data";
import ActorCard from "./ActorCard";


function Actors() {
  return <div>
    {actors.map((actor) => <ActorCard key={actor.name} actor={actor}/>)}
  </div>;
}

export default Actors;
