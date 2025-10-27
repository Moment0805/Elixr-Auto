import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Card, CardContent } from '../ui/card';
import { CheckCircle, Shield, Zap, Coins, Star } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import FeaturedListings from '../FeaturedListings';

export default function HomePage() {
  const features = [
    {
      icon: Shield,
      title: 'Verified Dealers',
      description: 'Every dealer is thoroughly vetted and verified for your peace of mind.',
    },
    {
      icon: Zap,
      title: 'Fast Communication',
      description: 'Connect instantly with dealers via WhatsApp or our platform.',
    },
    {
      icon: Coins,
      title: 'Crypto Ready',
      description: 'Future-ready payment options including cryptocurrency integration.',
    },
    {
      icon: CheckCircle,
      title: 'Accurate Info',
      description: 'All listings are verified with accurate details and real photos.',
    },
  ];

  const testimonials = [
    {
      name: 'Chidi Okonkwo',
      role: 'Car Buyer',
      text: 'ElixirAutoX made finding my dream car so easy. The dealers are professional and trustworthy!',
      rating: 5,
    },
    {
      name: 'Amina Ibrahim',
      role: 'Verified Dealer',
      text: 'Best platform for reaching serious buyers. The verification process builds trust instantly.',
      rating: 5,
    },
    {
      name: 'David Okeke',
      role: 'First-time Buyer',
      text: 'I was nervous about buying a car online, but ElixirAutoX gave me complete confidence.',
      rating: 5,
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[600px] md:h-[700px] overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1705747401901-28363172fe7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjYXIlMjBzaG93cm9vbXxlbnwxfHx8fDE3NjEzOTEzODN8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Luxury car showroom"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0C0C0C]/90 to-[#0C0C0C]/50"></div>
        </div>

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="max-w-2xl text-white">
            <Badge className="bg-[#D4AF37] text-[#0C0C0C] mb-4 border-0">
              Trusted Marketplace
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6 text-white">
              The Gold Standard in Deals
            </h1>
            <p className="text-lg md:text-xl text-[#C0C0C0] mb-8">
              Connect with verified dealers and discover premium vehicles across Africa. 
              Trust, transparency, and technology combined.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/listings">
                <Button className="bg-[#D4AF37] text-[#0C0C0C] hover:bg-[#C0C0C0] px-8 py-6">
                  View Verified Cars
                </Button>
              </Link>
              <Link to="/dealer-signup">
                <Button variant="outline" className="border-[#D4AF37] text-white hover:bg-[#D4AF37] hover:text-[#0C0C0C] px-8 py-6">
                  Join as Dealer
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl mb-6 text-[#0C0C0C]">
              About ElixirAutoX
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              ElixirAutoX is revolutionizing the automotive marketplace in Africa by building 
              a trusted bridge between car buyers and verified dealers. We believe in transparency, 
              precision, and premium experiences for everyone.
            </p>
            <p className="text-lg text-gray-700 mb-8">
              Our mission is to redefine auto transactions through trust and technology, making 
              every deal the gold standard.
            </p>
            <Link to="/about">
              <Button variant="outline" className="border-[#D4AF37] text-[#0C0C0C] hover:bg-[#D4AF37] hover:text-white">
                Learn More About Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Listings */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4 text-[#0C0C0C]">
              Featured Listings
            </h2>
            <p className="text-lg text-gray-700">
              Explore our handpicked selection of premium verified vehicles
            </p>
          </div>
          <FeaturedListings />
          <div className="text-center mt-8">
            <Link to="/listings">
              <Button className="bg-[#D4AF37] text-[#0C0C0C] hover:bg-[#C0C0C0]">
                View All Listings
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose ElixirAutoX */}
      <section className="py-16 bg-[#0C0C0C] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4 text-[#D4AF37]">
              Why Choose ElixirAutoX
            </h2>
            <p className="text-lg text-[#C0C0C0]">
              We set the gold standard in automotive deals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="bg-white/5 border-[#D4AF37]/20 hover:bg-white/10 transition-colors">
                <CardContent className="pt-6 text-center">
                  <div className="w-16 h-16 bg-[#D4AF37] rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="text-[#0C0C0C]" size={32} />
                  </div>
                  <h3 className="text-xl mb-3 text-[#D4AF37]">{feature.title}</h3>
                  <p className="text-[#C0C0C0]">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4 text-[#0C0C0C]">
              What Our Customers Say
            </h2>
            <p className="text-lg text-gray-700">
              Real experiences from real people
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-[#D4AF37]/20">
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="fill-[#D4AF37] text-[#D4AF37]" size={20} />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                  <div>
                    <p className="text-[#0C0C0C]">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#D4AF37]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl mb-4 text-[#0C0C0C]">
            Ready to Find Your Perfect Car?
          </h2>
          <p className="text-lg text-[#0C0C0C] mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who found their dream vehicles through 
            verified dealers on ElixirAutoX.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/listings">
              <Button className="bg-[#0C0C0C] text-white hover:bg-[#0C0C0C]/90 px-8 py-6">
                Browse Cars Now
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" className="border-[#0C0C0C] text-[#0C0C0C] hover:bg-[#0C0C0C] hover:text-white px-8 py-6">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
