
import { useEffect, useState } from 'react'
import ProductsLogo from '../../assets/products-log.png'
import CardProduct from '../../components/CardProduct'
import formatCurrency from '../../utils/formatCurrency'
import api from '../../services/api'
import { Container, ProductsImg, CategoryButton, CategoriesMenu, ProductsContainer } from './styles'
export function Products() {
    const [categories, setCategories] = useState([])
    const [products, setProducts] = useState([])
    const [activeCategory, setActiveCategory] = useState(0)

    useEffect(() => {
        async function loadCategories() {
            const { data } = await api.get('categories')

            const newCategories = [{ id: 0, name: 'Todas' }, ...data]
            setCategories(newCategories)
        }

        async function loadProducts() {
            const { data: allProducts } = await api.get('products')

            const newProducts = allProducts.map(product => {
                return { ...product, formatedPrice: formatCurrency(product.price)}
            })

            setProducts(newProducts)
        }
        loadProducts()
        loadCategories()
    }, [])

    return (
        <Container>
            <ProductsImg src={ProductsLogo} alt="logo do produto" />
            <CategoriesMenu>
                {categories &&
                    categories.map(category => (
                        <CategoryButton
                            type="button"
                            key={category.id}
                            isActiveCategory={activeCategory === category.id}
                            onClick={() => {
                                setActiveCategory(category.id)
                            }}
                        >
                            {category.name}
                        </CategoryButton>
                    ))}
            </CategoriesMenu>
            <ProductsContainer>
                {products && 
                 products.map(product => (
                    <CardProduct key={product.id} product={product} />
                ))}

            </ProductsContainer>
        </Container>
    )
}

