import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser, updatePassword } from "../helpers/apiRequestHelper";
import Header from "../Header";

export default function LoginPage() {
  const formRef = useRef();
  const navigate = useNavigate();
  const [newPasswordData, setNewPasswordData] = useState(null);

  const onSubmit = async (event) => {
    event.preventDefault();
    const { username, password } = formRef?.current?.elements;
    let loginResult;
    if(!newPasswordData) {
      console.log("login")
      loginResult = await loginUser(username.value, password.value);
    } else {
      console.log("update")
      loginResult = await updatePassword(newPasswordData.user, password.value, newPasswordData.session);
    }
    if (loginResult.message == "Authenticated") {
      navigate("/");
    } else if (loginResult.message == "newPasswordRequired") {
      setNewPasswordData({user: username.value, session: loginResult.Session});
    }
  };

  return (
    <>
      <Header showSearchBar={false} />

      <main>
        {newPasswordData && <h3>Please enter a new password</h3> }
        <form style={{ width: "30rem", margin: "auto" }} ref={formRef}>
          {!newPasswordData && <div style={{ display: "flex" }}>
            <label style={{ width: "8rem" }}>Username</label>
            <input type="email" name="username"></input>
          </div> }
          <div style={{ display: "flex" }}>
            <label style={{ width: "8rem" }}>{newPasswordData ? "New Password" : "Password"}</label>
            <input type="password" name="password"></input>
          </div>
          <div style={{ display: "flex" }}>
            <div style={{ margin: "auto" }}></div>
            <button onClick={onSubmit}>Login</button>
            <Link to="/">Cancel</Link>
          </div>
        </form>
      </main>
    </>
  );
}
