import React, { useState } from 'react';
import BookForm from '../components/BookForm';
import BookList from '../components/BookList';
const Home = () => {
    const [books,setBooks]=useState([
    {title:"Book 1",id:1},
    {title:"Book 2",id:2},
    {title:"Book 3",id:3},
    ])
    return (
        <div className='App'>
            {books&&<BookList books={books}/>}
            <BookForm/>
        </div>
    );
}

export default Home;
