import { ParallaxBanner } from 'react-scroll-parallax';

const AdvancedBanner = () => {
  const background = {
    image: '/images/night.jpeg',
    translateY: [0, 50],
    opacity: [1, 0.3],
    scale: [1.05, 1, 'easeOutCubic'],
    shouldAlwaysCompleteAnimation: true,
  };
  const headline = {
    translateY: [0, 30],
    scale: [1, 1.05, 'easeOutCubic'],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: (
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-6xl md:text-8xl text-white font-thin">WELCOME!</h1>
      </div>
    ),
  };
  const foreground = {
    image: '/images/mountain.png',
    translateY: [0, 15],
    scale: [1, 1.1, 'easeOutCubic'],
    shouldAlwaysCompleteAnimation: true,
  };
  const gradientOverlay = {
    opacity: [0, 0.9],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: (
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-blue-900" />
    ),
  };
  return (
    <div className="container-body">
      <ParallaxBanner
        layers={[background, headline, foreground, gradientOverlay]}
        className="bg-container"
      />
    </div>
  );
};

export default AdvancedBanner;
