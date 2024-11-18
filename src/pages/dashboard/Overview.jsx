import useAuth from "../../hooks/useAuth";

const Overview = () => {
  const { user } = useAuth();

  return (
    <div className="flex justify-center items-center min-h-screen">
      <h2 className="text-3xl font-bold text-gray-700">{user.email}</h2>
    </div>
  );
};

export default Overview;
