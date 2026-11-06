"use client";

import { useContext, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { InitialAssetsReady } from "@/components/site/PageIntro";

gsap.registerPlugin(useGSAP);

// Seconds within the 4.5 second cycle. The last pose exactly matches the first.
const TIMING = { reach: 0.5, release: 1.6, confirm: 2, reset: 3, prepare: 4, end: 4.5 };
const SHOULDER = { x: 538, y: 104 };
const ARM = { upper: 44, forearm: 48 };

/** Two bone inverse kinematics keeps the hand and coin in contact during the reach. */
function armPose(x: number, y: number) {
  const dx = x - SHOULDER.x;
  const dy = y - SHOULDER.y;
  const distance = Math.hypot(dx, dy);
  const bend = Math.acos(Math.max(-1, Math.min(1,
    (ARM.upper ** 2 + distance ** 2 - ARM.forearm ** 2) / (2 * ARM.upper * distance),
  )));
  const shoulder = Math.atan2(dy, dx) - bend;
  const elbowX = ARM.upper * Math.cos(shoulder);
  const elbowY = ARM.upper * Math.sin(shoulder);
  const forearm = Math.atan2(dy - elbowY, dx - elbowX) - shoulder;
  return { shoulder: shoulder * 180 / Math.PI, elbow: forearm * 180 / Math.PI };
}

const IDLE_ARM = armPose(480, 70);

export function VaultIllustration() {
  const root = useRef<HTMLDivElement>(null);
  const ready = useContext(InitialAssetsReady);

  useGSAP(() => {
    const select = gsap.utils.selector(root);
    const upper = select("[data-upper-arm]")[0];
    const forearm = select("[data-forearm]")[0];
    const wrist = select("[data-wrist]")[0];
    const coin = select("[data-coin]")[0];
    const pose = { reach: 0, drop: 0 };
    const renderPose = () => {
      const x = gsap.utils.interpolate(480, 455, pose.reach);
      const y = gsap.utils.interpolate(70, 114, pose.reach);
      const angles = armPose(x, y);
      upper.setAttribute("transform", `rotate(${angles.shoulder})`);
      forearm.setAttribute("transform", `rotate(${angles.elbow})`);
      wrist.setAttribute("transform", `rotate(${-angles.shoulder - angles.elbow})`);
      coin.setAttribute("transform", `translate(${x - 20} ${y + pose.drop}) rotate(${-12 * (1 - pose.reach)})`);
    };
    renderPose();
    if (!ready) return;
    const media = gsap.matchMedia();
    media.add("(min-width: 810px) and (prefers-reduced-motion: no-preference)", () => {
      const dial = select("[data-dial]");
      const pulse = select("[data-door-pulse]");
      const light = select("[data-door-light]");
      const slot = select("[data-slot-glow]");
      const head = select("[data-head]");
      gsap.set(dial, { svgOrigin: "456 330" });
      gsap.set(light, { svgOrigin: "456 330", rotation: -90 });
      gsap.set(head, { svgOrigin: "549 82" });
      const loop = gsap.timeline({ repeat: -1, delay: 1, defaults: { ease: "power2.inOut" } });
      loop
        .to(pose, { reach: 1, duration: TIMING.release - TIMING.reach, onUpdate: renderPose }, TIMING.reach)
        .to(head, { rotation: -5, duration: 0.9 }, TIMING.reach)
        .to(pose, { drop: 66, duration: TIMING.confirm - TIMING.release, ease: "power2.in", onUpdate: renderPose }, TIMING.release)
        .set(coin, { opacity: 0 }, TIMING.confirm)
        .to(slot, { opacity: 0.9, duration: 0.2 }, TIMING.confirm)
        .to(pulse, { opacity: 0.45, duration: 0.25 }, TIMING.confirm)
        .to(light, { rotation: 270, duration: 1, ease: "power1.inOut" }, TIMING.confirm)
        .to(dial, { rotation: 14, duration: 0.6 }, TIMING.confirm)
        .to([slot, pulse], { opacity: 0, duration: 0.5 }, 2.5)
        .set(pose, { drop: 0 }, TIMING.reset)
        .to(pose, { reach: 0, duration: 1.15, onUpdate: renderPose }, TIMING.reset)
        .to(head, { rotation: 0, duration: 1 }, TIMING.reset)
        .to(dial, { rotation: 0, duration: 1 }, TIMING.reset)
        .to(coin, { opacity: 1, duration: TIMING.end - TIMING.prepare }, TIMING.prepare);
      // Stop work while this illustration is outside the viewport.
      const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) loop.resume(); else loop.pause();
      });
      observer.observe(root.current!);
      return () => {
        observer.disconnect();
        pose.reach = 0;
        pose.drop = 0;
        renderPose();
      };
    });
    return () => media.revert();
  }, { scope: root, dependencies: [ready], revertOnUpdate: true });

  return (
    <div ref={root} className="vault-hero-art" aria-hidden="true">
<svg className="vault-desktop-art" viewBox="0 0 720 600" fill="none" aria-hidden="true">

<defs>
<linearGradient id="fintech-shirt" x1="520" y1="90" x2="580" y2="162" gradientUnits="userSpaceOnUse"><stop stopColor="#cec3ed"/><stop offset=".5" stopColor="#afa0d2"/><stop offset="1" stopColor="#8376ad"/></linearGradient>
<linearGradient id="fintech-skin" x1="528" y1="36" x2="561" y2="78" gradientUnits="userSpaceOnUse"><stop stopColor="#f4c59e"/><stop offset=".6" stopColor="#e6ad81"/><stop offset="1" stopColor="#c78a63"/></linearGradient>
<linearGradient id="fintech-trousers" x1="532" y1="146" x2="588" y2="220" gradientUnits="userSpaceOnUse"><stop stopColor="#285e48"/><stop offset="1" stopColor="#123e30"/></linearGradient>
<linearGradient id="fintech-sleeve" x1="0" y1="-10" x2="0" y2="10" gradientUnits="userSpaceOnUse"><stop stopColor="#c9bde6"/><stop offset="1" stopColor="#9483bb"/></linearGradient>
<linearGradient id="fintech-armSkin" x1="0" y1="-6" x2="0" y2="6" gradientUnits="userSpaceOnUse"><stop stopColor="#f1c39c"/><stop offset="1" stopColor="#cf9169"/></linearGradient>
  <clipPath id="fintech-deposit-slot"><path d="M380 0h115v144H380Z"/></clipPath>
  <linearGradient id="fintech-shell" x1="321" y1="158" x2="598" y2="472" gradientUnits="userSpaceOnUse"><stop stopColor="#fff"/><stop offset=".52" stopColor="#f1f7f2"/><stop offset="1" stopColor="#ceded3"/></linearGradient>
  <linearGradient id="fintech-side" x1="255" y1="189" x2="320" y2="430" gradientUnits="userSpaceOnUse"><stop stopColor="#dbe9df"/><stop offset="1" stopColor="#aac4b4"/></linearGradient>
  <linearGradient id="fintech-rim" x1="354" y1="236" x2="571" y2="438" gradientUnits="userSpaceOnUse"><stop stopColor="#d4e5da"/><stop offset=".45" stopColor="#9bb8a7"/><stop offset=".75" stopColor="#f7fcf8"/><stop offset="1" stopColor="#9bb7a7"/></linearGradient>
  <linearGradient id="fintech-door" x1="380" y1="250" x2="540" y2="422" gradientUnits="userSpaceOnUse"><stop stopColor="#298d72"/><stop offset=".5" stopColor="#14735b"/><stop offset="1" stopColor="#103e32"/></linearGradient>
  <linearGradient id="fintech-steel" x1="428" y1="290" x2="495" y2="374" gradientUnits="userSpaceOnUse"><stop stopColor="#fff"/><stop offset=".3" stopColor="#d5e1d9"/><stop offset=".5" stopColor="#9eb5a7"/><stop offset=".68" stopColor="#edf5ee"/><stop offset="1" stopColor="#91a99a"/></linearGradient>
  <linearGradient id="fintech-card" x1="142" y1="320" x2="341" y2="478" gradientUnits="userSpaceOnUse"><stop stopColor="#1c725c"/><stop offset="1" stopColor="#102c28"/></linearGradient>
  <linearGradient id="fintech-gold" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#fff0b6"/><stop offset=".35" stopColor="#f0d17b"/><stop offset=".65" stopColor="#d7af50"/><stop offset="1" stopColor="#b38836"/></linearGradient>
  <radialGradient id="fintech-shine" cx="0" cy="0" r="1" gradientTransform="translate(398 264) rotate(45) scale(212)"><stop stopColor="#fff" stopOpacity=".12"/><stop offset="1" stopColor="#fff" stopOpacity="0"/></radialGradient>
  <filter id="fintech-ground" x="-40%" y="-100%" width="180%" height="300%"><feGaussianBlur stdDeviation="14"/></filter>
  <filter id="fintech-contact" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="5"/></filter>
  <filter id="fintech-cardShadow" x="-40%" y="-40%" width="180%" height="180%"><feDropShadow dx="3" dy="12" stdDeviation="9" floodColor="#173f2d" floodOpacity=".15"/></filter>
</defs>
{/* One lighting direction and a transparent ground. */}
<ellipse cx="401" cy="508" rx="222" ry="22" fill="#234c37" opacity=".1" filter="url(#fintech-ground)"/>
<ellipse cx="449" cy="486" rx="142" ry="11" fill="#234c37" opacity=".14" filter="url(#fintech-contact)"/>
{/* Restrained growth columns, behind the vault. */}
<g stroke="#f5faf6" strokeWidth="1.5" strokeLinejoin="round">
 <path d="m126 346 44-22 42 22v116l-44 22-42-22Z" fill="#dbe9df"/><path d="m126 346 42 21 44-21-42-22Z" fill="#edf5ef"/>
 <path d="m184 284 44-22 42 22v151l-44 22-42-22Z" fill="#bad1c2"/><path d="m184 284 42 21 44-21-42-22Z" fill="#d8e8dd"/>
 <path d="m242 215 44-22 42 22v188l-44 22-42-22Z" fill="#6f9e86"/><path d="m242 215 42 21 44-21-42-22Z" fill="#a2c4af"/>
</g>
{/* Solid chassis with a consistent shallow three-quarter perspective. */}
<path d="M286 135c-22 0-38 17-38 39v246c0 17 8 31 23 39l58 29V179l-34-44Z" fill="url(#fintech-side)"/>
<path d="m272 143 55 30h235l29-16-52-28c-9-5-18-7-28-7H294c-9 0-16 8-22 21Z" fill="#f9fcf9"/>
<rect x="310" y="153" width="292" height="335" rx="42" fill="url(#fintech-shell)" stroke="#fff" strokeWidth="2"/>
<rect x="320" y="163" width="272" height="315" rx="34" stroke="#fff" strokeOpacity=".6"/>
<path d="M264 187v227c0 11 4 20 12 25" stroke="#e9f3ec" strokeOpacity=".65" strokeWidth="2" strokeLinecap="round"/>
{/* Coin is below the lip in paint order and clipped at the mouth. */}
<g clipPath="url(#fintech-deposit-slot)"><g data-coin transform="translate(460 70) rotate(-12)">
 <ellipse cx="4" cy="2" rx="24" ry="29" fill="#ad7f28"/>
 <ellipse rx="24" ry="29" fill="url(#fintech-gold)" stroke="#fff0b6" strokeWidth="2"/>
 <ellipse rx="19" ry="24" stroke="#bc9039"/>
 <path d="M-8 9V-9l8 10 8-10V9" stroke="#a87922" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
 <path d="M-14-16q9-9 21-5" stroke="#fff6cf" strokeWidth="2" strokeLinecap="round"/>
</g></g>
{/* Discrete coin slot, recessed in the top face. */}
<path d="m381 139 92 0 15 8h-92Z" fill="#adc4b5"/>
<path d="M396 144h76" stroke="#183d2e" strokeWidth="4" strokeLinecap="round"/><path d="M396 147h76" stroke="#f5fbf6" strokeWidth="2" strokeLinecap="round"/>
<ellipse data-slot-glow cx="435" cy="144" rx="45" ry="7" stroke="#1e9e7a" strokeWidth="3" opacity="0"/>
{/* Small branded wordmark. */}
<g stroke="#45735a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M347 196v-10l6 7 6-7v10"/><path d="M371 191h37" strokeWidth="1.5" opacity=".45"/></g>
{/* Machined door rim and bevel. */}
<circle cx="456" cy="333" r="113" fill="#b2cabc"/>
<circle cx="456" cy="330" r="111" fill="url(#fintech-rim)"/>
<circle cx="456" cy="330" r="102" fill="url(#fintech-door)" stroke="#e1eee5" strokeWidth="1.5"/>
<circle cx="456" cy="330" r="92" stroke="#82b49a" strokeOpacity=".45"/>
<circle cx="456" cy="330" r="87" stroke="#0b4635" strokeOpacity=".4"/>
<circle cx="456" cy="330" r="101" fill="url(#fintech-shine)"/>
<g data-door-pulse opacity="0"><circle cx="456" cy="330" r="107" stroke="#1e9e7a" strokeWidth="2"/><circle data-door-light cx="456" cy="330" r="107" stroke="#bcf4d9" strokeWidth="4" strokeLinecap="round" strokeDasharray="58 615" transform="rotate(-90 456 330)"/></g>
{/* Hinges align with the edge of the door. */}
<g fill="url(#fintech-steel)" stroke="#aec4b6"><rect x="565" y="251" width="19" height="42" rx="7"/><rect x="565" y="369" width="19" height="42" rx="7"/></g>
{/* Dial, calibrated ticks, and a three-spoke handle. */}
<g data-dial>
<circle cx="456" cy="330" r="43" fill="#0c4635" opacity=".4" transform="translate(2 4)"/>
<circle cx="456" cy="330" r="42" fill="url(#fintech-steel)" stroke="#f4faf5" strokeWidth="2"/>
<circle cx="456" cy="330" r="34" stroke="#577862" strokeWidth="4" strokeDasharray="1 6.1"/>
<circle cx="456" cy="330" r="26" fill="url(#fintech-steel)" stroke="#abc1b2"/>
<g stroke="#718f7d" strokeWidth="10" strokeLinecap="round"><path d="m456 330-22-27m22 27 30-8m-30 8-8 31"/></g>
<g stroke="url(#fintech-steel)" strokeWidth="7" strokeLinecap="round"><path d="m455 328-22-27m22 27 30-8m-30 8-8 31"/></g>
<circle cx="455" cy="328" r="9" fill="url(#fintech-steel)" stroke="#f5faf6"/>
</g>
{/* Seated figure, with legs fully inside the artwork bounds. */}
<g data-character>
 <ellipse cx="552" cy="148" rx="29" ry="6" fill="#254a35" opacity=".16"/>
 <path d="M538 141q14 2 28 15l-6 38" stroke="url(#fintech-trousers)" strokeWidth="21" strokeLinecap="round" strokeLinejoin="round"/>
 <path d="M554 142q23 5 33 21l-1 52" stroke="url(#fintech-trousers)" strokeWidth="22" strokeLinecap="round" strokeLinejoin="round"/>
 <path d="m559 184-3 18 9 3" stroke="#f5f6ef" strokeWidth="13" strokeLinecap="round"/>
 <path d="m585 207-2 17 14 2" stroke="#f5f6ef" strokeWidth="13" strokeLinecap="round"/>
 <path d="m551 202 14 4m12 19 20 3" stroke="#c7d5ca" strokeWidth="2" strokeLinecap="round"/>
 <path d="m552 193 8 2m19 20 9 1" stroke="#b4c5b8" strokeWidth="1.5"/>
 <path d="M537 84q14-8 28 4l10 46q3 14-12 17l-29-5q-9-3-8-13Z" fill="url(#fintech-shirt)"/>
 <path d="m535 94-3 35m11 14 15 2" stroke="#e3d9f5" strokeOpacity=".45" strokeWidth="2" strokeLinecap="round"/>
 <path d="m562 98 13 24-12 17" stroke="#9685bb" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round"/>
 <path d="m563 101 9 21" stroke="#bcaedb" strokeWidth="10" strokeLinecap="round"/>
 <ellipse cx="562" cy="139" rx="7" ry="8" fill="url(#fintech-skin)" transform="rotate(25 562 139)"/>
 <path d="m544 74 1 13q8 7 13-1l-3-13" fill="#d7986d"/>
 <path d="M540 86q10 9 19-1" stroke="#8876a9" strokeWidth="2"/>
 <g data-head>
  <path d="M527 45q-5-24 20-25 25-1 27 24l-6 20-36-2Z" fill="#18372d"/>
  <path d="M533 41q-3 20 1 28 5 14 19 12 13-3 14-18l-2-23Z" fill="url(#fintech-skin)"/>
  <ellipse cx="565" cy="55" rx="5" ry="7" fill="#e5aa7e"/>
  <path d="M531 51q-10-12-5-26 10 8 24 2 12-5 20 5 5 7 1 16l-7 7-2-18q-13 13-29 3Z" fill="#213a30"/>
  <path d="M530 28q13 9 28 2" stroke="#54705d" strokeWidth="3" strokeLinecap="round"/>
  <path d="m535 53 7-1m7 0 7 2" stroke="#654c38" strokeWidth="2" strokeLinecap="round"/>
  <ellipse cx="539" cy="58" rx="1.8" ry="2.4" fill="#233b2f"/><ellipse cx="552" cy="59" rx="1.8" ry="2.4" fill="#233b2f"/>
  <path d="m546 59-2 6h4" stroke="#be805c" strokeWidth="1.3" strokeLinecap="round"/>
  <path d="M539 69q7 8 14-1" fill="#fff7e9" stroke="#b97654" strokeWidth="1" strokeLinejoin="round"/>
 </g>
 {/* Nested rigid segments: shoulder, elbow, then wrist. */}
 <g transform="translate(538 104)"><g data-upper-arm transform={`rotate(${IDLE_ARM.shoulder})`}>
  <path d="M0 0H44" stroke="url(#fintech-sleeve)" strokeWidth="17" strokeLinecap="round"/>
  <path d="M2-4H39" stroke="#e1d5f3" strokeOpacity=".45" strokeWidth="2" strokeLinecap="round"/>
  <g transform="translate(44 0)"><g data-forearm transform={`rotate(${IDLE_ARM.elbow})`}>
   <path d="M0 0H48" stroke="url(#fintech-armSkin)" strokeWidth="11" strokeLinecap="round"/>
   <path d="M0 0H9" stroke="#ad9bce" strokeWidth="14" strokeLinecap="round"/>
   <g transform="translate(48 0)"><g data-wrist transform={`rotate(${-IDLE_ARM.shoulder - IDLE_ARM.elbow})`}><ellipse rx="7" ry="6" fill="#e8b28a"/><path d="m-2-3-8-3m8 5-9 2" stroke="#efbd95" strokeWidth="4" strokeLinecap="round"/></g></g>
  </g></g>
 </g></g>
</g>
{/* Card: restrained face, accurate chip geometry and subtle engraved details. */}
<g transform="rotate(-12 254 409)" filter="url(#fintech-cardShadow)">
 <rect x="147" y="340" width="214" height="138" rx="17" fill="#0c3328" transform="translate(0 4)"/>
 <rect x="147" y="340" width="214" height="138" rx="17" fill="url(#fintech-card)" stroke="#4f8e73"/>
 <path d="M148 441c79 6 114-42 212-36v55c0 10-8 17-17 17H165c-10 0-17-7-17-17Z" fill="#b5d1bd"/>
 <path d="M242 478c31-29 72-43 118-45v27c0 10-8 17-17 17Z" fill="#c5b5df"/>
 <rect x="171" y="365" width="32" height="25" rx="5" fill="url(#fintech-gold)" stroke="#f2e9c8"/>
 <path d="M181 366v8l-5 4 5 4v7m11-23v8l5 4-5 4v7m-20-11h31" stroke="#a18f59" strokeWidth=".8"/><path d="M215 371q5 6 0 12m5-15q8 9 0 18m5-21q11 12 0 24" stroke="#d3e9dc" strokeWidth="1.5" strokeLinecap="round"/>
 <path d="M311 374v-12l8 8 8-8v12" stroke="#f4f8f4" strokeWidth="2.5" strokeLinejoin="round" strokeLinecap="round"/>
 <g fill="#e9f3ec" opacity=".6"><circle cx="174" cy="414" r="1.5"/><circle cx="181" cy="414" r="1.5"/><circle cx="188" cy="414" r="1.5"/><circle cx="195" cy="414" r="1.5"/><rect x="208" y="413" width="25" height="2" rx="1"/></g>
</g>
{/* Low coin stack with fine milled edges. */}
<ellipse cx="428" cy="501" rx="48" ry="9" fill="#345840" opacity=".12" filter="url(#fintech-contact)"/>
<g stroke="#e9dfb8" strokeWidth="1">
 <path d="M382 474v21c0 7 20 13 45 13s45-6 45-13v-21Z" fill="#b5a16d"/>
 <path d="M382 484c0 7 20 13 45 13s45-6 45-13m-90-8c0 7 20 13 45 13s45-6 45-13"/>
 <ellipse cx="427" cy="474" rx="45" ry="13" fill="url(#fintech-gold)"/>
 <ellipse cx="427" cy="474" rx="36" ry="9" stroke="#f7efcf"/>
</g>
<g transform="rotate(18 504 482)">
 <ellipse cx="509" cy="484" rx="30" ry="38" fill="#a48e58"/>
 <ellipse cx="504" cy="482" rx="30" ry="38" fill="url(#fintech-gold)" stroke="#faf1d2" strokeWidth="2"/>
 <ellipse cx="504" cy="482" rx="24" ry="31" stroke="#bba773" strokeWidth="1"/>
 <path d="M497 492v-22l7 10 7-10v22" stroke="#a38d56" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
</g>
</svg>
      <img className="vault-mobile-art" src="/assets/moneta/hero-vault.svg" alt="" width={720} height={600} />
    </div>
  );
}
