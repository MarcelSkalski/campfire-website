import React, { useRef } from "react";
import { coreImg, frameImg, frameVideo } from "../utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { animateWithGsap } from "../utils/animations";

const HowItWorks = () => {
  const videoRef = useRef();

  useGSAP(() => {
    gsap.from("#core", {
      scrollTrigger: {
        trigger: "#core",
        start: "20% bottom",
      },
      opacity: 0,
      scale: 2,
      duration: 2,
      ease: "power2.inOut",
    });

    animateWithGsap(".g_fadeIn", {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.inOut",
    });
  }, []);

  return (
    <section className="common-padding">
      <div className="screen-max-width">
        <div id="core" className="flex-center w-full my-20">
          <img src={coreImg} alt="core" width={250} height={250} />
        </div>

        <div className="flex flex-col items-center">
          <h2 className="hiw-title">
            Klin-Dried Oak Core.
            <br /> A game-changer for campfires.
          </h2>
          <p className="hiw-subtitle">
            Introducing the pinnacle of campfire design. The most significant
            innovation in outdoor firewood.
          </p>
        </div>

        <div className="mt-10 md:mt-20 mb-14">
          <div className="relative h-full flex-center">
            <div className="overflow-hidden">
              <img
                src={frameImg}
                alt="frame"
                className="bg-transparent relative z-10"
              />
            </div>
            <div className="hiw-video">
              <video
                className="pointer-events-none"
                playsInline
                preload="none"
                muted
                autoPlay
                ref={videoRef}
              >
                <source src={frameVideo} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>

        <div className="hiw-text-container">
          <div className="flex flex-1 justify-center flex-col">
            <p className="hiw-text g_fadeIn">
              At the heart of our Premium Campfire is an exceptional core of
              klin-dried oak that sets a{" "}
              <span className="text-white">
                new standard in campfire performance
              </span>
              .
            </p>
            <p className="hiw-text g_fadeIn">
              The{" "}
              <span className="text-white">
                flames will burn brighter and steadier
              </span>
              , allowing for incredibly warm and welcoming outdoor gatherings.
            </p>
          </div>

          <div className="flex-1 flex justify-center flex-col g_fadeIn">
            <p className="hiw-text">New</p>
            <p className="hiw-bigtext">Klin-dried oak core</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
