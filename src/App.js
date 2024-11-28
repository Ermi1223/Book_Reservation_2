// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

// Sample Components for different pages
const HomePage = () => <h2>Home Page</h2>;
const AboutPage = () => <h2>About Page</h2>;
const AdminDashboard = () => <h2>Admin Dashboard</h2>;

function App() {
  return (
    <Router>
      <div>
        {/* Navigation Bar with Links */}
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/admin-dashboard">Admin Dashboard</Link>
            </li>
          </ul>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
