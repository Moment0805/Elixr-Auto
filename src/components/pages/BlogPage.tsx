import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { Button } from '../ui/button';

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: '10 Essential Tips for First-Time Car Buyers in Nigeria',
      excerpt: 'Buying your first car can be overwhelming. Here are our top tips to help you make the right choice and avoid common pitfalls.',
      image: 'https://images.unsplash.com/photo-1538575207325-5a2505373ba4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBkZWFsZXJzaGlwJTIwdHJ1c3R8ZW58MXx8fHwxNzYxNDM5MDU0fDA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Buying Guide',
      author: 'ElixirAutoX Team',
      date: 'October 20, 2025',
      readTime: '5 min read',
    },
    {
      id: 2,
      title: 'How to Verify a Car Dealer: Red Flags to Watch Out For',
      excerpt: 'Learn the warning signs of fraudulent dealers and how ElixirAutoX protects buyers through our verification process.',
      image: 'https://images.unsplash.com/photo-1705747401901-28363172fe7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjYXIlMjBzaG93cm9vbXxlbnwxfHx8fDE3NjEzOTEzODN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Safety',
      author: 'Sarah Johnson',
      date: 'October 18, 2025',
      readTime: '7 min read',
    },
    {
      id: 3,
      title: 'The Ultimate Guide to Car Maintenance in Nigeria',
      excerpt: 'Keep your vehicle running smoothly with these essential maintenance tips tailored for Nigerian roads and climate.',
      image: 'https://images.unsplash.com/photo-1730453075684-2ad6232ab451?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBtYWludGVuYW5jZSUyMG1lY2hhbmljfGVufDF8fHx8MTc2MTQzOTMwN3ww&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Maintenance',
      author: 'Michael Obi',
      date: 'October 15, 2025',
      readTime: '8 min read',
    },
    {
      id: 4,
      title: 'Luxury vs. Economy: Which Car is Right for You?',
      excerpt: 'Understanding your needs and budget to make the best decision when choosing between luxury and economy vehicles.',
      image: 'https://images.unsplash.com/photo-1650256213562-487db281610b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFjayUyMGx1eHVyeSUyMHNlZGFufGVufDF8fHx8MTc2MTQzODMyNnww&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Buying Guide',
      author: 'Amina Ibrahim',
      date: 'October 12, 2025',
      readTime: '6 min read',
    },
    {
      id: 5,
      title: 'Understanding Car Import Duties in Nigeria',
      excerpt: 'A comprehensive breakdown of import duties, clearing costs, and what to expect when importing a vehicle.',
      image: 'https://images.unsplash.com/photo-1570829194611-71a926d70ff8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBzdXYlMjBjYXJ8ZW58MXx8fHwxNzYxNDEyMzQ4fDA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Finance',
      author: 'David Okeke',
      date: 'October 10, 2025',
      readTime: '10 min read',
    },
    {
      id: 6,
      title: 'The Future of Automotive Transactions: Crypto Payments',
      excerpt: 'Exploring how cryptocurrency is set to revolutionize car buying and selling in Africa.',
      image: 'https://images.unsplash.com/photo-1584232992172-29cead8e5230?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcnlwdG9jdXJyZW5jeSUyMGJpdGNvaW58ZW58MXx8fHwxNzYxNDE3ODIwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Technology',
      author: 'ElixirAutoX Team',
      date: 'October 8, 2025',
      readTime: '6 min read',
    },
  ];

  const categories = ['All', 'Buying Guide', 'Safety', 'Maintenance', 'Finance', 'Technology'];

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <section className="bg-[#0C0C0C] text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl mb-4 text-white">
              Insights & Articles
            </h1>
            <p className="text-xl text-[#C0C0C0] max-w-2xl mx-auto">
              Expert tips, industry insights, and guides for car buyers and dealers
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <Badge
                key={category}
                className="bg-white border-[#D4AF37] text-[#0C0C0C] hover:bg-[#D4AF37] hover:text-white cursor-pointer px-4 py-2"
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <Badge className="bg-[#D4AF37] text-[#0C0C0C] mb-4">Featured</Badge>
            <Card className="overflow-hidden border-[#D4AF37]">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                <ImageWithFallback
                  src={blogPosts[0].image}
                  alt={blogPosts[0].title}
                  className="w-full h-full object-cover min-h-[300px]"
                />
                <CardContent className="p-8 flex flex-col justify-center">
                  <Badge className="bg-[#D4AF37] text-[#0C0C0C] w-fit mb-4">
                    {blogPosts[0].category}
                  </Badge>
                  <h2 className="text-2xl md:text-3xl mb-4 text-[#0C0C0C]">
                    {blogPosts[0].title}
                  </h2>
                  <p className="text-gray-700 mb-4">
                    {blogPosts[0].excerpt}
                  </p>
                  <div className="flex items-center text-sm text-gray-500 mb-6 flex-wrap gap-4">
                    <div className="flex items-center">
                      <User size={16} className="mr-2" />
                      {blogPosts[0].author}
                    </div>
                    <div className="flex items-center">
                      <Calendar size={16} className="mr-2" />
                      {blogPosts[0].date}
                    </div>
                    <span>{blogPosts[0].readTime}</span>
                  </div>
                  <Button className="bg-[#D4AF37] text-[#0C0C0C] hover:bg-[#C0C0C0] w-fit">
                    Read Article <ArrowRight size={16} className="ml-2" />
                  </Button>
                </CardContent>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* All Posts */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl mb-8 text-[#0C0C0C]">
            Latest Articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post) => (
              <Card key={post.id} className="overflow-hidden hover:shadow-xl transition-shadow border-[#D4AF37]/20">
                <ImageWithFallback
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-6">
                  <Badge className="bg-[#D4AF37] text-[#0C0C0C] mb-3">
                    {post.category}
                  </Badge>
                  <h3 className="text-xl mb-3 text-[#0C0C0C]">
                    {post.title}
                  </h3>
                  <p className="text-gray-700 mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center text-xs text-gray-500 mb-4 flex-wrap gap-2">
                    <div className="flex items-center">
                      <User size={14} className="mr-1" />
                      {post.author}
                    </div>
                    <span>•</span>
                    <div className="flex items-center">
                      <Calendar size={14} className="mr-1" />
                      {post.date}
                    </div>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <Button variant="outline" className="border-[#D4AF37] text-[#0C0C0C] hover:bg-[#D4AF37] hover:text-white w-full">
                    Read More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-[#D4AF37]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl mb-4 text-[#0C0C0C]">
              Stay Updated
            </h2>
            <p className="text-lg text-[#0C0C0C] mb-6">
              Subscribe to our newsletter for the latest automotive insights, tips, and exclusive deals
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded border-0"
              />
              <Button className="bg-[#0C0C0C] text-white hover:bg-[#0C0C0C]/90">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Content */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-gray-700">
              <strong>Keywords:</strong> car dealers Nigeria, trusted auto marketplace, car buying tips Nigeria, 
              vehicle maintenance guide, luxury cars Africa, verified car dealers, automotive insights, 
              car import Nigeria, crypto car payments, ElixirAutoX blog
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
