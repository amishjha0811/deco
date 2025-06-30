import { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { toast } from 'react-hot-toast';
import axios from 'axios';

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

const PaymentForm = ({ amount, bookingId, onSuccess }) => {
  const [loading, setLoading] = useState(false);

  const handlePayment = async () => {
    setLoading(true);
    try {
      const token = localStorage.getItem('token');
      const response = await axios.post(
        'http://localhost:5000/api/payments/create-intent',
        {
          amount,
          bookingId
        },
        {
          headers: { Authorization: `Bearer ${token}` }
        }
      );

      const stripe = await stripePromise;
      const { error } = await stripe.confirmCardPayment(response.data.clientSecret);

      if (error) {
        toast.error(error.message);
      } else {
        toast.success('Payment successful!');
        onSuccess();
      }
    } catch (error) {
      toast.error(error.response?.data?.message || 'Payment failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="card">
      <h3 className="text-lg font-semibold mb-4">Payment Details</h3>
      <div className="mb-4">
        <p className="text-gray-600">Total Amount: ${amount}</p>
      </div>
      <button
        onClick={handlePayment}
        disabled={loading}
        className="btn btn-primary w-full"
      >
        {loading ? 'Processing...' : 'Pay Now'}
      </button>
    </div>
  );
};

export default PaymentForm; 