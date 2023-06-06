import './App.css';
import { RouterProvider } from "react-router-dom";
import router from "./routes/Route";
import './styles/CommonStyles.css'

function App() {
  return (
    <div className='app'>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
