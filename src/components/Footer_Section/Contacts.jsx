const Contacts = (props) => {

  const {data1} = props;

  return (
    <div className="contact-items">
        {data1.map((obj)=>{
          return (
            <div key={obj.id} className="itemC">
              <img src={obj.imgUrl} alt={obj.alt}/>
              <p>{obj.iconText1}<br></br>{obj.iconText2}</p>
            </div>
          )
        })}
      </div>

  )
}

export default Contacts;
