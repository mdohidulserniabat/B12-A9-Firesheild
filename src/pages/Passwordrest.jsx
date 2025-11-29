import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { toast } from 'react-toastify';

const Passwordrest = () => {
  const { forgotPassword } = useContext(AuthContext);

  const handlePasswordRest = e => {
    e.preventDefault();
    const email = e.target.email.value;
    console.log(email);

    forgotPassword(email)
      .then(() => {
        toast.success('Password reset email sent!');
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        toast.error(`${errorCode}: ${errorMessage}`);
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card bg-base-100 w-full min-w-xl shrink-0 shadow-2xl">
          <form onSubmit={handlePasswordRest} className="card-body w-full">
            <fieldset className="fieldset">
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                className="input w-full"
                placeholder="Email"
                required
              />
              <button type="submit" className="btn btn-neutral mt-4">
                Forgot Password
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Passwordrest;
