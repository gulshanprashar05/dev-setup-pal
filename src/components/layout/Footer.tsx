import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-700 py-8 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-2">
            <h3 className="text-lg font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">ReuniFi</h3>
            <span className="text-slate-300">-</span>
            <span className="text-slate-300">Connecting Past, Empowering Future</span>
          </div>
          
          <div className="flex items-center space-x-1 text-slate-300">
            <span>© 2025 ReuniFi - Smart India Hackathon 2025. All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;