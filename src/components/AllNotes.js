import React from 'react';
import { useSelector } from 'react-redux';

import Note from './Note';

const AllNotes = () => {

    const notes= useSelector(state=> state.notes_reducer.notes)
    
    
    return (
        <div className="my-3">
            <h5>All Notes</h5>
            <div className="row">
                {
                    notes.map(note=> <Note
                    key={note.id} note={note}
                    
                    ></Note>  )
                }
            </div>
        </div>
    );
};



export default AllNotes;