import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js"
import axios from "axios"
import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import {useSelector} from 'react-redux'

const CARD_OPTIONS = {
	iconStyle: "solid",
	style: {
		base: {
			iconColor: "#c4f0ff",
			color: "#fff",
			fontWeight: 500,
			fontFamily: "Arial,Verdana,sans-serif",
			fontSize: "16px",
			fontSmoothing: "antialiased",
			":-webkit-autofill": { color: "#fce883" },
			"::placeholder": { color: "#87bbfd" }
		},
		invalid: {
			iconColor: "#ffc7ee",
			color: "#ffc7ee"
		}
	}
}

export default function PaymentForm() {
    const [success, setSuccess ] = useState(false)
    const stripe = useStripe()
    const elements = useElements()
    const {cart} = useSelector((store) => store.cartReducer)


    const handleSubmit = async (e) => {
        e.preventDefault()
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardElement)
        })

        console.log(handleSubmit)
    if(!error) {
        try {
            const total = cart.reduce((acc, el) => {
                return acc + el.package_price * el.quantity
            }, 0)
            const {id} = paymentMethod
            const response = await axios.post("http://localhost:4222/payment", {
                amount: total * 100,
                id
            })

            if(response.data.success) {
                console.log("Successful payment")
                setSuccess(true)
            }

        } catch (error) {
            console.log("Error", error)
        }
    } else {
        console.log(error.message)
    }
}
    
    return (
        <>
        {!success ? 
        <form onSubmit={handleSubmit}>
            <fieldset className="FormGroup">
                <div className="FormRow">
                    <CardElement options={CARD_OPTIONS}/>
                </div>
            </fieldset>
            <button id="check-button">Pay Now</button>
        </form>
        :
       <div>
           <h2 id="thank-you">Thank you for your purchase!</h2>
           <Link to='/'><h1 className="go-home">HomePage</h1></Link>
       </div> 
        }
            
        </>
    )
}