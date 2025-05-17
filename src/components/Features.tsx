
import React from 'react';
import { GraduationCap, Book, School, Briefcase } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Features = () => {
  const features = [
    {
      id: 'formations',
      icon: <Book className="h-8 w-8 text-gold-500" />,
      title: 'Formations',
      description: 'Des formations adaptées à tous les niveaux et à tous les objectifs professionnels.',
      items: [
        'Formation initiale et continue',
        'Certifications professionnelles',
        'Formations courtes et longues',
        'E-learning et présentiel'
      ]
    },
    {
      id: 'etudes',
      icon: <GraduationCap className="h-8 w-8 text-gold-500" />,
      title: 'Études',
      description: 'Des parcours d\'études pour développer vos compétences et votre expertise.',
      items: [
        'Licence, Master, Doctorat',
        'Programmes internationaux',
        'Double-diplômes',
        'Échanges universitaires'
      ]
    },
    {
      id: 'prepa',
      icon: <School className="h-8 w-8 text-gold-500" />,
      title: 'Classes Préparatoires',
      description: 'Préparez-vous efficacement aux concours des plus grandes écoles.',
      items: [
        'Prépa scientifique (MPSI, PCSI, PTSI)',
        'Prépa commerciale (ECG, ECT)',
        'Prépa littéraire (A/L, B/L)',
        'Accompagnement personnalisé'
      ]
    },
    {
      id: 'entreprise',
      icon: <Briefcase className="h-8 w-8 text-gold-500" />,
      title: 'Entreprises',
      description: 'Des solutions de formation adaptées aux besoins des entreprises.',
      items: [
        'Formation des collaborateurs',
        'Recrutement de talents',
        'Alternance et apprentissage',
        'Développement des compétences'
      ]
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy-800 mb-4">
            Nos domaines d'expertise
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Découvrez nos solutions complètes pour accompagner chaque étape de votre parcours académique et professionnel.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <Card 
              key={feature.id} 
              id={feature.id}
              className="border border-gray-200 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <CardHeader>
                <div className="mb-4">{feature.icon}</div>
                <CardTitle className="font-serif text-xl text-navy-700">{feature.title}</CardTitle>
                <CardDescription className="text-gray-600">{feature.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {feature.items.map((item, index) => (
                    <li key={index} className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-gold-500 mr-2"></div>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
                <Button variant="link" className="mt-6 text-navy-700 p-0 hover:text-navy-900">
                  En savoir plus →
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
