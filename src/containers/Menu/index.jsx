

import { useEffect, useState } from 'react'
import api from '../../services/api'
import { Container, Banner, CategoryMenu, ProductContainer, CategoryButton } from './styles'
import { formatCurrency } from '../../utils/formatCurrency'
import { CardProduct } from '../../components/CardProduct'
import { useNavigate } from 'react-router-dom'

export function Menu() {
    const [categories, setCategories] = useState([])
    const [products, setProducts] = useState([])
    const [filteredproducts, setFilteredproducts] = useState([])
    const [activeCategory, setActiveCategory] = useState(0)

    const navigate = useNavigate()

    useEffect(() => {
        async function loadCategories() {
            const { data } = await api.get('/categories')

            const newCategories = [{ id: 0, name: 'Todas' }, ...data];

            setCategories(newCategories)

        }

        async function loadProducts() {
            const { data } = await api.get('/products')

            const newProducts = data.map((product) => ({
                currencyValue: formatCurrency(product.price),
                ...product,
            }))

            setProducts(newProducts)

        }
        loadCategories();

        loadProducts();


    }, []);

    useEffect(() => {
        if (activeCategory === 0) {
            setFilteredproducts(products)
        } else {
            const newFilteredProducts = products.filter(
                (product) => product.category_id === activeCategory,
            )
            setFilteredproducts(newFilteredProducts)
        }
    }, [products, activeCategory])

    return (
        <Container>
            <Banner>
                <h1>
                    O MELHOR
                    <br />
                    HAMBURGER
                    <br />
                    ESTA AQUI!
                    <span>Esse cardapio estar irresistivel!</span>
                </h1>

            </Banner>
            <CategoryMenu>
                {categories.map((category) => (
                    <CategoryButton
                        key={category.id}
                        $isActiveCategory={category.id === activeCategory}
                        onClick={() => {
                            navigate(
                                {
                                    pathname: '/cardapio',
                                    search: `?categoria=${category.id}`,
                                },
                                {
                                    replace: true,
                                },
                            )
                            setActiveCategory(category.id)
                        }}
                    >{category.name}</CategoryButton>
                ))}
            </CategoryMenu>

            <ProductContainer>
                {filteredproducts.map((product) => (
                    <CardProduct product={product} key={product.id} />
                ))}
            </ProductContainer>
        </Container>
    )
}

