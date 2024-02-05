import React from "react";

const Movie = (prop) => {

    return (
        <div className="movie">
            <img src={prop.img} alt="" />
            <p>{prop.title}</p>
            <p>Year: {prop.Year}</p>
        </div>
    )
}

export default Movie;