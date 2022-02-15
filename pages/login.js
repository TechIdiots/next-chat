import { useState } from "react";
import axios from "axios";
import OtpInput from 'react-otp-input';
const Login = (props) => {
    const [state , setState] = useState({
        email : "",
        password : "",
        otp : "", 
        otpInputVisibility : true,
        otpSendButton : true,
        loginVisibility: false,
        newUser: true
    })

    const verifyOtp = () => {
        axios.post("https://codestrixs-api.netlify.app/.netlify/functions/api/verifyOtp",{email:state.email,otp:state.otp}).then((response)=>{
            response.data.forEach(element => {
                if(element.verified === 1){
                    alert("user verified");
                    setState(prevState => ({
                        ...prevState,
                        newUser: !state.newUser,
                    }))
                }
                else if(element.verified === 0){
                    alert("user Not Verified")
                }
            })
      })
    }

    const handleChange = (e) => {
        const {id , value} = e.target   
        setState(prevState => ({
            ...prevState,
            [id] : value
        }))
    }

    const handleOtp = (otp) => {console.log(otp);state.otp=otp}

    const sendmail=()=>{
        axios.post("https://codestrixs-api.netlify.app/.netlify/functions/api/mail",{tomail:state.email}).then((response)=>{
          if (response.data.msg === 'success'){
              alert("Email sent, awesome!"); 
              
         
          }else if(response.data.msg === 'fail'){
              alert("Oops, something went wrong. Try again")
            //   console.log(response.data);
          }
      })
    }

    const logout = () => {
        setState(prevState => ({
            ...prevState,
            loginVisibility:false,
        }))
    }

    const sendDetailsToServer = (e) => {
        e.preventDefault();
        if(state.email.length && state.password.length) {
            const payload={
                "email":state.email,
                "password":state.password,
            }
            axios.post('https://codestrixs-api.netlify.app/.netlify/functions/api/register', payload)
                .then(function (response) {
                    // console.log(response)
                    var val;
                    var tmp;
                    for(var key in response.data){
                        val = response.data[key];
                        tmp = val;
                    }
                    if(val === 1){
                        alert("Email Id already exists")
                    }
                    else if(val === "created"){
                        alert(`user ${val}`),
                        sendmail(),
                        setState(prevState => ({
                            ...prevState,
                            otpInputVisibility:false,
                        }))
                    }
                })
                .catch(function (error) {
                    console.log(error);
            });    
        } 
    }
    const handleLogReg = () => {
        setState(prevState => ({
            ...prevState,
            newUser: !state.newUser,
        }))
    }

    const ckeckApiConnection = () => {
        axios.get('https://mycorsproxy-tuto.herokuapp.com/https://codestrixs-api.netlify.app/.netlify/functions/api/').then((response)=>{console.log(response)})
    }
    const fetchDetails = (e) => {
        e.preventDefault();
        if(state.email.length && state.password.length) {
            const payload={
                "email":state.email,
                "password":state.password,
            }
            axios.post('https://codestrixs-api.netlify.app/.netlify/functions/api/login', payload)
                .then(function (response) {
                    // console.log(response)
                    var val;
                    var tmp;
                    for (var key in response.data) {
                        val = response.data[key];
                        tmp = val
                        for(key in tmp){
                            val = tmp[key];
                        }
                    }
                    // console.log(val)
                    if (val === 1){
                        console.log("user exists");
                        response.data.forEach(element => {
                            if(element.verified === 1){
                                alert("user Logged in successfully");
                                setState(prevState => ({
                                    ...prevState,
                                    loginVisibility:true,
                                }))
                            }
                            else if(element.verified === 0){
                                alert("please verify your account")
                            }
                        })
                    }
                    else if(val === 0){
                        alert("verify your account")
                    }
                    else if(tmp === "email does not exists"){
                        alert("email does not exists")
                    }
                    else{
                        alert("Wrong Credentials")
                    }
                })
                .catch(function (error) {
                    console.log(error);
                });    
        } 
    }
  return (
    <div>
        <button onClick={ckeckApiConnection}>check console</button>
        { state.newUser ? 
            <div>
                <div>
                    <input id="email" placeholder="username" value={state.email} onChange={handleChange}  hidden={state.loginVisibility}></input>
                </div>
                <div>
                    <input id="password" placeholder="password" value={state.password} onChange={handleChange}  hidden={state.loginVisibility}></input>
                </div>
                <div>
                    <input id="otp" placeholder="Enter otp" hidden={state.otpInputVisibility} value={state.otp} onChange={handleChange}></input>
                </div>
                <div>
                    <button onClick={sendDetailsToServer}  hidden={state.loginVisibility}>register</button>
                </div>
                <div>
                    <button hidden={state.otpInputVisibility} onClick={sendmail}>Resend Otp</button>
                </div>
                <div>
                    <button hidden={state.otpInputVisibility} onClick={verifyOtp}>verify otp</button>
                </div>
                <div hidden={(state.loginVisibility)}>
                   Already registered ? <button onClick={handleLogReg}>login</button>
                </div>
            </div>
        : 
            <div>
                
                <div>
                    <input id="email" placeholder="username" value={state.email} onChange={handleChange} hidden={state.loginVisibility}></input>
                </div>
                <div>
                    <input id="password" placeholder="password" value={state.password} onChange={handleChange}  hidden={state.loginVisibility}></input>
                </div>
                <div>
                    <button onClick={fetchDetails} hidden={state.loginVisibility}>login</button>
                </div>
                <div hidden={(state.loginVisibility)}>
                    New User ? <button onClick={handleLogReg}> Register </button>
                </div>
            </div>
        }
        <button onClick={logout} hidden={!(state.loginVisibility)}> Logout </button>
    </div>
  )
};

export default Login;