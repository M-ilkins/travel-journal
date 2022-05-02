import React from 'react';

export default function JournalEntry(props){
    return (
        <section className='journal-card-container'>
            <figure>
                <img src={props.imageUrl}></img>
            </figure>
            <div className='journal-card-info-container'>
                <p>{props.location}</p>
                <a href={props.googleMapsUrl}>View on Google Maps</a>
                <h1>{props.title}</h1>
                <p>{`${props.startDate}-${props.endDate}`}</p>
                <p>{props.description}</p>
            </div>
        </section>
    )
}