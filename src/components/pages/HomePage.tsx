import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Card, CardContent } from '../ui/card';
import { CheckCircle, Shield, Zap, Coins, Star, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import FeaturedListings from '../FeaturedListings';
import SEO from '../SEO';

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.42, 0, 0.58, 1],
      },
    },
  };

  return (
    <div className="bg-white">
      <SEO
        title="The Gold Standard in Deals"
        description="Connect with verified dealers and discover premium vehicles across Africa. Trust, transparency, and technology combined."
        keywords="luxury cars, verified dealers, buy cars, Nigeria, premium vehicles, car marketplace"
        canonicalUrl="/"
      />

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
          <motion.div
            className="max-w-2xl text-white"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.div variants={itemVariants}>
              <Badge className="bg-[#D4AF37] text-[#0C0C0C] mb-4 border-0">
                Trusted Marketplace
              </Badge>
            </motion.div>
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl mb-6 text-white font-bold"
              variants={itemVariants}
            >
              The Gold Standard in Deals
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl text-[#C0C0C0] mb-8"
              variants={itemVariants}
            >
              Connect with verified dealers and discover premium vehicles across Africa.
              Trust, transparency, and technology combined.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              variants={itemVariants}
            >
              <Link to="/listings">
                <Button className="bg-[#D4AF37] text-[#0C0C0C] hover:bg-[#C0C0C0] px-8 py-6 text-lg group">
                  View Verified Cars
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </Button>
              </Link>
              <Link to="/dealer-signup">
                <Button variant="outline" className="border-2 border-[#D4AF37] text-white hover:bg-[#D4AF37] hover:text-[#0C0C0C] px-8 py-6 text-lg transition-all">
                  Join as Dealer
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <motion.section
        className="py-16 bg-gray-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl mb-6 text-[#0C0C0C] font-bold">
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
              <Button variant="outline" className="border-2 border-[#D4AF37] text-[#0C0C0C] hover:bg-[#D4AF37] hover:text-white transition-all">
                Learn More About Us
              </Button>
            </Link>
          </div>
        </div>
      </motion.section>

      <motion.section
        className="py-16 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4 text-[#0C0C0C] font-bold">
              Featured Listings
            </h2>
            <p className="text-lg text-gray-700">
              Explore our handpicked selection of premium verified vehicles
            </p>
          </div>
          <FeaturedListings />
          <div className="text-center mt-8">
            <Link to="/listings">
              <Button className="bg-[#D4AF37] text-[#0C0C0C] hover:bg-[#C0C0C0] px-8 py-6 text-lg group">
                View All Listings
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Button>
            </Link>
          </div>
        </div>
      </motion.section>

      <section className="py-16 bg-[#0C0C0C] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl md:text-4xl mb-4 text-[#D4AF37] font-bold">
              Why Choose ElixirAutoX
            </h2>
            <p className="text-lg text-[#C0C0C0]">
              We set the gold standard in automotive deals
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
          >
            {features.map((feature, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="bg-white/5 border-[#D4AF37]/20 hover:bg-white/10 transition-all h-full group hover:scale-105 duration-300">
                  <CardContent className="pt-6 text-center">
                    <motion.div
                      className="w-16 h-16 bg-[#D4AF37] rounded-full flex items-center justify-center mx-auto mb-4"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <feature.icon className="text-[#0C0C0C]" size={32} />
                    </motion.div>
                    <h3 className="text-xl mb-3 text-[#D4AF37] font-bold">{feature.title}</h3>
                    <p className="text-[#C0C0C0]">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <motion.section
        className="py-16 bg-gray-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4 text-[#0C0C0C] font-bold">
              What Our Customers Say
            </h2>
            <p className="text-lg text-gray-700">
              Real experiences from real people
            </p>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="border-[#D4AF37]/20 h-full hover:shadow-xl transition-shadow">
                  <CardContent className="pt-6">
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="fill-[#D4AF37] text-[#D4AF37]" size={20} />
                      ))}
                    </div>
                    <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                    <div>
                      <p className="text-[#0C0C0C] font-bold">{testimonial.name}</p>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        className="py-16 bg-[#D4AF37]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl mb-4 text-[#0C0C0C] font-bold">
            Ready to Find Your Perfect Car?
          </h2>
          <p className="text-lg text-[#0C0C0C] mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who found their dream vehicles through
            verified dealers on ElixirAutoX.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/listings">
              <Button className="bg-[#0C0C0C] text-white hover:bg-[#0C0C0C]/90 px-8 py-6 text-lg group">
                Browse Cars Now
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" className="border-2 border-[#0C0C0C] text-[#0C0C0C] hover:bg-[#0C0C0C] hover:text-white px-8 py-6 text-lg transition-all">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
