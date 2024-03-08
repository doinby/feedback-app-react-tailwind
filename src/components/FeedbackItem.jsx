import PropTypes from 'prop-types';
import Card from './shared/Card';
import { FaTimes } from "react-icons/fa";

export default function FeedbackItem({ item, handleDelete }) {
  return (
    <Card>
      <div className='absolute top-[-1rem] left-[-1rem] px-2.5 py-1 rounded-full bg-pink-500 text-white'>{item.rating}</div>
      <button onClick={() => handleDelete(item.id)} className='absolute top-[0.35rem] right-[0.5rem]'>
        <FaTimes className='text-xs text-indigo-950' />
      </button>
      <p>{item.text}</p>
    </Card>
  );
}

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired,
  handleDelete: PropTypes.func.isRequired,
};
