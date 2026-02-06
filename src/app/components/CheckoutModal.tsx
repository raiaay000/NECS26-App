import { X, ShoppingBag, CreditCard } from 'lucide-react';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: Array<{ id: number; name: string; price: number; image: string }>;
  onCheckout: () => void;
}

export function CheckoutModal({ isOpen, onClose, cartItems, onCheckout }: CheckoutModalProps) {
  if (!isOpen) return null;

  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <>
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black/70 z-40"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="fixed inset-x-4 top-1/2 -translate-y-1/2 z-50 max-h-[80vh] overflow-hidden rounded-[24px] border border-[rgba(62,121,255,0.35)]"
        style={{ backgroundImage: "linear-gradient(135deg, rgb(10, 18, 33) 0%, rgb(11, 23, 47) 100%)" }}
      >
        <div className="flex flex-col max-h-[80vh]">
          {/* Header */}
          <div className="flex items-center justify-between p-5 border-b border-[rgba(62,121,255,0.22)]">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-[#3E79FF]" />
              <h2 className="text-white text-[20px] font-bold font-['Space_Grotesk']">Your Cart</h2>
            </div>
            <button 
              onClick={onClose}
              className="p-2 rounded-[12px] hover:bg-[rgba(62,121,255,0.12)] transition-colors"
            >
              <X className="w-5 h-5 text-[#97a8d8]" />
            </button>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto p-5 space-y-3">
            {cartItems.length === 0 ? (
              <div className="text-center py-12">
                <ShoppingBag className="w-16 h-16 text-[#5d7191] mx-auto mb-4" />
                <p className="text-[#97a8d8] text-[14px] font-['Inter']">Your cart is empty</p>
              </div>
            ) : (
              cartItems.map(item => (
                <div 
                  key={item.id}
                  className="flex items-center gap-3 p-3 rounded-[16px] border border-[rgba(62,121,255,0.22)]"
                  style={{ backgroundImage: "linear-gradient(135deg, rgb(10, 18, 33) 0%, rgb(11, 23, 47) 100%)" }}
                >
                  <div className="w-16 h-16 rounded-[12px] bg-white overflow-hidden flex-shrink-0">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-white text-[14px] font-bold font-['Inter'] truncate">{item.name}</h3>
                    <p className="text-[#3E79FF] text-[16px] font-bold font-['Space_Grotesk']">${item.price}</p>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer */}
          {cartItems.length > 0 && (
            <div className="p-5 border-t border-[rgba(62,121,255,0.22)] space-y-3">
              <div className="flex items-center justify-between mb-4">
                <span className="text-[#97a8d8] text-[14px] font-['Inter']">Total</span>
                <span className="text-white text-[28px] font-bold font-['Space_Grotesk']">${total}</span>
              </div>
              
              <button 
                onClick={onCheckout}
                className="w-full py-[14px] rounded-[16px] flex items-center justify-center gap-2 border border-[rgba(62,121,255,0.45)]"
                style={{ backgroundImage: "linear-gradient(135deg, rgb(37, 86, 185) 0%, rgb(21, 65, 150) 100%)" }}
              >
                <CreditCard className="w-4 h-4 text-white" />
                <span className="text-white text-[14px] font-bold font-['Inter'] uppercase">Checkout Now</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
