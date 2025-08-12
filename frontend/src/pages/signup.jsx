import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import supabase from '../../client';

import NavBar from '../components/NavBar';

const Signup = () => {
  const [alert, showAlert] = useState({
    message: '',
    show: false,
  });

  const navigate = useNavigate();

  const { register, handleSubmit } = useForm({
    defaultValues: {
      username: '',
      email: '',
      password: '',
    },
  });

  const signUpUser = async (values) => {
    const { error } = await supabase.auth.signUp({
      email: values.email,
      password: values.password,
      data: {
        username: values.username,
      },
    });

    if (error) {
      showAlert({
        show: true,
        message: error.message,
      });
    } else {
      navigate('/dashboard');
    }
  };

  function SignupAlert() {
    return (
      <>
        {alert.show && (
          <div>
            <div>
              {alert.message}
              <button onClick={() => showAlert({ message: '', show: false })}>
                {' '}
                X - Close
              </button>
            </div>
          </div>
        )}
      </>
    );
  }

  function SignUpForm() {
    return (
      <form onSubmit={handleSubmit(signUpUser)}>
        <div>
          <label htmlFor="username">Username </label>
          <input
            id="username"
            type="username"
            className="input border-2"
            {...register('username')}
          />
        </div>
        <div>
          <label htmlFor="username">Email </label>
          <input
            id="email"
            type="email"
            className="input border-2"
            {...register('email')}
          />
        </div>
        <div>
          <label htmlFor="password">Password </label>
          <input
            id="password"
            type="password"
            className="input border-2"
            {...register('password')}
          />
        </div>
        <button type="submit">Sign Up</button>
      </form>
    );
  }

  return (
    <>
      <NavBar />
      <h1>Sign Up</h1>
      <div>
              <div>
                  <SignupAlert />
                  <SignUpForm />
                  <p> Have an account? <Link to="/login">Log In</Link></p>
        </div>
      </div>
    </>
  );
};

export default Signup;
