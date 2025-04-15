import React from 'react'
import { useState } from 'react'
import supabase from './supabaseClient'

function Insert() {
  const [ name, setName] = useState('')
  const [mail, setMail] = useState('')
  const [message, setMessage] = useState('')
  const [formError, setFormError] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()

    if(!name || !mail || !message){
        setFormError('Enter value to all fields');
        return;
    }

    const { data,error } = await supabase
        .from('users')
        .insert([{name, mail, message}])
        .select()


    if(error){
        console.log(error);
    }
    if(data){
        console.log(data);
        setFormError(null)
    }
  }


  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <label>Mail</label>
            <input
              type="mail"
              value={mail}
              onChange={(e) => setMail(e.target.value)}
            />

            <label>Message</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />

            <button type="submit">CLICK ME</button>
        </form>

        {formError && <div>Error Occured</div>}
    </div>
  )
}

export default Insert