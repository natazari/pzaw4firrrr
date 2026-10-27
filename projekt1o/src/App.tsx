import { useState } from "react";
// import Alert from 'bootstrap/js/dist/alert';
// import { Tooltip, Toast, Popover } from 'bootstrap';
import bride from "./assets/corpse_bride.jpg";
import shrek from "./assets/shrek.jpg";
import dracula from "./assets/dracula.jpg";
import carmilla from "./assets/carmilla.jpg";
import dorian from "./assets/dorian.jpg";
import frank from "./assets/frankensstein.jpg";
import merv from "./assets/Merveilles.jpg";
import park from "./assets/Blackwaterpark.jpg";
import wind from "./assets/windrises.jpg";
import marnie from "./assets/marnie.jpg";


interface Film{
  name: string;
  imgsrc: string;
  year: number;
  rating: number;
}

interface Ksiazka{
  name: string;
  imgsrc: string;
  year: number;
  pages: number;
}
interface Album{
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
  {name: "Corpse Bride", imgsrc: bride, year: 2005, rating: 8},
  {name: "Shrek", imgsrc: shrek, year: 2001, rating: 9},
  {name: "Dracula", imgsrc: dracula, year: 1931, rating: 7},
  {name: "Shrek", imgsrc: shrek, year: 2001, rating: 9},
  {name: "The Wind Rises", imgsrc: wind, year: 2013, rating: 9},
  {name: "When Marnie was there", imgsrc: marnie, year: 2014, rating: 8}
]

let books:Ksiazka[]= [
  {name:"Carmilla", imgsrc: carmilla, year: 1872, pages: 160},
  {name:"The Picture of Dorian Gray", imgsrc: dorian, year: 1891, pages: 268},
  {name:"Frankenstein", imgsrc: frank, year: 1818, pages: 237},
  {name:"Abraham", imgsrc: frank, year: 1700, pages: 237},
  {name:"Ceasar", imgsrc: dorian, year: 2018, pages: 268},
]

let albums:Album[] = [
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
  ]},
  {name: "Steel Ball Run outro", imgsrc: park, band: "JOJO", year: 2026, genre: "nonexistent", songs:[
   
  ]}
]

function Film({name, imgsrc, year, rating}:Film ) {

if (rating>=8) {
     return (
    <>
      <div>
        <img src = {imgsrc}></img>
        <h3>{name}</h3>
        <p>{year}</p>
        <p>Rating: {rating}</p>
        <p><i>Polecany</i></p>
       
      </div>
    </>
  );
  }else{return (
    <>
      <div>
        <img src = {imgsrc}></img>
        <h3>{name}</h3>
        <p>{year}</p>
        <p>Rating: {rating}</p>
       
      </div>
    </>
  )
  
}

  }

  function Ksiazka({name, imgsrc, year, pages}:Ksiazka ) {
  if (year<2000) {
    return (
    <>
      <div>
        
        <img src = {imgsrc}></img>
        <h3>{name}</h3>
        <p>{year}</p>
        <p><i>Klasyk</i></p>
        <p>Liczba stron: {pages}</p>
      </div>
    </>
  )
  }else{
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
  }}

   function Album({name, imgsrc, band, genre, year, songs }:Album ) {
if(songs.length <1){
return (
    <>
      <div>

        <img src = {imgsrc}></img>
        <h3>{name}</h3>
        <h3>{band}</h3>

        <p>{genre}</p>
        <p>{year}</p>

        <h4>Brak utworów://///</h4>
      </div>
    </>
  )
}else{
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
  )}
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

  // movies.sort(
  // (a, b) =>  a.name.localeCompare(b.name));

  const sortFilmName = [...movies].sort( (a, b) => a.name.localeCompare(b.name));

  const sortKsiazkaName = [...books].sort( (a, b) => a.name.localeCompare(b.name));

  const sortAlbumName = [...albums].sort( (a, b) => a.name.localeCompare(b.name));
 
  const sortFilmRating = [...sortFilmName].sort( (a, b) => b.rating - a.rating);

  const sortKsiazkaYear = [...sortKsiazkaName].sort( (a, b) => b.year - a.year);


  

