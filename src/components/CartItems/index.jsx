import { useCart } from '../../hooks/CartContext'
import { formatCurrency } from '../../utils/formatCurrency';
import { Table } from '../index';
import { ButtonGroup, EmptyCart, ProductImage, ProductTotalPrice, TrashImage } from './styles';
import TrashIcon from '../../assets/trash.svg'

export function CartItems() {
    const { cartProducts, decreaseProduct, increaseProduct, deleteProduct } = useCart()
    return (
        <Table.Root>
            <Table.Header>
                <Table.Tr>
                    <Table.Th></Table.Th>
                    <Table.Th>Itens</Table.Th>
                    <Table.Th>Preco</Table.Th>
                    <Table.Th>Quantidade</Table.Th>
                    <Table.Th>Total</Table.Th>
                    <Table.Th></Table.Th>
                </Table.Tr>
            </Table.Header>
            <Table.Body>
                {cartProducts?.length ? (
                    cartProducts.map((Product) => (
                        <Table.Tr key={Product.id}>
                            <Table.Td>
                                <ProductImage src={Product.url} />
                            </Table.Td>
                            <Table.Td>{Product.name}</Table.Td>
                            <Table.Td>{Product.currencyValue}</Table.Td>
                            <Table.Td>
                                <ButtonGroup>
                                    <button onClick={() => decreaseProduct(Product.id)}>-</button>
                                    {Product.quantity}
                                    <button onClick={() => increaseProduct(Product.id)}>+</button>
                                </ButtonGroup>
                               
                            </Table.Td>
                            <Table.Td>
                                <ProductTotalPrice>
                                  {formatCurrency(Product.quantity * Product.price)}
                                </ProductTotalPrice>
                            </Table.Td>
                            <Table.Td>
                                <TrashImage
                                src={TrashIcon} 
                                alt="lixeira" 
                                onClick={() => deleteProduct(Product.id)}/>
                            </Table.Td>
                        </Table.Tr>
                        
                    ))
                ) : (
                    <EmptyCart>Carrinho vazio</EmptyCart>
                    )}
            </Table.Body>
        </Table.Root>
    )
}