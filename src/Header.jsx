import { Link, useNavigate, useRouteLoaderData } from "react-router-dom";
import SearchBar from "./tableLayout/searchBar/SearchBar";

export default function Header({ onClickAdd }) {
  const token = useRouteLoaderData('root');
  const navigate = useNavigate();
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        width: "var(--width-lg)",
        margin: "auto",
      }}
    >
      <div style={{ width: "auto", display: "flex", cursor:"pointer" }} onClick={() => {navigate('/')}}>
        <div style={{ marginTop: "auto", marginBottom: "auto", marginLeft:"1rem" }}>
          <img style={{ height: "4rem" }} src="/NeutralTech_Logo.png" />
        </div>
        <div>
          <h2 style={{ textAlign: "center" }}>Neutral Tech</h2>
          <h6
            style={{
              textAlign: "center",
              marginTop: "-1.5rem",
              fontSize: "xx-small",
            }}
          >
            a fighting game tech database{" "}
            <label style={{ color: "red", fontSize: "xx-small" }}>beta</label>
          </h6>
        </div>
      </div>
      <div style={{margin:"auto"}}>
        <SearchBar /> 

      </div>
      <div style={{whiteSpace:"nowrap"}}>
        {token.isValid() && <button onClick={onClickAdd}>+ ADD</button> }
        {!token.isValid() && <Link to="/login">Login</Link>}
      </div>
    </div>
  );
}
