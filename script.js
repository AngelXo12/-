// Seleccionamos el contenedor del texto
const textElement = document.querySelector('.animated-text');

// El texto completo que deseas mostrar
const fullText = "No se si escribirte esto sea bueno, pero es lo que siento por ti, asi que te dire una frase icónica de una de mis peliculas favoritas, porque te amo. No te ofendas pero te equivocas en que estamos en caminos separados, no estamos en caminos separados tu eres mi camino, y siempre vas a ser mi camino. Y se que hay miles de razones por las cuales no debemos estar juntos, pero estoy harto de ellas, estoy harto de todas esas razones. Hay que hacer una elección, y bueno ahora te elijo, te voy a seguir, te voy a seguir a todas partes, te voy a seguir el resto de mi vida. Te amo princesa, siempre lo hare";

// Convertimos el texto en un array de palabras
const words = fullText.split(' ');

// Variable que rastrea el índice de la palabra actual
let wordIndex = 0;

// Función para mostrar las palabras poco a poco
function showText() {
    // Añadimos la siguiente palabra al texto del elemento
    textElement.textContent += words[wordIndex] + ' ';
    
    // Aumentamos el índice para la siguiente palabra
    wordIndex++;
    
    // Si hemos mostrado todas las palabras, detenemos la función
    if (wordIndex >= words.length) {
        clearInterval(textInterval);
    }

    // Desplazamos el contenedor hacia abajo para que siempre esté visible el último texto
    textElement.scrollIntoView({ behavior: 'smooth', block: 'end' });
}

// Definimos el intervalo para mostrar las palabras cada 300 ms
const textInterval = setInterval(showText, 300);

// Crear partículas (corazones y estrellas) en toda la pantalla
function createParticles() {
    const particlesContainer = document.querySelector('.floating-particles');

    // Crear estrellas
    for (let i = 0; i < 20; i++) {
        const star = document.createElement('div');
        star.classList.add('particle', 'star');
        
        // Posiciones aleatorias en el eje X y Y
        const leftPosition = Math.random() * 100; // Posición aleatoria en el eje X (0-100vw)
        const topPosition = Math.random() * 100;  // Posición aleatoria en el eje Y (0-100vh)
        const animationDuration = Math.random() * 5 + 5; // Duración de la animación entre 5 y 10 segundos
        
        star.style.left = `${leftPosition}vw`;
        star.style.top = `${topPosition}vh`;
        star.style.animationDuration = `${animationDuration}s`;
        
        // Configuración de dirección aleatoria para las partículas
        star.style.animationName = `floatParticles${i}`;
        
        // Generar animación con dirección aleatoria
        const directionX = (Math.random() - 0.5) * 2 * 100; // Genera una dirección aleatoria en el eje X
        const directionY = (Math.random() - 0.5) * 2 * 100; // Genera una dirección aleatoria en el eje Y
        
        // Añadir animación CSS directamente para movimiento aleatorio
        const styleSheet = document.styleSheets[0];
        styleSheet.insertRule(`
            @keyframes floatParticles${i} {
                0% { transform: translateY(${topPosition}vh) translateX(${leftPosition}vw); opacity: 1; }
                100% { transform: translateY(${topPosition + directionY}vh) translateX(${leftPosition + directionX}vw); opacity: 0; }
            }
        `, styleSheet.cssRules.length);
        
        particlesContainer.appendChild(star);
    }

    // Crear corazones
    for (let i = 0; i < 10; i++) {
        const heart = document.createElement('div');
        heart.classList.add('particle', 'heart');
        
        // Posiciones aleatorias en el eje X y Y
        const leftPosition = Math.random() * 100;
        const topPosition = Math.random() * 100;
        const animationDuration = Math.random() * 6 + 6; // Duración entre 6 y 12 segundos
        
        heart.style.left = `${leftPosition}vw`;
        heart.style.top = `${topPosition}vh`;
        heart.style.animationDuration = `${animationDuration}s`;
        
        // Generar animación con dirección aleatoria
        const directionX = (Math.random() - 0.5) * 2 * 100;
        const directionY = (Math.random() - 0.5) * 2 * 100;
        
        const styleSheet = document.styleSheets[0];
        styleSheet.insertRule(`
            @keyframes floatParticlesHeart${i} {
                0% { transform: translateY(${topPosition}vh) translateX(${leftPosition}vw); opacity: 1; }
                100% { transform: translateY(${topPosition + directionY}vh) translateX(${leftPosition + directionX}vw); opacity: 0; }
            }
        `, styleSheet.cssRules.length);
        
        heart.style.animationName = `floatParticlesHeart${i}`;
        particlesContainer.appendChild(heart);
    }
}

// Llamamos a la función de partículas
createParticles();