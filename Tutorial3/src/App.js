import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RegistrationPage from "./pages/RegistrationPage";
import WelcomePage from "./pages/WelcomePage";

const router = createBrowserRouter([
  { path: "/", element: <RegistrationPage /> },
  { path: "/welcome", element: <WelcomePage /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
