/*eslint-disable react/prop-types*/
import PropTypes from 'prop-types'
import { useCart } from '../../hooks/CartContext'

import { Container, CardImage } from './styles'

import {formatCurrency} from '../../utils/formatCurrency'
import { CartButton } from '../CartButton';




export function CardProduct({ product }) {
  const { putProductInCart } = useCart()
  
  return (
    <Container>
      <CardImage src={product.url} alt={product.name} />
      <div>
        <p>{product.name}</p>
        <strong>{formatCurrency(product.price)}</strong> 
      </div>
      <CartButton onClick={() => putProductInCart(product)}></CartButton>
    </Container>
  )
}



CardProduct.propTypes = {
  product: PropTypes.object,
};

