import React from "react";
import BookForm from "../components/BookForm";
import BookList from "../components/BookList";
// import { db } from "../firebase/config";
// import { collection, getDocs } from "firebase/firestore";
import {useCollection} from "../hooks/useCollection"
const Home = () => {
  //   const [books, setBooks] = useState([
  //     { title: "Book 1", id: 1 },
  //     { title: "Book 2", id: 2 },
  //     { title: "Book 3", id: 3 },
  //   ]);
  const {documents:books}=useCollection('books')
//   const [books, setBooks] = useState(null);
//   useEffect(() => {
//     const referens = collection(db, 'books'); //from firebase

//     getDocs(referens)
//     .then((snap)=>{
//         let result=[];
//         snap.forEach(doc=>{
//         console.log(doc.data())
//         result.push({id:doc.id,...doc.data()})
//         })
//         setBooks(result)
//     })
//   }, []);
  return (
    <div className="App">
      {books && <BookList books={books} />}
      <BookForm />
    </div>
  );
};

export default Home;
