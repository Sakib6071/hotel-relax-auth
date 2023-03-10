import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate} from "react-router-dom";
import auth from "../../firebase.init";


const Login = () => {
  const navigate = useNavigate()
  const [signInWithGoogle, googleUser, googleError] = useSignInWithGoogle(auth);

  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);
  const location = useLocation()
  const from = location.state?.from?.pathname || "/"
  if(user || googleUser){
    navigate(from,{replace:true})
  }
  // if(googleUser){
  //   navigate(from,{replace:true})
  // }
  const [email,setEmail]=useState([])
const [password,setPassword]=useState([])

const handleEmailBlur=event=>{
  setEmail(event.target.value)
}
const handlePasswordBlur = event => {
  setPassword(event.target.value)
}
  const handleLogin = (e) =>{
    e.preventDefault()
    signInWithEmailAndPassword(email,password)
  }
  const handleGoogleSignIn=()=>{
signInWithGoogle()
  }
  return (
    <div>
      <div className="mt-5 w-2/5 mx-auto bg-gray-700 rounded-lg px-10 py-8">
        <p className="text-center text-3xl text-yellow-500">Login Here</p>
        <form onSubmit={handleLogin}>
          <div className="email-field">
            <label className="text-white text-xl">Enter Your Email</label>{" "}
            <br />
            <input
            onBlur={handleEmailBlur}
              className=" px-2 py-3 w-full rounded-lg"
              type="email"
              placeholder="Your Email"
              name="email"
            />
          </div>

          <div className="password-field my-5">
            <label className="text-white text-xl">Enter Password</label> <br />
            <input
            onBlur={handlePasswordBlur}
              className=" px-2 py-3 w-full rounded-lg"
              type="password"
              placeholder="Password"
              name="password"
            />
          </div>
        <p className="text-red-500 text-center">{error?.message}</p>
          <div className="login-button mt-5 text-right">
            <input
              className="hover:cursor-pointer w-full bg-yellow-500 text-black px-5 py-2 text-xl font-semibold rounded-lg"
              type="submit"
              value="Login"
            />
          </div>
        </form>
        <div className="new-user mt-2 mb-5">
          <p className=" text-gray-300">
            New here? <Link className="text-yellow-500" to={"/registration"}>
              Register
            </Link>
          </p>
        </div>
        <div className="or w-4/5 mx-auto mb-5">
          <hr className=" w-2/5 inline-block" />
          <span className="text-center text-gray-300 inline-block w-1/5">
            or
          </span>
          <hr className=" w-2/5 inline-block" />
        </div>
        <div className="sign-in-google">
          <button onClick={handleGoogleSignIn} className="text-white py-3 px-2 my-2 text-left w-full border-2 rounded-lg">
            <FontAwesomeIcon
              className=" w-1/6 inline-block text-left"
              icon={faGoogle}
              size={"xl"}
            ></FontAwesomeIcon>
            <span className="text-center w-5/6 mx-auto inline-block ">
              Continue With Google
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
