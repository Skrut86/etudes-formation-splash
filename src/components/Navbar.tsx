
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { GraduationCap, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-sm shadow-md py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <a href="#" className="flex items-center gap-2">
          <GraduationCap size={32} className="text-navy-700" />
          <span className="font-serif font-bold text-2xl text-navy-800">
            Horizon <span className="text-gold-600">Études</span>
          </span>
        </a>

        {/* Mobile menu button */}
        <button
          className="lg:hidden focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6 text-navy-800" />
          ) : (
            <Menu className="h-6 w-6 text-navy-800" />
          )}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex gap-8 items-center">
          <a
            href="#formations"
            className="font-medium text-navy-800 hover:text-navy-600 transition-colors"
          >
            Formations
          </a>
          <a
            href="#etudes"
            className="font-medium text-navy-800 hover:text-navy-600 transition-colors"
          >
            Études
          </a>
          <a
            href="#prepa"
            className="font-medium text-navy-800 hover:text-navy-600 transition-colors"
          >
            Classes Prépa
          </a>
          <a
            href="#entreprise"
            className="font-medium text-navy-800 hover:text-navy-600 transition-colors"
          >
            Entreprises
          </a>
          <Button variant="outline" className="ml-2">
            Se connecter
          </Button>
          <Button className="bg-navy-700 hover:bg-navy-800 text-white">
            S'inscrire
          </Button>
        </nav>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 py-2 animate-fade-in">
          <div className="container mx-auto flex flex-col space-y-4 py-4">
            <a
              href="#formations"
              className="font-medium text-navy-800 hover:text-navy-600 transition-colors px-4 py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Formations
            </a>
            <a
              href="#etudes"
              className="font-medium text-navy-800 hover:text-navy-600 transition-colors px-4 py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Études
            </a>
            <a
              href="#prepa"
              className="font-medium text-navy-800 hover:text-navy-600 transition-colors px-4 py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Classes Prépa
            </a>
            <a
              href="#entreprise"
              className="font-medium text-navy-800 hover:text-navy-600 transition-colors px-4 py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Entreprises
            </a>
            <div className="flex flex-col space-y-2 px-4 pt-2">
              <Button variant="outline">Se connecter</Button>
              <Button className="bg-navy-700 hover:bg-navy-800 text-white">
                S'inscrire
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
