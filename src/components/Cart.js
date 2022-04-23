import React, {useEffect, useState} from "react";
import {ListGroup} from "react-bootstrap";
import CartItem from "./CartItem";

function Cart({products, selectProduct, addQuantityOfItem, removeQuantityOfItem}) {
    const [total, setTotal] = useState(0);

    useEffect(() => {
        setTotal(products.reduce((acc, el) => acc + (el.price * el.quantity), 0));
    }, [products])

    return <>
        {products.length ? <ListGroup className={'mb-3'}>
            <ListGroup.Item as="li" active>
                Cart
            </ListGroup.Item>
            {products.map(product => <CartItem key={product.id}
                                               product={product}
                                               selectProduct={selectProduct}
                                               addQuantityOfItem={addQuantityOfItem}
                                               removeQuantityOfItem={removeQuantityOfItem}/>)
            }
            <h2>Total:</h2>
            <p><b className={'text-danger'}>{total.toFixed(2)}$</b></p>
        </ListGroup> : ''}
    </>
}

export default Cart;