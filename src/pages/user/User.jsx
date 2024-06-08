import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function UserDetail() {
  const { id } = useParams();
  const [user, setUser] = useState(null);


  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(response => {
        if (!response.ok) { throw new Error}
        return response.json();
      })
      .then(data => { setUser(data); })
  }, [id]);

  if (!user) {
    return <div>no</div>;
  }

  return (
    <div>
      <h4>{user.name}</h4>
      <h4>Username:{user.username}</h4>
      <h4>Email:{user.email}</h4>
      <h4>Address:{`${user.address.suite}, ${user.address.street}, ${user.address.city}, ${user.address.zipcode}`}</h4>
      <h4>Phone: {user.phone}</h4>
      <h4>Website: {user.website}</h4>
      <h4>Company:{`${user.company.name}, ${user.company.catchPhrase}, ${user.company.bs}`}</h4>
    </div>
  );
}

export default UserDetail;
