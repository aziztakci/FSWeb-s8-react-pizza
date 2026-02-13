import styled from "styled-components";

const Title = styled.h2`
font-size: 20px;
font-family: 'Barlow', sans-serif;
font-weight: bold;
margin-bottom: 19px;
`;

const SelectStyled = styled.select`
width: 100%;           
  min-width: 260px;     
  max-width: 300px;     
  height: 56px;
 background-color: #faf7f2 !important;
 color: #5f5f5f;
 font-size: 14px;
font-family: 'Barlow', sans-serif;
padding-left: 20px;
border: none;
border-radius: 5px;


`

export default function SelectButton(props) {
  const {selectedDough,handleChange } = props;
return (
    <section className="order-select-btn">
      <Title>Hamur Seç <span style={{color: "red"}}> *</span></Title>
      <SelectStyled 
        defaultValue="" 
        name="dough" 
        onChange={handleChange}
        data-cy="dough-select" 
      >
        <option value="" disabled hidden>-Hamur Kalınlığı-</option>
        <option value="İnce" data-cy="dough-option-ince">İnce Hamur</option>
        <option value="Standart" data-cy="dough-option-standart">Standart</option>
        <option value="Kalın" data-cy="dough-option-kalin">Kalın Hamur</option>
      </SelectStyled>
      
      {!selectedDough && (
        <p style={{color: 'red' ,fontSize: "14px", fontFamily: "roboto", fontWeight:"500"}} data-cy="dough-error-message">
          Lütfen hamur tipi seçiniz.
        </p>
      )}
    </section>
  );
}