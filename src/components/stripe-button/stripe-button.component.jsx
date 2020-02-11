import React from 'react';
import StripeChekcot from 'react-stripe-checkout';

const StripeChekcotButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_KMpU4bi6rU3pGYgLXgYiDekO00BFp0qRq9';

    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }

    return (
        <StripeChekcot
            label='Pay Now'
            name='CROWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://sendeyo.com/up/d/f3eb2117da'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeChekcotButton;