import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { ArrowUp, MessageCircle, Plus, Search, Clock, Share2, ArrowLeft, Send } from 'lucide-react';
import { communityPosts, postComments, getUser, postCategories, type CommunityPost } from '../../lib/mockData';
import { StarRating } from '../SellerSnippet';
import SEO from '../SEO';
import { staggerContainer, fadeUp } from '../../lib/animations';
import { toast } from 'sonner';

export default function CommunityPage() {
  const [category, setCategory] = useState('All');
  const [search, setSearch] = useState('');
  const [upvoted, setUpvoted] = useState<Record<string, boolean>>({});
  const [selectedPost, setSelectedPost] = useState<CommunityPost | null>(null);
  const [commentText, setCommentText] = useState('');

  const filtered = useMemo(
    () =>
      communityPosts.filter(
        (p) =>
          (category === 'All' || p.category === category) &&
          (p.title.toLowerCase().includes(search.toLowerCase()) || p.excerpt.toLowerCase().includes(search.toLowerCase()))
      ),
    [category, search]
  );

  const toggleUpvote = (id: string) => {
    setUpvoted((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const postComment = () => {
    if (!commentText.trim()) return;
    toast.success('Comment posted!');
    setCommentText('');
  };

  return (
    <div className="bg-[#0A0A0B] min-h-screen">
      <SEO title="Community" description="User-generated discussions, reviews, and guides from the ElixrAuto community." canonicalUrl="/community" />

      {/* Header */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute top-0 left-1/4 h-64 w-64 rounded-full bg-amber-500/10 blur-[100px]" />
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <Badge className="bg-amber-400/10 text-amber-300 border border-amber-400/20 mb-3">Community</Badge>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">Discussions &amp; Guides</h1>
                <p className="text-neutral-400 text-lg max-w-xl">Posts by verified community members. Upvote the best advice, comment, and earn reputation.</p>
              </div>
              <Link to="/community/create">
                <Button className="bg-amber-400 text-neutral-900 hover:bg-amber-300 font-semibold gap-2">
                  <Plus size={18} /> Create Post
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Controls */}
      <section className="bg-white/[0.02] py-5 border-b border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-4 items-stretch lg:items-center justify-between">
            <div className="flex flex-wrap gap-2">
              {postCategories.map((c) => (
                <button
                  key={c}
                  onClick={() => setCategory(c)}
                  className={`px-3.5 py-1.5 rounded-full text-sm font-medium transition-colors ${
                    category === c ? 'bg-amber-400 text-neutral-900' : 'bg-white/5 text-neutral-300 hover:bg-white/10'
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
            <div className="relative lg:w-72">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500" size={16} />
              <Input placeholder="Search posts..." value={search} onChange={(e) => setSearch(e.target.value)} className="pl-10 bg-white/5 border-white/10 text-white placeholder:text-neutral-500" />
            </div>
          </div>
        </div>
      </section>

      {/* Posts */}
      <section className="py-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="space-y-5">
            {filtered.map((post) => {
              const author = getUser(post.author_id);
              const isUpvoted = upvoted[post.id];
              return (
                <motion.div key={post.id} variants={fadeUp}>
                  <Card className="bg-white/[0.03] border-white/10 hover:border-amber-500/20 transition-colors cursor-pointer" onClick={() => setSelectedPost(post)}>
                    <CardContent className="p-5">
                      <div className="flex gap-5">
                        {/* Upvote column */}
                        <button
                          onClick={(e) => { e.stopPropagation(); toggleUpvote(post.id); }}
                          className="flex flex-col items-center gap-1 px-2 shrink-0"
                        >
                          <ArrowUp size={20} className={isUpvoted ? 'text-amber-400' : 'text-neutral-500'} />
                          <span className={`text-sm font-bold ${isUpvoted ? 'text-amber-400' : 'text-neutral-400'}`}>
                            {post.upvotes + (isUpvoted ? 1 : 0)}
                          </span>
                        </button>

                        {/* Content */}
                        <div className="flex-1 min-w-0">
                          {post.image && (
                            <div className="relative rounded-xl overflow-hidden mb-4">
                              <ImageWithFallback src={post.image} alt={post.title} className="w-full h-44 object-cover" />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                            </div>
                          )}
                          <Badge className="bg-amber-400/10 text-amber-300 border border-amber-400/20 mb-2 text-[11px]">{post.category}</Badge>
                          <h3 className="text-lg font-semibold text-white mb-1.5">{post.title}</h3>
                          <p className="text-neutral-400 text-sm mb-3 line-clamp-2">{post.excerpt}</p>

                          {author && (
                            <div className="flex items-center gap-2 mb-3">
                              <Avatar className="h-6 w-6 border border-amber-500/20">
                                <AvatarImage src={author.avatar_url} />
                                <AvatarFallback className="text-[10px]">{author.username.slice(0, 2)}</AvatarFallback>
                              </Avatar>
                              <span className="text-xs text-neutral-300 font-medium">{author.username}</span>
                              {author.verified && <Badge className="bg-emerald-500/10 text-emerald-500 border-0 text-[10px] px-1.5 py-0">Verified</Badge>}
                              <span className="text-xs text-neutral-600">· {author.badge}</span>
                              <StarRating value={author.trust_score} size={10} />
                            </div>
                          )}

                          <div className="flex items-center gap-4 text-neutral-500 text-xs">
                            <span className="flex items-center gap-1"><MessageCircle size={13} /> {post.comment_count}</span>
                            <span className="flex items-center gap-1"><Clock size={13} /> {post.read_time}</span>
                            <span className="flex flex-wrap gap-1.5">{post.tags.map((t) => <span key={t} className="text-amber-400/80">{t}</span>)}</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Post detail modal */}
      <AnimatePresence>
        {selectedPost && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-sm flex items-start justify-center p-4 overflow-y-auto"
            onClick={() => setSelectedPost(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.97 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 30, scale: 0.97 }}
              transition={{ duration: 0.3 }}
              className="bg-[#121214] border border-white/10 rounded-2xl w-full max-w-2xl my-8 overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between p-4 border-b border-white/10">
                <button onClick={() => setSelectedPost(null)} className="flex items-center gap-1.5 text-neutral-400 hover:text-white text-sm">
                  <ArrowLeft size={16} /> Close
                </button>
                <button onClick={() => toast.success('Link copied!')} className="text-neutral-400 hover:text-amber-400"><Share2 size={16} /></button>
              </div>
              <div className="p-6">
                <Badge className="bg-amber-400/10 text-amber-300 border border-amber-400/20 mb-3">{selectedPost.category}</Badge>
                <h2 className="text-2xl font-bold text-white mb-3">{selectedPost.title}</h2>
                {(() => {
                  const author = getUser(selectedPost.author_id);
                  return author && (
                    <div className="flex items-center gap-2 mb-5">
                      <Avatar className="h-7 w-7 border border-amber-500/20"><AvatarImage src={author.avatar_url} /><AvatarFallback className="text-[10px]">{author.username.slice(0, 2)}</AvatarFallback></Avatar>
                      <span className="text-sm text-neutral-300 font-medium">{author.username}</span>
                      <StarRating value={author.trust_score} size={11} />
                      <span className="text-xs text-neutral-600">· {selectedPost.read_time}</span>
                    </div>
                  );
                })()}
                {selectedPost.image && <ImageWithFallback src={selectedPost.image} alt={selectedPost.title} className="w-full h-56 object-cover rounded-xl mb-5" />}
                <p className="text-neutral-300 leading-relaxed mb-6">{selectedPost.excerpt} Lorem ipsum dolor sit amet consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>

                {/* Upvote bar */}
                <div className="flex items-center gap-4 pb-5 border-b border-white/10">
                  <button onClick={() => toggleUpvote(selectedPost.id)} className="flex items-center gap-1.5 text-sm">
                    <ArrowUp size={18} className={upvoted[selectedPost.id] ? 'text-amber-400' : 'text-neutral-500'} />
                    <span className={upvoted[selectedPost.id] ? 'text-amber-400 font-semibold' : 'text-neutral-400'}>{selectedPost.upvotes + (upvoted[selectedPost.id] ? 1 : 0)}</span>
                  </button>
                  <span className="flex items-center gap-1.5 text-sm text-neutral-400"><MessageCircle size={16} /> {selectedPost.comment_count}</span>
                </div>

                {/* Comments */}
                <div className="mt-5 space-y-4">
                  <h3 className="text-white font-semibold">Comments</h3>
                  {postComments.filter((c) => c.post_id === selectedPost.id).map((c) => (
                    <div key={c.id} className="flex gap-3">
                      <Avatar className="h-8 w-8 border border-amber-500/20 shrink-0"><AvatarImage src={c.avatar_url} /><AvatarFallback className="text-xs">{c.user_name.slice(0, 2)}</AvatarFallback></Avatar>
                      <div className="flex-1">
                        <div className="bg-white/5 rounded-xl p-3">
                          <p className="text-sm text-white font-medium mb-1">{c.user_name}</p>
                          <p className="text-sm text-neutral-300">{c.comment_text}</p>
                        </div>
                        {c.replies?.map((r) => (
                          <div key={r.id} className="flex gap-2 mt-2 ml-2">
                            <Avatar className="h-6 w-6 border border-white/10 shrink-0"><AvatarImage src={r.avatar_url} /><AvatarFallback className="text-[10px]">{r.user_name.slice(0, 2)}</AvatarFallback></Avatar>
                            <div className="bg-white/5 rounded-xl p-2.5 flex-1">
                              <p className="text-xs text-white font-medium mb-0.5">{r.user_name}</p>
                              <p className="text-xs text-neutral-300">{r.comment_text}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Comment input */}
                <div className="flex gap-2 mt-5">
                  <Input placeholder="Add a comment..." value={commentText} onChange={(e) => setCommentText(e.target.value)} className="bg-white/5 border-white/10 text-white placeholder:text-neutral-500" />
                  <Button size="icon" className="bg-amber-400 text-neutral-900 hover:bg-amber-300 shrink-0" onClick={postComment}><Send size={16} /></Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
