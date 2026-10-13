import bride from "./assets/corpse_bride.jpg";
import shrek from "./assets/shrek.jpg";
import dracula from "./assets/dracula.jpg";
import carmilla from "./assets/carmilla.jpg";

interface props{
  name: string;
  imgsrc: string;
  year: number;
}

interface propsk{
  name: string;
  imgsrc: string;
  year: number;
  pages: number;
}
function Film({name, imgsrc, year}:props ) {

    return (
    <>
      <div>
        <img src = {imgsrc}></img>
        <h3>{name}</h3>
        <p>{year}</p>
      </div>
    </>
  )
  }

  function Ksiazka({name, imgsrc, year, pages}:propsk ) {

    return (
    <>
      <div>
        <img src = {imgsrc}></img>
        <h3>{name}</h3>
        <p>{year}</p>
        <p>Liczba stron: {pages}</p>
      </div>
    </>
  )
  }



  

function App() {
 


  return (
    <>
      <div>
      <Film name="Corpse Bride" imgsrc={bride} year={2005} />
      <Film name="Shrek" imgsrc={shrek} year={2001} />
      <Film name="Dracula" imgsrc={dracula} year={1931} />
      </div>
      <hr></hr>
      <div>
      <Ksiazka name="Carmilla" imgsrc={carmilla} year={1872} pages={160} />
      <Film name="Shrek" imgsrc={shrek} year={2001} />
      <Film name="Dracula" imgsrc={dracula} year={1931} />
      </div>
    </>
  )
}

export default App
