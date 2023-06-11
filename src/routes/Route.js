import {createBrowserRouter} from 'react-router-dom'
import Form from "../component/Form";
import ViewResume from "../component/Resume";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Form/>,
    },
    {
        path: '/edit-resume',
        element: <Form/>
    },
    {
        path: '/view-resume',
        element: <ViewResume/>
    },
])

export default router;