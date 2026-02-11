const BottomCards = (props) => {
    const {mockDataPizza} = props;

    return (
        <div className="card-items">
          {mockDataPizza.map((o) => {
            return (
              <div key={o.id} className="item">
                <img src={o.imgUrl} alt={o.alt} />
                <h3>{o.titleText}</h3>
                <div className="alt-metin">
                  <div className="deger">
                    <p>{o.rating}</p>
                    <p>{o.rateCount}</p>
                  </div>
                  <p className="price">{o.price}</p>
                </div>
              </div>
            );
          })}
        </div>
    )
}

export default BottomCards;
