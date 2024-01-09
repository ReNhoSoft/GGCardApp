export default function Header({onClickAdd}) {
  return (
    <div style={{display:"flex", alignItems:"center", width:"var(--width-lg)", margin:"auto"}}>
      <div style={{width:"100%"}}>
        <h1 style={{ textAlign: "center" }}>Neutral Tech</h1>
        <h6 style={{ textAlign: "center", marginTop: "-1.5rem" }}>
          a fighting game tech database
        </h6>
      </div>
      <div style={{marginRight:"5rem"}}>
        <button onClick={onClickAdd}>+ ADD</button>
      </div>
    </div>
  );
}
