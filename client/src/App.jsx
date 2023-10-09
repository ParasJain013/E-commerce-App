import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>??????</div>,
  },
  {
    path: "/products/:id",
    element: <div>products</div>,
  },
  {
    path: "/product/:id",
    element: <div>product</div>,
  },
]);


function App() {
  return <div><RouterProvider router={router}/></div>;
}

export default App;
