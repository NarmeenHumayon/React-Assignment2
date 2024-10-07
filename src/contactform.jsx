import './contactform.css';

function ContactForm() {
  return (
    <section id="contact-form" className="contact-form-section">
      <h2 className="title">Contact Form</h2>
      <p>
        This is a PHP Script for sending messages to your email, 
        you should replace <strong>support@pixelcoder.net</strong> with your email.
      </p>
      <form id="contactForm" action="/php/contact.php" method="POST" className="contact-form">
        <div className="form-group">
          <label htmlFor="fname">First Name</label>
          <input type="text" id="fname" name="fname" required />
        </div>
        <div className="form-group">
          <label htmlFor="lname">Last Name</label>
          <input type="text" id="lname" name="lname" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="5" required></textarea>
        </div>
        <button type="submit" className="btn-submit">Send Message</button>
      </form>
      <div id="form-messages"></div>
    </section>
  );
}

export default ContactForm;
