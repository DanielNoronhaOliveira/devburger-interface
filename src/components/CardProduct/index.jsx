import PropTypes from 'prop-types'
import { Container, Image, ProductName, ProductPrice } from './styles'
import { Button } from '../Button'

function CardProduct({ product }) {
    return (
        <Container>
            <Image src={product.url} alt='imagem do produto'/>
          <div>
            <ProductName>{product.name}</ProductName>
            <ProductPrice>{product.formatedPrice}</ProductPrice>
            <Button>Adicionar</Button>
          </div>
        </Container>
    )
}

export default CardProduct

CardProduct.prototype = {
    product: PropTypes.object,
};