import { useContext } from "react";
import Usercontext from "../context/UserContext";
function Profile() {
  const { user } = useContext(Usercontext);

  if (!user) return <div>Loading...</div>;
  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
      {user.name}
    </div>
  );
}
export default Profile;
