/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { CollectionSection } from './components/CollectionSection';
import { BrandStorySection } from './components/BrandStorySection';
import { ArchiveSection } from './components/ArchiveSection';
import { InquiriesSection } from './components/InquiriesSection';
import { Footer } from './components/Footer';
import { ArchivalModal } from './components/ArchivalModal';
import { Product, ArchiveEntry } from './types';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedArchiveItem, setSelectedArchiveItem] = useState<ArchiveEntry | null>(null);

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'collection', 'brand-story', 'archive', 'inquiries'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#E8E5D2] text-[#382517] paper-fibers selection:bg-[#57391F] selection:text-[#E8E5D2]">
      
      {/* Restrained Navigation */}
      <Navbar activeSection={activeSection} />

      {/* Main Content Sections */}
      <main>
        {/* Giant Vintage Label Hero */}
        <HeroSection />

        {/* Dedicated Product Showcase (NO Ecommerce, Strictly Archival) */}
        <CollectionSection onSelectProduct={setSelectedProduct} />

        {/* Brand Story Manifesto: "THE CLASSIC FORM" */}
        <BrandStorySection />

        {/* Curated Archive Gallery */}
        <ArchiveSection onSelectArchiveItem={setSelectedArchiveItem} />

        {/* Archival Inquiries & Curatorial Dispatch */}
        <InquiriesSection />
      </main>

      {/* Reverse-Side Label Footer */}
      <Footer />

      {/* Archival Dossier Modal */}
      <ArchivalModal
        product={selectedProduct}
        archiveItem={selectedArchiveItem}
        onClose={() => {
          setSelectedProduct(null);
          setSelectedArchiveItem(null);
        }}
      />

    </div>
  );
}
