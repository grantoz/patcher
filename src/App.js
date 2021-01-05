import './App.css';
import sampleData from './data/sampleData';
import sampleSchema from './data/sampleSchema';
import Table from './components/Table'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        blah
      </header>

      <section className="tableSection">
        <Table schema={sampleSchema} data={sampleData} color='blue' />
      </section>
    </div>
  );
}

export default App;
