import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-100 py-4">
      <div className="container mx-auto flex items-center justify-between px-4">
        <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
          Shop till you drop
        </span>
        <span className="text-sm text-gray-600">© 2025</span>
        <Link to="contact/" className="hover:underline">
          Contact
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
