import React from "react";
import { Link } from "react-router-dom";

const JournalIndex = ({ journals, deleteJournal }) => {
  return (
    <div className="container" style={{ marginLeft: "300px", width: "500px", margin: "20px auto", padding: "20px" }}>
         <h2 className="center-align">View Journals</h2>
      <div className="row">
        {journals && journals.length > 0 ? (
          journals.map((journal) => (
            <div key={journal._id} className="col s12 m6">
              <div className="card blue-grey darken-1">
                <div className="card-content white-text">
                  <span className="card-title">Date: {new Date(journal.date).toLocaleDateString()}</span>
                  <p>Breakfast: {journal.breakfast} calories</p>
                  <p>Lunch: {journal.lunch} calories</p>
                  <p>Dinner: {journal.dinner} calories</p>
                  <p>Snacks: {journal.snacks} calories</p>
                  <p>Total Calories: {journal.totalCalories}</p>
                </div>
                <div className="card-action">
                  <Link to={`/edit/${journal._id}`} className="btn blue">Edit</Link>
                  <button onClick={() => deleteJournal(journal._id)} className="btn red">Delete</button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="white-text">No journals found. Create your first journal entry.</p>
        )}
      </div>
    </div>
  );
};

export default JournalIndex;