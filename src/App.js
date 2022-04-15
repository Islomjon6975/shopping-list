import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import { Note } from "./pages/Note";
import { Notes } from "./pages/Notes";
import './App.css'


function App() {
  return (
    <Router>
      <div className="container">
        <div className="app">
          <Header />
          <Routes>
            <Route path="/" exact element={<Notes />} />
            <Route path="/note/:id" exact element={<Note />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
