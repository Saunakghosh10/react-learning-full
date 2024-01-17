import { useParams } from "react-router-dom";
function User() {
  const { userid } = useParams();

  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
      user : {userid}
    </div>
  );
}
export default User;
