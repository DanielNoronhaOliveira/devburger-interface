import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
    'pk_test_51Q96XtDGzO48u4Is2wYnEA8n3a7PF7lT4iqeOas0jhZc3jMnNBmGBiEOm9bWamWWFz8T4s1V1kb3k9gWvkLFiHPq00QeSd7ncC'
)

export default stripePromise;