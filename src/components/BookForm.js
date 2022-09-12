import React,{useState} from 'react';

const BookForm = () => {
    const [newBook,setNewBook]=useState('')

    const handleSubmit=async (e)=>{
    e.preventDefault()
    console.log(newBook)
    
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
