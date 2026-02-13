import styled from "styled-components";



const HeaderThin = styled.header`
  background-color: #ce2829;
  display: flex;           
  flex-direction: column; 
  align-items: center;     
  justify-content: center; 
  padding: 60px 0 40px;        
  width: 100%;            

`;

export default function OrderHeader () {
 
    return (
      <HeaderThin className="order-header">
         <img src="/assets/iteration-1/logo.svg" alt="teknolojik-yemekler" />
      </HeaderThin>
    )
}