import { useState } from 'react';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Coins, Shield, Zap, CheckCircle, Bell } from 'lucide-react';
import { toast } from 'sonner';

export default function CryptoPage() {
  const [email, setEmail] = useState('');

  const handleNotifyMe = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Thanks! We\'ll notify you when crypto payments are available.');
    setEmail('');
  };

  const features = [
    {
      icon: Shield,
      title: 'Secure Transactions',
      description: 'Blockchain-based security ensures your payments are safe and transparent.',
    },
    {
      icon: Zap,
      title: 'Instant Payments',
      description: 'No waiting for bank transfers. Transactions settle in minutes, not days.',
    },
    {
      icon: Coins,
      title: 'Multiple Cryptocurrencies',
      description: 'Accept payments in Bitcoin, Ethereum, USDT, and other major cryptocurrencies.',
    },
    {
      icon: CheckCircle,
      title: 'Low Fees',
      description: 'Significantly lower transaction fees compared to traditional payment methods.',
    },
  ];

  const benefits = {
    buyers: [
      'Pay for vehicles using your preferred cryptocurrency',
      'Avoid currency conversion fees and exchange rate risks',
      'Faster transaction processing',
      'Enhanced privacy and security',
      'International purchases made easy',
    ],
    dealers: [
      'Expand your customer base to crypto holders',
      'Receive payments from international buyers instantly',
      'Lower processing fees than credit cards',
      'Hedge against local currency fluctuations',
      'Modern payment option that attracts tech-savvy buyers',
    ],
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1584232992172-29cead8e5230?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcnlwdG9jdXJyZW5jeSUyMGJpdGNvaW58ZW58MXx8fHwxNzYxNDE3ODIwfDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Cryptocurrency"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0C0C0C]/90 to-[#0C0C0C]/70"></div>
        </div>

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="max-w-3xl text-white">
            <div className="flex items-center space-x-3 mb-4">
              <Coins className="text-[#D4AF37]" size={40} />
              <span className="bg-[#D4AF37] text-[#0C0C0C] px-4 py-1 rounded">Coming Soon</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6 text-white">
              The Future of Auto Transactions
            </h1>
            <p className="text-lg md:text-xl text-[#C0C0C0] mb-8">
              ElixirAutoX is pioneering cryptocurrency payments for vehicle transactions in Africa. 
              Be part of the revolution in automotive commerce.
            </p>
          </div>
        </div>
      </section>

      {/* What is Crypto Payments */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl mb-6 text-[#0C0C0C]">
              What Are Crypto Payments?
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Cryptocurrency payments allow you to buy and sell vehicles using digital currencies 
              like Bitcoin and Ethereum instead of traditional money. It's faster, more secure, 
              and eliminates many barriers in cross-border transactions.
            </p>
            <p className="text-lg text-gray-700">
              ElixirAutoX is integrating a seamless crypto payment system that will enable 
              verified dealers to accept digital currencies while maintaining the same trust 
              and security standards that define our platform.
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-[#0C0C0C] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4 text-[#D4AF37]">
              How It Will Work
            </h2>
            <p className="text-lg text-[#C0C0C0] max-w-2xl mx-auto">
              Safe, simple, and secure cryptocurrency transactions for automotive deals
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

      {/* Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl text-center mb-12 text-[#0C0C0C]">
            Benefits for Everyone
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* For Buyers */}
            <Card className="border-[#D4AF37]/20">
              <CardContent className="p-8">
                <h3 className="text-2xl mb-6 text-[#0C0C0C]">For Buyers</h3>
                <ul className="space-y-3">
                  {benefits.buyers.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="text-[#D4AF37] mr-3 flex-shrink-0 mt-1" size={20} />
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* For Dealers */}
            <Card className="border-[#D4AF37]/20">
              <CardContent className="p-8">
                <h3 className="text-2xl mb-6 text-[#0C0C0C]">For Dealers</h3>
                <ul className="space-y-3">
                  {benefits.dealers.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="text-[#D4AF37] mr-3 flex-shrink-0 mt-1" size={20} />
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Safety & Security */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl text-center mb-8 text-[#0C0C0C]">
              Your Safety is Our Priority
            </h2>
            <Card className="border-[#D4AF37]">
              <CardContent className="p-8">
                <div className="space-y-4 text-gray-700 text-lg">
                  <p>
                    <strong>Note on Data Security:</strong> ElixirAutoX is committed to protecting 
                    your information. While our crypto payment feature will enable secure transactions, 
                    please note that Figma Make and our platform are not designed for collecting 
                    Personally Identifiable Information (PII) or storing sensitive financial data.
                  </p>
                  <p>
                    When we launch crypto payments, we will partner with trusted, regulated crypto 
                    payment processors who specialize in secure transactions. Your payment information 
                    will be handled through these secure third-party services that comply with all 
                    relevant security standards and regulations.
                  </p>
                  <p>
                    <strong>How it will work:</strong> You'll be redirected to a secure payment 
                    gateway for all cryptocurrency transactions. We'll never store your wallet 
                    information or private keys on our platform.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Register Interest */}
      <section className="py-16 bg-[#D4AF37]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <Bell className="mx-auto mb-6 text-[#0C0C0C]" size={48} />
            <h2 className="text-3xl md:text-4xl mb-4 text-[#0C0C0C]">
              Be the First to Know
            </h2>
            <p className="text-lg text-[#0C0C0C] mb-8">
              Register your interest and we'll notify you when crypto payments go live
            </p>

            <Card className="border-0">
              <CardContent className="p-8">
                <form onSubmit={handleNotifyMe} className="space-y-6">
                  <div className="text-left">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your@email.com"
                      className="mt-2"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-[#0C0C0C] text-white hover:bg-[#0C0C0C]/90 py-6"
                  >
                    Notify Me When Available
                  </Button>
                </form>

                <p className="text-sm text-gray-600 mt-4">
                  We respect your privacy. Your email will only be used to notify you about 
                  crypto payment availability.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
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
                    Which cryptocurrencies will you accept?
                  </h3>
                  <p className="text-gray-700">
                    We plan to support major cryptocurrencies including Bitcoin (BTC), Ethereum (ETH), 
                    USDT, and other popular stablecoins. The final list will be announced closer to launch.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-[#D4AF37]/20">
                <CardContent className="p-6">
                  <h3 className="text-lg mb-2 text-[#0C0C0C]">
                    When will this feature be available?
                  </h3>
                  <p className="text-gray-700">
                    We're currently in development and testing phases. Register your interest above 
                    to be notified when we launch. We expect to roll out this feature in phases 
                    throughout 2025.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-[#D4AF37]/20">
                <CardContent className="p-6">
                  <h3 className="text-lg mb-2 text-[#0C0C0C]">
                    Will there be additional fees for crypto payments?
                  </h3>
                  <p className="text-gray-700">
                    Crypto transaction fees are typically much lower than traditional payment methods. 
                    You'll only pay the standard blockchain network fees, which we'll display 
                    transparently before you confirm any transaction.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-[#D4AF37]/20">
                <CardContent className="p-6">
                  <h3 className="text-lg mb-2 text-[#0C0C0C]">
                    Is it safe to buy a car with cryptocurrency?
                  </h3>
                  <p className="text-gray-700">
                    Yes! We'll implement multiple security measures including escrow services, 
                    verified dealer requirements, and secure payment gateways. The same verification 
                    standards that protect our platform today will apply to crypto transactions.
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
