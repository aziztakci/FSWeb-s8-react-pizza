export default function Header(props) {

  const {setActivePage} = props;
    return (
    <>
    
          <header className="main-section">
    <div className="main-content">
      <img src="/assets/iteration-1/logo.svg" alt="" />
      <div className="main-items">
        <p>fırsatı kaçırma</p>
        <h1>
          KOD ACIKTIRIR <br></br>
          PIZZA, DOYURUR
        </h1>
      </div>
    </div>
    <button className="btn" onClick={()=>setActivePage("order")}>ACIKTIM</button>
  </header>

    </>
    )
}