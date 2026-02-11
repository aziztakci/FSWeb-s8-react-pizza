import CardBottom from "./CardBottom";
import CardLarge from "./CardLarge";
import CardTop from "./CardTop";

export default function Offers() {
  return (
    <>
      <section className="offers">
        <div className="offer-content">
          <CardLarge />
          
          <div className="cards-right">
            <CardTop />
            <CardBottom />
            
          </div>
        </div>
      </section>
    </>
  );
}
