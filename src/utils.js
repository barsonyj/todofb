import { signInWithEmailAndPassword } from "firebase/auth";
import { addDoc, collection, deleteDoc, doc, onSnapshot, orderBy, query, serverTimestamp, updateDoc } from "firebase/firestore"
import { db } from "./firebaseApp"

export const readTodos = (setTodos) => {
  const collRef = collection(db, "todolist");
  const q = query(collRef, orderBy("timestamp", "desc"));
  onSnapshot(q,(snapshot) => {
      //console.log(snapshot.docs);
      setTodos(snapshot.docs.map(doc => ({...doc.data(), id:doc.id}))); // !!!
  })
}

export const deleteTodo = async (id) => {
    const docRef = doc(db, "todolist", id);
    await deleteDoc(docRef);
}

export const updateTodo = async (id, done) => {
    const docRef = doc(db, "todolist", id);
    //done = done ? false : true;
    done = !done;
    await updateDoc(docRef, {done}); // { done:done }
}

export const updateDesc = async (id, todo) => {
    const docRef = doc(db, "todolist", id);
    await updateDoc(docRef, {todo});
}

export const addTodo= async (todo) => {
    const collRef = collection(db, "todolist");
    const newDoc = { todo, done:false, timestamp:serverTimestamp() };
    const newDocRef = await addDoc(collRef, newDoc);
    console.log(newDocRef);
}
