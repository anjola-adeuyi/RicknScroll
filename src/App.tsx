import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import CharacterDetail from './pages/CharacterDetail';

function App() {
  return (
    <Router>
      <div className="bg-slate-900 text-white p-6">
        <Routes>
          <Route
            path="/"
            element={<Homepage />}
          />
          <Route
            path="/character/:id"
            element={<CharacterDetail />}
          />
          {/* handle any other routes * */}
          <Route
            path="*"
            element={<Homepage />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
