import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import './App.css';

// Lazy loaded components
const Home = lazy(() => import('./components/Home/Home'));
const Profile = lazy(() => import('./components/Profile/Profile'));

// Regular imports for other components
import UseCallBack from './components/UseCallBack';
import ExpensiveComponent from './components/ExpensiveComponent';

// Loading component for Suspense fallback
const LoadingFallback = () => (
  <div className="loading-fallback">
    <div className="loading-spinner"></div>
    <p>Loading...</p>
  </div>
);

function App() {
  return (
    <Router>
      <div className="app-container">
        {/* Navigation Section */}
        <nav className="navigation">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
          </ul>
        </nav>

        {/* Main Content Section with Lazy Loading */}
        <main className="main-content">
          <Suspense fallback={<LoadingFallback />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </Suspense>
        </main>

        {/* Example Components Section (Commented Out) */}
        <div className="example-components">
          {/* This is to understand UseCall back part */}
          {/* <UseCallBack /> */}

          {/* This part of info is for Memo hook */}
          {/* <ExpensiveComponent /> */}
          {/* <button onClick={() => setCount((count) => count + 1)}>Re-render Parent </button>
          <p>Parent re-render count: {count}</p> */}
        </div>
      </div>
    </Router>
  );
}

export default App;
