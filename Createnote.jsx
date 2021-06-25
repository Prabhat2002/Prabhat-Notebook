import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
function Createnote(props) {
    const [note, setnote] = useState(
        {
            title: "",
            content: "",
        }
    );
    const InputEvent = (event) => {
        // const value=event.target.value;
        // const name=event.target.name;
        const { name, value } = event.target;
        setnote((prevdata) => {
            return {
                ...prevdata,
                [name]: value,
            };
        })
    };
    const addEvent = () => {
        props.passNote(note);
        setnote({
            title: "",
            content: "",
        });
    };
    return (
        <>
            <div className='create'>
                <form>
                    <input name="title" type='text' value={note.title} placeholder='Title' onChange={InputEvent} autoComplete='off'></input>
                    <br />
                    <br />
                    <textarea name="content" rows='5' column='' value={note.content} onChange={InputEvent} placeholder='Enter Text...' />
                    <br />
                    <Button onClick={addEvent}>
                        <AddIcon class='addsign' />
                    </Button>
                </form>
            </div>
        </>
    );
};
export default Createnote;