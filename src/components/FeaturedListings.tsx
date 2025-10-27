import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { CheckCircle, MapPin, Gauge, Calendar } from 'lucide-react';

export default function FeaturedListings() {
  const listings = [
    {
      id: 1,
      title: '2023 Mercedes-Benz S-Class',
      price: '₦85,000,000',
      image: 'https://images.unsplash.com/photo-1650256213562-487db281610b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFjayUyMGx1eHVyeSUyMHNlZGFufGVufDF8fHx8MTc2MTQzODMyNnww&ixlib=rb-4.1.0&q=80&w=1080',
      year: '2023',
      mileage: '8,500 km',
      transmission: 'Automatic',
      location: 'Lagos, Nigeria',
      condition: 'Excellent',
      verified: true,
    },
    {
      id: 2,
      title: '2022 Range Rover Sport',
      price: '₦72,000,000',
      image: 'https://images.unsplash.com/photo-1570829194611-71a926d70ff8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBzdXYlMjBjYXJ8ZW58MXx8fHwxNzYxNDEyMzQ4fDA&ixlib=rb-4.1.0&q=80&w=1080',
      year: '2022',
      mileage: '15,000 km',
      transmission: 'Automatic',
      location: 'Abuja, Nigeria',
      condition: 'Excellent',
      verified: true,
    },
    {
      id: 3,
      title: '2024 Porsche 911 Carrera',
      price: '₦95,000,000',
      image: 'https://images.unsplash.com/photo-1517153192978-b2e379ac0710?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjBjYXIlMjBnb2xkfGVufDF8fHx8MTc2MTQzOTA1NHww&ixlib=rb-4.1.0&q=80&w=1080',
      year: '2024',
      mileage: '2,000 km',
      transmission: 'Automatic',
      location: 'Lagos, Nigeria',
      condition: 'Brand New',
      verified: true,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {listings.map((listing) => (
        <Card key={listing.id} className="overflow-hidden hover:shadow-xl transition-shadow border-[#D4AF37]/20">
          <div className="relative">
            <ImageWithFallback
              src={listing.image}
              alt={listing.title}
              className="w-full h-64 object-cover"
            />
            {listing.verified && (
              <Badge className="absolute top-4 right-4 bg-[#D4AF37] text-[#0C0C0C] border-0">
                <CheckCircle size={14} className="mr-1" />
                Verified
              </Badge>
            )}
            <Badge className="absolute top-4 left-4 bg-[#0C0C0C] text-white border-0">
              {listing.condition}
            </Badge>
          </div>

          <CardContent className="p-6">
            <h3 className="text-xl mb-2 text-[#0C0C0C]">{listing.title}</h3>
            <p className="text-2xl text-[#D4AF37] mb-4">{listing.price}</p>

            <div className="space-y-2 mb-4">
              <div className="flex items-center text-gray-600 text-sm">
                <Calendar size={16} className="mr-2" />
                <span>{listing.year}</span>
              </div>
              <div className="flex items-center text-gray-600 text-sm">
                <Gauge size={16} className="mr-2" />
                <span>{listing.mileage} • {listing.transmission}</span>
              </div>
              <div className="flex items-center text-gray-600 text-sm">
                <MapPin size={16} className="mr-2" />
                <span>{listing.location}</span>
              </div>
            </div>

            <Button
              className="w-full bg-[#D4AF37] text-[#0C0C0C] hover:bg-[#C0C0C0]"
              onClick={() => window.open('https://wa.me/2348138964310', '_blank')}
            >
              Contact Dealer
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
