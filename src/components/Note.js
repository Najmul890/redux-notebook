import React from 'react';
import { connect } from 'react-redux';
import { toggle_note } from '../redux/actions/notes.action';

const Note = ({note:{date, note, isImportant, id}, toggle_note}) => {
    
    return (
        <div className="card m-3">
             <div className="card-header">
                 {date}
             </div>
             <div className="card-body">
                 {note}
             </div>
             <button className="btn mb-3"
                onClick={()=>toggle_note(id)}
             > {isImportant ? "Remove from important" : 'Add to Important' } </button>
        </div>
    );
};

export default connect(null, {toggle_note} )(Note);