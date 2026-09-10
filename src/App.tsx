import React, { useState } from 'react';
import { FRUITS_DATA, PACKAGING_OPTIONS, ADDONS_DATA, SUBSCRIPTION_PLANS } from './data/mockData';
import { FruitItem, SubscriptionPlan, CustomOrder } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FruitCatalog } from './components/FruitCatalog';
import { CustomOrderSection } from './components/CustomOrderSection';
import { SubscriptionPlans } from './components/SubscriptionPlans';
import { AboutAndSustainability } from './components/AboutAndSustainability';
import { RecipesAndTips } from './components/RecipesAndTips';
import { TestimonialsAndFaq } from './components/TestimonialsAndFaq';
import { Footer } from './components/Footer';
import { CartDrawer, CartItem } from './components/CartDrawer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [preselectedFruitForCustom, setPreselectedFruitForCustom] = useState<string | null>(null);

  // Cart operations
  const handleAddToCart = (fruit: FruitItem, quantity: number = 1) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.fruit.id === fruit.id);
      if (existing) {
        return prev.map(item =>
          item.fruit.id === fruit.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        return [...prev, { fruit, quantity }];
      }
    });
  };

  const handleUpdateQuantity = (fruitId: string, quantity: number) => {
    setCartItems(prev =>
      prev.map(item =>
        item.fruit.id === fruitId ? { ...item, quantity } : item
      )
    );
  };

  const handleRemoveFromCart = (fruitId: string) => {
    setCartItems(prev => prev.filter(item => item.fruit.id !== fruitId));
  };

  // Scroll to customized order builder
  const scrollToCustomOrder = (fruitId?: string) => {
    if (fruitId) {
      setPreselectedFruitForCustom(fruitId);
    }
    const elem = document.getElementById('pedidos-personalizados');
    if (elem) {
      const navOffset = 80;
      const elementPosition = elem.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const scrollToCatalog = () => {
    const elem = document.getElementById('variedades');
    if (elem) {
      const navOffset = 80;
      const elementPosition = elem.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleSelectSubscriptionPlan = (plan: SubscriptionPlan) => {
    // Open WhatsApp with prefilled message or scroll to custom order
    const message = `Hola Fresh Pick! Deseo suscribirme al *${plan.title}* (${plan.weight} por $${plan.priceMonth.toLocaleString('es-CO')} COP/mes). Por favor indíquenme cómo activar mi suscripción de arándanos.`;
    window.open(`https://wa.me/573178931026?text=${encodeURIComponent(message)}`, '_blank');
  };

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F5F0] text-stone-900 font-sans selection:bg-[#1B4D3E] selection:text-white">
      {/* Navbar */}
      <Navbar
        cartItemCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onNavigateToCustomOrder={() => scrollToCustomOrder()}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onGoToCustomOrder={() => scrollToCustomOrder()}
          onExploreFruits={scrollToCatalog}
        />

        {/* Fruit Catalog / Variedades */}
        <FruitCatalog
          fruits={FRUITS_DATA}
          onAddToCart={handleAddToCart}
          onCustomizeWithFruit={(fruitId) => scrollToCustomOrder(fruitId)}
        />

        {/* ⭐ SECCIÓN PRINCIPAL: PEDIDOS PERSONALIZADOS EN LÍNEA */}
        <CustomOrderSection
          fruits={FRUITS_DATA}
          packagingOptions={PACKAGING_OPTIONS}
          addOns={ADDONS_DATA}
          initialSelectedFruitId={preselectedFruitForCustom}
        />

        {/* Subscription Plans (Planes Mensuales) */}
        <SubscriptionPlans
          plans={SUBSCRIPTION_PLANS}
          onSelectPlan={handleSelectSubscriptionPlan}
        />

        {/* About the Farm, Mountain Altitude & Sustainability (Biofábrica / Abejas) */}
        <AboutAndSustainability />

        {/* Recipes & Tips */}
        <RecipesAndTips />

        {/* Testimonials & Frequently Asked Questions */}
        <TestimonialsAndFaq />
      </main>

      {/* Footer */}
      <Footer />

      {/* Slide-over Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveFromCart}
        onGoToCustomOrder={() => scrollToCustomOrder()}
      />

      {/* Floating WhatsApp Action Button */}
      <FloatingWhatsApp />
    </div>
  );
}
