import '../assets/css/App.css';
import PageLayout from "../components/PageLayout";
import Test from "../components/Test";
import {RouterProvider} from "react-router";
import {createBrowserRouter} from "react-router-dom";
import Home from "../pages/Home";
import Account from "../pages/Account";
import YourFiles from "../pages/YourFiles";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home/>
    },
    {
        path: '/account',
        element: <Account/>
    },
    {
        path: '/your-files',
        element: <YourFiles/>
    }
])

function App() {
  return (
      <RouterProvider router={router}>
      </RouterProvider>
  );
}

export default App;
