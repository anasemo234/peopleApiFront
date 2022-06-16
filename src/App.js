import { useState, useEffect } from 'react';
import { auth } from './services/firebase';
import Header from './components/Header';
import Main from './components/Main';
import './App.css';

function App() {
  const [ user, setUser ] = useState(null);
  useEffect(() => {
      auth.onAuthStateChanged(user => setUser(user));
  }, []);
  return (
    <div className="App">
          <Header user={user} />
          <Main />
    </div>
  );
}

export default App;
