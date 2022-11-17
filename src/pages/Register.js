import React,{useEffect, useState} from 'react';
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth,storage } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
const Register = () => {
  const [err,setErr] = useState(false);
  const handleSubmit= async (e)=>{
    e.preventDefault();
    const displayName= e.target[0].value;
    const email= e.target[1].value;
    const password= e.target[2].value;
    const file= e.target[3].files[0];
    try{
      const res= await createUserWithEmailAndPassword(auth, email, password);

const storageRef = ref(storage, displayName);

const uploadTask = uploadBytesResumable(storageRef, file);

uploadTask.on('state_changed', 

  (error) => {
    setErr(true);
  }, 
  () => {
    getDownloadURL(uploadTask.snapshot.ref).then( async (downloadURL) => {
      await updateProfile(res.user,{
        displayName
      });
    });
  }
);
    }
    catch(err){
      setErr(true);
    }
    
};
  return (
    <div className='formContainer'>
        <div className='formWrapper'>
            <span className='logo'>Chat</span>
            <span className='title'>Register</span>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='Name'/>
                <input type="email"placeholder='email'/>
                <input type="password"placeholder='password'/>
                <input style={{display:"none"}} type="file" id="file"/>
                <label htmlFor='file'>
                    interim pic
                </label>
                <button>Signup</button>
                {err && <span>Semething went wrong</span>}
            </form>
            <p>You do have an account? Login</p>
        </div>
    </div>
  )
}

export default Register