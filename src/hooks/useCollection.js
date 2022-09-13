import { useState, useEffect, useRef } from "react";
import { db } from "../firebase/config";
import { collection, onSnapshot, query, where } from "firebase/firestore";

export const useCollection = (col,_q) => {
  const [documents, setDocuments] = useState(null);

  const q = useRef(_q).current;//to get querry
  useEffect(() => {
    let ref = collection(db, col);

    if(q){
    ref=query(ref,where(...q))
    }

    const unsub = onSnapshot(
      ref,
      (snapshot) => {
        let results = [];
        snapshot.docs.forEach((doc) => {
          results.push({ id: doc.id, ...doc.data() });
        });
        setDocuments(results);
      },
      (err) => {
        console.log(err.message);
      }
    );
    return () => unsub();
  }, [col,q]);
  return { documents };
};
