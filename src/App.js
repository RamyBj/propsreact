import './App.css';
import Profile from './components/profile/Profile';
import mypicture from './components/profile/mypictur.jpg'
function App() {
  const greet=()=>(
   
    alert('Rami Bjaoui'))
  return (
    <div className="App">
      <h1>Hello React</h1>
      <Profile
      fullName='RamyBjaoui'
      bio='Devlopper'
      profission='Director'
      greet = {greet}>
      <img src= {mypicture} alt="mypicture"/> 
    </Profile>
    </div>
  );


}
Profile.defaultProps ={
  age:"30",
  fullNAme:"Ramybjaoui",
  bio:"devlopper",
}
export default App
