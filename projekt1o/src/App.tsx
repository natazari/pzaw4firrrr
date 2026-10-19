import bride from "./assets/corpse_bride.jpg";
import shrek from "./assets/shrek.jpg";
import dracula from "./assets/dracula.jpg";
import carmilla from "./assets/carmilla.jpg";
import dorian from "./assets/dorian.jpg";
import frank from "./assets/frankensstein.jpg";
import merv from "./assets/Merveilles.jpg";
import park from "./assets/Blackwaterpark.jpg";

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
interface propsAlbum{
  name: string;
  imgsrc: string;
  band: string;
  genre: string;
  year: number;
  songs: propsSong[];

  
}
interface propsSong{
  name: string;
  len: string;
}

function Film({name, imgsrc, year}:props ) {

    return (
    <>
      <div>
         <hr></hr>
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
        <hr></hr>
        <img src = {imgsrc}></img>
        <h3>{name}</h3>
        <p>{year}</p>
        <p>Liczba stron: {pages}</p>
      </div>
    </>
  )
  }

   function Album({name, imgsrc, band, genre, year, songs }:propsAlbum ) {

    return (
    <>
      <div>
        <hr></hr>
        <img src = {imgsrc}></img>
        <h3>{name}</h3>
        <h3>{band}</h3>

        <p>{genre}</p>
        <p>{year}</p>

        <h4>Lista utworów:</h4>

        <ol>
          {songs.map((song, index)=>(
            <li key={index}>
              <Piosenka name={song.name} len={song.len}/>
            </li>
          ))}
        </ol>
        
      </div>
    </>
  )
  }

  function Piosenka({name, len}:propsSong ) {

    return (
    <>
      <div>
        <h5>{name}</h5>
        <p>{len}</p>
       
      </div>
    </>
  )
  }



  

function App() {
 


  return (
    <>
      <div><table><h1>Filmy</h1>
      <Film name="Corpse Bride" imgsrc={bride} year={2005} />
      <Film name="Shrek" imgsrc={shrek} year={2001} />
      <Film name="Dracula" imgsrc={dracula} year={1931} />
      </table>
      </div>
      <hr></hr>
      <div><table><h1>Książki</h1>
      <Ksiazka name="Carmilla" imgsrc={carmilla} year={1872} pages={160} />
      <Ksiazka name="Picture of Dorian Gray" imgsrc={dorian} year={1891} pages={268}/>
      <Ksiazka name="Frankenstein" imgsrc={frank} year={1818} pages={237} />
      </table>
      </div>
      <hr></hr>

      <div><table><h1>Albumy</h1>
      <Album name="Merveilles" imgsrc={merv} band="Malice Mizer" year={1998} genre="v-kei" songs={[
        {name: "De Merveilles", len:"1:07"},
        {name: "Syunikiss (Nidome no Aitō)", len:"4:14"},
        {name: "De Merveilles", len:"1:07"}
      ]} />

      <Album name="Blackwater Park" imgsrc={park} band="Opeth" year={2001} genre="progressive metal" songs={[
        {name: "The Leper Affinity", len:"10:23"},
        {name: "Bleak", len:"9:15"},
        {name: "Harvest", len:"5:58"},
        {name: "The Drapery Falls", len:"10:52"}
      ]} />
      
      </table>
      </div>
    </>
  )
}

export default App
