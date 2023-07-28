import React from 'react';
import styles from './styles.css?inline'

const ProductList = ({products}) =>{
    return(
        <>
            <div className="product-list">
                {products.map(product => (
                    <div className="card" style={{ width: '18em' }} key={product.id}>
                        <img src={product.image} alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{product.nombre}</h5>
                            <p className="card-text">{product.marca}</p>
                            <a href="#" className="btn btn-primary">Agregar</a>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default ProductList;