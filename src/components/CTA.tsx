
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-20 bg-navy-800 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
            Prêt à construire votre avenir ?
          </h2>
          
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Que vous souhaitiez poursuivre vos études, vous préparer aux concours des grandes écoles 
            ou développer vos compétences professionnelles, nous avons la solution adaptée à vos besoins.
          </p>
          
          <div className="pt-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 max-w-3xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex flex-col items-center p-4 bg-white/5 rounded-lg hover:bg-white/10 transition">
                  <span className="text-gold-400 text-4xl font-bold mb-2">400+</span>
                  <span className="text-gray-300 text-sm">Formations disponibles</span>
                </div>
                <div className="flex flex-col items-center p-4 bg-white/5 rounded-lg hover:bg-white/10 transition">
                  <span className="text-gold-400 text-4xl font-bold mb-2">95%</span>
                  <span className="text-gray-300 text-sm">Taux de réussite</span>
                </div>
                <div className="flex flex-col items-center p-4 bg-white/5 rounded-lg hover:bg-white/10 transition">
                  <span className="text-gold-400 text-4xl font-bold mb-2">50+</span>
                  <span className="text-gray-300 text-sm">Partenaires entreprises</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <Button className="bg-gold-500 hover:bg-gold-600 text-navy-900 font-medium text-lg px-6 py-6">
              Prendre rendez-vous avec un conseiller
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10 font-medium text-lg px-6 py-6">
              Télécharger notre catalogue
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
