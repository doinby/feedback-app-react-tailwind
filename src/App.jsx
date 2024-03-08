import { useState } from 'react'
import Header from './components/Header'
import FeedbackData from './data/FeedbackData.json'
import FeedbackList from './components/FeedbackList'

export default function App() {
  const [feedback, setFeedback] = useState(FeedbackData);

  // function deleteFeedback takes in an ID which is a number
  // that is returned when 'x' button was clicked
  function deleteFeedback(id) {
    if(window.confirm('Are you sure you want to delete?')) {
      // feedback.filter() returns feedback items that aren't
      // a match with the ID being returned above
      setFeedback(feedback.filter((item) => item.id !== id))
    }
  }

  return (
    <>
      <Header />
      <main className='px-8 py-16'>
        <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
      </main>
    </>
  )
}