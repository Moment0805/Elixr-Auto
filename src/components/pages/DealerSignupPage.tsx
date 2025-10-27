import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { CheckCircle, Upload } from 'lucide-react';
import { toast } from 'sonner';

export default function DealerSignupPage() {
  const [formData, setFormData] = useState({
    businessName: '',
    ownerName: '',
    email: '',
    phone: '',
    businessType: '',
    location: '',
    description: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Application submitted! We will contact you within 24 hours for verification.');
    // Reset form
    setFormData({
      businessName: '',
      ownerName: '',
      email: '',
      phone: '',
      businessType: '',
      location: '',
      description: '',
    });
  };

  const benefits = [
    'Reach thousands of verified buyers across Africa',
    'Professional dealer verification badge',
    'Unlimited vehicle listings',
    'Direct WhatsApp integration with buyers',
    'Analytics and insights dashboard',
    'Priority customer support',
    'Featured listing opportunities',
    'Future crypto payment integration',
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <section className="bg-[#0C0C0C] text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl mb-4 text-white">
              Join as a Verified Dealer
            </h1>
            <p className="text-xl text-[#C0C0C0]">
              Become part of Africa's most trusted automotive marketplace
            </p>
            <div className="mt-6 inline-block bg-[#D4AF37] text-[#0C0C0C] px-6 py-3 rounded">
              <span className="text-2xl">₦15,000</span>
              <span className="text-sm"> /month</span>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl text-center mb-8 text-[#0C0C0C]">
            Why Join ElixirAutoX?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="text-[#D4AF37] flex-shrink-0 mt-1" size={20} />
                <span className="text-gray-700">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <Card className="border-[#D4AF37]/20">
              <CardHeader>
                <CardTitle className="text-2xl text-[#0C0C0C]">
                  Dealer Application Form
                </CardTitle>
                <p className="text-gray-600">
                  Fill out the form below to start your verification process
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Business Name */}
                  <div>
                    <Label htmlFor="businessName">Business Name *</Label>
                    <Input
                      id="businessName"
                      required
                      value={formData.businessName}
                      onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                      placeholder="e.g., Premium Auto Dealership"
                    />
                  </div>

                  {/* Owner Name */}
                  <div>
                    <Label htmlFor="ownerName">Owner/Contact Name *</Label>
                    <Input
                      id="ownerName"
                      required
                      value={formData.ownerName}
                      onChange={(e) => setFormData({ ...formData, ownerName: e.target.value })}
                      placeholder="Full name"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <Label htmlFor="email">Business Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="business@example.com"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="08012345678"
                    />
                  </div>

                  {/* Business Type */}
                  <div>
                    <Label htmlFor="businessType">Business Type *</Label>
                    <Select 
                      value={formData.businessType}
                      onValueChange={(value) => setFormData({ ...formData, businessType: value })}
                      required
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select business type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="registered-dealer">Registered Dealership</SelectItem>
                        <SelectItem value="individual-dealer">Individual Dealer</SelectItem>
                        <SelectItem value="showroom">Showroom</SelectItem>
                        <SelectItem value="broker">Auto Broker</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Location */}
                  <div>
                    <Label htmlFor="location">Business Location *</Label>
                    <Select 
                      value={formData.location}
                      onValueChange={(value) => setFormData({ ...formData, location: value })}
                      required
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select location" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="lagos">Lagos</SelectItem>
                        <SelectItem value="abuja">Abuja</SelectItem>
                        <SelectItem value="port-harcourt">Port Harcourt</SelectItem>
                        <SelectItem value="kano">Kano</SelectItem>
                        <SelectItem value="ibadan">Ibadan</SelectItem>
                        <SelectItem value="benin">Benin City</SelectItem>
                        <SelectItem value="enugu">Enugu</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Description */}
                  <div>
                    <Label htmlFor="description">Business Description</Label>
                    <Textarea
                      id="description"
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      placeholder="Tell us about your business, years of experience, specializations, etc."
                      rows={4}
                    />
                  </div>

                  {/* Document Upload */}
                  <div>
                    <Label>Business Verification Documents (Optional)</Label>
                    <div className="mt-2 border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-[#D4AF37] transition-colors cursor-pointer">
                      <Upload className="mx-auto text-gray-400 mb-2" size={32} />
                      <p className="text-sm text-gray-600">
                        Upload CAC, business license, or other verification documents
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        You can also submit these during the verification process
                      </p>
                    </div>
                  </div>

                  {/* Terms */}
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-700">
                      <strong>Next Steps:</strong> After submission, our team will review your 
                      application and contact you within 24 hours to complete the verification 
                      process. Once verified, you can start listing vehicles immediately.
                    </p>
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    className="w-full bg-[#D4AF37] text-[#0C0C0C] hover:bg-[#C0C0C0] py-6"
                  >
                    Submit Application
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="mt-8 text-center">
              <p className="text-gray-600">
                Have questions? 
                <a 
                  href="https://wa.me/2348138964310" 
                  className="text-[#D4AF37] hover:underline ml-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Contact us on WhatsApp
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-[#0C0C0C] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl mb-6 text-[#D4AF37]">
              Simple, Transparent Pricing
            </h2>
            <Card className="bg-white/5 border-[#D4AF37]">
              <CardContent className="pt-8">
                <div className="text-5xl text-[#D4AF37] mb-2">₦15,000</div>
                <div className="text-xl text-[#C0C0C0] mb-8">per month</div>
                <ul className="space-y-3 text-left max-w-md mx-auto mb-8">
                  <li className="flex items-start">
                    <CheckCircle className="text-[#D4AF37] mr-2 flex-shrink-0 mt-1" size={20} />
                    <span className="text-[#C0C0C0]">Unlimited vehicle listings</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-[#D4AF37] mr-2 flex-shrink-0 mt-1" size={20} />
                    <span className="text-[#C0C0C0]">Verified dealer badge</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-[#D4AF37] mr-2 flex-shrink-0 mt-1" size={20} />
                    <span className="text-[#C0C0C0]">Direct buyer communication</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-[#D4AF37] mr-2 flex-shrink-0 mt-1" size={20} />
                    <span className="text-[#C0C0C0]">Analytics dashboard</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-[#D4AF37] mr-2 flex-shrink-0 mt-1" size={20} />
                    <span className="text-[#C0C0C0]">24/7 support</span>
                  </li>
                </ul>
                <p className="text-[#C0C0C0] text-sm">
                  No setup fees • Cancel anytime • 7-day free trial
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
