import { useEffect, useState } from "react";
import axios from "axios";
import CheckBox from "./CheckBox";
import SelectButton from "./SelectButton";
import OrderInfo from "./OrderInfo";
import RadioButtons from "./RadioButtons";
import OrderTextarea from "./OrderTextarea";
import OrderCount from "./OrderCount";
import SummaryBox from "./SummaryBox";
import styled from "styled-components";
import NameTag from "./NameTag";

const FormArea = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const SectionBg = styled.section`
  background-color: #ffffff !important;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const ContentSizer = styled.div`
  max-width: 532px;
  min-width: 532px;
  display: flex;
  flex-direction: column;
  margin: 0 auto 20px;
`;

const DivSelection = styled.div`
margin: 40px 0;
  display: flex;
  justify-content: space-between;
`;

const DivSummary = styled.div`
display: flex;
justify-content: space-between;
margin-top: 30px;
align-items: flex-start;
`;


export default function FormInputs(props) {
  const { setActivePage,initialFormData,setFormData,formData } = props;

  const [errors,setErrors] = useState({
    name:""
  })

 
  const [toppings, setToppings] = useState([]);
  

  const isNameValid = () => {
    let valid = false;
    const errorMessage = {};
    if (formData.name.trim() === "") {
      valid = true;
      errorMessage.name = "Adınızı Giriniz!";
    } setErrors(errorMessage);
    return valid;
  }

   const isFormInvalid =
    formData.selectedToppings.length < 4 ||
    formData.selectedToppings.length > 10 ||
    !formData.size ||
    !formData.dough;

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!isNameValid() && !isFormInvalid) {
      setFormData(initialFormData);
      setErrors({name:""});
    }else {
      console.error("Hatalı ya da eksik form bilgileri girildi.")
    }
  }


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
            (item) => item !== name
          ),
        });
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

 

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
    <FormArea onSubmit={handleSubmit}>
      <ContentSizer>
        <OrderInfo setActivePage={setActivePage} />
      </ContentSizer>

      <SectionBg>
        <ContentSizer>
          <DivSelection>
            <RadioButtons
              handleChange={handleChange}
              selectedSize={formData.size}
            />
            <SelectButton handleChange={handleChange} selectedDough={formData.dough}/>
          </DivSelection>

          <CheckBox
            toppings={toppings}
            selectedToppings={formData.selectedToppings}
            handleTopChange={handleChange}
          />

          {formData.selectedToppings.length < 4 && (
            <p style={{ color: "red", fontWeight: "bold" }}>
              En az 4 malzeme seçiniz.
            </p>
          )}

          <NameTag name={formData.name} handleChange={handleChange} errors={errors}/>

          <OrderTextarea note={formData.note} handleChange={handleChange} />
          
          

          <DivSummary className="order-footer">
            <OrderCount
              increaseNum={increaseNum}
              decreaseNum={decreaseNum}
              num={formData.num}
            />

            <SummaryBox 
              isNameValid={isNameValid}
              toppingsPrice={toppingsPrice}
              finalTotal={finalTotal}
              isFormInvalid={isFormInvalid}
            />
          </DivSummary>
        </ContentSizer>
      </SectionBg>
    </FormArea>
  );
}