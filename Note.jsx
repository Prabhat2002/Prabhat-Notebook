import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
function Note(props) {
    const deleteNote = () => {
        props.deleteItem(props.id);
    }
    return (
        <>
            <div className="notebook">
                <h2>{props.title}</h2>
                <p>{props.content}</p>
                <button className='Btn' onClick={deleteNote}>
                    <DeleteIcon />
                </button>
            </div>
        </>
    );
}
export default Note;
