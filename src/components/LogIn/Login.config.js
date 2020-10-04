import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../LogIn/firebase.config';

export const firebaseIntitialize = ()=>{
    if(firebase.apps.length === 0){
        firebase.initializeApp(firebaseConfig);
    }
}

export const handleSignIn = ()=>{
    var provider = new firebase.auth.GoogleAuthProvider();
    return firebase.auth().signInWithPopup(provider).then(function(result) {
    var user = result.user;
    const newUser = {
        name:user.displayName,
        email: user.email,
        isSignedIn: true
    }
    return newUser;

    }).catch(function(error) {
    var errorMessage = error.message;
    console.log(errorMessage);
    
    });
}
export const handleSignOut = () =>{
    return firebase.auth().signOut()
    .then(function() {
        const newUser = {
            name: '',
            email: '',
            isSignedIn : false
        }
        return newUser;
      }).catch(function(error) {
        // An error happened.
      });
}
export const handleCreateAccout = (email,password) =>{
    return firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(res =>{
        const newUser = {}
        newUser.error = '';
        newUser.success = true;
        return newUser;
    })
    .catch(function(err) {
        const newUser = {}
        newUser.error = err.message;
        newUser.success = false;
        return newUser;
      });
}