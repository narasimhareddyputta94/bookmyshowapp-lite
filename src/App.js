import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import MovieList from './components/Movies/MovieList';
import MovieDetails from './components/Movies/MovieDetails';
import TheaterList from './components/Theaters/TheaterList';
import ShowTimeList from './components/Theaters/ShowTimeList';
import BookingList from './components/Bookings/BookingList';
import SeatSelection from './components/Bookings/SeatSelection';
import ReviewList from './components/Reviews/ReviewList';
import AddReview from './components/Reviews/AddReview';

function App() {
  return (
      <Router>
        <div className="App">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/movies" element={<MovieList />} />
            <Route path="/movies/:id" element={<MovieDetails />} />
            <Route path="/theaters" element={<TheaterList />} />
            <Route path="/theaters/:id/showtimes" element={<ShowTimeList />} />
            <Route path="/bookings" element={<BookingList />} />
            <Route path="/bookings/seats/:showTimeId" element={<SeatSelection />} />
            <Route path="/reviews/:movieId" element={<ReviewList />} />
            <Route path="/reviews/add/:movieId" element={<AddReview />} />
          </Routes>
        </div>
      </Router>
  );
}

export default App;
