import './App.css';
import sampleData from './data/sampleData';
import Table from './components/Table';
import Heading from './components/Heading'

function App() {
  const {meta, data} = sampleData;
  const schema = Object.keys(data[0]);


  const save = () => {
    console.log("save");
  }

  return (
    <div className="App">
      <Heading meta={meta}/>

      <section className="tableSection">
        <Table schema={schema} data={data} save={save}/>
      </section>
    </div>
  );
}

export default App;