const moviesAfter2010: Film[] = sortFilmName.filter((movie) => movie.year > 2010);


 const [moviesOpen, setMoviesOpen] = useState(false);
 const [movies2Open, setMovies2Open] = useState(false);
 const [booksOpen, setBooksOpen] = useState(false);
 const [books2Open, setBooks2Open] = useState(false);
 const [albumsOpen, setAlbumsOpen] = useState(false);
  const [albums2Open, setAlbums2Open] = useState(false);

 const maxAlbum = sortAlbumName.reduce((prev, current) => (prev.songs.length > current.songs.length ? prev : current));
 console.log(maxAlbum);

 let maxAlbumy:Album[] = [];
 maxAlbumy.push(maxAlbum);


  return (
    <>
    <div className="container-fluid"><div className="whole">
      <h1  onClick={() => {setMoviesOpen(!moviesOpen)}}>Filmy{moviesOpen ?<span>⏵</span>: <span>⏷</span>}</h1>
       <div className="items-container">
     {moviesOpen && sortFilmRating.map((movie, index) => (
      <div className="card">
          <Film key={index} name={movie.name} imgsrc={movie.imgsrc} year={movie.year}  rating={movie.rating} />
      </div>
    ))}
  </div>
</div>
  <hr />
     <div className="whole">
      <h1  onClick={() => {setMovies2Open(!movies2Open)}}>Filmy po 2010r{movies2Open ?<span>⏵</span>: <span>⏷</span>}</h1>
      <div className="items-container">
       {movies2Open &&moviesAfter2010.map((movie, index) => (
       
          <div className="card">
          <Film key={index} name={movie.name} imgsrc={movie.imgsrc} year={movie.year}  rating={movie.rating}/>
        </div>
    ))}
  </div>
</div>
  <hr /><div className="whole">
      
      <h1  onClick={() => {setBooksOpen(!booksOpen)}}>Książki{booksOpen ?<span>⏵</span>: <span>⏷</span>}</h1><div className="items-container">
      {booksOpen && sortKsiazkaName.map((book, index) => (
        <div className="card">
          <Ksiazka key={index} name={book.name} imgsrc={book.imgsrc} year={book.year} pages={book.pages} />
        </div>
    ))}
  </div>
</div>
  <hr />
  <div className="whole">
      
      <h1  onClick={() => {setBooks2Open(!books2Open)}}>Książki od najnowszej{books2Open ?<span>⏵</span>: <span>⏷</span>}</h1><div className="items-container">
      {books2Open && sortKsiazkaYear.map((book, index) => (
        <div className="card">
          <Ksiazka key={index} name={book.name} imgsrc={book.imgsrc} year={book.year} pages={book.pages} />
        </div>
    ))}
  </div>
</div>
  <hr /><div className="whole">

     <h1  onClick={() => {setAlbumsOpen(!albumsOpen)}}>Albumy{albumsOpen ?<span>⏵</span>: <span>⏷</span>}</h1><div className="items-container">
        {albumsOpen && sortAlbumName.map((album, index) => (
        <div className="card">
          <Album key={index} name={album.name} imgsrc={album.imgsrc} band={album.band} year={album.year} genre={album.genre} songs={album.songs} />
        
      </div>
    ))}
  </div>
   </div>
    <hr /><div className="whole">

      <h1  onClick={() => {setAlbums2Open(!albums2Open)}}>Albumy najwiecej piosenek{albums2Open ?<span>⏵</span>: <span>⏷</span>}</h1><div className="items-container">
        {albums2Open && maxAlbumy.map((album, index) => (
        <div className="card">
          <Album key={index} name={album.name} imgsrc={album.imgsrc} band={album.band} year={album.year} genre={album.genre} songs={album.songs} />
        
      </div>
    ))} 
   
  </div>
   </div>
   </div>
</>
  )
}


export default App
