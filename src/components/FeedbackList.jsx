import PropTypes from 'prop-types';
import FeedbackItem from './FeedbackItem';

export default function FeedbackList({ feedback, handleDelete }) {
  if (!feedback || feedback.length === 0) {
    return <p>No feedback yet :)</p>;
  }

  return (
    <ul className='flex flex-col gap-8 items-start'>
      {feedback.map(item => {
        return (
          <FeedbackItem key={item.id} item={item} handleDelete={handleDelete}/>
        )
      })}
    </ul>
  )
}

FeedbackList.propTypes = {
  feedback: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
    }),
  ),
  handleDelete: PropTypes.func.isRequired,
};
