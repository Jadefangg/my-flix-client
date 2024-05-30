import { useEffect, useState } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";
import { useState,useEffect } from "react"; //HOOKS

export const MainView = () => {
  const [books, setMovies] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null); //Flag to show the selected book.
  useEffect(() => {
    fetch("https://openlibrary.org/search.json?q=star+wars")
      .then((response) => response.json())
      .then((data) => {
        const booksFromApi = data.docs.map((doc) => {
          return {
            id: doc.key,
            title: doc.title,
            image:
`https://covers.openlibrary.org/b/id/${doc.cover_i}-L.jpg`,
            author: doc.author_name?.[0]
          };  
        });

        setMovies(booksFromApi);
      });
  }, []);
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
const [user, setUser] = useState(null); //HOOKS for user login
if (!user) {
  return <LoginView onLoggedIn={(user) => setUser(user)} />;
}
const [token, setToken] = useState(null);

if (!user) {
  return (
    <LoginView
      onLoggedIn={(user, token) => {
        setUser(user);
        setToken(token);
      }}
    />
  );
}