import { useEffect, useState } from 'react'
import { Container, Img, EditIconStyles } from './styles'
//import api from '../../../services/api'

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CancelIcon from '@mui/icons-material/Cancel';


import { formatCurrency } from '../../../utils/formatCurrency';


export function ListProducts() {
    const [products, setProducts] = useState()
    
    useEffect(() => {
        async function loadOrders() {
           // const { data } = await api.get('products')

            setProducts(data)

        }
        loadOrders()
    }, [])

    function isOffer(offerStatus) {
        if (offerStatus) {
            return <CheckBoxIcon style={{color: '#228822'}}/>
        }
        return <CancelIcon style={{color: '#cc1717'}}/>
    }
    return (
        <Container>
          
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Nome</TableCell>
                            <TableCell>Precos</TableCell>
                            <TableCell align="center">Produtos em Oferta</TableCell>
                            <TableCell align="center">Imagem do produto</TableCell>
                            <TableCell>Editar</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {products && 
                        products.map(product => (
                            <TableRow
                                key={product.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {product.name}
                                </TableCell>
                                <TableCell>{formatCurrency(product.price)}</TableCell>
                                <TableCell align="center">{isOffer(product.offer)}</TableCell>
                                <TableCell align="center">
                                    <Img src={product.url} alt="iamgem-produto" />
                                </TableCell>
                                <TableCell>
                                    <EditIconStyles />
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
         
        </Container>
    )

}