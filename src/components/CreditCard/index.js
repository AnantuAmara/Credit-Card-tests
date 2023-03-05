// Write your code here
import {useState} from 'react'
import {
  MainContainer,
  SubContainer1,
  SubContainer2,
  MainHeading,
  HorizontalLine,
  Card,
  Paragraph,
  NameHeading,
  PaymentCard,
  PaymentCardHeading,
  Input,
} from './styledComponents'

const CreditCard = () => {
  const [number, setNumber] = useState('')
  const [name, setName] = useState('')

  const Name = name.toUpperCase()

  const onChangeNumber = event => setNumber(event.target.value)
  const onChangeName = event => setName(event.target.value)
  return (
    <MainContainer>
      <SubContainer1>
        <MainHeading>CREDIT CARD</MainHeading>
        <HorizontalLine />
        <Card data-testid="creditCard">
          <Paragraph>{number}</Paragraph>
          <NameHeading>CARDHOLDER NAME</NameHeading>
          <Paragraph>{Name}</Paragraph>
        </Card>
      </SubContainer1>
      <SubContainer2>
        <PaymentCard>
          <PaymentCardHeading>Payment Method</PaymentCardHeading>
          <Input
            type="text"
            placeholder="Card Number"
            value={number}
            onChange={onChangeNumber}
          />
          <Input
            type="text"
            placeholder="Cardholder Name"
            value={name}
            onChange={onChangeName}
          />
        </PaymentCard>
      </SubContainer2>
    </MainContainer>
  )
}

export default CreditCard
