import { useEffect, useState } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";
import { useState,useEffect } from "react"; //HOOKS

export const MainView = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {fetch("https://openlibrary.org/search.json?q=star+wars")
  .then((response) => response.json())
  .then((data) => {
    console.log("books from api:", data);
  });

}, []);

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