import { Card, CardContent } from '../ui/card';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Shield, Target, TrendingUp, Award } from 'lucide-react';

export default function AboutPage() {
  const values = [
    {
      icon: Shield,
      title: 'Integrity',
      description: 'We build trust through transparency and honesty in every transaction.',
    },
    {
      icon: Target,
      title: 'Precision',
      description: 'Every detail matters. We ensure accuracy in all listings and communications.',
    },
    {
      icon: TrendingUp,
      title: 'Innovation',
      description: 'Embracing technology to revolutionize the automotive marketplace.',
    },
    {
      icon: Award,
      title: 'Premium Experience',
      description: 'Delivering gold-standard service to both buyers and dealers.',
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[400px] overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1745421977200-77ced89731c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwYXV0b21vYmlsZXxlbnwxfHx8fDE3NjE0MzkwNTR8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Premium automobiles"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#0C0C0C]/70"></div>
        </div>

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="max-w-3xl text-white">
            <h1 className="text-4xl md:text-5xl mb-4 text-white">
              About ElixirAutoX
            </h1>
            <p className="text-xl text-[#C0C0C0]">
              Redefining automotive transactions through trust, technology, and premium experiences
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl mb-6 text-[#0C0C0C] text-center">
              Our Story
            </h2>
            <div className="space-y-6 text-lg text-gray-700">
              <p>
                ElixirAutoX was born from a simple yet powerful vision: to create a trusted 
                marketplace where car buyers and dealers can connect with complete confidence. 
                We saw a gap in the African automotive market—a lack of transparency, verification, 
                and trust that left both buyers and sellers vulnerable.
              </p>
              <p>
                Our platform bridges this gap by implementing rigorous dealer verification processes, 
                ensuring every listing is accurate and authentic, and facilitating seamless 
                communication between all parties. We don't just connect people with cars; 
                we connect them with peace of mind.
              </p>
              <p>
                Today, ElixirAutoX stands as the gold standard in automotive deals, trusted by 
                thousands of buyers and hundreds of verified dealers across Africa. We're not 
                just building a marketplace—we're building a movement toward transparent, 
                technology-driven automotive commerce.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <Card className="border-[#D4AF37] border-2">
              <CardContent className="pt-8 text-center">
                <div className="w-20 h-20 bg-[#D4AF37] rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="text-[#0C0C0C]" size={40} />
                </div>
                <h3 className="text-2xl mb-4 text-[#0C0C0C]">Our Vision</h3>
                <p className="text-gray-700 text-lg">
                  To redefine auto transactions in Africa through trust and technology, 
                  becoming the most trusted automotive marketplace on the continent.
                </p>
              </CardContent>
            </Card>

            <Card className="border-[#D4AF37] border-2">
              <CardContent className="pt-8 text-center">
                <div className="w-20 h-20 bg-[#D4AF37] rounded-full flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="text-[#0C0C0C]" size={40} />
                </div>
                <h3 className="text-2xl mb-4 text-[#0C0C0C]">Our Mission</h3>
                <p className="text-gray-700 text-lg">
                  To build trust between car buyers and verified dealers by providing accurate 
                  information, seamless communication, and innovative payment solutions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-[#0C0C0C] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4 text-[#D4AF37]">
              Our Core Values
            </h2>
            <p className="text-lg text-[#C0C0C0] max-w-2xl mx-auto">
              The principles that guide everything we do at ElixirAutoX
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="bg-white/5 border-[#D4AF37]/20 hover:bg-white/10 transition-colors">
                <CardContent className="pt-6 text-center">
                  <div className="w-16 h-16 bg-[#D4AF37] rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="text-[#0C0C0C]" size={32} />
                  </div>
                  <h3 className="text-xl mb-3 text-[#D4AF37]">{value.title}</h3>
                  <p className="text-[#C0C0C0]">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Founder's Message */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card className="border-[#D4AF37]/20">
              <CardContent className="pt-8">
                <div className="text-center mb-8">
                  <h2 className="text-3xl mb-2 text-[#0C0C0C]">A Message from Our Founder</h2>
                  <div className="w-24 h-1 bg-[#D4AF37] mx-auto"></div>
                </div>
                <div className="space-y-4 text-gray-700 text-lg">
                  <p>
                    "When I started ElixirAutoX, I had one simple goal: to make car buying and 
                    selling in Africa as trustworthy and seamless as it should be. Too many people 
                    have been burned by fake listings, dishonest dealers, and unclear transactions.
                  </p>
                  <p>
                    We're changing that narrative. Every dealer on our platform is verified. 
                    Every listing is checked for accuracy. Every transaction is built on trust 
                    and transparency.
                  </p>
                  <p>
                    As we grow, we remain committed to our founding principles: integrity, 
                    precision, and premium experiences for everyone. Whether you're buying 
                    your first car or your tenth, whether you're a dealer just starting out 
                    or running an established showroom—ElixirAutoX is here to elevate your 
                    experience to the gold standard.
                  </p>
                  <p>
                    Thank you for trusting us with your automotive journey."
                  </p>
                </div>
                <div className="mt-8 text-center">
                  <p className="text-[#0C0C0C]">ElixirAutoX Team</p>
                  <p className="text-sm text-gray-500">Founder & CEO</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-[#D4AF37]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl text-[#0C0C0C] mb-2">500+</div>
              <div className="text-[#0C0C0C]">Verified Dealers</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl text-[#0C0C0C] mb-2">2,000+</div>
              <div className="text-[#0C0C0C]">Premium Listings</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl text-[#0C0C0C] mb-2">10,000+</div>
              <div className="text-[#0C0C0C]">Happy Customers</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl text-[#0C0C0C] mb-2">100%</div>
              <div className="text-[#0C0C0C]">Verified Listings</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
