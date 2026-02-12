import styled from "styled-components";
import FormInputs from "./Order_Forms/FormInputs";

const ButtonHome = styled.button`
  background: none;
  border: none;
  padding: 0;
  color: #000000;
  cursor: pointer;
  font-family: 'Barlow', sans-serif;;
  font-size: 16px;

  &:hover {
  background-color: #f38383;
  border-radius: 10px;
    text-decoration: underline;
  }
`

export default function OrderPage(props) {
  const { setActivePage } = props;
  return (
    <div className="order-page-container">
      <header className="order-header">
         <img src="/assets/iteration-1/logo.svg" alt="teknolojik-yemekler" />
         
           <nav className="page-buttons">
             <ButtonHome className="page-btn" onClick={() => setActivePage("home")}>
               Anasayfa
             </ButtonHome>
             <span className="page-seperator">-</span>
             <span className="page-active">Sipariş Oluştur</span>
           </nav>
         
      </header>

      <FormInputs />


    </div>
  );
}
