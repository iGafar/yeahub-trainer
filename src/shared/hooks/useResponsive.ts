import { useEffect, useState } from 'react';

const breakpoints = {
  mobile: '(max-width: 639px)',
  tablet: '(max-width: 768px)',
  mediumTablet: '(max-width: 1100px)',
  desktop: '(max-width: 1279px)',
  largeDesktop: '(min-width: 1280px)',
};

const useResponsive = () => {
  const [isMobile, setIsMobile] = useState(
    window.matchMedia(breakpoints.mobile).matches,
  );
  const [isTablet, setIsTablet] = useState(
    window.matchMedia(breakpoints.tablet).matches,
  );
  const [isMediumTablet, setIsMediumTablet] = useState(
    window.matchMedia(breakpoints.mediumTablet).matches,
  );
  const [isDesktop, setIsDesktop] = useState(
    window.matchMedia(breakpoints.desktop).matches,
  );
  const [isLargeDesktop, setIsLargeDesktop] = useState(
    window.matchMedia(breakpoints.largeDesktop).matches,
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.matchMedia(breakpoints.mobile).matches);
      setIsTablet(window.matchMedia(breakpoints.tablet).matches);
      setIsMediumTablet(window.matchMedia(breakpoints.mediumTablet).matches);
      setIsDesktop(window.matchMedia(breakpoints.desktop).matches);
      setIsLargeDesktop(window.matchMedia(breakpoints.largeDesktop).matches);
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return {
    isMobile,
    isTablet,
    isMediumTablet,
    isDesktop,
    isLargeDesktop,
  };
};

export default useResponsive;
