import React from 'react'
import { Link } from 'react-router-dom'
import { Rating } from 'react-simple-star-rating'
function MovieCard({el,del}) {

  return (
    <div className="hero-container">
    <div className="container ">
      <div className="poster-container">
        <Link to={`/Details/${el.Id}`}>
          <img src={el.Poster} className="poster" alt=''/>
          </Link>
      </div>
          <button className="ticket__buy-btn" onClick={()=>del(el.Id)}>Delete</button>
      
  </div>
  </div>


  

  )
}
export default MovieCard