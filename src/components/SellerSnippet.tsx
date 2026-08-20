import { Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Badge } from './ui/badge';
import { getUser, type User } from '../lib/mockData';

export function StarRating({ value, size = 14 }: { value: number; size?: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          size={size}
          className={
            i <= Math.round(value)
              ? 'fill-amber-400 text-amber-400'
              : 'fill-gray-200 text-gray-200'
          }
        />
      ))}
    </div>
  );
}

export function TrustBadge({ user }: { user: User }) {
  if (!user.verified) return null;
  return (
    <Badge className="bg-emerald-500/10 text-emerald-600 border-emerald-500/20 border">
      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 mr-1" /> Verified
    </Badge>
  );
}

export function SellerSnippet({ sellerId }: { sellerId: string }) {
  const seller = getUser(sellerId);
  if (!seller) return null;
  return (
    <Link
      to={`/profile/${seller.id}`}
      className="flex items-center gap-2.5 group mt-3"
    >
      <Avatar className="h-8 w-8 border border-amber-500/20">
        <AvatarImage src={seller.avatar_url} alt={seller.username} />
        <AvatarFallback>{seller.username.slice(0, 2)}</AvatarFallback>
      </Avatar>
      <div className="min-w-0">
        <p className="text-xs font-medium text-neutral-800 truncate group-hover:text-amber-600 transition-colors">
          {seller.username}
        </p>
        <div className="flex items-center gap-1">
          <StarRating value={seller.trust_score} size={11} />
          <span className="text-[10px] text-neutral-500">({seller.total_sales} sales)</span>
        </div>
      </div>
    </Link>
  );
}
