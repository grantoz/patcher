import './App.css';
import sampleData from './data/sampleData';
import Table from './components/Table'

function App() {
  const schema = Object.keys(sampleData[0]);
  return (
    <div className="App">
      <header className="App-header">
        Recordset name
        <section className="dataButtons">
          <button>Clear</button>
          <button>Save</button>
        </section>
      </header>

      <section className="tableSection">
        <Table schema={schema} data={sampleData} />
      </section>
    </div>
  );
}

export default App;
