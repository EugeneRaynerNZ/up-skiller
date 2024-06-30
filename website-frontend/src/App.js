import ctaImage from '../src/images/backgroundImage.png'
import placeholder from '../src/images/placeholder.png'
import placeholder2 from '../src/images/placeholder2.png'
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <div className="container header--container">
          <div className="logo--container">Logo</div>
          <nav>
            <ul>
              <li>Nav Link 1</li>
              <li>Nav Link 2</li>
              <li>Nav Link 3</li>
            </ul>
          </nav>
          <div className="button--container">
            <button className="cta--button cta--button-secondary">Sign in</button>
            <button className="cta--button cta--button-primary">Sign up</button>
          </div>
        </div>
      </header>
      <main>
        <section>
          <div className="container section--container">
            <div className="section-text--main">
              <h1>Empower your learning with AI.</h1>
              <h2>Create your own learning path, track what you learn, and review what you've learnt.</h2>
            </div>
            <div className="section-image">
              <img className="image-1" src={placeholder} alt="Empower your learning with AI"/>
            </div>
          </div>
        </section>
        <section>
          <div className="container section--container">
            <div className="section-image">
              <img className="image-2" src={placeholder2} alt="Empower your learning with AI"/>
            </div>
            <div className="section-text--secondary">
              <h1>We believe learning should be simple and its impact should be big.</h1>
              <h2>Let's make that a reality for your business. Here's how.</h2>
            </div>
          </div>
        </section>
        <section className="section--3">
          <div className="container section--container">
            <div className="section-text--secondary">
              <h1>Reimagine learning with the power of AI</h1>
              <h2>Eliminate repetitive, manual tasks and focus on building automated, dynamic, and personalized learning programs that have real impact with ________ AI-Powered learning solution.</h2>
            </div>
            <div className="section-image">
              <img className="image-1" src={placeholder} alt="Empower your learning with AI"/>
            </div>
          </div>
        </section>
        <section className="container">
          <div className="cta--container" style={{backgroundImage: `url(${ctaImage})`}}>
            <div className="cta--container-text">
              <h3>Start learning today</h3>
              <p>Sign up today and begin your AI–powered learning journey.</p>
            </div>
            <button className="cta--button cta--button-primary">Sign up</button>
          </div>
        </section>
      </main>
      <footer>
        <div className="container">
          <div className="footer--container">
            <div className="logo--container">Logo</div>
            <div className="footer--container-links">
              <div className="footer--container-links-primary">
                <ul>
                  <li>Legal & Privacy</li>
                  <li>User Agreement</li>
                  <li>Security</li>
                </ul>
              </div>
              <div className="footer--container-links-secondary">
                <ul>
                  <li>Cookie Preferences</li>
                  <li>Careers</li>
                  <li>Contact us</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
