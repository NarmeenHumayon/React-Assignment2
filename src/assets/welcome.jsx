import './Welcome.css';

function Welcome() {
  return (
    <section id="welcome" className="welcome-section">
      <div className="content-header">
        <h1>Coffee Landing Page</h1>
      </div>
      <div className="welcome">
        <h2 className="twenty">Welcome To Coffee Landing Page</h2>
        <p>
          Firstly, a huge thanks for purchasing this theme, your support is truly appreciated!
        </p>
        <p>
          This document covers the installation and use of this theme and often reveals answers to common problems and issues. 
          If you have any questions that are beyond the scope of this document, feel free to email at 
          <a href="mailto:support@pixelcoder.net">support@pixelcoder.net</a>.
        </p>
      </div>
    </section>
  );
}

export default Welcome;
