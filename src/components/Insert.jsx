import React from 'react'
import { useState } from 'react'
import supabase from '../supabaseConfig/supabaseClient'
import './Insert.css'

function Insert() {
  const [name, setName] = useState('')
  const [mail, setMail] = useState('')
  const [message, setMessage] = useState('')
  const [formMessage, setFormMessage] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!name || !mail || !message) {
      setFormMessage('Enter value to all fields');
      return;
    }

    const { data, error } = await supabase
      .from('users')
      .insert([{ name, mail, message }])
      .select()


    if (error) {
      console.log(error);
      setFormMessage(error)
    }
    if (data) {
      console.log(data);
      setFormMessage('Response Saved.')
      setName('')
      setMail('')
      setMessage('')
    }
  }


  return (
    <div className='container'>
      <form onSubmit={handleSubmit} className='form'>
        <label className='name'>Name</label>
        <input
          type="text"
          className='name-input'
          value={name}
          placeholder='Enter name..'
          onChange={(e) => setName(e.target.value)}
        />

        <label className='mail'>Mail</label>
        <input
          type="mail"
          className='mail-input'
          value={mail}
          placeholder='Enter mail..'
          onChange={(e) => setMail(e.target.value)}
        />

        <label className='message'>Message</label>
        <textarea
          value={message}
          className='message-input'
          placeholder='Enter message..'
          onChange={(e) => setMessage(e.target.value)}
        />

        <button type="submit" className='button'>Submit</button>
        {formMessage && <div className='form-message'>{formMessage}</div>}
      </form>
    </div>
  )
}

export default Insert