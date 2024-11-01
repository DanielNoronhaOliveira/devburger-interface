

import { SideMenuAdmin } from '../../components'
import paths from '../../constants/paths'
import { ListProducts } from './ListProducts'
import {NewProduct} from './NewProduct'

import Orders from './Orders'
import {Container, ContainerItems} from './styles'
import { useLocation } from 'react-router-dom'

export function Admin(){
  const location = useLocation()
  
    return(
        <Container>
          <SideMenuAdmin/>
          <ContainerItems>
            {location.pathname === paths.Order && <Orders/>}
            {location.pathname === paths.Products &&  <ListProducts />} 
            {location.pathname === paths.NewProduct && <NewProduct/>} 
             <ListProducts />
          </ContainerItems>
        </Container>
    )
}

 