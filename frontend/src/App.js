import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {ScrollContextProvider} from "./shared/context/scroll-to-context";
import HomePage from "./pages/Home";
import Layout from "./Layout";

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        { index: true, element: <HomePage /> }
      ]
    }
  ])

  return (
    <ScrollContextProvider>
      <RouterProvider router={router} />
    </ScrollContextProvider>
  );
}

export default App;
