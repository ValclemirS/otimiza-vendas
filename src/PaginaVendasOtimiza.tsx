import React from "react";
import { useSalesPage } from "./controllers/useSalesPage";
import { CSS } from "./views/styles";
import Header from "./views/sections/Header";
import Hero from "./views/sections/Hero";
import BonusStrip from "./views/sections/BonusStrip";
import Pain from "./views/sections/Pain";
import Pack from "./views/sections/Pack";
import Bonus from "./views/sections/Bonus";
import Offer from "./views/sections/Offer";
import Guarantee from "./views/sections/Guarantee";
import Reviews from "./views/sections/Reviews";
import Faq from "./views/sections/Faq";
import Final from "./views/sections/Final";
import Footer from "./views/sections/Footer";
import CtaBar from "./views/sections/CtaBar";
import Lightbox from "./views/components/Lightbox";

export default function PaginaVendasOtimiza() {
  const { openFaq, toggleFaq, gallery, openGallery, closeGallery, galleryNext, galleryPrev } = useSalesPage();

  return (
    <>
      <div className="page">
        <style>{CSS}</style>
        <Header />
        <Hero />
        <BonusStrip />
        <Pain />
        <Pack onImageClick={openGallery} />
        <Bonus />
        <Offer />
        <Guarantee />
        <Reviews />
        <Faq openIndex={openFaq} onToggle={toggleFaq} />
        <Final />
        <Footer />
        <CtaBar />
      </div>

      {gallery && (
        <Lightbox
          images={gallery.images}
          index={gallery.index}
          onClose={closeGallery}
          onNext={galleryNext}
          onPrev={galleryPrev}
          onGoTo={(i) => openGallery(gallery.images, i)}
        />
      )}
    </>
  );
}
