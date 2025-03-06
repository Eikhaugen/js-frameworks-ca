import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-100 py-4">
      <div className="container mx-auto flex items-center justify-between px-4">
        <img src="/RainyDays_Logo.png" alt="Rainy Days Logo" className="w-12" />
        <span className="text-sm text-gray-600">© 2025</span>
        <Link to="contact/" className="hover:underline">
          Contact
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
