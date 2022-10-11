import styled from "styled-components"

const Estate = ({ estate }) => {
  return (
    <EstateContainer>
      <img 
        src={estate.media} 
        alt="" />
      
      <EstateInfo>
        <h3>{estate.suburb}</h3>
        <h4>{estate.property_category}</h4>
        <h5>€ {estate.price}</h5>
      </EstateInfo> 
    </EstateContainer>
  )
}

export default Estate

const EstateContainer = styled.div`
  width: 30%;
  display: flex;
  align-items: center;
  border: 1px solid #185CAC;
  border-radius: 10px;
  margin: 20px 0;
  transition: 0.5s;

  :hover {
    background-color: #185CAC;
  }

  @media only screen and (max-width: 600px) {
    width: 100%;
    margin: 0 20px;
  }

  > img {
    width: 50%;
    margin: 20px;
    border-radius: 10px;
  }
`

const EstateInfo = styled.div`
  width: 50%;
  color: white;
  text-align: center;
  margin-right: 20px;  
  border-radius: 10px;  
`