import React from 'react'
import products from '../products'
import {Row, Col} from 'react-bootstrap'
import Product from '../components/Product'

const HomeScreen = () => {
    return (
        
        <>
            <Row>
                 
                    {products.map((product) =>
                   
                    
                            <Col sm={12} md={6} lg={5} xl={3} >
                            <Product product={product} />
                            </Col>

                            )}
            </Row>
          

        </>

    )
}

export default HomeScreen
