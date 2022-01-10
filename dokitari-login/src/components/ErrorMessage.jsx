const ErrorMessage = ({ message }) => {
  return (
    <p className="p-2 ring-1 ring-red-400 bg-red-100 text-xs rounded-md mt-4 text-center">
      {message}
    </p>
  );
};

export default ErrorMessage;
