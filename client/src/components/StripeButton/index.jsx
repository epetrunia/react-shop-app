import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

function StripeButton({ price }) {
  const priceForStripe = price * 100;
  const publishableKey =
    'pk_test_51Hr0BBHHs9Gl9GPhrM3btiAxkqm6RwYmotYYqcHHSjT9YEU3FFS2XrPVincqkYNTBKpNTk9op5P9jZcq9aZ57jIH008P1xHNHO';

  const onToken = (token) => {
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token,
      },
    })
      .then((response) => {
        alert('Payment was successful');
      })
      .catch((error) => {
        console.log('Payment error ', JSON.parse(error));
        alert('There was an issue with your payment');
      });
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='Clothing Shop'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is ${price}$`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
}

export default StripeButton;
