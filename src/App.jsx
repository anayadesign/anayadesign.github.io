import './App.css';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="App--content">
        <section className="paragraph--section">
          <p className="paragraph">
            Most recently I’ve helped manage Zendesk's marketing website and
            it's design system as a Sr. Software Engineer. Prior to that, I led
            the web development team in the Creative department at Art.com, a
            global ecommerce brand acquired by Walmart in early 2019. You're
            probably looking for my <a href="https://www.linkedin.com/in/anayadesign/">LinkedIn</a>.
          </p>
        </section>
      </main>
      <footer className="footer">
        <p>© 2026</p>
      </footer>
    </div>
  );
}

export default App;
