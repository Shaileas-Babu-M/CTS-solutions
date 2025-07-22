import { Link, useLocation } from "wouter";
import { Atom, Bell, User } from "lucide-react";

export default function Header() {
  const [location] = useLocation();

  const navItems = [
    { path: "/", label: "Dashboard", active: location === "/" },
    { path: "/projects", label: "Projects", active: false },
    { path: "/docs", label: "Documentation", active: false },
  ];

  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-8">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Atom className="text-white w-4 h-4" />
              </div>
              <h1 className="text-xl font-semibold text-neutral-800">React Learning Hub</h1>
            </Link>
            <nav className="hidden md:flex space-x-6">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`pb-1 px-1 text-sm font-medium transition-colors ${
                    item.active
                      ? "text-primary border-b-2 border-primary"
                      : "text-gray-500 hover:text-neutral-800"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <button className="text-gray-500 hover:text-neutral-800">
              <Bell className="w-5 h-5" />
            </button>
            <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
              <User className="text-gray-600 w-4 h-4" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
