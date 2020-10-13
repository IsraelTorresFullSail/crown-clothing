import React from 'react';
import StripeChekcot from 'react-stripe-checkout';
import axios from 'axios';
import { response } from 'express';

const StripeChekcotButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_KMpU4bi6rU3pGYgLXgYiDekO00BFp0qRq9';

    const onToken = token => {
        axios({
            url: 'payment',
            method: 'post',
            data: {
                amount: priceForStripe,
                token
            }
        }).then(response => {
            alert('Payment successful')
        }).catch(error => {
            console.log('Payment error: ', JSON.parse(error));
            alert(
                'There wwas an issue with your payment. Please sure you use the provided credit card.'
            );
        })
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