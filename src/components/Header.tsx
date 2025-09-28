import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">eS</span>
            </div>
            <span className="font-semibold text-xl text-gray-900">eSatya</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-primary transition-colors">Home</a>
            <a href="#" className="text-gray-700 hover:text-primary transition-colors">About</a>
            <a href="#" className="text-gray-700 hover:text-primary transition-colors">Features</a>
            <a href="#" className="text-gray-700 hover:text-primary transition-colors">Demo</a>
            <a href="#" className="text-gray-700 hover:text-primary transition-colors">Pricing</a>
            <a href="#" className="text-gray-700 hover:text-primary transition-colors">Contact</a>
          </nav>
          
          <div className="flex items-center space-x-4">
            <Link to="/login">
              <Button variant="ghost" className="text-gray-700">Login</Button>
            </Link>
            <Button className="bg-primary hover:bg-primary/90">Get Started</Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;