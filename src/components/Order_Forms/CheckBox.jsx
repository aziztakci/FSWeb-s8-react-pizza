import styled from "styled-components";

const Title = styled.h2`
  font-size: 20px;
  font-family: 'Barlow', sans-serif;
  font-weight: bold;
  margin-bottom: 19px;
`;

const PInfo = styled.p`
  font-size: 16px;
  font-family: 'Barlow', sans-serif;
  color: #5f5f5f;
  font-weight: 500;
`;


const CheckboxWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px 0; 
`;

const LabelCheck = styled.label`
  display: flex; 
  align-items: center; 
  width: 33.3%;
  color: #5f5f5f;
  font-size: 16px;
  font-family: 'Barlow', sans-serif;
  font-weight: bold;
  cursor: pointer;
  opacity: ${props => props.disabled ? 0.5 : 1};
`;

const InputBtn = styled.div`
  width: 45px;
  height: 45px;
  border-radius: 10px;
  background-color: ${props => props.checked ? '#FDC913' : '#faf7f2'};
  margin-right: 12px; 
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0; 
  font-size: 20px; 
  font-family: 'Barlow', sans-serif;
  font-weight: 900; 
  color: #464545;
  
`;

export default function CheckBox(props) {
  const { toppings, selectedToppings, handleTopChange } = props;

  return (
    <div className="checkbox-container">
      <Title>Ek Malzemeler</Title>
      <PInfo>En az 4, en fazla 10 malzeme seçebilirsiniz. 5₺</PInfo>
      
      <CheckboxWrapper>
        {toppings.map((e) => {
          const isChecked = selectedToppings.includes(e.name);
          const limitReached = selectedToppings.length >= 10 && !isChecked;

          return (
            <LabelCheck htmlFor={e.name} key={e.id} data-cy={`label-${e.id}`} disabled={limitReached}>
              <input
                style={{ display: "none" }} 
                id={e.name}
                name={e.name}
                type="checkbox"
                onChange={handleTopChange}
                checked={isChecked}
                data-cy={`topping-${e.id}`}
                disabled={limitReached}
                
              />
              <InputBtn checked={isChecked}>
                {isChecked && "✓"}
              </InputBtn>
              {e.name}
            </LabelCheck>
          );
        })}
      </CheckboxWrapper>
    </div>
  );
}