import { useState } from "react";
import "./App.css";

function App() {
  const initialState = [
    { id: 1, name: "John", age: 20 },
    { id: 2, name: "Doe", age: 21 },
  ];
  const [users, setUsers] = useState(initialState);
  const [name, setName] = useState("")
  const [age, setAge] = useState("")

  const addUser = (e) => {
    e.preventDefault();
    if(!name || !age){
      alert("이름,나이를 모두 써주세요");
      return
    }
    setUsers([...users, { id: Date.now(), name, age }]);
    setName("");
    setAge("");
  };

  const removeUser = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };

  return (
    <>
      <h1>사용자 리스트</h1>
      <form onSubmit={addUser}>
        <input type="text" placeholder="이름" value={name} onChange={(e) => setName(e.target.value)}/>
        <input type="number" placeholder="나이" value={age} onChange={(e) => setAge(e.target.value)}/>
        <button type="submit">사용자 추가</button>
      </form>
      <ul>
        {users.map((user) => (
          <li key={user.id} style={{ display: "flex", alignItems: "center" }}>
            <span style={{ marginRight: "10px" }}>이름: {user.name}, 나이: {user.age}</span>
            <button onClick={() => removeUser(user.id)}>삭제</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;