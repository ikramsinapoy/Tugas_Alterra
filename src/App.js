import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import "./index.css"
import Todo from './components/Todo';
import { store, persistor } from './store/store'



function App() {
  
  return (
    <div className="App">
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Todo/>
        </PersistGate>
      </Provider>
    </div>
  );
}

export default App;
