export default function RadioButtons({ handleChange, selectedSize }) {
  return (
    <section className="order-radio-btn">
      <h2>Boyut Seç</h2>
      <label>
        <input type="radio" name="size" value="Küçük" onChange={handleChange} checked={selectedSize === "Küçük"} /> Küçük
      </label><br />
      <label>
        <input type="radio" name="size" value="Standart" onChange={handleChange} checked={selectedSize === "Standart"} /> Standart
      </label><br />
      <label>
        <input type="radio" name="size" value="Büyük" onChange={handleChange} checked={selectedSize === "Büyük"} /> Büyük
      </label>
    </section>
  );
}