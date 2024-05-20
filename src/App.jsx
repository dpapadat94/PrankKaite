import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import Gotcha from "./pages/Gotcha";
import Layout from "./Layout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="gotcha" element={<Gotcha />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
