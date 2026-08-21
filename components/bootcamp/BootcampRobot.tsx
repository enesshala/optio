"use client";

import { useEffect, useRef, useState, type MutableRefObject } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

const MODEL_URL = "/models/RobotExpressive.glb";

type Actions = Record<string, THREE.AnimationAction>;

/** In-flow RobotExpressive (CC0, Tomás Laulhé) — idles in the hero, walks while scrolling. */
export default function BootcampRobot({
  spawnLabel = "Spawning…",
  className = "",
  facingRef,
}: {
  spawnLabel?: string;
  className?: string;
  /** 1 = face toward +X content bias, -1 = face the other way (scroll weave). */
  facingRef?: MutableRefObject<number>;
}) {
  const mountRef = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);
  const facingFallback = useRef(1);
  const facing = facingRef ?? facingFallback;

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let disposed = false;
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(32, 1, 0.1, 100);
    // Placeholder — reframed once the model loads
    camera.position.set(0, 1.2, 5);
    camera.lookAt(0, 1.1, 0);

    const lookTarget = new THREE.Vector3(0, 1.1, 0);
    let framed = false;
    let model: THREE.Object3D | null = null;

    const frameCameraToModel = () => {
      if (!model) return;
      const box = new THREE.Box3().setFromObject(model);
      const size = box.getSize(new THREE.Vector3());
      const center = box.getCenter(new THREE.Vector3());
      // Bias slightly toward the head so the face reads in a tall column
      lookTarget.set(center.x, center.y + size.y * 0.08, center.z);

      const fitHeight = size.y * 1.12;
      const fitWidth = size.x * 1.2;
      const vFov = THREE.MathUtils.degToRad(camera.fov);
      const hFov = 2 * Math.atan(Math.tan(vFov / 2) * camera.aspect);
      const distForHeight = fitHeight / 2 / Math.tan(vFov / 2);
      const distForWidth = fitWidth / 2 / Math.tan(hFov / 2);
      const dist = Math.max(distForHeight, distForWidth) * 1.18;

      camera.position.set(
        lookTarget.x + 0.12,
        lookTarget.y + size.y * 0.04,
        lookTarget.z + dist
      );
      camera.lookAt(lookTarget);
      camera.updateProjectionMatrix();
      framed = true;
    };

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setClearColor(0x000000, 0);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.domElement.style.display = "block";
    renderer.domElement.style.width = "100%";
    renderer.domElement.style.height = "100%";
    mount.appendChild(renderer.domElement);

    scene.add(new THREE.HemisphereLight(0xffffff, 0x222222, 1.6));
    const key = new THREE.DirectionalLight(0xffffff, 2.4);
    key.position.set(2.5, 6, 4);
    scene.add(key);
    const fill = new THREE.DirectionalLight(0x6ee7b7, 1.1);
    fill.position.set(-3, 2, 2);
    scene.add(fill);
    const rim = new THREE.PointLight(0x34d399, 2.2, 16);
    rim.position.set(1.2, 2.2, -2);
    scene.add(rim);

    const timer = new THREE.Timer();
    let mixer: THREE.AnimationMixer | null = null;
    let actions: Actions = {};
    let activeName = "Idle";
    let raf = 0;
    let idleReturnTimer: number | undefined;
    let emoteTimer: number | undefined;
    let firstEmoteTimer: number | undefined;
    let busyEmote = false;
    let nextEmote: "Wave" | "ThumbsUp" = "Wave";
    let lastScrollY = window.scrollY;
    let lastScrollTs = performance.now();

    const syncSize = () => {
      const w = Math.max(mount.clientWidth, 1);
      const h = Math.max(mount.clientHeight, 1);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setSize(w, h, false);
      if (framed) frameCameraToModel();
    };
    syncSize();

    const fadeTo = (name: string, duration = 0.35) => {
      const next = actions[name];
      const prev = actions[activeName];
      if (!next || name === activeName) return;
      next.reset();
      next.setEffectiveTimeScale(1);
      next.setEffectiveWeight(1);
      next.play();
      if (prev) prev.crossFadeTo(next, duration, true);
      else next.fadeIn(duration);
      activeName = name;
    };

    const playEmote = (name: "Wave" | "ThumbsUp") => {
      if (disposed || reducedMotion || busyEmote || !mixer) return;
      if (activeName === "Walking") return;
      const action = actions[name];
      if (!action) return;

      busyEmote = true;
      action.setLoop(THREE.LoopOnce, 1);
      action.clampWhenFinished = true;
      fadeTo(name, 0.28);

      const onFinished = (event: { action: THREE.AnimationAction }) => {
        if (event.action !== action) return;
        mixer?.removeEventListener("finished", onFinished);
        busyEmote = false;
        if (!disposed && activeName === name) fadeTo("Idle", 0.4);
      };
      mixer.addEventListener("finished", onFinished);
    };

    const scheduleEmote = () => {
      if (reducedMotion || disposed) return;
      emoteTimer = window.setTimeout(
        () => {
          playEmote(nextEmote);
          nextEmote = nextEmote === "Wave" ? "ThumbsUp" : "Wave";
          scheduleEmote();
        },
        8000 + Math.random() * 7000
      );
    };

    const onScroll = () => {
      if (reducedMotion || !mixer || !actions.Walking) return;
      const now = performance.now();
      const dy = Math.abs(window.scrollY - lastScrollY);
      const dtMs = Math.max(now - lastScrollTs, 1);
      lastScrollY = window.scrollY;
      lastScrollTs = now;
      if (dy / dtMs > 0.06) {
        busyEmote = false;
        fadeTo("Walking", 0.22);
        if (idleReturnTimer) window.clearTimeout(idleReturnTimer);
        idleReturnTimer = window.setTimeout(() => fadeTo("Idle", 0.4), 240);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    const localLook = { x: 0, y: 0 };
    const onPointerMove = (e: PointerEvent) => {
      const rect = mount.getBoundingClientRect();
      if (rect.width < 1 || rect.height < 1) return;
      // Track cursor anywhere on the page, relative to the robot's center
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const nx = (e.clientX - cx) / (window.innerWidth * 0.45);
      const ny = (e.clientY - cy) / (window.innerHeight * 0.45);
      localLook.x = Math.max(-1, Math.min(1, nx));
      localLook.y = Math.max(-1, Math.min(1, ny));
    };
    window.addEventListener("pointermove", onPointerMove, { passive: true });

    const loader = new GLTFLoader();
    loader.load(
      MODEL_URL,
      (gltf) => {
        if (disposed) return;
        model = gltf.scene;
        model.traverse((obj) => {
          const mesh = obj as THREE.Mesh;
          if (mesh.isMesh) {
            mesh.castShadow = false;
            mesh.receiveShadow = false;
            const mats = Array.isArray(mesh.material)
              ? mesh.material
              : [mesh.material];
            for (const mat of mats) {
              if (mat) {
                mat.side = THREE.FrontSide;
                mat.needsUpdate = true;
              }
            }
          }
        });

        // Plant feet on y=0, then let the camera frame the full body
        model.updateMatrixWorld(true);
        const box = new THREE.Box3().setFromObject(model);
        const size = box.getSize(new THREE.Vector3());
        const targetHeight = 1.85;
        const scale = targetHeight / Math.max(size.y, 0.001);
        model.scale.setScalar(scale);
        model.updateMatrixWorld(true);
        const fitted = new THREE.Box3().setFromObject(model);
        const fittedCenter = fitted.getCenter(new THREE.Vector3());
        model.position.set(-fittedCenter.x, -fitted.min.y, -fittedCenter.z);
        scene.add(model);
        syncSize();
        frameCameraToModel();

        mixer = new THREE.AnimationMixer(model);
        for (const clip of gltf.animations) {
          actions[clip.name] = mixer.clipAction(clip);
        }

        if (actions.Idle) {
          actions.Idle.play();
          activeName = "Idle";
        }
        if (actions.Walking) {
          actions.Walking.enabled = true;
          actions.Walking.setEffectiveWeight(0);
        }
        for (const name of ["Wave", "ThumbsUp"] as const) {
          const action = actions[name];
          if (!action) continue;
          action.setLoop(THREE.LoopOnce, 1);
          action.clampWhenFinished = true;
        }

        if (!reducedMotion) {
          firstEmoteTimer = window.setTimeout(() => playEmote("Wave"), 3500);
          nextEmote = "ThumbsUp";
          scheduleEmote();
        }

        setLoaded(true);
      },
      undefined,
      () => {
        if (!disposed) setFailed(true);
      }
    );

    const resizeObserver = new ResizeObserver(() => syncSize());
    resizeObserver.observe(mount);
    window.addEventListener("resize", syncSize);

    const animate = () => {
      raf = window.requestAnimationFrame(animate);
      timer.update();
      const dt = timer.getDelta();
      mixer?.update(dt);

      if (model && !reducedMotion) {
        const face = facing.current >= 0 ? 1 : -1;
        // Base glance toward content + follow the cursor across the whole page
        const targetYaw = face * 0.35 + localLook.x * 0.75;
        const targetPitch = localLook.y * 0.28;
        model.rotation.y += (targetYaw - model.rotation.y) * 0.08;
        model.rotation.x += (targetPitch - model.rotation.x) * 0.06;
        if (framed) camera.lookAt(lookTarget);
      }

      renderer.render(scene, camera);
    };
    animate();

    return () => {
      disposed = true;
      window.cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("resize", syncSize);
      resizeObserver.disconnect();
      if (idleReturnTimer) window.clearTimeout(idleReturnTimer);
      if (emoteTimer) window.clearTimeout(emoteTimer);
      if (firstEmoteTimer) window.clearTimeout(firstEmoteTimer);
      mixer?.stopAllAction();
      scene.traverse((obj) => {
        const mesh = obj as THREE.Mesh;
        if (mesh.isMesh) {
          mesh.geometry?.dispose();
          const mat = mesh.material;
          if (Array.isArray(mat)) mat.forEach((m) => m.dispose());
          else mat?.dispose();
        }
      });
      renderer.dispose();
      if (renderer.domElement.parentElement === mount) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      aria-hidden
      className={`relative h-full w-full overflow-visible ${className}`}
    >
      <div ref={mountRef} className="absolute inset-0 h-full w-full" />

      {!loaded && !failed && (
        <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center">
          <div className="flex flex-col items-center gap-3">
            <span className="bootcamp-nav-link h-10 w-10 rounded-full border border-emerald-400/40 bg-emerald-500/10" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-emerald-600 dark:text-emerald-300/80">
              {spawnLabel}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
