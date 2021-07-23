import React from "react";
import axios from "axios";
import StripeCheckout from "react-stripe-checkout";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

toast.configure();

const Donate = () => {

    // you must type CARD NUMBER: 4242 4242 4242 4242, date: 04/24, for successful pay

    const [product] = React.useState({
        name: "Donation",
        price: 3.99,
        description: "Cool car"
    });

    async function handleToken(token, addresses) {
        console.log({token, addresses}, 'token, addresses')

        const response = await axios.post(
            "https://5jo13.sse.codesandbox.io/checkout",
            { token, product }
        );
        
        console.log("Response:", response.data);

        const { status } = response.data;        

        if (status === "success") {
            toast("Success! Check email for details", { type: "success" });
        } else {
            toast("Something went wrong", { type: "error" });
        }
    }

    return (
        <div className="content-page-wrapper">
            <h1>Donate</h1>

            <div className="container">
                <div className="product">
                    <h1>{product.name}</h1>
                    <h3>Help us do more! · ${product.price}</h3>
                </div>
                <StripeCheckout
                    stripeKey="pk_test_51JGKW3GMlkvkFdAD9e7IybYLqDqCzdvXrOoEAkwpPt2zwNsgzTZZ2YreBOH157zw3yKnoWtIIu3va4ZKyhwCvabp00VyV5BM0M"
                    token={handleToken}
                    billingAddress
                    shippingAddress
                    name="Donation"
                    amount={product.price * 100}
                />
            </div>
        </div>
    );
}

export default Donate;