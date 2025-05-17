
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      quote: "Grâce à l'accompagnement personnalisé reçu, j'ai intégré l'école d'ingénieur de mes rêves. Les conseils et le suivi ont été déterminants dans ma réussite.",
      author: "Marie Dupont",
      position: "Étudiante en école d'ingénieur",
      image: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      id: 2,
      quote: "La préparation aux concours était d'une qualité exceptionnelle. Les méthodes de travail et la rigueur acquises sont des atouts majeurs pour ma carrière.",
      author: "Thomas Laurent",
      position: "Étudiant en école de commerce",
      image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      id: 3,
      quote: "En tant que responsable RH, j'ai pu établir des partenariats solides pour recruter des talents parfaitement formés aux besoins spécifiques de notre entreprise.",
      author: "Sophie Martin",
      position: "Responsable RH, Tech Solutions",
      image: "https://randomuser.me/api/portraits/women/68.jpg"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy-800 mb-4">
            Ils nous font confiance
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Découvrez les témoignages de nos étudiants et partenaires professionnels.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="overflow-hidden border-none shadow-lg">
              <CardContent className="p-8 bg-white relative">
                <div className="absolute -top-4 -left-4 text-gold-500 text-6xl opacity-20">"</div>
                <p className="text-gray-700 mb-6 relative z-10">"{testimonial.quote}"</p>
                
                <div className="flex items-center">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.author} 
                    className="w-12 h-12 rounded-full object-cover border-2 border-gold-300"
                  />
                  <div className="ml-4">
                    <h4 className="font-medium text-navy-800">{testimonial.author}</h4>
                    <p className="text-sm text-gray-600">{testimonial.position}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
