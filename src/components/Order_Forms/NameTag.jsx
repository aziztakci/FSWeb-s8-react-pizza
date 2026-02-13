import styled from "styled-components";

const LabelName = styled.label`
font-size: 18px;
  font-family: 'Barlow', sans-serif;
  font-weight: bold;
  margin-bottom: 10px;
  color: #292929;
`
const InputArea = styled.input`
background-color: #faf7f2; 
  font-family: 'Barlow', sans-serif;
  font-size: 14px;
  resize: none; 
  border: none;
  width: 250px;
  height: 40px;
  border-radius: 10px;
  

   &::placeholder {
  font-size: 14px;
  font-family: 'Barlow', sans-serif;
  font-weight: 600;
    color: #5f5f5f;
    padding-top: 3px;
    padding-left: 15px;
`


export default function NameTag (props) {
    const {name,handleChange} = props;

    return (
        <LabelName htmlFor="name">Ad-Soyad <span style={{color: "red"}}> *</span><br />
            <InputArea id="name" type="text" name="name" value={name} onChange={handleChange} placeholder="Ad-soyad*"/>
            
        </LabelName>
    )
}