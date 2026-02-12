export default function OrderTextarea(props) {
    const {note,handleChange} = props;
  return (
  <div className="order-note">
  <label htmlFor="note">Sipariş Notu</label><br />
  <input 
    id="note"
    name="note" 
    type="text" 
    value={note}
    onChange={handleChange} 
    placeholder="Siparişine eklemek istediğin bir not var mı?"
  />
</div>
  );
}
