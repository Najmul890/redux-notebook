import React from 'react';
import { useSelector } from 'react-redux';
import Note from './Note';

const ImportantNotes = () => {
    const notes= useSelector(state=> state.notes_reducer.notes)
    return (
        <div className="importantNotes" >
            <h4>Important Notes </h4>
            <div className="row">
                {
                    notes.filter(note=> note.isImportant===true)
                    .map(note=> <Note
                    key={note.id}
                    note={note}
                    
                    ></Note> )
                }
            </div>
        </div>
    );
};


export default ImportantNotes;