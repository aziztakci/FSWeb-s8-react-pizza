export default function CheckBox(props) {
  const { toppings, selectedToppings, handleTopChange } = props;

  return (
    <div className="checkbox-container">
      <h3>Ek Malzemeler</h3>
      <p>En az 4, en fazla 10 malzeme seçebilirsiniz. 5₺</p>
      {toppings.map((e) => {
        const isChecked = selectedToppings.includes(e.name);
        const limitReached = selectedToppings.length >= 10 && !isChecked;

        return (
          <label htmlFor={e.name} key={e.id}>
            <input
              id={e.name}
              name={e.name}
              type="checkbox"
              onChange={handleTopChange}
              checked={isChecked}
              disabled={limitReached}
            />
            {e.name}
          </label>
        );
      })}
    </div>
  );
}