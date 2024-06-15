import React from 'react'
import './ContactUs.css'

const ContactUs = () => {
  return (
    <div className='contactUs' id='contactUs'>
        <h2>Contact Us</h2>
        <div className="contactUs-content">
            <div className="contactUs-content-left">
                <p className='contactUs-content-left-text'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus, autem quo rem, quae, non possimus dicta sequi voluptatibus accusamus cum similique voluptatem nihil blanditiis fugit? Voluptatibus distinctio consequuntur expedita magni.
                </p>
            </div>
            <div className="contactUs-content-right">
                <form action="">
                    <label htmlFor="Name">Name <span id="asterick">*</span></label>
                    <input type="text" name="Name" id="Name" required="required"/>

                    <label htmlFor="Email">Email <span id="asterick">*</span></label>
                    <input type="email" name='Email' id='Email' required="required"/>

                    <label htmlFor="Message">Message <span id="asterick">*</span></label>
                    <textarea  name="message" id="Message" rows="4" cols="50" placeholder="Enter your message here..." required="required"></textarea>

                    <input type="submit" value="Submit" />
                </form>
            </div>
        </div>
    </div>
  )
}

export default ContactUs