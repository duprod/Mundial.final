gsap.registerPlugin(ScrollTrigger); // Activem el plugin ScrollTrigger

gsap.to("#jabulani-ball", {
  rotation: 360, // Gira la pilota una volta completa
  ease: "power2.inOut", // Suavitza l’inici i el final del gir
  scrollTrigger: {
    trigger: "#pelota",  // Secció que activa l’animació
    start: "top 70%",   // Comença quan el top toca el 70% de la pantalla
    end: "bottom 20%",  // Acaba quan el bottom toca el 20% de la pantalla
    scrub: 3, // Vincula el gir al scroll amb suavitat
  }
}); 