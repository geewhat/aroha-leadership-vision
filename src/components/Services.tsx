
import { Card, CardContent } from "@/components/ui/card";
import { Users, Heart, Building, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: <Users className="h-10 w-10 text-aroha-600" />,
      title: "Team Leadership",
      description: "Transform team performance, improve workplace dynamics, and build cohesive, high-functioning teams that achieve extraordinary results."
    },
    {
      icon: <Heart className="h-10 w-10 text-aroha-600" />,
      title: "Relationship Coaching",
      description: "Apply leadership principles to personal relationships, building stronger marriages, family connections, and interpersonal skills."
    },
    {
      icon: <Building className="h-10 w-10 text-aroha-600" />,
      title: "Business Leadership",
      description: "Develop the skills to lead your organization effectively, make better decisions, and create sustainable business growth."
    },
    {
      icon: <Brain className="h-10 w-10 text-aroha-600" />,
      title: "Personal Growth",
      description: "Overcome anxiety, fear, and overwhelm through proven practices that help you reach your full potential and achieve inner balance."
    }
  ];

  return (
    <section className="py-24 bg-aroha-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 opacity-0 animate-fade-up stagger-1">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-aroha-900">How I Can Help You</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            I work with individuals, teams, organisations, couples and families to transform 
            businesses, relationships and lives using the same effective leadership principles.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {services.map((service, index) => (
            <Card key={index} className="border border-aroha-100 shadow-sm opacity-0 animate-fade-up" style={{ animationDelay: `${0.2 + index * 0.1}s` }}>
              <CardContent className="pt-8">
                <div className="mb-5">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-aroha-800">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center opacity-0 animate-fade-up stagger-4">
          <Link to="/programs">
            <Button className="bg-aroha-600 hover:bg-aroha-700 text-white px-8 py-6 text-lg">
              View My Programs
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
