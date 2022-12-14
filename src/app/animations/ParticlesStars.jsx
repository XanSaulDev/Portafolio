import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export const ParticlesStars = () => {
    const particlesInit = useCallback(async engine => {
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await null
    }, []);

    return (
      <div>
      <Particles
        className="absolute"
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: {
              value: '#05102C',
            },
          },
          fullScreen:{
            enable:true,
            zIndex:-1
          },
          fpsLimit: 120,
          particles: {
            color: {
              value: ['#AFC1EF', '#6685D3'],
            },
            move: {
              direction: 'none',
              enable: true,
              outModes: {
                default: 'bounce',
              },
              random: false,
              speed: .1,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 100,
            },
            opacity: {
              value: 0.6,
            },
            shape: {
              type: 'circle',
            },
            size: {
              value: { min: 0.1, max: 3 },
            },
          },
          detectRetina: true,
        }}
      />
    </div>
    );
};