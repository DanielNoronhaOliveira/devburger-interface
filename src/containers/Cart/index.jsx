
import CartLogo from '../../assets/logo.png'
import { CartItems } from '../../components'
import { Container, CartImg } from './styles'

export function Cart(){

    return (
        <Container>
            <CartImg src={CartLogo} alt="logo do carrinho" />
           <CartItems />
        </Container>
    )
}

