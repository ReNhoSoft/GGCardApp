import { Link } from "react-router-dom";

export default function LoginPage() {
    return (
      <div>
        <form style={{width:"30rem", margin:"auto"}}>
          <div style={{display:"flex"}}>
            <label style={{width:"8rem"}}>Username</label>
            <input type="email"></input>
          </div>
          <div style={{display:"flex"}}>
            <label style={{width:"8rem"}}>Password</label>
            <input type="password"></input>
          </div>
          <div style={{display:"flex"}}>
            <div style={{margin:"auto"}}></div>
            <button>Login</button>
            <Link to="/">Cancel</Link>
          </div>
        </form>
      </div>
    ); 
}