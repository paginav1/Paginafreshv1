import React from 'react';
import { SubscriptionPlan } from '../types';
import { Check, Sparkles, CalendarCheck, ShieldCheck, HeartHandshake } from 'lucide-react';

interface SubscriptionPlansProps {
  plans: SubscriptionPlan[];
  onSelectPlan: (plan: SubscriptionPlan) => void;
}

export const SubscriptionPlans: React.FC<SubscriptionPlansProps> = ({
  plans,
  onSelectPlan
}) => {
  return (
    <section id="planes-mensuales" className="py-16 sm:py-24 bg-stone-100/60 border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
            <CalendarCheck className="w-3.5 h-3.5" />
            <span>Suscripciones & Entregas Programadas</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight font-display">
            Planes Mensuales de Fruta Fresca a tu Puerta
          </h2>
          <p className="mt-3 text-base sm:text-lg text-stone-600">
            Asegura el suministro semanal de arándanos y frutos rojos recién cosechados para tu familia o negocio con hasta 25% de ahorro y envíos preferenciales.
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan) => {
            return (
              <div
                key={plan.id}
                className={`relative rounded-3xl p-6 sm:p-8 transition-all flex flex-col justify-between ${
                  plan.isPopular
                    ? 'bg-emerald-950 text-white shadow-2xl shadow-emerald-950/20 ring-2 ring-emerald-500 scale-105 z-10'
                    : 'bg-white text-stone-900 border border-stone-200/90 shadow-sm hover:shadow-lg'
                }`}
              >
                {/* Popular Ribbon */}
                {plan.isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-emerald-500 to-lime-500 text-stone-950 text-xs font-extrabold uppercase tracking-wider shadow-md flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3" />
                    <span>El Más Elegido por Familias</span>
                  </div>
                )}

                <div>
                  {/* Title & subtitle */}
                  <div className="mb-4">
                    <span className={`text-xs font-bold uppercase tracking-wider ${plan.isPopular ? 'text-emerald-300' : 'text-emerald-700'}`}>
                      {plan.idealFor}
                    </span>
                    <h3 className="text-2xl font-bold font-display mt-1">{plan.title}</h3>
                    <p className={`text-xs mt-1.5 leading-relaxed ${plan.isPopular ? 'text-stone-300' : 'text-stone-500'}`}>
                      {plan.subtitle}
                    </p>
                  </div>

                  {/* Weight tag */}
                  <div className={`py-2 px-3 rounded-xl text-xs font-semibold mb-6 ${
                    plan.isPopular ? 'bg-emerald-900/80 text-emerald-200 border border-emerald-800' : 'bg-stone-50 text-stone-700 border border-stone-100'
                  }`}>
                    📦 {plan.weight}
                  </div>

                  {/* Price */}
                  <div className="mb-6">
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl sm:text-4xl font-black font-display">
                        ${plan.priceMonth.toLocaleString('es-CO')}
                      </span>
                      <span className={`text-xs font-medium ${plan.isPopular ? 'text-stone-300' : 'text-stone-500'}`}>
                        COP / mes
                      </span>
                    </div>
                    <p className={`text-[11px] mt-1 ${plan.isPopular ? 'text-emerald-300' : 'text-stone-500'}`}>
                      {plan.deliveryFrequency}
                    </p>
                  </div>

                  {/* Features List */}
                  <div className="space-y-3 pt-4 border-t border-stone-200/40 text-xs sm:text-sm">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2.5">
                        <div className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                          plan.isPopular ? 'bg-emerald-800 text-emerald-300' : 'bg-emerald-100 text-emerald-700'
                        }`}>
                          <Check className="w-2.5 h-2.5" />
                        </div>
                        <span className={plan.isPopular ? 'text-stone-200' : 'text-stone-700'}>
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Plan Action CTA */}
                <div className="pt-8">
                  <button
                    onClick={() => onSelectPlan(plan)}
                    className={`w-full py-3 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                      plan.isPopular
                        ? 'bg-emerald-500 text-stone-950 hover:bg-emerald-400 shadow-md active:scale-98'
                        : 'bg-emerald-800 text-white hover:bg-emerald-900 active:scale-98 shadow-xs'
                    }`}
                  >
                    Suscribirme al {plan.title}
                  </button>
                  <p className={`text-[10px] text-center mt-2 ${plan.isPopular ? 'text-stone-400' : 'text-stone-400'}`}>
                    Sin contratos de permanencia · Cancela cuando quieras
                  </p>
                </div>

              </div>
            );
          })}
        </div>

        {/* Corporate & Wholesale Strip */}
        <div className="mt-12 bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-stone-900 font-display">
                ¿Eres restaurante, repostería, cafetería o distribuidor?
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 mt-0.5">
                Manejamos despachos al por mayor en cajas de 2kg y 5kg con precios preferenciales de cosecha y factura electrónica.
              </p>
            </div>
          </div>

          <a
            href="https://wa.me/573216920138?text=Hola%20Fresh%20Pick%20Frutas,%20tengo%20un%20negocio/restaurante%20y%20me%20gustar%C3%ADa%20conocer%20la%20lista%20de%20precios%20institucionales%20al%20por%20mayor."
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-5 py-3 rounded-xl bg-stone-900 text-white text-xs sm:text-sm font-bold hover:bg-stone-800 transition-colors"
          >
            Cotizar por Mayor
          </a>
        </div>

      </div>
    </section>
  );
};
