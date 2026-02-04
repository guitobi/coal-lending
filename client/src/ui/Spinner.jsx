function Spinner({ className = "h-5 w-5 border-2" }) {
  return (
    <div
      className={`animate-spin border-white border-t-transparent rounded-full ${className}`}
    ></div>
  );
}

export default Spinner;
