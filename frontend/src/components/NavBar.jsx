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
    <div className="flex flex-col justify-center w-full h-full gap-3">
      <div className="w-full h-[20%] flex justify-end">
        <button
          type="button"
          className="flex h-full text-center p-[0px]"
          onClick={logoutUser}
        >
          Log Out
        </button>
      </div>
      <div className="h-[80%]">
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