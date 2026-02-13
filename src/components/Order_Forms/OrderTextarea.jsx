import styled from "styled-components";

const DivWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

const Label = styled.label`
  font-size: 18px;
  font-family: 'Barlow', sans-serif;
  font-weight: bold;
  margin-bottom: 10px;
  color: #292929;
`;

const TextareaStyled = styled.textarea`
  width: 100%;
  min-height: 56px; 
  padding: 15px;
  border: none;
  border-radius: 10px;
  background-color: #faf7f2; 
  font-family: 'Barlow', sans-serif;
  font-size: 14px;
  resize: none; 
  margin-bottom: 30px;
  
  &::placeholder {
  font-size: 14px;
  font-family: 'Barlow', sans-serif;
  font-weight: 600;
    color: #5f5f5f;
    padding-top: 3px;
  }
`;

export default function OrderTextarea(props) {
  const { note, handleChange } = props;
  
  return (
    <>
    <DivWrapper>
      <Label htmlFor="note">Sipariş Notu</Label>
      <TextareaStyled
      data-cy="noteArea"
        id="note"
        name="note"
        value={note}
        onChange={handleChange}
        placeholder="Siparişine eklemek istediğin bir not var mı?"
      />
    </DivWrapper>
    <hr />
    </>
  );
}