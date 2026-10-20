import bride from "./assets/corpse_bride.jpg";
import shrek from "./assets/shrek.jpg";
import dracula from "./assets/dracula.jpg";
import carmilla from "./assets/carmilla.jpg";
import dorian from "./assets/dorian.jpg";
import frank from "./assets/frankensstein.jpg";
import merv from "./assets/Merveilles.jpg";
import park from "./assets/Blackwaterpark.jpg";

interface Film{
  name: string;
  imgsrc: string;
  year: number;
}

interface Ksiazka{
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

let movies:Film[] = [
  {name: "Corpse Bride", imgsrc: bride, year: 2005},
  {name: "Shrek", imgsrc: shrek, year: 2001},
  {name: "Dracula", imgsrc: dracula, year: 1931},
  {name: "Shrek", imgsrc: shrek, year: 2001}
]

let books:Ksiazka[]= [
  {name: "Carmilla", imgsrc: carmilla, year: 1872, pages: 160},
  {name:"The Picture of Dorian Gray", imgsrc: dorian, year: 1891, pages: 268},
  {name:"Frankenstein", imgsrc: frank, year: 1818, pages: 237}
]

let albums:propsAlbum[] = [
  {name: "Merveilles", imgsrc: merv, band: "Malice Mizer", year: 1998, genre: "v-kei", songs:[
    {name: "De Merveilles", len:"1:07"},
    {name: "Syunikiss (Nidome no Aitō)", len:"4:14"},
    {name: "De Merveilles", len:"1:07"}
  ]},
  {name: "Blackwater Park", imgsrc: park, band: "Opeth", year: 2001, genre: "progressive metal", songs:[
    {name: "The Leper Affinity", len:"10:23"},
    {name: "Bleak", len:"9:15"},
    {name: "Harvest", len:"5:58"},
    {name: "The Drapery Falls", len:"10:52"}
  ]}
]

function Film({name, imgsrc, year}:Film ) {

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

  function Ksiazka({name, imgsrc, year, pages}:Ksiazka ) {

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

   function Album({name, imgsrc, band, genre, year, songs }:propsAlbum ) {

    return (
    <>
      <div>

        <img src = {imgsrc}></img>
        <h3>{name}</h3>
        <h3>{band}</h3>

        <p>{genre}</p>
        <p>{year}</p>

        <h4>Lista utworów:</h4>

        <table>
          {songs.map((song, index)=>(
            
            <tr key={index}>
              <Piosenka name={song.name} len={song.len}/>
            
            </tr>
          ))}
        </table>
        
      </div>
    </>
  )
  }

  function Piosenka({name, len}:propsSong ) {

    return (
    <>
     
        <td><h5>{name}</h5></td>
        
     <td>  <p>{len}</p></td> 
       
      
    </>
  )
  }



  

function App() {
 


  return (
    <>
      <div><table><th><h1>Filmy</h1></th><tr>
      {movies.map((movie, index) => (
        <td>
          <Film key={index} name={movie.name} imgsrc={movie.imgsrc} year={movie.year} />
        </td>
      ))}</tr>
      </table>
      </div>
      <hr></hr>
      <div><table><th><h1>Książki</h1></th><tr>
      {books.map((book, index) => (
        <td>
          <Ksiazka key={index} name={book.name} imgsrc={book.imgsrc} year={book.year} pages={book.pages} />
        </td>
      ))}</tr>
      </table>
      </div>
      <hr></hr>

      <div><table><th><h1>Albumy</h1></th><tr>
       {albums.map((album, index) => (
        <td>
          <Album key={index} name={album.name} imgsrc={album.imgsrc} band={album.band} year={album.year} genre={album.genre} songs={album.songs} />
        </td>
      ))}</tr>
      </table>
      </div>
      

      
    </>
  )
}


export default App
