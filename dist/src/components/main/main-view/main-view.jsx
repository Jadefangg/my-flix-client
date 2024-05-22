import { useState } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";

export const MainView = () => {
  const [books, setBooks] = useState([
    {
      id: 1,
      title: "Inglorious Bastards",
      image:
        "https://m.media-amazon.com/images/I/81KrCOVgp1L._AC_UY327_FMwebp_QL65_.jpg",
      author: "Martin Scorsese"
    },
    {
      id: 2,
      title: "The Dark Knight Rises",
      image:
        "https://m.media-amazon.com/images/I/81DqqPSKoeL._AC_UY327_FMwebp_QL65_.jpg",
      author: "Christopher Nolan"
    },
    {
      id: 3,
      title: "The Good The Bad and The Ugly",
      image:
        "https://m.media-amazon.com/images/I/91BDDsP0clL._AC_UY327_FMwebp_QL65_.jpg",
      director: "Sergio Leone"
    },
   
  ]);

  const [selectedBook, setSelectedBook] = useState(null); //Flag to show the selected book.
  if (selectedBook) {
    return (
      <MovieView book={selectedBook} onBackClick={() => setSelectedBook(null)} />
    );
  }

  if (books.length === 0) {
    return <div>The list is empty!</div>;
  }
//PROP  
return (
    <div>
      {books.map((book) => (
        <MovieCard
          key={book.id}
          book={book}
          onBookClick={(newselectedbook) => {
            setSelectedBook(newselectedbook);
          }}
        />
      ))}
    </div>
  );
}