import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ModelView from "./ModelView";
import { useEffect, useRef, useState } from "react";

import * as THREE from "three";
import { View } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { sizes } from "../constants";
import { animateWithGsapTimeline } from "../utils/animations";

const Model = () => {
  const [size, setSize] = useState("off");
  const [model] = useState({
    title: "Campfire Pro Max",
  });

  // camera control for the model view
  const cameraControlOff = useRef();
  const cameraControlOn = useRef();

  // model
  const off = useRef(new THREE.Group());
  const on = useRef(new THREE.Group());

  // rotation
  const [offRotation, setOffRotation] = useState(0);
  const [onRotation, setOnRotation] = useState(0);

  const tl = gsap.timeline();

  useEffect(() => {
    if (size === "on") {
      animateWithGsapTimeline(tl, off, offRotation, "#view1", "#view2", {
        transform: "translateX(-100%)",
        duration: 2,
      });
    }

    if (size === "off") {
      animateWithGsapTimeline(tl, on, onRotation, "#view2", "#view1", {
        transform: "translateX(0)",
        duration: 2,
      });
    }
  }, [size]);

  useGSAP(() => {
    gsap.to("#heading", { y: 0, opacity: 1 });
  }, []);

  return (
    <section className="common-padding">
      <div className="screen-max-width">
        <h1 id="heading" className="section-heading">
          Take a closer look.
        </h1>

        <div className="flex flex-col items-center mt-5">
          <div className="w-full h-[60vh] md:h-[75vh] overflow-hidden relative">
            <ModelView
              index={1}
              groupRef={off}
              gsapType="view1"
              controlRef={cameraControlOff}
              setRotationState={setOffRotation}
              item={model}
              size={size}
            />
            <ModelView
              index={2}
              groupRef={on}
              gsapType="view2"
              controlRef={cameraControlOn}
              setRotationState={setOnRotation}
              item={model}
              size={size}
            />

            <Canvas
              className="w-full h-full"
              style={{
                position: "fixed",
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                overflow: "hidden",
              }}
              eventSource={document.getElementById("root")}
            >
              <View.Port />
            </Canvas>
          </div>

          <div className="mx-auto w-full">
            <p className="text-sm font-light text-center mb-5">{model.title}</p>
            <div className="flex-center">
              <button className="size-btn-container">
                {sizes.map(({ label, value }) => (
                  <span
                    key={label}
                    className="size-btn"
                    style={{
                      backgroundColor: size === value ? "white" : "transparent",
                      color: size === value ? "black" : "white",
                    }}
                    onClick={() => setSize(value)}
                  >
                    {label}
                  </span>
                ))}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Model;
