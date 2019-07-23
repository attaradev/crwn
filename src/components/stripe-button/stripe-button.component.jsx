import React from 'react';
import { connect } from 'react-redux';
import StripeCheckout from 'react-stripe-checkout';
import { formatAsMoney } from '../../utils/cart.utils';
import { clearCart } from '../../redux/cart/cart.actions';


export const StripeCheckoutButton = connect()(
  ({ price, dispatch }) => {
    const priceForStripe = price * 100;
    const publishableKey = process.env.REACT_APP_STRIPE_API_KEY;

    const onToken = token => {
      console.log(token);
      dispatch(clearCart());
      alert('Payment Successful');
    };

    return (
      <StripeCheckout
        label='Pay Now'
        name='CRWN, Inc'
        billingAddress
        shippingAddress
        image='https://svgshare.com/i/CUz.svg'
        description={`Your cart total is ${formatAsMoney(price)}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishableKey}
      />
    );
  }
)