import './App.css';
import sampleData from './data/sampleData';
import Table from './components/Table';
import Heading from './components/Heading'
import LoadPane from './components/LoadPane'

function App() {
  const {meta, data} = sampleData;
  const schema = Object.keys(data[0]);

  const save = () => {
    console.log("save");
    const recordSet = {
      "meta": { 
        "title": meta.title,
        "created_at": "",
        "updated_at": "",
      },
      "data": data
    }

    const saved = JSON.parse(localStorage.getItem("_patcher_files")) || []
    if (!saved.includes(recordSet.meta.title)) {
      saved.push(recordSet.meta.title)
    }

    console.log(recordSet)

    localStorage.setItem("_patcher_files", JSON.stringify(saved))
    localStorage.setItem(meta.title, JSON.stringify(recordSet))
  }

  const load = () => {
    console.log("load");
    const files = JSON.parse(localStorage.getItem("_patcher_files"))
    console.log(files);
  }

  const loadSelect = (e) => {
    console.log("loadSelect")
    const selected = e.target.textContent

    // will certainly need some kind of exception handling here
    const bleh = JSON.parse(localStorage.getItem(selected))
    console.log("loaded:", bleh)
    // these work, but why is a destructured assignment being a pain here?
    // meta = bleh.meta
    // data = bleh.data
    // how to retrigger a render here?
  }

  return (
    <div className="App">
      <Heading meta={meta}/>
      <LoadPane meta={meta} loadSelect={loadSelect}/>

      <section className="tableSection">
        <Table schema={schema} data={data} save={save} load={load}/>
      </section>
    </div>
  );
}

export default App;
