import { initializeApp } from "firebase/app";
import {
  GithubAuthProvider,
  getAuth,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "firebase/auth";
import { getDatabase, ref, set} from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCMn6TUUFAbu6_6CjGdbTkxhoXbHXdCrYs",
  authDomain: "ichallenge-bcc55.firebaseapp.com",
  projectId: "ichallenge-bcc55",
  storageBucket: "ichallenge-bcc55.appspot.com",
  messagingSenderId: "790381598739",
  appId: "1:790381598739:web:2f017f5ca523a9455c47eb",
  databaseURL: "https://ichallenge-bcc55-default-rtdb.firebaseio.com"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);
const githubprovider = new GithubAuthProvider(app);

const signInWithGitHub = async () => {
  try {
    const res = await signInWithPopup(auth, githubprovider);
    const user = res.user;
    const reference = ref(database, 'users/' + user.uid);
    set(reference, {
      name: user.displayName,
      email: user.email,
      profileImg: user.photoURL,
      dateCreated: (new Date()).toUTCString(),
      provider: 'github'
    })
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const registerWithEmailANdPassword = async (auth, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password)
    const user = res.user;
    console.log(user)
    const reference = ref(database, 'users/' + user.uid);
    set(reference, {
      email: user.email,
      dateCreated: (new Date()).toUTCString(),
    })
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
}

const logInWithEmailAndPassword = async (auth, email, password) => {
  try{
    const res = await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
}

const logout = () => {
  signOut(auth);
};

export {
  auth,
  signInWithGitHub,
  logout,
  registerWithEmailANdPassword,
  logInWithEmailAndPassword
};