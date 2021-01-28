import './App.css';
import sampleData from './data/sampleData';
import Table from './components/Table'

function App() {
  const sampleSchema = Object.keys(sampleData()[0]);
  return (
    <div className="App">
      <header className="App-header">
        Something interesting to go here
      </header>

      <section className="tableSection">
        <Table schema={sampleSchema} data={sampleData} />
      </section>
    </div>
  );
}

export default App;
