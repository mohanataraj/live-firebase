import {db} from "./firebase"
import {collection, addDoc, doc, setDoc} from "firebase/firestore"

export const addUser = async (user) => {
    const docRef = await setDoc(doc(db, "users", user.email), {
        email: user.email
    });
}