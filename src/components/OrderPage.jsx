import styled from "styled-components";
import FormInputs from "./Order_Forms/FormInputs";
import OrderHeader from "./Order_Forms/OrderHeader";

const DivBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;
`;

export default function OrderPage(props) {
  const { setActivePage,initialFormData,formData,setFormData } = props;
  return (
    <DivBox className="order-page-container">
      <OrderHeader  />
      <FormInputs setActivePage={setActivePage} setFormData={setFormData} initialFormData= {initialFormData} formData={formData}/>
    </DivBox>
  );
}
