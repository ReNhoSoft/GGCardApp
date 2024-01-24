import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../helpers/apiRequestHelper";

export default function LoginPage() {
  const formRef = useRef()
  const navigate = useNavigate()
    const onSubmit = async (event) => {
      event.preventDefault();
      console.log
      const { username, password } = formRef?.current?.elements;
      const loginResult = await loginUser(username.value, password.value);
      console.log(loginResult);
      if(loginResult.message == "Authenticated") {
        navigate("/");
      }
    }

    return (
      <div>
        <form style={{width:"30rem", margin:"auto"}} ref={formRef}>
          <div style={{display:"flex"}}>
            <label style={{width:"8rem"}}>Username</label>
            <input type="email" name="username"></input>
          </div>
          <div style={{display:"flex"}}>
            <label style={{width:"8rem"}}>Password</label>
            <input type="password" name="password"></input>
          </div>
          <div style={{display:"flex"}}>
            <div style={{margin:"auto"}}></div>
            <button onClick={onSubmit}>Login</button>
            <Link to="/">Cancel</Link>
          </div>
        </form>
      </div>
    ); 
}