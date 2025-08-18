import React, { useState, useEffect } from "react";
import { Navigation } from "@/components/Navigation";
import { HomePage } from "@/components/pages/HomePage";
import { ServicesPage } from "@/components/pages/ServicesPage";
import { AboutPage } from "@/components/pages/AboutPage";
import { ContactPage } from "@/components/pages/ContactPage";
import { BlogPage } from "@/components/pages/BlogPage";
import { ResourcesPage } from "@/components/pages/ResourcesPage";
import { PrivacyPolicyPage } from "@/components/pages/PrivacyPolicyPage";
import { TermsOfServicePage } from "@/components/pages/TermsOfServicePage";
import { FamilyLawPage } from "@/components/pages/services/FamilyLawPage";
import { CorporateLawPage } from "@/components/pages/services/CorporateLawPage";
import { CriminalDefensePage } from "@/components/pages/services/CriminalDefensePage";
import { PersonalInjuryPage } from "@/components/pages/services/PersonalInjuryPage";
import { RealEstatePage } from "@/components/pages/services/RealEstatePage";
import { ContractLawPage } from "@/components/pages/services/ContractLawPage";
import { ClientPortal } from "@/components/ClientPortal";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { Toaster } from "sonner";

type Page =
  | "home"
  | "services"
  | "about"
  | "contact"
  | "blog"
  | "resources"
  | "privacy-policy"
  | "terms-of-service"
  | "client-portal"
  | "family-law"
  | "corporate-law"
  | "criminal-defense"
  | "personal-injury"
  | "real-estate"
  | "contract-law";

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>("home");

  // Simplified routing
  useEffect(() => {
    const path = window.location.pathname;
    
    if (path.includes('/services/family-law')) {
      setCurrentPage("family-law");
    } else if (path.includes('/services/corporate-law')) {
      setCurrentPage("corporate-law");
    } else if (path.includes('/services/criminal-defense')) {
      setCurrentPage("criminal-defense");
    } else if (path.includes('/services/personal-injury')) {
      setCurrentPage("personal-injury");
    } else if (path.includes('/services/real-estate')) {
      setCurrentPage("real-estate");
    } else if (path.includes('/services/contract-law')) {
      setCurrentPage("contract-law");
    } else if (path.includes('/services')) {
      setCurrentPage("services");
    } else if (path.includes('/about')) {
      setCurrentPage("about");
    } else if (path.includes('/contact')) {
      setCurrentPage("contact");
    } else if (path.includes('/blog')) {
      setCurrentPage("blog");
    } else if (path.includes('/resources')) {
      setCurrentPage("resources");
    } else if (path.includes('/privacy-policy')) {
      setCurrentPage("privacy-policy");
    } else if (path.includes('/terms-of-service')) {
      setCurrentPage("terms-of-service");
    } else if (path.includes('/client-portal')) {
      setCurrentPage("client-portal");
    } else {
      setCurrentPage("home");
    }
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case "services":
        return <ServicesPage />;
      case "family-law":
        return <FamilyLawPage />;
      case "corporate-law":
        return <CorporateLawPage />;
      case "criminal-defense":
        return <CriminalDefensePage />;
      case "personal-injury":
        return <PersonalInjuryPage />;
      case "real-estate":
        return <RealEstatePage />;
      case "contract-law":
        return <ContractLawPage />;
      case "about":
        return <AboutPage />;
      case "contact":
        return <ContactPage />;
      case "blog":
        return <BlogPage />;
      case "resources":
        return <ResourcesPage />;
      case "privacy-policy":
        return <PrivacyPolicyPage />;
      case "terms-of-service":
        return <TermsOfServicePage />;
      case "client-portal":
        return (
          <div className="min-h-screen bg-navy-deep pt-20">
            <ClientPortal />
          </div>
        );
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-navy-deep">
      <Navigation currentPage={currentPage} />

      <main>{renderPage()}</main>

      {currentPage !== "client-portal" && <Footer />}

      {/* Floating WhatsApp Widget */}
      <FloatingWhatsApp />

      <Toaster
        theme="dark"
        position="bottom-right"
        toastOptions={{
          style: {
            background: "rgba(11, 30, 58, 0.95)",
            border: "1px solid rgba(198, 166, 100, 0.3)",
            color: "white",
          },
        }}
      />
    </div>
  );
}