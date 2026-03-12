import { Link } from "react-router";

function Header() {
  return (
    <div className="bg-blue-600 text-white p-4 flex justify-center gap-10 text-xl">

      <Link to="/">Home</Link>
      <Link to="/test1">Test1</Link>
      <Link to="/test2">Test2</Link>
      <Link to="/taskmanager">TaskManager</Link>
      <Link to="/sideeffects">UsersAPI</Link>
      <Link to="/form">FormDemo</Link>

    </div>
  );
}

export default Header;