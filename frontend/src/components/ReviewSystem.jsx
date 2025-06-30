import { useState } from 'react';
import ReactStars from 'react-rating-stars-component';
import { toast } from 'react-hot-toast';
import axios from 'axios';

const ReviewSystem = ({ decorationId, onReviewSubmit }) => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (rating === 0) {
      toast.error('Please select a rating');
      return;
    }

    setSubmitting(true);
    try {
      const token = localStorage.getItem('token');
      const response = await axios.post(
        'http://localhost:5000/api/decorations/reviews',
        {
          decorationId,
          rating,
          comment
        },
        {
          headers: { Authorization: `Bearer ${token}` }
        }
      );
      toast.success('Review submitted successfully');
      onReviewSubmit(response.data);
      setRating(0);
      setComment('');
    } catch (error) {
      toast.error(error.response?.data?.message || 'Failed to submit review');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="card">
      <h3 className="text-lg font-semibold mb-4">Write a Review</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Rating
          </label>
          <ReactStars
            count={5}
            value={rating}
            onChange={setRating}
            size={24}
            activeColor="#0ea5e9"
            isHalf={false}
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Comment
          </label>
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="input h-32"
            placeholder="Share your experience..."
            required
          />
        </div>
        <button
          type="submit"
          disabled={submitting}
          className="btn btn-primary w-full"
        >
          {submitting ? 'Submitting...' : 'Submit Review'}
        </button>
      </form>
    </div>
  );
};

export default ReviewSystem; 