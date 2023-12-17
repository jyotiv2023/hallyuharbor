import { lazy, Suspense } from "react";
import LoadingSkeleton from "../common/LoadingSkeleton";
// Lazy load components
// const Navbar = lazy(() => import("../components/Navbar"));
const Carousel = lazy(() => import("../components/Carousel"));
const Category = lazy(() => import("../components/Category"));
//const Products = lazy(() => import("../components/Products"));
const Footer = lazy(() => import("../components/Footer"));
const HomePage = () => {
  return (
    <div>
      {/* Wrap lazy-loaded components with Suspense */}
      <Suspense fallback={<LoadingSkeleton />}>
        <Carousel />
        <Category />
        <Footer />
      </Suspense>
    </div>
  );
};

export default HomePage;
