import RingLoader from "react-spinners/RingLoader";

const Loading = () => {
  return (
    <div className="w-full min-h-screen flex justify-center items-center">
      <RingLoader
        color={"0000"}
        loading={"loading"}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default Loading;
