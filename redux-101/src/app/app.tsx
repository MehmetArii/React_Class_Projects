import { useAdduserMutation, useGetUsersQuery } from './api';

const App = () => {
  const {data: users} = useGetUsersQuery();
  const [addUser] = useAdduserMutation();

  const handleAddUser = () =>{
    addUser("tavuk");
  }
  return (
    <div>
      <ul>
        <button onClick={handleAddUser}>kullanıcı ekle</button>
        {users?.map((users) => <li>{users.name}</li>)}
      </ul>
    </div>
  )
}

export default App