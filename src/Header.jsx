export default function Header({onClickAdd}) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        width: "var(--width-lg)",
        margin: "auto",
      }}
    >
      <div style={{ width: "100%", display:"flex"}}>
        <div style={{marginLeft:"auto"}}>
          <h1 style={{ textAlign: "center" }}>Neutral Tech</h1>
          <h6 style={{ textAlign: "center", marginTop: "-1.5rem" }}>
            a fighting game tech database <label style={{color:"red", fontSize:"xx-small"}}>v0.4a</label>
          </h6>
        </div>
        <div style={{marginRight:"auto"}}>
          <img style={{ height: "5rem" }} src="/NeutralTech_Logo.png" />
        </div>
      </div>
      <div style={{ marginRight: "5rem" }}>
        <button onClick={onClickAdd}>+ ADD</button>
      </div>
    </div>
  );
}
