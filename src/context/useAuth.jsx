import { createContext } from "react";
import app from "../firebase/firebase.config";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";



export AuthContext = createContext(null)

const auth = getAuth(app)

const AuthProvider = () => {


    const GoogleProvider = new GoogleAuthProvider()

    const createUser = (email, password) => {
       return createUserWithEmailAndPassword(auth, email, password);
    }

    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const googleLogin = () => {
        return signInWithPopup(auth, GoogleAuthProvider)
    }

    const logOut = () => {
        return signOut(auth);
    }


    return <div>AuthProvider</div>
}


export default AuthProvider;