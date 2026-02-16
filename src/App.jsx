import './App.css';
import Header from './components/Header/Header';
import content from './content/home.json';

function App() {
  return (
    <div className="App">
      <Header content={content.header} />
      <main className="App--content">
        <section className="paragraph--section">
          <p className="paragraph">{content.copy}</p>
        </section>
      </main>
      <footer className="footer">
        <p>{content.footer}</p>
      </footer>
    </div>
  );
}

export default App;
