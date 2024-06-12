import React from 'react'
import './Data.css'
function Data() {
  return (
    <>
     <div className="form-data">
      <form action="">
      <div>
        
            <input type="text" name='name' id='name' placeholder="Name"  /> 
        </div>
        <div>
            
            <input type="text" name='email' id='email' placeholder="Email" /> 
        </div>
        <div>
            
            <input type="number" name='phone' id='number' placeholder="Phone number"/> 
        </div>
        <div>
            
            <input type="text" name='work' id='work' placeholder="Work"  /> 
        </div>

        <div className='mes'>
            
            <textarea
                name="message"
                cols="30"
                rows="6"
                placeholder="Message"
                className="contact-in-textarea"
                id='message'
              ></textarea>
        </div>
        <div>
            <button className="button-form" type="submit"  id='submit'>Submit</button >
        </div>
      </form>
     </div>
    </>
  )
}

export default Data