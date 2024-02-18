import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import LoginPage from "./pages/Login";
import UserListPage from "./pages/UserList";
import UserProfilePage from "./pages/UserProfile";

const router = createBrowserRouter([
  { path: "/", element: <LoginPage /> },
  { path: "/user-list", element: <UserListPage /> },
  { path: "/user-profile/:userId", element: <UserProfilePage /> }]
);

function App() {
  return (
      <RouterProvider router={router} />
  );
}

export default App;
