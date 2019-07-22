import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectItemsInCart, selectCartTotal } from '../../redux/cart/cart.selectors';
import { CheckoutItem } from '../../components/checkout-item/checkout-item.component';
import './checkout.styles.scss';

const mapStateToProps = createStructuredSelector({
  itemsInCart: selectItemsInCart,
  cartTotal: selectCartTotal
});

export const CheckoutPage = connect(
  mapStateToProps
)(({ itemsInCart, cartTotal }) => {
  return (
    <div className='checkout'>
      <table>
        <thead className='heading'>
          <tr>
            <th>Product</th>
            <th>Description</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody className='body'>
          {
            itemsInCart.map(item => <CheckoutItem key={item.id} {...item} />)
          }
        </tbody>
        <tfoot>
          <tr>
            <th scope="row">Totals:</th>
            <td>{cartTotal}</td>
          </tr>
        </tfoot>
      </table>
    </div >
  )
});