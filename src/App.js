import './App.css';
import sampleData from './data/sampleData';
import Table from './components/Table';
import Heading from './components/Heading'

function App() {
  const schema = Object.keys(sampleData[0]);
  return (
    <div className="App">
      <Heading />

      <section className="tableSection">
        <Table schema={schema} data={sampleData} />
      </section>
    </div>
  );
}

export default App;
