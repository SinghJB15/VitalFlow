import React, { useState } from 'react';
import { useParams } from 'react-router-dom';


//New Journal Componenet
const EditJournal = ( { journals, updateJournal }) => {
    //Get Journal id from url
    const params = useParams();
    const id = params.id;

    //Find the journal to edit based on the id
    const journalToEdit = journals.find(journal => journal._id === id);
    const [journalData, setJournalData] = useState(journalToEdit);

    //Function to handle form submission
    const handleSubmit = async(e) => {
        e.preventDefault();
        updateJournal(journalData, journalToEdit._id);
    }

    //Function to handle user input changes
    const handleInputChange = async(e) => {
        setJournalData({...journalData, [e.target.name]: e.target.value});
        console.log(journalData);
    };

    return (
      <div className="RegisterStyle" style={{ marginLeft: "300px", width: "500px", margin: "20px auto", padding: "20px" }}>
        <form onSubmit={handleSubmit}>
          <label htmlFor="date">Date:</label>
          <input
            type="date"
            name="date"
            value={journalData.date}
            onChange={handleInputChange}
          />
          <label htmlFor="breakfast">Breakfast Calories:</label>
          <input
            type="number"
            name="breakfast"
            value={journalData.breakfast}
            onChange={handleInputChange}
          />
          <label htmlFor="lunch">Lunch Calories:</label>
          <input
            type="number"
            name="lunch"
            value={journalData.lunch}
            onChange={handleInputChange}
          />
          <label htmlFor="dinner">Dinner Calories:</label>
          <input
            type="number"
            name="dinner"
            value={journalData.dinner}
            onChange={handleInputChange}
          />
          <label htmlFor="snacks">Snacks Calories:</label>
          <input
            type="number"
            name="snacks"
            value={journalData.snacks}
            onChange={handleInputChange}
          />
          <button type="submit">Update Journal</button>
        </form>
        </div>
      );
    
}

export default EditJournal;