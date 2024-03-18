import React, { useState } from "react";

//New Journal Componenet
const NewJournal = ({ createJournal }) => {
  const [journalData, setJournalData] = useState({
    date: "",
    breakfast: 0,
    lunch: 0,
    dinner: 0,
    snacks: 0,
  });

  //Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    createJournal(journalData);
    setJournalData({
      date: "",
      breakfast: 0,
      lunch: 0,
      dinner: 0,
      snacks: 0,
    });
  };

  //Function to handle user input changes
  const handleInputChange = async (e) => {
    setJournalData({ ...journalData, [e.target.name]: e.target.value });
  };

  return (
    <div className="RegisterStyle" style={{ marginLeft: "300px", width: "500px", margin: "20px auto", padding: "20px" }}>
       <h2 className="center-align">Add Journal</h2>
    <form onSubmit={handleSubmit}>
      <label htmlFor="date">Date:</label>
      <input
        type="date"
        name="date"
        value={journalData.date}
        onChange={handleInputChange}
        placeholder="Date"
      />
      <label htmlFor="breakfast">Breakfast Calories:</label>
      <input
        type="number"
        name="breakfast"
        value={journalData.breakfast}
        onChange={handleInputChange}
        placeholder="Breakfast"
      />
      <label htmlFor="lunch">Lunch Calories:</label>
      <input
        type="number"
        name="lunch"
        value={journalData.lunch}
        onChange={handleInputChange}
        placeholder="Lunch"
      />
      <label htmlFor="dinner">Dinner Calories:</label>
      <input
        type="number"
        name="dinner"
        value={journalData.dinner}
        onChange={handleInputChange}
        placeholder="Dinner"
      />
      <label htmlFor="snacks">Snacks Calories:</label>
      <input
        type="number"
        name="snacks"
        value={journalData.snacks}
        onChange={handleInputChange}
        placeholder="Snacks"
      />
      <button type="submit">Create Journal</button>
    </form>
    </div>
  );
};

export default NewJournal;
