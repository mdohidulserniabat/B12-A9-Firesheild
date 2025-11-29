import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { AiOutlineMail } from 'react-icons/ai';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Profile = () => {
  const { user, updateUserProfile, setUser } = useContext(AuthContext);

  const [name, setName] = useState('');
  const [photoURL, setPhotoURL] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  useEffect(() => {
    if (user) {
      setName(user.displayName || '');
      setPhotoURL(user.photoURL || '');
    }
  }, [user]);
  const handleUpdate = async e => {
    e.preventDefault();
    try {
      await updateUserProfile({ displayName: name, photoURL: photoURL });
      setMessage('Profile updated successfully!');
      // Firebase er user update korar por locally state update korte hobe
      setUser({ ...user, displayName: name, photoURL: photoURL });
    } catch (error) {
      setMessage(error.message);
    }
  };
  return (
    <>
      {user ? (
        <div className="my-8">
          <div className="flex justify-center">
            <img
              src={user?.photoURL}
              alt=""
              className="h-15 w-15 rounded-full border-4 border-amber-500"
            />
          </div>
          <div data-aos="fade-up">
            <h1 className="text-4xl font-bold">{user?.displayName}</h1>
            <div className="flex justify-center items-center gap-2">
              <span className="text-2xl font-semibold">
                <AiOutlineMail />
              </span>
              <h1 className="text-2xl font-semibold">{user?.email}</h1>
            </div>
          </div>

          {/* modal */}

          <button
            className="btn mt-4"
            onClick={() => document.getElementById('my_modal_3').showModal()}
          >
            Edit Profile
          </button>
          <dialog id="my_modal_3" className="modal">
            <div className="modal-box">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                  ✕
                </button>
              </form>
              <div className="max-w-md mx-auto mt-10 p-5 border rounded shadow">
                <div className="flex justify-center mb-5">
                  <img
                    src={photoURL || 'https://via.placeholder.com/150'}
                    alt="profile"
                    className="h-24 w-24 rounded-full border-4 border-amber-500"
                  />
                </div>
                <form onSubmit={handleUpdate} className="space-y-4">
                  <div>
                    <label className="block font-semibold">Name:</label>
                    <input
                      type="text"
                      className="w-full border p-2 rounded"
                      value={name}
                      onChange={e => setName(e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <label className="block font-semibold">
                      Profile Image URL:
                    </label>
                    <input
                      type="text"
                      className="w-full border p-2 rounded"
                      value={photoURL}
                      onChange={e => setPhotoURL(e.target.value)}
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-amber-500 text-white py-2 rounded hover:bg-amber-600 transition"
                  >
                    Update Profile
                  </button>
                </form>
                {message && <p className="mt-4 text-center">{message}</p>}
              </div>
            </div>
          </dialog>

          {/* Modal End */}
        </div>
      ) : (
        ''
      )}
    </>
  );
};

export default Profile;
