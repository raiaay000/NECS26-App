import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { FilterButton } from '../components/FilterButton';
import { CheckoutModal } from '../components/CheckoutModal';
import { ShoppingCart, Check } from 'lucide-react';
import { useState, useMemo, useCallback } from 'react';
import imgSmashHoodie from '/src/assets/2b2a280f04a17c1ac33736ff6ad5449dc3d17cf8.png';
import imgRocketLeagueJacket from '/src/assets/488e72fa19749a72c7a21a03c4f3ec5728969e8b.png';
import imgValorantShirt from '/src/assets/0c245fa102397c5d0dfb22633de349b6cef091a4.png';
import imgGamingMouse from '/src/assets/730bf2513a0ea44e74c44acf4d2d649ec10ab715.png';
import imgWaterBottle from '/src/assets/b72f2f82c9e7cd9154ba8311bfec271a0d85fe83.png';

type Category = 'All' | 'Jerseys' | 'Hoodies' | 'Jackets' | 'Accessories';

interface Product {
  id: number;
  name: string;
  category: Exclude<Category, 'All'>;
  price: number;
  image: string;
}

const PRODUCTS: Product[] = [
  { id: 1, name: 'Valorant NECS Jersey', category: 'Jerseys', price: 89, image: imgValorantShirt },
  { id: 2, name: 'Rocket League NECS Jacket', category: 'Jackets', price: 129, image: imgRocketLeagueJacket },
  { id: 3, name: 'Super Smash Bros NECS Hoodie', category: 'Hoodies', price: 79, image: imgSmashHoodie },
  { id: 4, name: 'NECS Pro Gaming Mouse', category: 'Accessories', price: 69, image: imgGamingMouse },
  { id: 5, name: 'NECS Water Bottle - Black', category: 'Accessories', price: 25, image: imgWaterBottle },
];

const CATEGORIES: Category[] = ['All', 'Jerseys', 'Hoodies', 'Jackets', 'Accessories'];

const CATEGORY_COLORS: Record<Exclude<Category, 'All'>, string> = {
  'Jerseys': 'text-[#3E79FF]',
  'Jackets': 'text-[#8b7aff]',
  'Hoodies': 'text-[#ff4655]',
  'Accessories': 'text-[#00ff88]',
};

export default function Shop() {
  const [selectedCategory, setSelectedCategory] = useState<Category>('All');
  const [cart, setCart] = useState<Set<number>>(new Set());
  const [showCheckout, setShowCheckout] = useState(false);

  const filteredProducts = useMemo(() => 
    selectedCategory === 'All' ? PRODUCTS : PRODUCTS.filter(p => p.category === selectedCategory),
    [selectedCategory]
  );

  const cartItems = useMemo(() => 
    PRODUCTS.filter(p => cart.has(p.id)),
    [cart]
  );

  const toggleCart = useCallback((productId: number) => {
    setCart(prev => {
      const newCart = new Set(prev);
      newCart.has(productId) ? newCart.delete(productId) : newCart.add(productId);
      return newCart;
    });
  }, []);

  const handleCheckout = useCallback(() => {
    alert('Thank you for your order! Total: $' + cartItems.reduce((sum, item) => sum + item.price, 0));
    setCart(new Set());
    setShowCheckout(false);
  }, [cartItems]);

  return (
    <>
      <div className="px-[18px] py-4 pb-24">
        <div className="mb-6 flex items-start justify-between">
          <div>
            <h1 className="text-white text-[28px] font-bold font-['Space_Grotesk'] mb-2">NECS Shop</h1>
            <p className="text-[#97a8d8] text-[14px] font-['Inter']">Official Merchandise</p>
          </div>
          {cart.size > 0 && (
            <button
              onClick={() => setShowCheckout(true)}
              className="relative px-4 py-2 rounded-[14px] border border-[rgba(62,121,255,0.45)]"
              style={{ backgroundImage: "linear-gradient(135deg, rgb(37, 86, 185) 0%, rgb(21, 65, 150) 100%)" }}
            >
              <ShoppingCart className="w-5 h-5 text-white" />
              <span className="absolute -top-2 -right-2 bg-[#f5c521] text-black text-[11px] font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {cart.size}
              </span>
            </button>
          )}
        </div>

        <div className="flex gap-2 mb-6 overflow-x-auto pb-2 scrollbar-hide">
          {CATEGORIES.map(category => (
            <FilterButton
              key={category}
              label={category}
              active={selectedCategory === category}
              onClick={() => setSelectedCategory(category)}
            />
          ))}
        </div>

        <div className="grid grid-cols-1 gap-4">
          {filteredProducts.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              inCart={cart.has(product.id)}
              onToggleCart={() => toggleCart(product.id)}
            />
          ))}
        </div>
      </div>

      <CheckoutModal
        isOpen={showCheckout}
        onClose={() => setShowCheckout(false)}
        cartItems={cartItems}
        onCheckout={handleCheckout}
      />
    </>
  );
}

const ProductCard = ({ product, inCart, onToggleCart }: {
  product: Product;
  inCart: boolean;
  onToggleCart: () => void;
}) => (
  <div 
    className="rounded-[24px] overflow-hidden border border-[rgba(62,121,255,0.22)]"
    style={{ backgroundImage: "linear-gradient(135deg, rgb(10, 18, 33) 0%, rgb(11, 23, 47) 100%)" }}
  >
    <div className="w-full h-[280px] bg-white overflow-hidden">
      <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
    </div>

    <div className="p-5">
      <p className={`text-[11px] font-bold font-['Inter'] uppercase tracking-[0.8px] mb-2 ${CATEGORY_COLORS[product.category]}`}>
        {product.category}
      </p>
      <h3 className="text-white text-[18px] font-bold font-['Space_Grotesk'] mb-4">
        {product.name}
      </h3>
      
      <div className="flex items-center justify-between">
        <span className="text-white text-[28px] font-bold font-['Space_Grotesk']">
          ${product.price}
        </span>
        <button 
          onClick={onToggleCart}
          className={`p-3 rounded-[14px] border transition-all ${
            inCart 
              ? 'border-[rgba(0,255,136,0.45)] bg-[rgba(0,255,136,0.12)]' 
              : 'border-[rgba(62,121,255,0.45)]'
          }`}
          style={inCart ? undefined : { backgroundImage: "linear-gradient(135deg, rgb(37, 86, 185) 0%, rgb(21, 65, 150) 100%)" }}
        >
          {inCart ? <Check className="w-5 h-5 text-[#00ff88]" /> : <ShoppingCart className="w-5 h-5 text-white" />}
        </button>
      </div>
    </div>
  </div>
);