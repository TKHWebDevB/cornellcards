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
    <div className="flex flex-col w-80 h-64 gap-6">
      <div className='w-full h-[20%] flex justify-end'>
        <button onClick={logoutUser}>Log Out</button>
      </div>
      <div>
        <ul className="flex flex-row gap-3 justify-center align-middle">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/signup">Sign Up</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar