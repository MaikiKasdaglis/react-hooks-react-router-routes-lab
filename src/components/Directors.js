import React from "react";
import { directors } from "../data";
import DirectorCard from "./DirectorCard";

function Directors() {
  return <div>
    {directors.map((director)=> <DirectorCard key={director} director={director}/>)}
  </div>;
}

export default Directors;
