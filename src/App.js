import React, { useState } from 'react';
import "./App.css";
import UserList from './Components/UserList';
import UserDetail from './Components/UserDetail';
function App() {

  const [activeUserId, setActiveUserId] = useState(null);

  return (

    <div className="App">
      {/* Active User Id: {activeUserId} */}
      <div>
        <UserList setActiveUserId={setActiveUserId} />
      </div>
      {activeUserId &&
        <div>
          <UserDetail activeUserId={activeUserId} />
        </div>
      }
    </div>
  );
}

export default App;
