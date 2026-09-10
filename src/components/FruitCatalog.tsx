import React, { useState } from 'react';
import { FruitItem } from '../types';
import { Plus, Check, Info, Sparkles, X, Shield, SunMedium, Compass, Heart } from 'lucide-react';

interface FruitCatalogProps {
  fruits: FruitItem[];
  onAddToCart: (fruit: FruitItem, quantity?: number) => void;
  onCustomizeWithFruit: (fruitId: string) => void;
}

export const FruitCatalog: React.FC<FruitCatalogProps> = ({
  fruits,
  onAddToCart,
  onCustomizeWithFruit
}) => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'frescos' | 'jumbo' | 'familiar' | 'congelados'>('all');
  const [activeModalFruit, setActiveModalFruit] = useState<FruitItem | null>(null);
  const [addedIds, setAddedIds] = useState<Record<string, boolean>>({});

  const filteredFruits = fruits.filter(f => {
    if (selectedCategory === 'all') return true;
    return f.category === selectedCategory;
  });

  const handleAdd = (fruit: FruitItem) => {
    onAddToCart(fruit, 1);
    setAddedIds(prev => ({ ...prev, [fruit.id]: true }));
    setTimeout(() => {
      setAddedIds(prev => ({ ...prev, [fruit.id]: false }));
    }, 1500);
  };

  return (
    <section id="variedades" className="py-16 sm:py-20 bg-stone-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider mb-3">
            <span>Nuestra Cosecha de Arándanos</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight font-display">
            Arándanos de Altura con Dulzor y Textura Extraordinarios
          </h2>
          <p className="mt-3 text-base sm:text-lg text-stone-600">
            Cultivados en la alta montaña andina con polinización natural de abejas nativas y cosechados a mano baya por baya para preservar su pruina natural intacta.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                selectedCategory === 'all'
                  ? 'bg-blue-800 text-white shadow-sm'
                  : 'bg-white text-stone-600 border border-stone-200 hover:bg-stone-100'
              }`}
            >
              Todos los Arándanos ({fruits.length})
            </button>
            <button
              onClick={() => setSelectedCategory('frescos')}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                selectedCategory === 'frescos'
                  ? 'bg-blue-800 text-white shadow-sm'
                  : 'bg-white text-stone-600 border border-stone-200 hover:bg-stone-100'
              }`}
            >
              Frescos 250g
            </button>
            <button
              onClick={() => setSelectedCategory('jumbo')}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                selectedCategory === 'jumbo'
                  ? 'bg-blue-800 text-white shadow-sm'
                  : 'bg-white text-stone-600 border border-stone-200 hover:bg-stone-100'
              }`}
            >
              Selección Jumbo
            </button>
            <button
              onClick={() => setSelectedCategory('familiar')}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                selectedCategory === 'familiar'
                  ? 'bg-blue-800 text-white shadow-sm'
                  : 'bg-white text-stone-600 border border-stone-200 hover:bg-stone-100'
              }`}
            >
              Caja Familiar 1kg
            </button>
            <button
              onClick={() => setSelectedCategory('congelados')}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                selectedCategory === 'congelados'
                  ? 'bg-blue-800 text-white shadow-sm'
                  : 'bg-white text-stone-600 border border-stone-200 hover:bg-stone-100'
              }`}
            >
              Congelados IQF
            </button>
          </div>
        </div>

        {/* Fruits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredFruits.map((fruit) => {
            const isAdded = addedIds[fruit.id];

            return (
              <div
                key={fruit.id}
                className="bg-white rounded-2xl border border-stone-200/90 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden group hover:-translate-y-1"
              >
                {/* Fruit Image Container */}
                <div className="relative aspect-[16/10] overflow-hidden bg-stone-100">
                  <img
                    src={fruit.imageUrl}
                    alt={fruit.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/60 via-transparent to-transparent opacity-80" />

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 flex items-center gap-1.5 flex-wrap">
                    {fruit.popular && (
                      <span className="px-2.5 py-0.5 rounded-full bg-blue-600 text-white text-[11px] font-bold shadow-xs flex items-center gap-1">
                        <Sparkles className="w-3 h-3" />
                        <span>Más pedido</span>
                      </span>
                    )}
                    <span className="px-2.5 py-0.5 rounded-full bg-stone-900/80 backdrop-blur-xs text-white text-[11px] font-medium">
                      {fruit.brix}
                    </span>
                  </div>

                  <div className="absolute top-3 right-3">
                    <span className="px-2 py-0.5 rounded-md bg-white/90 backdrop-blur-xs text-stone-800 text-[10px] font-bold tracking-tight">
                      {fruit.altitude}
                    </span>
                  </div>

                  {/* Title on Image */}
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <p className="text-[11px] uppercase tracking-wider text-blue-200 font-semibold">
                      {fruit.variety}
                    </p>
                    <h3 className="text-xl font-bold font-display leading-tight drop-shadow-xs">
                      {fruit.name}
                    </h3>
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <p className="text-xs text-stone-500 italic mb-2">
                      {fruit.scientificName}
                    </p>
                    <p className="text-stone-600 text-xs sm:text-sm line-clamp-2 leading-relaxed">
                      {fruit.description}
                    </p>

                    {/* Benefit tags */}
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {fruit.benefits.slice(0, 2).map((benefit, i) => (
                        <span
                          key={i}
                          className="text-[11px] bg-blue-50 text-blue-800 px-2 py-0.5 rounded-md border border-blue-100/80 font-medium"
                        >
                          ✓ {benefit}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Pricing and Action Bar */}
                  <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
                    <div>
                      <span className="text-[11px] text-stone-500 block font-medium">
                        Presentación: {fruit.presentation}
                      </span>
                      <div className="flex items-baseline gap-1">
                        <span className="text-lg font-black text-blue-950 font-display">
                          ${fruit.standardPrice.toLocaleString('es-CO')}
                        </span>
                        <span className="text-xs text-stone-500 font-medium">COP</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      {/* Info Button */}
                      <button
                        onClick={() => setActiveModalFruit(fruit)}
                        className="p-2 rounded-lg text-stone-500 hover:text-stone-800 hover:bg-stone-100 transition-colors cursor-pointer"
                        title="Ver ficha agronómica completa"
                        aria-label={`Ver detalles de ${fruit.name}`}
                      >
                        <Info className="w-4 h-4" />
                      </button>

                      {/* Add to Order Button */}
                      <button
                        onClick={() => handleAdd(fruit)}
                        className={`px-3.5 py-2 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                          isAdded
                            ? 'bg-blue-600 text-white'
                            : 'bg-blue-800 text-white hover:bg-blue-900 active:scale-95 shadow-xs'
                        }`}
                      >
                        {isAdded ? (
                          <>
                            <Check className="w-3.5 h-3.5" />
                            <span>¡Agregado!</span>
                          </>
                        ) : (
                          <>
                            <Plus className="w-3.5 h-3.5" />
                            <span>Agregar</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Quick Custom Builder link */}
                  <div className="bg-blue-50/70 p-2 rounded-lg border border-blue-100 flex items-center justify-between text-xs">
                    <span className="text-blue-900 font-medium">¿La quieres en caja a medida?</span>
                    <button
                      onClick={() => onCustomizeWithFruit(fruit.id)}
                      className="text-blue-700 font-bold hover:text-blue-900 hover:underline flex items-center gap-0.5 cursor-pointer"
                    >
                      <span>Personalizar</span>
                      <Sparkles className="w-3 h-3" />
                    </button>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Details & Agronomic Sheet Modal */}
      {activeModalFruit && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl max-w-xl w-full overflow-hidden shadow-2xl border border-stone-200 max-h-[90vh] flex flex-col">
            
            {/* Modal Header */}
            <div className="relative aspect-[16/8] bg-stone-900">
              <img
                src={activeModalFruit.imageUrl}
                alt={activeModalFruit.name}
                className="w-full h-full object-cover opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-transparent" />
              
              <button
                onClick={() => setActiveModalFruit(null)}
                className="absolute top-3 right-3 p-2 rounded-full bg-black/40 text-white hover:bg-black/70 transition-colors"
                aria-label="Cerrar ventana"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="absolute bottom-3 left-4 right-4 text-white">
                <span className="text-xs uppercase tracking-wider text-blue-300 font-semibold">
                  Ficha Técnica Agronómica
                </span>
                <h3 className="text-2xl font-black font-display">{activeModalFruit.name}</h3>
                <p className="text-xs text-stone-300 italic">{activeModalFruit.scientificName} · {activeModalFruit.variety}</p>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 overflow-y-auto space-y-5 text-stone-700 text-sm">
              <p className="leading-relaxed">
                {activeModalFruit.description}
              </p>

              {/* Agronomic Indicators */}
              <div className="grid grid-cols-3 gap-3 p-3.5 rounded-xl bg-stone-50 border border-stone-200 text-center">
                <div>
                  <div className="flex items-center justify-center gap-1 text-xs text-stone-500 font-medium">
                    <SunMedium className="w-3.5 h-3.5 text-amber-500" />
                    <span>Dulzor</span>
                  </div>
                  <div className="text-sm font-bold text-stone-900 mt-1">{activeModalFruit.brix}</div>
                </div>

                <div>
                  <div className="flex items-center justify-center gap-1 text-xs text-stone-500 font-medium">
                    <Compass className="w-3.5 h-3.5 text-blue-600" />
                    <span>Altitud</span>
                  </div>
                  <div className="text-sm font-bold text-stone-900 mt-1">{activeModalFruit.altitude}</div>
                </div>

                <div>
                  <div className="flex items-center justify-center gap-1 text-xs text-stone-500 font-medium">
                    <Shield className="w-3.5 h-3.5 text-blue-600" />
                    <span>Vida Útil</span>
                  </div>
                  <div className="text-sm font-bold text-stone-900 mt-1">{activeModalFruit.shelfLife}</div>
                </div>
              </div>

              {/* Benefits list */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-900 mb-2 flex items-center gap-1.5">
                  <Heart className="w-4 h-4 text-red-500" />
                  <span>Beneficios Saludables & Antioxidantes</span>
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {activeModalFruit.benefits.map((b, i) => (
                    <li key={i} className="flex items-start gap-2 bg-blue-50/50 p-2 rounded-md border border-blue-100">
                      <span className="text-blue-700 font-bold">•</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Preservation advice */}
              <div className="bg-amber-50/80 p-3.5 rounded-xl border border-amber-200 text-xs text-amber-900 space-y-1">
                <span className="font-bold block">💡 Consejo de Conservación Fresh Pick:</span>
                <p>
                  No laves la fruta antes de guardarla. Mantenla refrigerada entre 2°C y 4°C en su empaque original para conservar su pruina protectora natural. Lávala únicamente minutos antes de su consumo.
                </p>
              </div>

            </div>

            {/* Modal Footer */}
            <div className="p-4 border-t border-stone-200 bg-stone-50 flex items-center justify-between gap-3">
              <div>
                <span className="text-[11px] text-stone-500 block">Precio regular</span>
                <span className="text-xl font-black text-blue-950 font-display">
                  ${activeModalFruit.standardPrice.toLocaleString('es-CO')} COP
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    const id = activeModalFruit.id;
                    setActiveModalFruit(null);
                    onCustomizeWithFruit(id);
                  }}
                  className="px-3.5 py-2.5 rounded-xl bg-white border border-blue-300 text-blue-800 text-xs font-bold hover:bg-blue-50 transition-colors"
                >
                  Personalizar Gramos
                </button>
                <button
                  onClick={() => {
                    handleAdd(activeModalFruit);
                    setActiveModalFruit(null);
                  }}
                  className="px-4 py-2.5 rounded-xl bg-blue-800 text-white text-xs font-bold hover:bg-blue-900 transition-colors shadow-xs"
                >
                  Añadir al Carrito
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
