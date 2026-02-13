const CardTop = (props) => {
const {setActivePage} = props;
    return (
        <div className="card-top">
              <div className="card-text2">
                <h3>
                  Hackathlon<br></br>Burger Menü
                </h3>
                <button className="btn2" onClick={()=>setActivePage("order")}>SİPARİŞ VER</button>
              </div>
              <img src="/assets/images/menu.svg" alt="" />
            </div>
    )
}

export default CardTop;

            