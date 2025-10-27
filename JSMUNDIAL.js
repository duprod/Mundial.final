// 1. Registrar el plugin de ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// 2. Animar la imagen del balón
gsap.to(".imagen-balon", {
  
  rotation: 360, // La animación: una vuelta completa (puedes usar rotationY: 360 para un "flip")
  ease: "none",  // Sin aceleración
  
  // 3. Configurar el ScrollTrigger
  scrollTrigger: {
    trigger: "#pelota", // El elemento que "dispara" Y se fija
    pin: true,         // ¡Fija la sección #pelota!
    
    start: "top top",  // La animación empieza cuando la parte de arriba de #pelota llega al borde de arriba de la pantalla
    
    // La animación durará mientras el usuario baja 500px
    // (Puedes aumentar este valor para que la rotación sea más lenta)
    end: "+=1500", 
    
    scrub: 1, // Conecta suavemente la animación al scroll (1 segundo de suavizado)
    
    // Opcional: Descomenta la línea de abajo para ver las guías de inicio y fin
    // markers: true 
  }
});