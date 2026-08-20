import { useState } from 'react';
import { motion } from 'framer-motion';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Send, ArrowLeft, Flag, ShieldCheck, Search } from 'lucide-react';
import { conversations, messages, currentUser } from '../../lib/mockData';
import SEO from '../SEO';
import { toast } from 'sonner';

export default function MessagesPage() {
  const [activeConv, setActiveConv] = useState(conversations[0].id);
  const [draft, setDraft] = useState('');
  const conv = conversations.find((c) => c.id === activeConv)!;
  const thread = messages[activeConv] || [];

  const send = () => {
    if (!draft.trim()) return;
    toast.success('Message sent');
    setDraft('');
  };

  return (
    <div className="bg-[#0A0A0B] min-h-screen">
      <SEO title="Messages" description="Your conversations with sellers on ElixrAuto." canonicalUrl="/messages" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <h1 className="text-2xl font-bold text-white mb-5">Messages</h1>
        <div className="grid lg:grid-cols-[340px_1fr] gap-4 h-[calc(100vh-180px)] min-h-[500px]">
          {/* Conversation list */}
          <div className="bg-white/[0.03] border border-white/10 rounded-2xl overflow-hidden flex flex-col">
            <div className="p-3 border-b border-white/10">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500" size={15} />
                <Input placeholder="Search chats..." className="pl-9 bg-white/5 border-white/10 text-white placeholder:text-neutral-500 h-9" />
              </div>
            </div>
            <div className="overflow-y-auto flex-1">
              {conversations.map((c) => (
                <button
                  key={c.id}
                  onClick={() => setActiveConv(c.id)}
                  className={`w-full flex items-start gap-3 p-3 border-b border-white/5 text-left transition-colors ${activeConv === c.id ? 'bg-amber-400/10' : 'hover:bg-white/5'}`}
                >
                  <Avatar className="h-10 w-10 border border-amber-500/20 shrink-0">
                    <AvatarImage src={c.seller_avatar} />
                    <AvatarFallback className="text-xs">{c.seller_name.slice(0, 2)}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium text-white truncate">{c.seller_name}</p>
                      <span className="text-[11px] text-neutral-500 shrink-0">{c.last_at}</span>
                    </div>
                    <p className="text-xs text-neutral-400 truncate mt-0.5">{c.last_message}</p>
                    <div className="flex items-center gap-1.5 mt-1">
                      <span className="text-[10px] text-neutral-600 truncate">{c.listing_title}</span>
                      {c.unread && <span className="h-1.5 w-1.5 rounded-full bg-amber-400 shrink-0" />}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Chat panel */}
          <div className="bg-white/[0.03] border border-white/10 rounded-2xl flex flex-col overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between p-3.5 border-b border-white/10">
              <div className="flex items-center gap-3">
                <Avatar className="h-9 w-9 border border-amber-500/20"><AvatarImage src={conv.seller_avatar} /><AvatarFallback className="text-xs">{conv.seller_name.slice(0, 2)}</AvatarFallback></Avatar>
                <div>
                  <p className="text-sm font-semibold text-white">{conv.seller_name}</p>
                  <p className="text-[11px] text-neutral-500 flex items-center gap-1"><ShieldCheck size={11} className="text-emerald-500" /> Verified Seller</p>
                </div>
              </div>
              <Button variant="ghost" size="icon" className="text-neutral-400 hover:text-red-400" onClick={() => toast.success('Conversation reported.')}>
                <Flag size={16} />
              </Button>
            </div>

            {/* Listing context bar */}
            <div className="flex items-center gap-3 px-3.5 py-2.5 bg-white/[0.02] border-b border-white/10">
              <img src={conv.listing_image} alt="" className="h-9 w-12 rounded-md object-cover" />
              <span className="text-xs text-neutral-300">{conv.listing_title}</span>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {thread.map((m) => {
                const mine = m.sender_id === currentUser.id;
                return (
                  <motion.div
                    key={m.id}
                    initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.2 }}
                    className={`flex ${mine ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`max-w-[75%] rounded-2xl px-4 py-2 text-sm ${mine ? 'bg-amber-400 text-neutral-900 rounded-br-md' : 'bg-white/10 text-white rounded-bl-md'}`}>
                      <p>{m.text}</p>
                      <p className={`text-[10px] mt-1 ${mine ? 'text-neutral-600' : 'text-neutral-500'}`}>{m.created_at}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Input */}
            <div className="p-3 border-t border-white/10 flex gap-2">
              <Input placeholder="Type a message..." value={draft} onChange={(e) => setDraft(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && send()} className="bg-white/5 border-white/10 text-white placeholder:text-neutral-500" />
              <Button size="icon" className="bg-amber-400 text-neutral-900 hover:bg-amber-300 shrink-0" onClick={send}><Send size={16} /></Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
