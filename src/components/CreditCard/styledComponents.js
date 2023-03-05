// Style your elements here
import styled from 'styled-components'

export const MainContainer = styled.div`
  min-height: 100vh;
  display: flex;
  @media screen and (max-width: 576px) {
    flex-direction: column;
    justify-content: space-around;
  }
`
export const SubContainer1 = styled.div`
  background-color: #3b4b69;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50vw;
  @media screen and (max-width: 576px) {
    width: 100vw;
  }
`
export const SubContainer2 = styled.div`
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50vw;
  @media screen and (max-width: 576px) {
    width: 100vw;
  }
`

export const MainHeading = styled.h1`
  color: #ffffff;
  font-size: 25px;
  font-family: 'Roboto';
`

export const HorizontalLine = styled.hr`
  color: #ffd773;
  size: 10px;
  width: 30%;
`

export const Card = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/hooks/credit-card-bg.png');
  border: none;
  border-radius: 8px;
  width: 70%;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const Paragraph = styled.p`
  color: #ffffff;
  font-size: 20px;
  font-family: 'Roboto';
  padding-left: 30px;
  padding-top: 15px;
`

export const NameHeading = styled.p`
  color: #c3cad9;
  font-size: 15px;
  font-family: 'Roboto';
  padding-left: 30px;
  padding-top: 20px;
`

export const PaymentCard = styled.div`
  background-color: #ffffff;
  width: 70%;
  height: 270px;
  border: none;
  border-radius: 8px;
  box-shadow: 1px 1px 1px 1px #475569;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`

export const PaymentCardHeading = styled.h1`
  color: #475569;
  font-size: 20px;
  font-family: 'Roboto';
`

export const Input = styled.input`
  border-style: solid;
  border-width: 1px;
  border-radius: 4px;
  border-color: #475569;
  background-color: transparent;
  padding: 8px;
  outline: none;
  width: 80%;
`
