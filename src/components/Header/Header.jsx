import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full h-[150px] flex flex-col items-center justify-center gap-3">
      <h1 className="text-3xl font-bold">Pokemon App</h1>
      <p>Built With Guntur And React JS</p>
      <div className="flex gap-3">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </div>
    </header>
  );
};

export default Header;
