'use client';

import * as THREE from 'three';
import { useGSAP } from '@gsap/react';
import React, { Suspense } from 'react';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';


const SpaceBackground = () => {

  useGSAP(() => {
    const sizes = {
      width: window.innerWidth,
      height: window.innerHeight
    };

    if (typeof window !== 'undefined') {

      const canvas = document.querySelector("canvas.webgl");
      const scene = new THREE.Scene();
      const loader = new THREE.TextureLoader();
      const cross = loader.load("/images/cross.png");

      let geometry = window.screenX < window.screenX / 2 ?
        new THREE.SphereGeometry(.35, 2, 2) : window.screenX > window.screenX / 2 ?
          new THREE.SphereGeometry(.75, 32, 22) : new THREE.SphereGeometry(.65, 22, 22);

      const particlesGeometry = new THREE.BufferGeometry;
      const particlesCnt = 7000;
      const posArray = new Float32Array(particlesCnt * 3);

      for (let i = 0; i < particlesCnt * 3; i++) {
        let y = (Math.random() - 0.5) * 18.1;
        let x = (Math.random() - 0.5) * 18.3;
        let z = (Math.random() - 0.5) * 18.1;
        
        posArray[i] = x, y, z;
      };

      particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

      const material = new THREE.PointsMaterial({
        size: .0050,
        transparent: true,
        blending: THREE.AdditiveBlending,
      });

      const particleMaterial = new THREE.PointsMaterial({
        size: .016,
        map: cross,
        transparent: true,
        blending: THREE.AdditiveBlending,
      });

      particleMaterial.map = cross;

      const sphere = new THREE.Points(geometry, material);
      sphere.translateX(1.5);

      const particlesMesh = new THREE.Points(particlesGeometry, particleMaterial);
      particlesMesh.material = particleMaterial;
      particlesMesh.add(new THREE.Color(0xffffff));
      scene.add(particlesMesh);

      const pointLight = new THREE.PointLight(0xffffff, 0.1);
      pointLight.position.x = 2;
      pointLight.position.y = 3;
      pointLight.position.z = 4;
      scene.add(pointLight);

      const handleResize = () => {

        sizes.width = window.innerWidth;
        sizes.height = window.innerHeight;

        camera.aspect = sizes.width / sizes.height;
        camera.updateProjectionMatrix();

        renderer.setSize(sizes.width, sizes.height);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      };

      window.addEventListener('resize', handleResize);

      const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100);
      camera.position.x = 0;
      camera.position.y = 0;
      camera.position.z = 3;
      camera.position.set(0, 0, 3);
      camera.lookAt(scene.position);

      scene.add(camera);

      const controls = new OrbitControls(camera, canvas);
      controls.enableDamping = true;

      const renderer = new THREE.WebGLRenderer({
        canvas: canvas
      });

      renderer.setSize(sizes.width, sizes.height);
      renderer.setAnimationLoop();
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setClearColor(new THREE.Color('#0f0f10'), 1);

      const clock = new THREE.Clock();

      const tick = () => {
        const elapsedTime = clock.getElapsedTime();

        particlesMesh.rotation.z = .005 * elapsedTime;
        camera.scale.setZ((-elapsedTime * .005) + 1);

        sphere.rotation.y = .08 * elapsedTime;

        renderer.render(scene, camera);


        window.requestAnimationFrame(tick);
      };

      tick();

    };
  }, []);

  return (
    <Suspense>
      <div className="threeJS w-[100vw] overflow-hidden ">
        <canvas priority="true" className="webgl -z-[20] fixed top-0 left-0 bottom-0" />
      </div>
    </Suspense>
  );
};

export default SpaceBackground;