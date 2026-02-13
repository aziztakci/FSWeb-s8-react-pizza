const CardLarge = (props) => {
const {setActivePage} = props;
    return (

       <div className="card-large">
            <div className="card-text">
              <h2>
                Özel<br></br>
                Lezzetus
              </h2>
              <p>Position:Absolute Acı Burger</p>
              <button data-cy="btnCardLarge" className="btn2" onClick={()=>setActivePage("order")}>SİPARİŞ VER</button>
            </div>
            <img src="/assets/images/pizza.svg" alt="" />
          </div> 
    )

}
export default CardLarge;
