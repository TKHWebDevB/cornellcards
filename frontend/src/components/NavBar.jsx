import {Link, useNavigate} from 'react-router-dom'
import supabase from '../../client'

const NavBar = () => {
  const navigate = useNavigate();

  const logoutUser = () => {
    const { error } = supabase.auth.signOut();

    if (error) {
      alert(error)
    } else {
      navigate("/")
    }
  }

  return (
    <div>
      <ul className="flex flex-row gap-3 justify-center">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/signup">Sign Up</Link>
        </li>
        <li>
          <button onClick={logoutUser}>Log Out</button>
        </li>
      </ul>
    </div>
  );
}

export default NavBar