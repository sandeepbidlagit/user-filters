import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const UserDetails = () => {
  const { id } = useParams();

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    const loadUsers = async () => {
      setLoading(true);
      try {
        const response = await fetch("/user-filters/users.json");
        const data = await response.json();
        console.log(data)

        // Here we need to find the Unique URL id 
        const foundUser = data.find((u) => String(u.id) === id);

        setUser(foundUser || null);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadUsers();
  }, [id]);

  console.log(user)

  if (loading) return <p>Loding...</p>
  if (!user) return <p>User not Found...</p>
  return (
    <div className="details-container">
      <Link to="/" className="back-btn">← Back</Link>
      <div id="userDetails">
        <div className="user-detail">
          <div className="user-left">
            <img src={user.profilePicture} alt="Angela Bwalya" />
            <div className="user-name">{user.name}
            </div>
            <div className="user-country">{user.countries || []}</div>
            <div className="user-year">{user.years}</div>
          </div>
          <div className="user-right">
            <div className="user-category">
              <h3>{user.category}</h3>
              <p>{user.description}</p>
            </div>
            <div className="content">
              <h3>Content</h3>
              <p>{user.content}
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>

  )
}

export default UserDetails
