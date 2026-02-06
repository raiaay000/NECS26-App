import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Trophy, Target, TrendingUp, Award, Settings } from 'lucide-react';

export default function Profile() {
  const achievements = [
    { id: 1, name: 'First Win', icon: Trophy, color: 'from-yellow-500 to-orange-600' },
    { id: 2, name: '10 Wins', icon: Target, color: 'from-blue-500 to-cyan-600' },
    { id: 3, name: 'Tournament Win', icon: Award, color: 'from-purple-500 to-pink-600' },
    { id: 4, name: 'Top 100', icon: TrendingUp, color: 'from-green-500 to-emerald-600' }
  ];

  const stats = [
    { label: 'Matches Watched', value: '156' },
    { label: 'Favorite Game', value: 'VALORANT' },
    { label: 'Following', value: '24' },
    { label: 'Followers', value: '1.2K' }
  ];

  const recentActivity = [
    { id: 1, action: 'Watched', detail: 'SEN vs NRG - Grand Finals', time: '2 hours ago' },
    { id: 2, action: 'Followed', detail: 'TenZ', time: '5 hours ago' },
    { id: 3, action: 'Watched', detail: 'G2 vs Vitality Championship', time: '1 day ago' },
    { id: 4, action: 'Earned', detail: 'Achievement: Top Fan', time: '2 days ago' }
  ];

  return (
    <div className="px-5 py-4">
      {/* Profile Header */}
      <div className="relative mb-6">
        <div className="absolute top-0 right-0">
          <button className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors">
            <Settings className="w-5 h-5 text-gray-400" />
          </button>
        </div>
        
        <div className="flex flex-col items-center text-center">
          <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-blue-500 mb-4">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1757773866965-014fa57ad096?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlc3BvcnRzJTIwcGxheWVyJTIwcHJvZmlsZXxlbnwxfHx8fDE3NzAzMjgxMTB8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-white text-2xl font-bold mb-1">EsportsFan2026</h1>
          <p className="text-gray-400 text-sm mb-1">Level 42 • Premium Member</p>
          <div className="flex items-center gap-2">
            <div className="px-3 py-1 rounded-full bg-gradient-to-r from-yellow-500 to-orange-600">
              <span className="text-white text-xs font-bold">VIP</span>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-3 mb-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-gray-900 to-gray-950 rounded-xl border border-gray-800 p-4 text-center"
          >
            <p className="text-gray-400 text-xs mb-1">{stat.label}</p>
            <p className="text-white font-bold text-lg">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Achievements */}
      <div className="mb-6">
        <h3 className="text-yellow-400 text-sm font-bold mb-3">ACHIEVEMENTS</h3>
        <div className="grid grid-cols-4 gap-3">
          {achievements.map((achievement) => (
            <div
              key={achievement.id}
              className="flex flex-col items-center"
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${achievement.color} flex items-center justify-center mb-2`}>
                <achievement.icon className="w-7 h-7 text-white" />
              </div>
              <p className="text-white text-xs text-center font-medium">{achievement.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Activity */}
      <div className="mb-6">
        <h3 className="text-yellow-400 text-sm font-bold mb-3">RECENT ACTIVITY</h3>
        <div className="space-y-3">
          {recentActivity.map((activity) => (
            <div
              key={activity.id}
              className="bg-gradient-to-br from-gray-900 to-gray-950 rounded-xl border border-gray-800 p-4"
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-white text-sm mb-1">
                    <span className="text-blue-400 font-bold">{activity.action}</span> {activity.detail}
                  </p>
                  <p className="text-gray-500 text-xs">{activity.time}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="space-y-3">
        <button className="w-full bg-blue-600 hover:bg-blue-700 rounded-xl py-3 text-white font-bold transition-colors">
          Edit Profile
        </button>
        <button className="w-full bg-gray-800 hover:bg-gray-700 rounded-xl py-3 text-white font-bold transition-colors">
          View Public Profile
        </button>
      </div>
    </div>
  );
}
