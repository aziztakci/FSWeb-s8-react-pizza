import mockDataCards from "../../Mock_Datas/mockDataCards";
import mockDataPizza from "../../Mock_Datas/mockDataPizza";
import BottomCards from "./BottomCards";
import BottomNav from "./BottomNav";

export default function Cards() {
  return (
    <>
      <section className="card-price">
        <div className="price-text">
          <p className="text">en çok paketlenen menüler</p>
          <h3>Acıktıran Kodlara Doyuran Lezzetler</h3>
        </div>
        <BottomNav mockDataCards={mockDataCards} />
        <BottomCards mockDataPizza={mockDataPizza} />
      </section>
    </>
  );
}
