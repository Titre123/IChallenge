import { initializeApp } from "firebase/app";
import {
  GithubAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { getDatabase, ref, set} from "firebase/database";

const firebaseConfig = {
  apiKey:import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: "1:790381598739:web:2f017f5ca523a9455c47e6",
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
    })
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const logout = () => {
  signOut(auth);
};

export {
  auth,
  signInWithGitHub,
  logout,
};