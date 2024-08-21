import React, { useEffect, useState } from "react";
import './styles.css';

const SearchAutoComplete = () => {
  const [search, setSearch] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);

  async function fetchListUsers() {
    try {
      setLoading(true);
      setError("");
      const response = await fetch("https://dummyjson.com/users");
      const data = await response.json();
      if (data.users) {
        setUsers(data.users.map(user => user.firstName));
      }
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchListUsers();
  }, []);

  function handleChange(event) {
    const query = event.target.value.toLowerCase();
    setSearch(query);
    if (query.length > 1) {
      const filtered = users.filter((user) =>
        user.toLowerCase().includes(query)
      );
      setFilteredUsers(filtered);
      setShowDropdown(true);
    } else {
      setShowDropdown(false);
      setFilteredUsers([]);
    }
  }

  function handleClick(event) {
    const query = event.target.innerText;
    setSearch(query);
    setShowDropdown(false);
    setFilteredUsers([]);
  }

  if (loading) {
    return <div>Loading data... Please wait! </div>;
  }
  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={handleChange}
        className="search-input"
      />
      {showDropdown && (
        <div className="data-container">
          <ul>
            {filteredUsers.map((user, index) => (
              <li key={index} onClick={handleClick}>
                {user}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchAutoComplete;
