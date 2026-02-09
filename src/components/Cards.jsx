export default function Cards () {

    return(
        <>
        <section className="card-price">
    <div className="price-text">
      <p className="text">en çok paketlenen menüler</p>
      <h3>Acıktıran Kodlara Doyuran Lezzetler</h3>
    </div>
    <nav className="nav-container">
      <button className="nav-button">
        <img src="/assets/icons/kore.svg" alt="" />Ramen
      </button>
      <button className="nav-button-active">
        <img src="/assets/icons/pizza.svg" alt="" />Pizza
      </button>
      <button className="nav-button">
        <img src="/assets/icons/burger.svg" alt="" />Burger
      </button>
      <button className="nav-button">
        <img src="/assets/icons/chips.svg" alt="" />French fries
      </button>
      <button className="nav-button">
        <img src="/assets/icons/fast-food.svg" alt="" />Fast food
      </button>
      <button className="nav-button">
        <img src="/assets/icons/soda.svg" alt="" />Soft drinks
      </button>
    </nav>
    <div className="card-items">
      <div className="item">
        <img src="/assets/images/pizza1.svg" alt="pizza" />
        <h3>Terminal Pizza</h3>
        <div className="alt-metin">
          <div className="deger">
            <p>4.9</p>
            <p>(200)</p>
          </div>
          <p className="price">60₺</p>
        </div>
      </div>
      <div className="item">
        <img src="/assets/images/pizza2.svg" alt="pizza" />
        <h3>Position Absolute Acı Pizza</h3>
        <div className="alt-metin">
          <div className="deger">
            <p>4.9</p>
            <p>(200)</p>
          </div>
          <p className="price">60₺</p>
        </div>
      </div>
      <div className="item">
        <img src="/assets/images/burger1.svg" alt="burger" />
        <h3>useEffect Tavuklu Burger</h3>
        <div className="alt-metin">
          <div className="deger">
            <p>4.9</p>
            <p>(200)</p>
          </div>
          <p className="price">60₺</p>
        </div>
      </div>
    </div>
  </section>
        </>
    )
}