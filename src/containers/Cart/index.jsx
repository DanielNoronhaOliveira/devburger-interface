
import Logo from '../../assets/Cart-Img.png'
import { CartItems, CartResume } from '../../components'

import { Container, Banner, Title, Content } from './styles'

export function Cart() {

    return (
        <Container>
           
            <Banner>
            <img src={Logo} alt='logo-devbuger' /> 
            </Banner>
            <Title>Checkout - Pedidos</Title>
            <Content>
              <CartItems/>
              <CartResume/>
            </Content>
        </Container>
    )
}

