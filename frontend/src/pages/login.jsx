import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import NavBar from '../components/NavBar';
import supabase from '../../client';

const Login = () => {
  const [alert, showAlert] = useState({
    message: '',
    show: false,
  });

  const navigate = useNavigate();

  const { register, handleSubmit } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const loginUser = async (values) => {
    const { error } = await supabase.auth.signInWithPassword(values);

    if (error) {
      showAlert({
        show: true,
        message: error.message,
      });
    } else {
      navigate('/dashboard');
    }
  };

  function LoginAlert() {
    return (
      <>
        {alert.show && (
          <div>
            <div>
              {alert.message}
              <button onClick={() => showAlert({ message: '', show: false })}>
                X - Close
              </button>
            </div>
          </div>
        )}
      </>
    );
  }

  function LoginForm() {
    return (
      <form onSubmit={handleSubmit(loginUser)}>
        <div className="flex flex-col justify-left gap-6">
          <div className="flex place-content-between gap-4">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              className="input border-2"
              {...register('email')}
            />
          </div>
          <div className="flex place-content-between gap-4">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              className="input border-2"
              {...register('password')}
            />
          </div>
        </div>
        <button type="submit" className='m-3'>Login</button>
      </form>
    );
  }

  return (
    <>
      <NavBar />
      <h1 className='p-6'>Log In</h1>
      <div>
        <div>
          <LoginAlert />
          <LoginForm />
          <p>
            Don't have an account? <Link to="/signup">Sign Up</Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
