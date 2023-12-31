import { useSelector } from "react-redux";
import { useRef, useState, useEffect } from "react";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { app } from "../firebase.js";
import { useDispatch } from "react-redux";
import {
  updateUserFailure,
  updateUserStart,
  updateUserSuccess,
  deleteUserFailure,
  deleteUserStart,
  deleteUserSuccess,
  signOut,
} from "../redux/slices/userSlice.js";

const Profile = () => {
  const fileRef = useRef(null);
  const { user } = useSelector((state) => state.user);
  const [image, setImage] = useState(undefined);
  const [imagePercent, setImagePercent] = useState(0);
  const [imageError, setImageError] = useState(false);
  const [formData, setFormData] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    if (image) {
      handleFileUpload(image);
    }
  }, [image]);

  const handleFileUpload = async (image) => {
    const storage = getStorage(app);
    const fileName = new Date().getTime() + image.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, image);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setImagePercent(Math.round(progress));
      },

      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setFormData({ ...formData, profilePicture: downloadURL });
        });
      }
    );
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };
  const handleDeleteAccount = async () => {
    try {
      dispatch(deleteUserStart());
      const res = await fetch(`/api/user/delete/${user.currentUser._id}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (res.status === 200) {
        dispatch(deleteUserSuccess());
        alert("user deleted");
      } else {
        dispatch(deleteUserFailure());
        alert("User not deleted");
      }
    } catch (error) {
      dispatch(deleteUserFailure());
    }
  };

  const handleSignout = async () => {
    try {
      await fetch("/api/auth/signout");
      dispatch(signOut());
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      dispatch(updateUserStart());
      const res = await fetch(`/api/user/update/${user.currentUser._id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (res.status === 200) {
        dispatch(updateUserSuccess(data));
        alert("user updated");
      } else {
        dispatch(updateUserFailure());
        alert("something went wrong");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="p-3 max-w-lg  mx-auto">
      <h1 className="text-center text-3xl font-semibold my-7 ">Profile</h1>
      <form onSubmit={handleSubmit} action="" className="flex flex-col gap-4">
        <input
          type="file"
          ref={fileRef}
          hidden
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
        />
        {/*
        firebase rules...
      allow read;
      allow write:if
      request.resource.size<2 * 1024 * 1024 && 
      request.resource.contentType.matches('image/.*') */}
        <img
          src={user.currentUser.profilePicture}
          alt=""
          className="h-20 w-20 self-center rounded-full cursor-pointer mt-2"
          onClick={() => fileRef.current.click()}
        />
        <p className="text-sm  self-center">
          {imageError ? (
            <span className="text-red-700 ">Error uploading image</span>
          ) : imagePercent > 0 && imagePercent < 100 ? (
            <span className="text-slate-900">{`uploading:${imagePercent}%`}</span>
          ) : imagePercent === 100 ? (
            <span className="text-green-700"> Image uploaded successfully</span>
          ) : (
            ""
          )}
        </p>
        <input
          defaultValue={user.currentUser.username}
          type="text"
          id="username"
          placeholder="username"
          className="bg-slate-100 rounded-lg p-3 "
          onChange={handleChange}
        />
        <input
          defaultValue={user.currentUser.email}
          type="email"
          id="email"
          placeholder="Email"
          className="bg-slate-100 rounded-lg p-3 "
          onChange={handleChange}
        />
        <input
          type="password"
          id="password"
          placeholder="Password"
          className="bg-slate-100 rounded-lg p-3 "
          onChange={handleChange}
        />
        <button
          disabled={user.loading}
          className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-75"
        >
          {user.loading ? "loading..." : "Update"}
        </button>
      </form>
      <div className="flex justify-between mt-5">
        <span
          onClick={handleDeleteAccount}
          className="text-red-700 cursor-pointer"
        >
          Delete Account
        </span>
        <span onClick={handleSignout} className="text-red-700 cursor-pointer">
          Sign out
        </span>
      </div>
    </div>
  );
};

export default Profile;
