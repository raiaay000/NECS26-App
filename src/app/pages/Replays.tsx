import { Play, Clock, Eye } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export default function Replays() {
  const replays = [
    {
      id: 1,
      title: 'SEN vs NRG - Grand Finals',
      game: 'VALORANT',
      duration: '2:45:30',
      views: '124K',
      date: 'Feb 4, 2026',
      thumbnail: 'https://images.unsplash.com/photo-1750337877814-e90a6969d408?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2YWxvcmFudCUyMGdhbWUlMjBjaGFyYWN0ZXJzJTIwdGVhbXxlbnwxfHx8fDE3NzAzMjgxMDl8MA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      id: 2,
      title: 'G2 vs Vitality - Championship',
      game: 'ROCKET LEAGUE',
      duration: '1:52:15',
      views: '89K',
      date: 'Feb 3, 2026',
      thumbnail: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400'
    },
    {
      id: 3,
      title: 'MkLeo vs Sparg0 - Finals',
      game: 'SMASH ULTIMATE',
      duration: '3:12:45',
      views: '156K',
      date: 'Feb 2, 2026',
      thumbnail: 'https://images.unsplash.com/photo-1558008412-40e4bac94bed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFzaCUyMGJyb3MlMjBnYW1pbmd8ZW58MXx8fHwxNzcwMzI4MTEwfDA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      id: 4,
      title: 'Cloud9 vs 100T - Semifinals',
      game: 'VALORANT',
      duration: '2:28:10',
      views: '97K',
      date: 'Feb 1, 2026',
      thumbnail: 'https://images.unsplash.com/photo-1750337877814-e90a6969d408?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2YWxvcmFudCUyMGdhbWUlMjBjaGFyYWN0ZXJzJTIwdGVhbXxlbnwxfHx8fDE3NzAzMjgxMDl8MA&ixlib=rb-4.1.0&q=80&w=1080'
    }
  ];

  return (
    <div className="px-5 py-4">
      <div className="mb-6">
        <h1 className="text-white text-3xl font-bold mb-2">Replays</h1>
        <p className="text-gray-400 text-sm">Watch the best matches on demand</p>
      </div>

      {/* Filter Tabs */}
      <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
        <button className="px-4 py-2 rounded-lg bg-blue-600 text-white text-sm font-bold whitespace-nowrap">
          All Games
        </button>
        <button className="px-4 py-2 rounded-lg bg-gray-800 text-gray-400 text-sm font-bold whitespace-nowrap hover:bg-gray-700">
          This Week
        </button>
        <button className="px-4 py-2 rounded-lg bg-gray-800 text-gray-400 text-sm font-bold whitespace-nowrap hover:bg-gray-700">
          Most Viewed
        </button>
      </div>

      <div className="space-y-4">
        {replays.map((replay) => (
          <div
            key={replay.id}
            className="bg-gradient-to-br from-gray-900 to-gray-950 rounded-xl border border-gray-800 overflow-hidden hover:border-blue-500/50 transition-all"
          >
            <div className="relative h-48">
              <ImageWithFallback
                src={replay.thumbnail}
                alt={replay.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              
              <button className="absolute inset-0 flex items-center justify-center group">
                <div className="w-14 h-14 rounded-full bg-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Play className="w-6 h-6 text-white fill-white ml-1" />
                </div>
              </button>

              <div className="absolute bottom-2 right-2 px-2 py-1 rounded bg-black/80 text-white text-xs">
                {replay.duration}
              </div>
            </div>

            <div className="p-4">
              <div className="flex items-start justify-between mb-2">
                <div className="flex-1">
                  <h3 className="text-white font-bold mb-1">{replay.title}</h3>
                  <p className="text-blue-400 text-sm">{replay.game}</p>
                </div>
              </div>

              <div className="flex items-center gap-4 text-gray-400 text-xs">
                <div className="flex items-center gap-1">
                  <Eye className="w-4 h-4" />
                  <span>{replay.views}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>{replay.date}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
