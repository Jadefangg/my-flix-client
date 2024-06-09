import { useEffect, useState } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";
import { useState,useEffect } from "react"; //HOOKS

import { Row, Col } from "react-bootstrap"; //Bootstrap components for grid layout.
import {BrowserRouter, Routes,Route, Navigate } from "react-router-dom"; //React Router components.

export const MainView = () => {//removed props
  const [user, setUser] = useState(storedUser? storedUser : null);
  const [movies, setMovies] = useState([]);


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
  //FIRST ROUTE BELOW
  return (<BrowserRouter>  
    <Row className="justify-content"> 
    <Routes >
      <Route
      path="/signup"
      element={<>
      {user? (
        <Navigate to="/" />
      ) : (
        <Col md={5}>
          <SignupView />
        </Col>
      )}
      </>}
      /> 
    </Routes>
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