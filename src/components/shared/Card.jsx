import PropTypes from 'prop-types';

export default function Card({ children }) {
  return (
    <li className='relative p-8 rounded-md bg-white text-indigo-950'>
      {children}
    </li>
  );
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
};
