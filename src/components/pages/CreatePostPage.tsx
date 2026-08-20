import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { ArrowLeft, Image as ImageIcon } from 'lucide-react';
import SEO from '../SEO';
import { postCategories } from '../../lib/mockData';
import { toast } from 'sonner';

export default function CreatePostPage() {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !category) {
      toast.error('Please add a title and category.');
      return;
    }
    toast.success('Post published to the community!');
    navigate('/community');
  };

  return (
    <div className="bg-[#0A0A0B] min-h-screen">
      <SEO title="Create Post" description="Share a guide, review, or discussion with the ElixrAuto community." canonicalUrl="/community/create" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 max-w-2xl">
        <Link to="/community" className="inline-flex items-center gap-1.5 text-neutral-400 hover:text-amber-400 text-sm mb-6 transition-colors">
          <ArrowLeft size={16} /> Back to community
        </Link>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <h1 className="text-3xl font-bold text-white mb-1">Create a Post</h1>
          <p className="text-neutral-400 mb-6">Share your knowledge. Posts by verified members earn reputation.</p>

          <Card className="bg-white/[0.03] border-white/10">
            <CardHeader><CardTitle className="text-white">New Discussion</CardTitle></CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <Label htmlFor="title" className="text-neutral-300">Title *</Label>
                  <Input id="title" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="e.g. How to inspect a used engine" className="mt-1.5 bg-white/5 border-white/10 text-white placeholder:text-neutral-500" required />
                </div>
                <div>
                  <Label htmlFor="category" className="text-neutral-300">Category *</Label>
                  <Select value={category} onValueChange={setCategory} required>
                    <SelectTrigger className="mt-1.5 bg-white/5 border-white/10 text-white"><SelectValue placeholder="Choose a category" /></SelectTrigger>
                    <SelectContent>
                      {postCategories.filter((c) => c !== 'All').map((c) => <SelectItem key={c} value={c}>{c}</SelectItem>)}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="content" className="text-neutral-300">Content</Label>
                  <Textarea id="content" value={content} onChange={(e) => setContent(e.target.value)} placeholder="Write your post..." rows={8} className="mt-1.5 bg-white/5 border-white/10 text-white placeholder:text-neutral-500" />
                </div>
                <div>
                  <Label className="text-neutral-300">Add Image</Label>
                  <div className="mt-1.5 border-2 border-dashed border-white/15 rounded-xl p-8 text-center hover:border-amber-400/40 transition-colors cursor-pointer">
                    <ImageIcon className="mx-auto text-neutral-500 mb-2" size={28} />
                    <p className="text-sm text-neutral-400">Drag an image or click to upload</p>
                    <p className="text-xs text-neutral-600 mt-1">JPG, PNG up to 5MB</p>
                  </div>
                </div>
                <div className="flex gap-3 pt-2">
                  <Button type="submit" className="bg-amber-400 text-neutral-900 hover:bg-amber-300 font-semibold">Publish Post</Button>
                  <Button type="button" variant="outline" className="border-white/15 text-white hover:bg-white/5" onClick={() => navigate('/community')}>Cancel</Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
