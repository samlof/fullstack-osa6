import React from 'react';
import { voteFor } from '../reducers/anecdoteReducer'

const AnecdoteList = (props) => {

  const anecdotes = props.store.getState()

  const vote = id => {
    props.store.dispatch(voteFor(id))
  }

  const anecsToShow = [...anecdotes].sort((a, b) => b.votes - a.votes)
  return (
    <div>
      {
        anecsToShow.map(anecdote =>
          <div key={anecdote.id}>
            <div>
              {anecdote.content}
            </div>
            <div>
              has {anecdote.votes}
              <button onClick={() => vote(anecdote.id)}>vote</button>
            </div>
          </div>
        )
      }
    </div>
  )
}

export default AnecdoteList