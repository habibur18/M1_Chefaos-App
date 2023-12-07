import React, { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { updateProfile } from "firebase/auth";

const Setting = () => {
  const { user, updateUserProfile } = useContext(AuthContext);
  const [newDisplayName, setNewDisplayName] = useState(user.displayName || "");
  const [newPhotoURL, setNewPhotoURL] = useState(user.photoURL || "");

  const handleDisplayNameChange = (e) => {
    setNewDisplayName(e.target.value);
  };

  const handlePhotoURLChange = (e) => {
    setNewPhotoURL(e.target.value);
  };

  const handleUpdateProfile = async () => {
    try {
      const updateProfileResult = await updateUserProfile(
        newDisplayName,
        newPhotoURL
      );
      const updatedUser = updateProfileResult.user;
      if (updatedUser) {
        alert("user update successfully", updatedUser);
      } else {
        console.log("Error : User update failed");
      }
    } catch (err) {
      console.log("Error during profile update", err.message);
    }
    window.location.reload();
  };

  return (
    <div className="max-w-md mx-auto my-24 p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-4">User Settings</h2>
      <div className="flex items-center mb-4">
        <img
          className="w-12 h-12 rounded-full mr-4"
          src={newPhotoURL || "default-avatar-url.jpg"} // Use a default avatar URL if none provided
          alt="User Avatar"
        />
        <div>
          <h3 className="text-lg font-semibold">{newDisplayName || "Guest"}</h3>
          <form>
            <input
              type="text"
              className="border rounded-lg mt-2 p-2 w-full"
              placeholder="Display Name"
              value={newDisplayName}
              onChange={handleDisplayNameChange}
            />
            <input
              type="text"
              className="border rounded-lg mt-2 p-2 w-full"
              placeholder="Photo URL"
              value={newPhotoURL}
              onChange={handlePhotoURLChange}
            />
          </form>
        </div>
      </div>
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full w-full"
        onClick={handleUpdateProfile}
      >
        Update Profile
      </button>
    </div>
  );
};

export default Setting;
