
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar, BookOpen } from 'lucide-react';

const BlogPosts = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Comment réussir son orientation post-bac ?",
      excerpt: "Découvrez les clés pour choisir la formation qui correspond à vos ambitions et à votre profil.",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      date: "05 mai 2023",
      readTime: "5 min de lecture"
    },
    {
      id: 2,
      title: "Les métiers d'avenir : quelles formations privilégier ?",
      excerpt: "Intelligence artificielle, développement durable, santé... Les secteurs qui recrutent et les formations pour y accéder.",
      image: "https://images.unsplash.com/photo-1581091877018-dac6a371d50f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      date: "18 avril 2023",
      readTime: "7 min de lecture"
    },
    {
      id: 3,
      title: "Comment financer ses études supérieures ?",
      excerpt: "Bourses, prêts étudiants, alternance... Toutes les solutions pour financer votre parcours académique.",
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      date: "03 mars 2023",
      readTime: "6 min de lecture"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy-800 mb-4">
            Nos derniers articles
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Découvrez nos conseils et analyses pour vous accompagner tout au long de votre parcours.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {blogPosts.map((post) => (
            <Card 
              key={post.id} 
              className="overflow-hidden border-none shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardHeader>
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <BookOpen className="h-4 w-4 mr-1" />
                  <span>{post.readTime}</span>
                </div>
                <CardTitle className="font-serif text-xl text-navy-800 line-clamp-2">
                  {post.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 line-clamp-3">
                  {post.excerpt}
                </CardDescription>
              </CardContent>
              <CardFooter>
                <Button variant="link" className="p-0 h-auto font-medium text-navy-700 hover:text-navy-900">
                  Lire l'article
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button className="bg-navy-700 hover:bg-navy-800 text-white font-medium px-6 py-6">
            Accéder à tous nos articles
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogPosts;
