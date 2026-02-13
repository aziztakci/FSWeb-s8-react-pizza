import styled from "styled-components";

const DivContainer = styled.div`
  width: 350px;
  height: 197px;
  display: flex;
  flex-direction: column;
  border: 1px solid #d9d9d9;
  padding: 48.45px;
  border-radius: 6px 6px 0 0 ;
  background-color: #faf7f2;
`;

const Title = styled.h3`
font-size: 20px;
  font-family: 'Barlow', sans-serif;
  font-weight: bold;
`

const DivRow = styled.div`
display: flex;
justify-content: space-between;
margin-top: 10px;
font-size: 18px;
  font-family: 'Barlow', sans-serif;
  font-weight: bold;
  color: #5f5f5f;
`
const ButtonSummary = styled.button`
  width: 100%;
  height: 62px;
  border: none;
  background-color: #fdc913;
  border-radius: 0 0 6px 6px;
  color: #292929;
  font-size: 18px;
  font-family: 'Barlow', sans-serif;
  font-weight: bold;
`



export default function SummaryBox (props) {

    const {toppingsPrice,finalTotal,isFormInvalid}=props;

    return (
        <div>
        <DivContainer className="summary-box">
          <Title>Sipariş Toplamı</Title>

          <DivRow className="summary-row">
            <span>Seçimler</span>
            <span>{toppingsPrice.toFixed(2)}₺</span>
          </DivRow>

          <DivRow className="summary-row total" style={{color: "#ce2829"}}>
            <span>Toplam</span>
            <span>{finalTotal.toFixed(2)}₺</span>
          </DivRow>

         
        </DivContainer>
         <ButtonSummary
            type="submit"
            disabled={isFormInvalid}
            className="submit-button"
          >
            SİPARİŞ VER
          </ButtonSummary>
          </div>
    )
}