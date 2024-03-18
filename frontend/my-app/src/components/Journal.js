import React, { useState, useEffect } from 'react';
import { Link, useNavigate, Route, Routes } from 'react-router-dom';
import axios from 'axios';
import JournalIndex from "../pages/JournalIndex";
import NewJournal from "../pages/JournalNew";
import EditJournal from "../pages/JournalEdit";

const Journal = (props) => {
    const navigate = useNavigate();
    const URL = `${process.env.REACT_APP_BACKEND_URL}journal/`;
    const [journals, setJournals] = useState(null);
    //Function to fetch journals
    const fetchJournals = async() => {
        try {
            const response = await axios.get(URL, { withCredentials: true });
            setJournals(response.data.data);
      
        } catch(error) {
            console.error("Error fetching journals", error)
        }
    }

    //Function to create journals
    const createJournal = async(journalData) => {
        try {
            const response = await axios.post(URL + "new",  journalData, { withCredentials: true });

            if(response.status === 200) {
                navigate("/journals")
            }
            fetchJournals();
        } catch(error) {
            console.error("Failed to create journal", error);
        }
    }

    //Function to edit journal
    const updateJournal = async(journalData, journalId) => {
        try {
            const response = await axios.put(URL + journalId, journalData, { withCredentials: true });
             
            if(response.status === 200) {
                navigate("/journals");
            }
            fetchJournals();
        } catch(error) {
            console.error("Failed to edit journal", error)
        }
    }

    //Function to delete journal
    const deleteJournal = async(journalId) => {
        try {
            const response = await axios.delete(URL + journalId, { withCredentials: true });
            if(response.status === 200) {
                fetchJournals();
            }

        } catch(error) {
            console.error("Failed to delete Journal", error);
        }
    }

    useEffect(() => {
        if(props.user) {
            fetchJournals();
        } else {
            setJournals(null);
        }
    }, [props.user])

    return (
        <>
            <Routes>
                <Route path= '/journals' element={<JournalIndex journals={journals} deleteJournal={deleteJournal}/>} />
                <Route path= '/journals/new' element={<NewJournal createJournal={createJournal}/> }/>
                <Route path='/edit/:id' element={<EditJournal journals={journals} updateJournal={updateJournal}/>} />
            </Routes>
        </>
    )
}

export default Journal;