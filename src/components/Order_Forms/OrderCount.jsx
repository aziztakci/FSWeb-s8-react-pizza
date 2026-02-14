import styled from "styled-components";

const DivCount = styled.div`
display:flex;
align-items: center;
@media (max-width: 768px) {
  flex-direction: column-reverse;

    }
`;

const ButtonCount1 = styled.button`
  width: 56px;
  height: 56px;
  border: none;
  background-color: #FDC913;
  border-radius: 6px 0 0 6px;
  font-size: 20px;
  font-family: 'Barlow', sans-serif;
  font-weight: bold;
@media (max-width: 768px) {
  width: 85px;
  height: 85px;
  border-radius:  0 0 6px 6px ;

    }

`;

const ButtonCount2 = styled.button`
  width: 56px;
  height: 56px;
  border: none;
  background-color: #FDC913;
  border-radius:  0 6px 6px 0;
  font-size: 20px;
  font-family: 'Barlow', sans-serif;
  font-weight: bold;

  @media (max-width: 768px) {
  width: 85px;
  height: 85px;
  border-radius:  6px 6px 0 0;

    }
`;

const DivText = styled.div`
border: 2px solid #d9d9d9;
font-size: 20px;
  font-family: 'Barlow', sans-serif;
  font-weight: bold;
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
  width: 85px;
  height: 85px;

    }
`;


export default function OrderCount (props) {
    const {decreaseNum,increaseNum,num}= props;
    return(
        
        <DivCount className="counter-container">
          <ButtonCount1 data-cy="decreaseCount" type="button" onClick={decreaseNum}>
            -
          </ButtonCount1>
          <DivText data-cy="countNum" className="count-display">{num}</DivText>
          <ButtonCount2 data-cy="increaseCount" type="button" onClick={increaseNum}>
            +
          </ButtonCount2>
        </DivCount>
    )
}