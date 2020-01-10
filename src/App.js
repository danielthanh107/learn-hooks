import React from 'react';
import router from './router'
import { Provider } from 'mobx-react'
import { UserModel } from './models/UserModel'

const user = UserModel.create({
  id: 1,
  name: "Daniel",
  age: 28
})

function App() {
  return (
    <Provider user={user}>
      { router }
    </Provider>
  );
}

export default App;
