import Sidebar from './sidebar';
import Welcome from './assets/welcome';
import Features from './assets/feautures';
import ContactForm from './contactform';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <div id="main-wrapper">
        <Welcome />
        <Features />
        <ContactForm />
      </div>
    </div>
  );
}

export default App;
