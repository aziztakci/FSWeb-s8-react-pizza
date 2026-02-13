const CardBottom = (props) => {
  const {setActivePage} = props;
    return (
        <div className="card-bottom">
              <div className="card-text3">
                <h3>
                  <span id="red-span">Çoooook</span> hızlı<br></br>npm gibi
                  kurye
                </h3>
                <button className="btn3" onClick={()=>setActivePage("order")}>SİPARİŞ VER</button>
              </div>
              <img src="/assets/images/courier.svg" alt="" />
            </div>
    )
}

export default CardBottom;