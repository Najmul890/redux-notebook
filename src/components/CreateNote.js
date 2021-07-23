import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { add_new_note } from '../redux/actions/notes.action';


const CreateNote = () => {
    const [note, setNote] = useState('');

    const dispatch = useDispatch()

    const handleSubmit= (e)=>{
        e.preventDefault();
        const data={
            note,
            id: Math.floor(Math.random()*1000),
            date: new Date().toJSON().slice(0,10),
            isImportant: false
        }
        dispatch(add_new_note(data))
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <textarea placeholder="Write Your Dream Note"  cols="30"
                     value={note}
                    onChange={e=>setNote(e.target.value)} className="form-control"></textarea>
                    <button className="btn" type="submit">Add Note</button>
                </div>
            </form>
        </div>
    );
};






export default CreateNote;