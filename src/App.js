import logo from './logo.svg';
import './App.css';
import ProfilePhoto from './components/profile/ProfilePhoto';
import FullName from './components/profile/FullName';
import Address from './components/profile/Address';

function App() {
  return (
    <div className="App">
      <FullName/>
      <ProfilePhoto/>
      <Address/>
     
    </div>
  );
}

export default App;
