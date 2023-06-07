import './App.css';
import {RouterProvider} from "react-router-dom";
import router from "./routes/Route";
import './styles/CommonStyles.css'
import {Provider} from "react-redux";
import {store} from "./redux/Store";

function App() {
    return (
        <Provider store={store}>
            <div className='app'>
                <RouterProvider router={router}/>
            </div>
        </Provider>
    );
}

export default App;
