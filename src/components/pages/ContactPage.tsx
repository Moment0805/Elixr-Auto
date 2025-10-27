import { useState } from 'react';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import { MapPin, Phone, Mail, MessageCircle, Instagram, Twitter } from 'lucide-react';
import { toast } from 'sonner';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Message sent! We will get back to you within 24 hours.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    });
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <section className="bg-[#0C0C0C] text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl mb-4 text-white">
              Contact Us
            </h1>
            <p className="text-xl text-[#C0C0C0] max-w-2xl mx-auto">
              We're here to help. Reach out to us through any of the channels below.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl mb-6 text-[#0C0C0C]">
                Get in Touch
              </h2>
              <p className="text-gray-700 mb-8">
                Have questions about our platform, need help with a listing, or want to 
                become a verified dealer? We're here to assist you.
              </p>

              <div className="space-y-6">
                {/* WhatsApp */}
                <Card className="border-[#D4AF37]/20 hover:border-[#D4AF37] transition-colors">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-[#D4AF37] rounded-full flex items-center justify-center flex-shrink-0">
                        <MessageCircle className="text-[#0C0C0C]" size={24} />
                      </div>
                      <div>
                        <h3 className="text-lg mb-1 text-[#0C0C0C]">WhatsApp</h3>
                        <p className="text-gray-600 mb-2">
                          Get instant responses via WhatsApp
                        </p>
                        <a
                          href="https://wa.me/2348138964310"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#D4AF37] hover:underline"
                        >
                          +234 813 896 4310
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Phone */}
                <Card className="border-[#D4AF37]/20">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-[#D4AF37] rounded-full flex items-center justify-center flex-shrink-0">
                        <Phone className="text-[#0C0C0C]" size={24} />
                      </div>
                      <div>
                        <h3 className="text-lg mb-1 text-[#0C0C0C]">Phone</h3>
                        <p className="text-gray-600 mb-2">
                          Mon-Sat, 9AM-6PM WAT
                        </p>
                        <a
                          href="tel:+2348138964310"
                          className="text-[#D4AF37] hover:underline"
                        >
                          +234 813 896 4310
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Email */}
                <Card className="border-[#D4AF37]/20">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-[#D4AF37] rounded-full flex items-center justify-center flex-shrink-0">
                        <Mail className="text-[#0C0C0C]" size={24} />
                      </div>
                      <div>
                        <h3 className="text-lg mb-1 text-[#0C0C0C]">Email</h3>
                        <p className="text-gray-600 mb-2">
                          We'll respond within 24 hours
                        </p>
                        <a
                          href="mailto:info@elixirautox.com"
                          className="text-[#D4AF37] hover:underline"
                        >
                          info@elixirautox.com
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Location */}
                <Card className="border-[#D4AF37]/20">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-[#D4AF37] rounded-full flex items-center justify-center flex-shrink-0">
                        <MapPin className="text-[#0C0C0C]" size={24} />
                      </div>
                      <div>
                        <h3 className="text-lg mb-1 text-[#0C0C0C]">Office</h3>
                        <p className="text-gray-600">
                          Lagos, Nigeria
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Social Media */}
              <div className="mt-8">
                <h3 className="text-lg mb-4 text-[#0C0C0C]">Follow Us</h3>
                <div className="flex space-x-4">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-[#D4AF37] rounded-full flex items-center justify-center hover:bg-[#C0C0C0] transition-colors"
                  >
                    <Instagram className="text-[#0C0C0C]" size={24} />
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-[#D4AF37] rounded-full flex items-center justify-center hover:bg-[#C0C0C0] transition-colors"
                  >
                    <Twitter className="text-[#0C0C0C]" size={24} />
                  </a>
                  <a
                    href="https://wa.me/2348138964310"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-[#D4AF37] rounded-full flex items-center justify-center hover:bg-[#C0C0C0] transition-colors"
                  >
                    <MessageCircle className="text-[#0C0C0C]" size={24} />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="border-[#D4AF37]/20">
                <CardContent className="p-8">
                  <h2 className="text-2xl mb-6 text-[#0C0C0C]">
                    Send us a Message
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name */}
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your name"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="your@email.com"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="08012345678"
                      />
                    </div>

                    {/* Subject */}
                    <div>
                      <Label htmlFor="subject">Subject *</Label>
                      <Input
                        id="subject"
                        required
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        placeholder="How can we help?"
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us more about your inquiry..."
                        rows={6}
                      />
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      className="w-full bg-[#D4AF37] text-[#0C0C0C] hover:bg-[#C0C0C0] py-6"
                    >
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl text-center mb-12 text-[#0C0C0C]">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              <Card className="border-[#D4AF37]/20">
                <CardContent className="p-6">
                  <h3 className="text-lg mb-2 text-[#0C0C0C]">
                    How do I become a verified dealer?
                  </h3>
                  <p className="text-gray-700">
                    Visit our "Join as Dealer" page and fill out the application form. Our team 
                    will review your application and contact you within 24 hours to complete the 
                    verification process.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-[#D4AF37]/20">
                <CardContent className="p-6">
                  <h3 className="text-lg mb-2 text-[#0C0C0C]">
                    Is there a fee to browse cars?
                  </h3>
                  <p className="text-gray-700">
                    No, browsing and searching for vehicles on ElixirAutoX is completely free 
                    for buyers. You can view all listings and contact dealers at no cost.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-[#D4AF37]/20">
                <CardContent className="p-6">
                  <h3 className="text-lg mb-2 text-[#0C0C0C]">
                    How are dealers verified?
                  </h3>
                  <p className="text-gray-700">
                    We verify dealers through a thorough process including business documentation 
                    review, phone verification, and background checks to ensure legitimacy and 
                    trustworthiness.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-[#D4AF37]/20">
                <CardContent className="p-6">
                  <h3 className="text-lg mb-2 text-[#0C0C0C]">
                    When will crypto payments be available?
                  </h3>
                  <p className="text-gray-700">
                    We're currently developing our crypto payment integration. Register your 
                    interest on our Crypto page to be notified when this feature launches.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
