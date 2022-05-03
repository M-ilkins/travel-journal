import React from 'react';
import locationIcon from './images/Fill 219.png';


export default function JournalEntry(props){
    return (
        <section className='journal-card-container'>
            <figure>
                <img src={props.imageUrl}></img>
            </figure>
            <div className='journal-card-info-container'>
                <span>
                  <img src={locationIcon}></img>
                  <p className='location'>{props.location}</p>
                </span>  
                <a href={props.googleMapsUrl} className='g-maps'>View on Google Maps</a>
                <h1 className='title'>{props.title}</h1>
                <p className='start-end-date'>{`${props.startDate}-${props.endDate}`}</p>
                <p className='description'>{props.description}</p>
            </div>
        </section>
    )
}