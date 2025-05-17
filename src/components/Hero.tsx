
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-navy-900 to-navy-700 text-white pt-28 pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d')] bg-cover bg-center opacity-10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 space-y-6 animate-fade-in">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Construisez votre <span className="text-gold-400">avenir</span> académique et professionnel
            </h1>
            
            <p className="text-lg md:text-xl text-gray-200 max-w-xl">
              Découvrez les meilleures formations, parcours d'études, classes préparatoires et opportunités professionnelles adaptées à vos ambitions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button className="bg-gold-500 hover:bg-gold-600 text-navy-900 font-medium text-lg px-6 py-6">
                Explorer les parcours
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10 font-medium text-lg px-6 py-6">
                Prendre rendez-vous
              </Button>
            </div>
            
            <div className="flex items-center gap-4 pt-6">
              <div className="flex -space-x-4">
                <div className="w-10 h-10 rounded-full bg-navy-400 flex items-center justify-center text-white font-medium">+5k</div>
                <div className="w-10 h-10 rounded-full bg-navy-500 flex items-center justify-center text-white font-medium">+2k</div>
                <div className="w-10 h-10 rounded-full bg-navy-600 flex items-center justify-center text-white font-medium">+8k</div>
              </div>
              <p className="text-sm text-gray-300">
                Rejoignez plus de <span className="font-bold text-white">15,000</span> étudiants qui ont trouvé leur voie
              </p>
            </div>
          </div>
          
          <div className="lg:w-1/2 mt-10 lg:mt-0 lg:pl-10">
            <div className="relative bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 shadow-lg animate-fade-in">
              <h3 className="text-xl font-bold mb-4">Trouvez votre parcours idéal</h3>
              <div className="space-y-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-all cursor-pointer">
                  <h4 className="font-bold">Formation universitaire</h4>
                  <p className="text-sm text-gray-200 mt-1">Licence, Master, Doctorat dans les meilleures universités</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-all cursor-pointer">
                  <h4 className="font-bold">Classes préparatoires</h4>
                  <p className="text-sm text-gray-200 mt-1">Préparez-vous aux concours des grandes écoles</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-all cursor-pointer">
                  <h4 className="font-bold">Formation professionnelle</h4>
                  <p className="text-sm text-gray-200 mt-1">Développez des compétences recherchées par les entreprises</p>
                </div>
              </div>
              <div className="mt-4 text-center">
                <Button variant="link" className="text-gold-300 hover:text-gold-400">
                  Voir tous les parcours
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default Hero;
