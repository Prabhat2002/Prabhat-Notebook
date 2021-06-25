import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Note from './Note'
import Createnote from './Createnote';
function App() {
    const [addItem, setAddItem] = useState([]);
    const addNote = (note) => {
        setAddItem((prevdata) => {
            return [...prevdata, note];
        });
    };
    const onDelete = (id) => {
        setAddItem((olddata) =>
            olddata.filter((currdata, index) => {
                return index !== id;
            })
        );
    }
    return (
        <>
            <Header/>
            <Createnote passNote={addNote} />
            {addItem.map((val, index) => {
                return (
                    <Note
                        key={index}
                        id={index}
                        title={val.title}
                        content={val.content}
                        deleteItem={onDelete}
                    />
                );
            })}
            <Footer/>
        </>
    );
};
export default App;
