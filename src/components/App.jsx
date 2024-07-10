import Header from "./Header"
import Footer from "./Footer";
import Note from "./Note";
import data from "../data";

function createNotes(noteItem){
  return (
    <Note 
      key= {noteItem.key} 
      title={noteItem.title} 
      content={noteItem.content}/>
  )
}

function App() {
  return (
    <>
      <Header />
      {data.map(noteItem => (<Note key= {noteItem.key} title={noteItem.title} content={noteItem.content}/>))}
      <Footer />
    </>
  )
}

export default App;
