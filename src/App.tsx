import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import AboutUs from "./pages/AboutUs";
import Portfolio from "./pages/Portfolio";
import ContactUs from "./pages/ContactUs";
import Services from "./pages/Services";
import LocalSEO from "./pages/services/LocalSEO";
import GlobalSEO from "./pages/services/GlobalSEO";
import GoogleAds from "./pages/services/GoogleAds";
import MetaAds from "./pages/services/MetaAds";
import LeadGeneration from "./pages/services/LeadGeneration";
import EcommerceMarketing from "./pages/services/EcommerceMarketing";
import WebDesign from "./pages/services/WebDesign";
import SocialMediaMarketing from "./pages/services/SocialMediaMarketing";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/local-seo" element={<LocalSEO />} />
          <Route path="/services/global-seo" element={<GlobalSEO />} />
          <Route path="/services/google-ads" element={<GoogleAds />} />
          <Route path="/services/meta-ads" element={<MetaAds />} />
          <Route path="/services/lead-generation" element={<LeadGeneration />} />
          <Route path="/services/ecommerce-marketing" element={<EcommerceMarketing />} />
          <Route path="/services/web-design" element={<WebDesign />} />
          <Route path="/services/social-media-marketing" element={<SocialMediaMarketing />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
