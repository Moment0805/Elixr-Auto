import { useState } from 'react';
import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { CheckCircle, MapPin, Gauge, Calendar, Search } from 'lucide-react';

export default function ListingsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedMake, setSelectedMake] = useState('all');
  const [selectedYear, setSelectedYear] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');

  const listings = [
    {
      id: 1,
      title: '2023 Mercedes-Benz S-Class',
      make: 'Mercedes-Benz',
      price: '₦85,000,000',
      image: 'https://images.unsplash.com/photo-1650256213562-487db281610b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFjayUyMGx1eHVyeSUyMHNlZGFufGVufDF8fHx8MTc2MTQzODMyNnww&ixlib=rb-4.1.0&q=80&w=1080',
      year: '2023',
      mileage: '8,500 km',
      transmission: 'Automatic',
      location: 'Lagos',
      condition: 'Excellent',
      verified: true,
    },
    {
      id: 2,
      title: '2022 Range Rover Sport',
      make: 'Land Rover',
      price: '₦72,000,000',
      image: 'https://images.unsplash.com/photo-1570829194611-71a926d70ff8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBzdXYlMjBjYXJ8ZW58MXx8fHwxNzYxNDEyMzQ4fDA&ixlib=rb-4.1.0&q=80&w=1080',
      year: '2022',
      mileage: '15,000 km',
      transmission: 'Automatic',
      location: 'Abuja',
      condition: 'Excellent',
      verified: true,
    },
    {
      id: 3,
      title: '2024 Porsche 911 Carrera',
      make: 'Porsche',
      price: '₦95,000,000',
      image: 'https://images.unsplash.com/photo-1517153192978-b2e379ac0710?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjBjYXIlMjBnb2xkfGVufDF8fHx8MTc2MTQzOTA1NHww&ixlib=rb-4.1.0&q=80&w=1080',
      year: '2024',
      mileage: '2,000 km',
      transmission: 'Automatic',
      location: 'Lagos',
      condition: 'Brand New',
      verified: true,
    },
    {
      id: 4,
      title: '2021 Toyota Camry XLE',
      make: 'Toyota',
      price: '₦18,500,000',
      image: 'https://images.unsplash.com/photo-1624578571415-09e9b1991929?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0b3lvdGElMjBjYW1yeSUyMHNlZGFufGVufDF8fHx8MTc2MTQzMDM5MXww&ixlib=rb-4.1.0&q=80&w=1080',
      year: '2021',
      mileage: '32,000 km',
      transmission: 'Automatic',
      location: 'Port Harcourt',
      condition: 'Very Good',
      verified: true,
    },
    {
      id: 5,
      title: '2023 Honda Accord Touring',
      make: 'Honda',
      price: '₦22,000,000',
      image: 'https://images.unsplash.com/photo-1718037322646-065357b8173b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob25kYSUyMGFjY29yZCUyMGNhcnxlbnwxfHx8fDE3NjE0MzkxNzl8MA&ixlib=rb-4.1.0&q=80&w=1080',
      year: '2023',
      mileage: '12,000 km',
      transmission: 'Automatic',
      location: 'Lagos',
      condition: 'Excellent',
      verified: true,
    },
    {
      id: 6,
      title: '2022 Lexus RX 350',
      make: 'Lexus',
      price: '₦45,000,000',
      image: 'https://images.unsplash.com/photo-1742941158083-be03727c216b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZXh1cyUyMHN1diUyMGx1eHVyeXxlbnwxfHx8fDE3NjE0MzkxNzl8MA&ixlib=rb-4.1.0&q=80&w=1080',
      year: '2022',
      mileage: '18,500 km',
      transmission: 'Automatic',
      location: 'Abuja',
      condition: 'Excellent',
      verified: true,
    },
    {
      id: 7,
      title: '2023 BMW 5 Series',
      make: 'BMW',
      price: '₦52,000,000',
      image: 'https://images.unsplash.com/photo-1734299388217-2ebc605ef43f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibXclMjBzZWRhbiUyMGJsYWNrfGVufDF8fHx8MTc2MTQzOTE3OXww&ixlib=rb-4.1.0&q=80&w=1080',
      year: '2023',
      mileage: '10,000 km',
      transmission: 'Automatic',
      location: 'Lagos',
      condition: 'Excellent',
      verified: true,
    },
    {
      id: 8,
      title: '2024 Audi A6',
      make: 'Audi',
      price: '₦58,000,000',
      image: 'https://images.unsplash.com/photo-1684155391823-15645c20d488?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdWRpJTIwbHV4dXJ5JTIwY2FyfGVufDF8fHx8MTc2MTQzOTE4MHww&ixlib=rb-4.1.0&q=80&w=1080',
      year: '2024',
      mileage: '5,000 km',
      transmission: 'Automatic',
      location: 'Abuja',
      condition: 'Brand New',
      verified: true,
    },
    {
      id: 9,
      title: '2023 Tesla Model 3',
      make: 'Tesla',
      price: '₦38,000,000',
      image: 'https://images.unsplash.com/photo-1610470850940-27b52ca7c0fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZXNsYSUyMGVsZWN0cmljJTIwY2FyfGVufDF8fHx8MTc2MTQwMzk4NXww&ixlib=rb-4.1.0&q=80&w=1080',
      year: '2023',
      mileage: '8,000 km',
      transmission: 'Automatic',
      location: 'Lagos',
      condition: 'Excellent',
      verified: true,
    },
  ];

  const filteredListings = listings.filter((listing) => {
    const matchesSearch = listing.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesMake = selectedMake === 'all' || listing.make === selectedMake;
    const matchesYear = selectedYear === 'all' || listing.year === selectedYear;
    const matchesLocation = selectedLocation === 'all' || listing.location === selectedLocation;
    
    return matchesSearch && matchesMake && matchesYear && matchesLocation;
  });

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <section className="bg-[#0C0C0C] text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl mb-4 text-white">
              Premium Vehicle Listings
            </h1>
            <p className="text-xl text-[#C0C0C0] max-w-2xl mx-auto">
              Browse our collection of verified vehicles from trusted dealers
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-gray-50 py-8 border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <Input
                placeholder="Search cars..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Make Filter */}
            <Select value={selectedMake} onValueChange={setSelectedMake}>
              <SelectTrigger>
                <SelectValue placeholder="All Makes" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Makes</SelectItem>
                <SelectItem value="Mercedes-Benz">Mercedes-Benz</SelectItem>
                <SelectItem value="Toyota">Toyota</SelectItem>
                <SelectItem value="Honda">Honda</SelectItem>
                <SelectItem value="BMW">BMW</SelectItem>
                <SelectItem value="Audi">Audi</SelectItem>
                <SelectItem value="Lexus">Lexus</SelectItem>
                <SelectItem value="Porsche">Porsche</SelectItem>
                <SelectItem value="Tesla">Tesla</SelectItem>
                <SelectItem value="Land Rover">Land Rover</SelectItem>
              </SelectContent>
            </Select>

            {/* Year Filter */}
            <Select value={selectedYear} onValueChange={setSelectedYear}>
              <SelectTrigger>
                <SelectValue placeholder="All Years" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Years</SelectItem>
                <SelectItem value="2024">2024</SelectItem>
                <SelectItem value="2023">2023</SelectItem>
                <SelectItem value="2022">2022</SelectItem>
                <SelectItem value="2021">2021</SelectItem>
                <SelectItem value="2020">2020</SelectItem>
              </SelectContent>
            </Select>

            {/* Location Filter */}
            <Select value={selectedLocation} onValueChange={setSelectedLocation}>
              <SelectTrigger>
                <SelectValue placeholder="All Locations" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Locations</SelectItem>
                <SelectItem value="Lagos">Lagos</SelectItem>
                <SelectItem value="Abuja">Abuja</SelectItem>
                <SelectItem value="Port Harcourt">Port Harcourt</SelectItem>
                <SelectItem value="Kano">Kano</SelectItem>
                <SelectItem value="Ibadan">Ibadan</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="mt-4 text-gray-600">
            Showing {filteredListings.length} of {listings.length} vehicles
          </div>
        </div>
      </section>

      {/* Listings Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {filteredListings.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredListings.map((listing) => (
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
                        <span>{listing.location}, Nigeria</span>
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
          ) : (
            <div className="text-center py-16">
              <p className="text-xl text-gray-600">No vehicles found matching your filters.</p>
              <Button
                className="mt-4 bg-[#D4AF37] text-[#0C0C0C] hover:bg-[#C0C0C0]"
                onClick={() => {
                  setSearchQuery('');
                  setSelectedMake('all');
                  setSelectedYear('all');
                  setSelectedLocation('all');
                }}
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#D4AF37] py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl mb-4 text-[#0C0C0C]">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-lg text-[#0C0C0C] mb-6">
            Contact us and we'll help you find your perfect vehicle
          </p>
          <Button
            className="bg-[#0C0C0C] text-white hover:bg-[#0C0C0C]/90"
            onClick={() => window.open('https://wa.me/2348138964310', '_blank')}
          >
            WhatsApp Us Now
          </Button>
        </div>
      </section>
    </div>
  );
}
