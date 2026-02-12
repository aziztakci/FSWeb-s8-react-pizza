import { useEffect, useState } from "react";
import axios from "axios";
import CheckBox from "./CheckBox";
import SelectButton from "./SelectButton";
import OrderInfo from "./OrderInfo";
import RadioButtons from "./RadioButtons";
import OrderTextarea from "./OrderTextarea";
import OrderCount from "./OrderCount";
import SummaryBox from "./SummaryBox";

export default function FormInputs() {
  const [toppings, setToppings] = useState([]);
  const [formData, setFormData] = useState({
    size: "",
    dough: "",
    note: "",
    num: 1,
    selectedToppings: [],
  });

  useEffect(() => {
    axios
      .get("/mockToppings.json")
      .then((res) => setToppings(res.data))
      .catch((err) => console.error(err));
  }, []);

  const handleChange = (event) => {
    const { name, type, value, checked } = event.target;

    if (type === "checkbox") {
      if (checked) {
        if (formData.selectedToppings.length < 10) {
          setFormData({
            ...formData,
            selectedToppings: [...formData.selectedToppings, name],
          });
        }
      } else {
        setFormData({
          ...formData,
          selectedToppings: formData.selectedToppings.filter(
            (item) => item !== name,
          ),
        });
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const isFormInvalid =
    formData.selectedToppings.length < 4 ||
    formData.selectedToppings.length > 10 ||
    !formData.size ||
    !formData.dough;

  const increaseNum = () => {
    setFormData({ ...formData, num: formData.num + 1 });
  };

  const decreaseNum = () => {
    if (formData.num > 1) {
      setFormData({ ...formData, num: formData.num - 1 });
    }
  };
  const toppingsPrice = formData.selectedToppings.length * 5;
  const finalTotal = (85.5 + toppingsPrice) * formData.num;

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <OrderInfo />

      <RadioButtons handleChange={handleChange} selectedSize={formData.size} />

      <SelectButton handleChange={handleChange} />

      <CheckBox
        toppings={toppings}
        selectedToppings={formData.selectedToppings}
        handleTopChange={handleChange}
      />
      {formData.selectedToppings.length < 4 && (
        <p style={{ color: "red" }}>En az 4 malzeme seçiniz.</p>
      )}

      <OrderTextarea note={formData.note} handleChange={handleChange} />
      <br />
      <br />
      <hr />

      <div className="order-footer">
        <OrderCount
          increaseNum={increaseNum}
          decreaseNum={decreaseNum}
          num={formData.num}
        />

        <SummaryBox
          toppingsPrice={toppingsPrice}
          finalTotal={finalTotal}
          isFormInvalid={isFormInvalid}
        />
      </div>
    </form>
  );
}
