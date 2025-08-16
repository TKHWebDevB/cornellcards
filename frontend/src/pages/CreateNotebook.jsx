import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import supabase from '../../client';

import NavBar from '../components/NavBar';

const CreateNotebook = () => {
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

  // const signUpUser = async (values) => {
  //   const { error } = await supabase.auth.signUp({
  //     email: values.email,
  //     password: values.password,
  //     data: {
  //       username: values.username,
  //     },
  //   });

  //   if (error) {
  //     showAlert({
  //       show: true,
  //       message: error.message,
  //     });
  //   } else {
  //     navigate('/dashboard');
  //   }
  // };

  // function SignupAlert() {
  //   return (
  //     <>
  //       {alert.show && (
  //         <div>
  //           <div>
  //             {alert.message}
  //             <button onClick={() => showAlert({ message: '', show: false })}>
  //               {' '}
  //               X - Close
  //             </button>
  //           </div>
  //         </div>
  //       )}
  //     </>
  //   );
  // }

  function CreateNotebookForm() {
    return (
      <form onSubmit={handleSubmit(signUpUser)}>
        <div className="flex flex-col justify-left gap-6">
          <div className="flex place-content-between gap-4">
            <label htmlFor="username">Notebook Title</label>
            <input
              id="title"
              type="text"
              className="input border-2"
              {...register('title')}
            />
          </div>
        </div>

        <button type="submit" className="m-3">Create Notebook</button>
      </form>
    );
  }

  return (
    <>
      <NavBar />
      <h1 className="p-3">Create New Notebook</h1>
      <div>
        <div>
          <CreateNotebookForm />
        </div>
      </div>
    </>
  );
};

export default CreateNotebook;
