import React,{useState} from 'react';
import {db} from "../firebase/config"
import { collection,addDoc } from 'firebase/firestore';
const BookForm = () => {
    const [newBook,setNewBook]=useState('')

    const handleSubmit=async (e)=>{
    e.preventDefault()
    //console.log(newBook)
    const ref=collection(db,'books')
    await addDoc(ref,{title:newBook})
    setNewBook('')
}
    return (
        <form onSubmit={handleSubmit}>
            <label><span>Add new book : </span>
            <input type="text" required onChange={((e)=>setNewBook(e.target.value))} value={newBook}/>
            </label>
            <button>Add</button>
        </form>
    );
}

export default BookForm;
