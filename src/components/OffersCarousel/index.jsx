


import { Container, Title } from './styles'
import api from '../../services/api'
import { useEffect, useState } from 'react'
import Carousel from 'react-elastic-carousel'
import 'react-multi-carousel/lib/styles.css'
import { CardProduct } from '../CardProduct'
import { formatCurrency } from '../../utils/formatCurrency'


export function OffersCarousel() {
  const [offers, setOffers] = useState([])

  useEffect(() => {
    async function loadProducts() {
      const { data } = await api.get('/products')

      const onlyOffers = data
      .filter((product) => product.offer)
      .map((product) => ({
        currencyValue: formatCurrency(product.price),
        ...product,
      }));

      setOffers(onlyOffers)
    }

    loadProducts()
  }, [])


  const responsive = {


    desktop: {
      breakpoint: { max: 3000, min: 1280 },
      items: 4,

    },
    tablet: {
      breakpoint: { max: 1280, min: 690 },
      items: 3,

    },
    mobile: {
      breakpoint: { max: 690, min: 0 },
      items: 2,

    },

  };

  return (
    <Container>
      <Title>Oferta do dia</Title>
      <Carousel
        responsive={responsive}
        infinite={true}
        partialVisbile={false}
        itemClass='carousel-item'

      >


        {offers.map((product) => (
          <CardProduct key={product.id} product={product}/>
        ))}

      </Carousel>
    </Container>
  )
}