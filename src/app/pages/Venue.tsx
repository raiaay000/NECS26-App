import imgBridgestoneArena from '/src/assets/f851de9a06d752f6dabcfdd27ebd3c3ad45bdf6c.png';
import { ExternalLink, MapPin, Calendar, Users } from 'lucide-react';

export default function Venue() {
  return (
    <div className="px-[18px] py-4 pb-24">
      <div className="mb-6">
        <h1 className="text-white text-[28px] font-bold font-['Space_Grotesk'] mb-2">Bridgestone Arena</h1>
        <p className="text-[#97a8d8] text-[14px] font-['Inter']">Interactive Venue Map</p>
      </div>

      {/* Venue Image */}
      <div className="rounded-[20px] overflow-hidden mb-6 border-2 border-[#f5c521]">
        <img src={imgBridgestoneArena} alt="Bridgestone Arena" className="w-full h-[180px] object-cover" />
      </div>

      {/* Venue Info Cards */}
      <div className="space-y-4 mb-6">
        <InfoCard
          icon={<MapPin className="w-5 h-5 text-[#3E79FF]" />}
          title="Location"
          content="501 Broadway, Nashville, TN 37203"
        />
        <InfoCard
          icon={<Calendar className="w-5 h-5 text-[#3E79FF]" />}
          title="Dates"
          content="May 6-10, 2026"
        />
        <InfoCard
          icon={<Users className="w-5 h-5 text-[#3E79FF]" />}
          title="Capacity"
          content="17,500+ seats"
        />
      </div>

      {/* Getting There */}
      <div 
        className="rounded-[20px] p-5 mb-6 border border-[rgba(62,121,255,0.22)]"
        style={{ backgroundImage: "linear-gradient(135deg, rgb(10, 18, 33) 0%, rgb(11, 23, 47) 100%)" }}
      >
        <h3 className="text-white text-[16px] font-bold font-['Inter'] mb-3">Getting There</h3>
        <p className="text-[#97a8d8] text-[13px] font-['Inter'] leading-relaxed">
          Free parking available. Public transit: Music City Circuit routes 3, 4, 5
        </p>
      </div>

      {/* Learn More Button */}
      <a
        href="https://www.bridgestonearena.com/about"
        target="_blank"
        rel="noopener noreferrer"
        className="w-full py-[14px] rounded-[16px] flex items-center justify-center gap-2 border border-[rgba(62,121,255,0.45)] mb-6"
        style={{ backgroundImage: "linear-gradient(135deg, rgb(37, 86, 185) 0%, rgb(21, 65, 150) 100%)" }}
      >
        <span className="text-white text-[13px] font-bold font-['Inter'] tracking-[0.4px] uppercase">Learn More</span>
        <ExternalLink className="w-4 h-4 text-white" />
      </a>

      {/* Nearby Restaurants */}
      <div className="mb-6">
        <h3 className="text-white text-[18px] font-bold font-['Space_Grotesk'] mb-4">Nearby Restaurants</h3>
        <PlaceCard
          name="The Stillery"
          description="Upscale dining with craft cocktails"
          address="223 Rep. John Lewis Way S"
        />
      </div>

      {/* Nearby Hotels */}
      <div>
        <h3 className="text-white text-[18px] font-bold font-['Space_Grotesk'] mb-4">Nearby Hotels</h3>
        <PlaceCard
          name="Omni Nashville Hotel"
          description="Luxury accommodations next to the arena"
          address="250 Rep. John Lewis Way S"
        />
      </div>
    </div>
  );
}

interface InfoCardProps {
  icon: React.ReactNode;
  title: string;
  content: string;
}

function InfoCard({ icon, title, content }: InfoCardProps) {
  return (
    <div 
      className="rounded-[16px] p-4 border border-[rgba(62,121,255,0.22)]"
      style={{ backgroundImage: "linear-gradient(135deg, rgb(10, 18, 33) 0%, rgb(11, 23, 47) 100%)" }}
    >
      <div className="flex items-center gap-3 mb-2">
        <div className="w-10 h-10 rounded-[12px] bg-[rgba(62,121,255,0.12)] border border-[rgba(62,121,255,0.22)] flex items-center justify-center">
          {icon}
        </div>
        <h4 className="text-white text-[14px] font-bold font-['Inter']">{title}</h4>
      </div>
      <p className="text-[#97a8d8] text-[13px] font-['Inter'] ml-[52px]">{content}</p>
    </div>
  );
}

interface PlaceCardProps {
  name: string;
  description: string;
  address: string;
}

function PlaceCard({ name, description, address }: PlaceCardProps) {
  return (
    <div 
      className="rounded-[16px] p-4 border border-[rgba(62,121,255,0.22)] mb-3"
      style={{ backgroundImage: "linear-gradient(135deg, rgb(10, 18, 33) 0%, rgb(11, 23, 47) 100%)" }}
    >
      <h4 className="text-white text-[15px] font-bold font-['Inter'] mb-1">{name}</h4>
      <p className="text-[#97a8d8] text-[12px] font-['Inter'] mb-2">{description}</p>
      <p className="text-[#5d7191] text-[11px] font-['Inter']">{address}</p>
    </div>
  );
}