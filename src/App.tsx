import React, { useState, useMemo, useEffect } from 'react';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { SearchBar } from './components/SearchBar.tsx';
import { PropertyGrid } from './components/PropertyGrid.tsx';
import { PropertyModal } from './components/PropertyModal.tsx';
import { FamilyHomesSection } from './components/FamilyHomesSection.tsx';
import { BachelorLivingSection } from './components/BachelorLivingSection.tsx';
import { WhyUrbanKeys } from './components/WhyUrbanKeys.tsx';
import { HowItWorks } from './components/HowItWorks.tsx';
import { AboutSection } from './components/AboutSection.tsx';
import { RanchiLocationSection } from './components/RanchiLocationSection.tsx';
import { InstagramSection } from './components/InstagramSection.tsx';
import { ContactSection } from './components/ContactSection.tsx';
import { WhatsAppButton } from './components/WhatsAppButton.tsx';
import { Footer } from './components/Footer.tsx';
import { PROPERTIES_DATA } from './data/properties.ts';
import { Property, PropertyCategory, SearchFilterState } from './types.ts';

export default function App() {
  const [filters, setFilters] = useState<SearchFilterState>({
    location: 'all',
    propertyType: 'all',
    lookingFor: 'all',
    budget: 'all',
  });

  const [selectedCategory, setSelectedCategory] = useState<PropertyCategory>('all');
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const [activeSection, setActiveSection] = useState<string>('home');
  const [contactPreselection, setContactPreselection] = useState({
    requirement: '',
    propertyTitle: '',
  });
  const [scrollProgress, setScrollProgress] = useState(0);

  // Track scroll progress and active section
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }

      // Check sections for active navigation state
      const sections = ['home', 'properties', 'family-homes', 'bachelor-living', 'about', 'contact'];
      for (const sec of sections) {
        const el = document.getElementById(sec);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(sec);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Dynamic filtering of properties
  const filteredProperties = useMemo(() => {
    return PROPERTIES_DATA.filter((property) => {
      // Filter by category tab
      if (selectedCategory !== 'all' && property.category !== selectedCategory) {
        return false;
      }

      // Filter by search form: location
      if (filters.location !== 'all') {
        const queryLoc = filters.location.toLowerCase();
        const matchesLoc =
          property.location.toLowerCase().includes(queryLoc) ||
          property.subLocality.toLowerCase().includes(queryLoc);
        if (!matchesLoc) return false;
      }

      // Filter by property type
      if (filters.propertyType !== 'all' && property.type !== filters.propertyType) {
        return false;
      }

      // Filter by looking for category
      if (filters.lookingFor !== 'all' && property.category !== filters.lookingFor) {
        return false;
      }

      // Filter by budget
      if (filters.budget !== 'all' && property.priceRange !== filters.budget) {
        return false;
      }

      return true;
    });
  }, [filters, selectedCategory]);

  const handleResetFilters = () => {
    setFilters({
      location: 'all',
      propertyType: 'all',
      lookingFor: 'all',
      budget: 'all',
    });
    setSelectedCategory('all');
  };

  const handleScheduleViewing = (property: Property) => {
    setContactPreselection({
      requirement: property.category === 'bachelor' ? 'Bachelor Living' : 'Family Home',
      propertyTitle: property.title,
    });
    scrollToSection('contact');
  };

  const handleExploreFamily = () => {
    setSelectedCategory('family');
    setFilters((prev) => ({ ...prev, lookingFor: 'family' }));
    scrollToSection('properties');
  };

  const handleExploreBachelor = () => {
    setSelectedCategory('bachelor');
    setFilters((prev) => ({ ...prev, lookingFor: 'bachelor' }));
    scrollToSection('properties');
  };

  const handleSelectLocality = (locality: string) => {
    setFilters((prev) => ({ ...prev, location: locality.toLowerCase() }));
    scrollToSection('properties');
  };

  return (
    <div className="min-h-screen bg-[#111315] text-[#FBF9F5] relative selection:bg-[#C5A880]/20 selection:text-[#111315]">
      {/* Scroll Progress Bar at the top edge */}
      <div className="fixed top-0 left-0 right-0 h-[2px] bg-white/10 z-50 pointer-events-none">
        <div
          className="h-full bg-[#C5A880] transition-all duration-100 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Navigation */}
      <Navbar onNavigate={scrollToSection} activeSection={activeSection} />

      {/* Main Storytelling Flow */}
      <main>
        {/* 1. Hero Section */}
        <Hero
          onExploreClick={() => scrollToSection('properties')}
          onTalkClick={() => scrollToSection('contact')}
        />

        {/* 2. Property Search Component */}
        <SearchBar
          filters={filters}
          onFilterChange={setFilters}
          onSearchSubmit={() => scrollToSection('properties')}
          onResetFilters={handleResetFilters}
          totalMatches={filteredProperties.length}
        />

        {/* 3. Featured Properties Grid */}
        <PropertyGrid
          properties={filteredProperties}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          onViewProperty={setSelectedProperty}
          onTalkClick={() => scrollToSection('contact')}
        />

        {/* 4. Family Homes Section */}
        <FamilyHomesSection onExploreFamilyHomes={handleExploreFamily} />

        {/* 5. Bachelor Living Section */}
        <BachelorLivingSection onExploreBachelorLiving={handleExploreBachelor} />

        {/* 6. Why UrbanKeys Section */}
        <WhyUrbanKeys />

        {/* 7. How It Works Section */}
        <HowItWorks />

        {/* 8. About UrbanKeys Section */}
        <AboutSection onTalkClick={() => scrollToSection('contact')} />

        {/* 9. Ranchi Dedicated Location Section */}
        <RanchiLocationSection onSelectLocality={handleSelectLocality} />

        {/* 10. Instagram Section */}
        <InstagramSection />

        {/* 11. Contact Section */}
        <ContactSection
          preselectedRequirement={contactPreselection.requirement}
          preselectedPropertyTitle={contactPreselection.propertyTitle}
        />
      </main>

      {/* Footer */}
      <Footer onNavigate={scrollToSection} />

      {/* Persistent WhatsApp Floating Button */}
      <WhatsAppButton />

      {/* Property Detail Modal */}
      <PropertyModal
        property={selectedProperty}
        onClose={() => setSelectedProperty(null)}
        onScheduleViewing={handleScheduleViewing}
      />
    </div>
  );
}
