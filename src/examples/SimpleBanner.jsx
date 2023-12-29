import { ParallaxBanner } from 'react-scroll-parallax';

const SimpleBanner = () => {
  return (
    <div className="container-body">
      <ParallaxBanner
        layers={[
          { image: '/images/night.jpeg', speed: -20 },
          {
            speed: -15,
            children: (
              <div className="">
                <h1 className="text">Hello World!</h1>
              </div>
            ),
          },
          { image: '/images/mountain.png', speed: -10 },
        ]}
        className="bg-container"
      >
        {/* <div className="bg-container">
          <h1 className="">Hello World!</h1>
        </div> */}
      </ParallaxBanner>
    </div>
  );
};

export default SimpleBanner;
