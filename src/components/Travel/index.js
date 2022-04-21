import React from "react"
import "./index.css"

export default function Travel({travel})
{

  return (
    <section className="travel-container">
      <div className="place-img">
        <img className="place" src={travel.imageUrl}/>
      </div>
      <div className="travel-info">
        <div className="travel-mark">
          <img src="Fill.png"/>
          <span className="country-text">{travel.location}</span>
          <a className="travel-link" href={travel.googleMapsUrl}>View on Google Maps</a>
        </div>

        <h2 className="travel-title">{travel.title}</h2>
        <p className="travel-date">{`${travel.startDate} - ${travel.endDate}`}</p>
        <p className="travel-description">{travel.description}</p>
      </div>
    </section>
  )
}
