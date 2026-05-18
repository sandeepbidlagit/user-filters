import React from 'react'
import { Link } from 'react-router'
import { useUserContext } from '../context/UserContext'

const UserCards = () => {
  const { filteredUsers, loading } = useUserContext();
  return (
    <main>
  {loading ? (
    <div id="loader">
      <img src="/user-filters/loader-blue.gif" alt="" />
    </div>

  ) : (
    <div id="users" className="grid">

      {filteredUsers.length === 0 ? (
        <div className="no-result">
          <p>User Not Found!</p>
        </div>
      ) : (
        filteredUsers.map((users) => {
          return (
            <div className="card" key={users.id}>
              <img src={users.profilePicture} alt="" />
              <div className="card-content">
                <h3>{users.name}</h3>
                <p><strong>Year:</strong> {users.years}</p>
                <p><strong>Category:</strong> {users.category || "-"}</p>
                <p><strong>Country:</strong> {users.countries || []}</p>
                <Link
                  to={`/users/${users.id}`}
                  className="card-link button-link"
                >
                  View Detail
                </Link>
              </div>
            </div>
          )
        })
      )}

    </div>
  )}
</main>
  )
}

export default UserCards
