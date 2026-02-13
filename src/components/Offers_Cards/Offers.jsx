import CardBottom from "./CardBottom";
import CardLarge from "./CardLarge";
import CardTop from "./CardTop";

export default function Offers(props) {
  const {setActivePage} = props;
  return (
    <>
      <section className="offers">
        <div className="offer-content">
          <CardLarge setActivePage={setActivePage}/>
          
          <div className="cards-right">
            <CardTop setActivePage={setActivePage}/>
            <CardBottom setActivePage={setActivePage}/>
            
          </div>
        </div>
      </section>
    </>
  );
}
