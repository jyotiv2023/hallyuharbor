import { lazy, Suspense } from "react";
import LoadingSkeleton from "../common/LoadingSkeleton";
// Lazy load components
const Navbar = lazy(() => import("../components/Navbar"));
const Carousel = lazy(() => import("../components/Carousel"));
const Category = lazy(() => import("../components/Category"));
const Products = lazy(() => import("../components/Products"));
const Footer = lazy(() => import("../components/Footer"));
const HomePage = () => {
  return (
    <div className="bg-[#f7efef]">
      {/* Wrap lazy-loaded components with Suspense */}
      <Suspense fallback={<LoadingSkeleton />}>
        <Navbar />
        <Carousel />
        <Category />
        {/* <Products /> */}
        <Footer />
      </Suspense>
    </div>
  );
};

export default HomePage;
