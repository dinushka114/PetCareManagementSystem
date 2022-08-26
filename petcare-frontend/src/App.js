import {Routes , Route} from "react-router-dom"
import HomePage from "./pages/user/HomePage/HomePage";
import Login from "./pages/user/Login/Login";
import Register from "./pages/user/Register/Register";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}


export default App;
