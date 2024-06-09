import { useEffect, useState } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";
import { useState,useEffect } from "react"; //HOOKS

export const MainView = () => {
  const storedUser = JSON.parse(localStorage.getItem("user"));
  const storedToken = localStorage.getItem("token");
  const [user, setUser] = useState(storedUser? storedUser : null);
  const [token, setToken] = useState(storedToken? storedToken : null);
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);


 useEffect(() => {
   if (!token) return;

   fetch("..../movies", { //API endpoint for movies.
     headers: { Authorization: `Bearer ${token}` },
   })
     .then((response) => response.json())
     .then((movies) => {
       setMovies(movies);

     });
 }, [token]);

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
`https://covers.openlibrary.org/b/id/${doc.cover_i}-L.jpg`, //Image URL
            author: doc.author_name?.[0]
          };  
        });

        setMovies(booksFromApi);
      });
  }, []); //Empty array to prevent infinite loop.
  //New code from here for <Row> and <Col> components. If statements removed.
  return (
    <Row> 
      {!user ? (
          <Col md={5}>
          <LoginView onLoggedIn={(user) => setUser(user)} />
          or
          <SignupView />
        </Col>
      ) : selectedBook ? (//md is the breakpoint for medium devices.
        <Col md={8} style={{ border: "1px solid black" }}> 
        <BookView
          book={selectedBook}
          onBackClick={() => setSelectedBook(null)}
        />
      </Col>
      ) : books.length === 0 ? (
        <div>The list is empty!</div>
      ) : (
        <>
          {books.map((book) => (
            <Col key={book.id} md={3}>
            <BookCard
             // key={book.id}
              book={book}
              onBookClick={(newSelectedBook) => {
                setSelectedBook(newSelectedBook);
              }}
            />
            </Col>
          ))}
        </>
      )}
    </Row>
);
};