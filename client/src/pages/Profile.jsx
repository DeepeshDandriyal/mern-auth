import { useSelector } from "react-redux";

const Profile = () => {
  const { user } = useSelector((state) => state.user);
  return (
    <div className="p-3 max-w-lg  mx-auto">
      <h1 className="text-center text-3xl font-semibold my-7 ">Profile</h1>
      <form action="" className="flex flex-col gap-4">
        <img
          src={user.currentUser.profilePicture}
          alt=""
          className="h-20 w-20 self-center rounded-full cursor-pointer mt-2"
        />
        <input
          defaultValue={user.currentUser.username}
          type="text"
          id="username"
          placeholder="username"
          className="bg-slate-100 rounded-lg p-3 "
        />
        <input
          defaultValue={user.currentUser.email}
          type="email"
          id="email"
          placeholder="Email"
          className="bg-slate-100 rounded-lg p-3 "
        />
        <input
          type="password"
          id="password"
          placeholder="Password"
          className="bg-slate-100 rounded-lg p-3 "
        />
        <button className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80">
          Update
        </button>
      </form>
      <div className="flex justify-between mt-5">
        <span className="text-red-700 cursor-pointer">Delete Account</span>
        <span className="text-red-700 cursor-pointer">Sign out</span>
      </div>
    </div>
  );
};

export default Profile;
