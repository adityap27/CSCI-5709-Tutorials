import axios from "axios";
import { useEffect, useState } from "react";
import UserDetailsRow from "../components/UserDetailsRow";

export default function UserListPage() {
  const [users, setUsers] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://express-t4.onrender.com/api/users")
      .then((response) => {
        setUsers(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setErrorMessage(error.response.data.message);
        setLoading(false);
      });
  }, []);

  function handleSearch(event) {
    setSearchText(event.target.value);
  }
  const filteredUsers =
    users &&
    users.filter((user) =>
      user.name.toLowerCase().includes(searchText.toLowerCase())
    );

  return (
    <>
      <h1> User List Page</h1>
      <label htmlFor="search">Search by First/Last Name: </label>
      <input
        id="search"
        type="search"
        onChange={handleSearch}
        value={searchText}
      />
      <div className="error">{errorMessage}</div>

      <div>
        {loading ? (
          <p>Loading user data...</p>
        ) : filteredUsers && filteredUsers.length > 0 ? (
          <table>
            <thead>
              <tr>
                <th>User Picture</th>
                <th>First and Last name</th>
                <th>ID</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map((user) => (
                <UserDetailsRow
                  key={user._id}
                  id={user._id}
                  name={user.name}
                  picture={user.picture}
                />
              ))}
            </tbody>
          </table>
        ) : (
          <p>No such user(s) found!</p>
        )}
      </div>
    </>
  );
}
