import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import './Landing.css';



export default function PageLanding(props) {
  const navigate = useNavigate()
  
  function handleClick(path) {
    navigate(path)
  }

  return (
  	<div>
  		<div className="Title">
	  		Hockey Owner Simulator
	  	</div>
	  	<div className="Buttons">
	  		<div className="Button">
  				<Button size="large" variant="contained" onClick={() => handleClick('/register')}>New User</Button>
	  		</ div>
	  		<div className="Button">
  				<Button size="large" variant="contained" onClick={() => handleClick('/login')}>Login</Button>
	  		</ div>
	  	</div>
  	</div>
  );
}