export default function Offers() {

    return (
        <>
         <section className="offers">
    <div className="offer-content">
      <div className="card-large">
        <div className="card-text">
          <h2>
            Özel<br></br>
            Lezzetus
          </h2>
          <p>Position:Absolute Acı Burger</p>
          <button className="btn2">SİPARİŞ VER</button>
        </div>
        <img src="/assets/images/pizza.svg" alt="" />
      </div>
      
      <div className="cards-right">
        <div className="card-top">
          <div className="card-text2">
            <h3>Hackathlon<br></br>Burger Menü</h3>
            <button className="btn2">SİPARİŞ VER</button>
          </div>
          <img src="/assets/images/menu.svg" alt="" />
        </div>
        <div className="card-bottom">
          <div className="card-text3">
            <h3>
              <span id="red-span">Çoooook</span> hızlı<br></br>npm gibi kurye
            </h3>
            <button className="btn3">SİPARİŞ VER</button>
          </div>
          <img src="/assets/images/courier.svg" alt="" />
        </div>
      </div>
    </div>
  </section>
        </>
    )
}