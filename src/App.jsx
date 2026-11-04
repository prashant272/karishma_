import React, { useState } from 'react';
import { weddingData } from './data/weddingData';
import RoyalPreloader from './components/RoyalPreloader';
import EnvelopeIntro from './components/EnvelopeIntro';
import HeroSection from './components/HeroSection';
import InvitationCardSection from './components/InvitationCardSection';
import FamilySection from './components/FamilySection';
import EventsSection from './components/EventsSection';
import StorySection from './components/StorySection';
import VenueSection from './components/VenueSection';
import RSVPSection from './components/RSVPSection';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { FloatingPetals } from './components/Ornaments';
import YouTubeAudio from './components/YouTubeAudio';

function App() {
  const [assetsLoaded, setAssetsLoaded] = useState(false);
  const [envelopeOpened, setEnvelopeOpened] = useState(false);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);

  const handleOpenEnvelope = () => {
    setEnvelopeOpened(true);
    // User interaction activates continuous wedding background audio
    setIsAudioPlaying(true);
  };

  const handleToggleAudio = () => {
    setIsAudioPlaying(prev => !prev);
  };

  return (
    <div className="min-h-screen bg-[#180307] text-[#FAF5EB] selection:bg-[#D4AF37]/30 selection:text-[#F3E5AB]">
      {/* Background YouTube Audio Player (Always mounted in DOM so it continues playing across all sections) */}
      <YouTubeAudio
        videoId="PGer5XYPaPk"
        isPlaying={isAudioPlaying}
      />

      {/* Floating flower petals simulation */}
      <FloatingPetals />

      {/* Preloader: Blocks website display until all images are fully loaded & cached */}
      {!assetsLoaded && (
        <RoyalPreloader onLoaded={() => setAssetsLoaded(true)} />
      )}

      {/* Opening Envelope Modal (Shows until user clicks OPEN INVITATION) */}
      {!envelopeOpened ? (
        <EnvelopeIntro
          onOpen={handleOpenEnvelope}
          weddingData={weddingData}
          isAudioPlaying={isAudioPlaying}
          toggleAudio={handleToggleAudio}
        />
      ) : (
        <div className="relative animate-in fade-in duration-1000">
          {/* Navigation Bar */}
          <Navbar
            isAudioPlaying={isAudioPlaying}
            toggleAudio={handleToggleAudio}
          />

          {/* Main Website Sections */}
          <main>
            {/* 1. Hero Section (Full-screen cinematic wedding hero with curved transition) */}
            <HeroSection weddingData={weddingData} />

            {/* 2. Invitation Section (Immediately Below Hero - Envelope card with wax seal & calligraphy) */}
            <InvitationCardSection weddingData={weddingData} />

            {/* 3. Family Introduction Section (Our Families with Royal Elephants) */}
            <FamilySection groom={weddingData.groom} bride={weddingData.bride} />

            {/* 4. Wedding Ceremonies (Haldi, Pool Party, Muhuratham with custom high-res banners) */}
            <EventsSection events={weddingData.events} />

            {/* 5. Wedding Day Timeline (Wedding Day Celebrations bar) */}
            <StorySection celebrations={weddingData.celebrations} />

            {/* 6. Wedding Venue (Sai Priya Beach Resort Visakhapatnam card with directions) */}
            <VenueSection weddingDetails={weddingData.weddingDetails} />

            {/* 7. RSVP Section (Grace Us With Your Presence form) */}
            <RSVPSection />
          </main>

          {/* Footer */}
          <Footer weddingData={weddingData} />
        </div>
      )}
    </div>
  );
}

export default App;
