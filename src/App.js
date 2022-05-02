import React from 'react';
import JournalEntry from './Journal-Entry'
import data from './data';
import styles from './index.css';


export default function App(){

    const JournalData = data.map(
      entry => <JournalEntry {...entry} />
    );
  

  return (
    <div>
      {JournalData}
    </div>
  )
};