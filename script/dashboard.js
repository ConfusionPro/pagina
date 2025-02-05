// Modo Oscuro
const toggleDarkModeButton = document.getElementById("toggleDarkMode");
const body = document.body;
const sunIcon = '<i class="ri-sun-line"></i>';
const moonIcon = '<i class="ri-moon-line"></i>';

// Comprobar el estado guardado del modo oscuro en el localStorage
if (localStorage.getItem("darkMode") === "enabled") {
  body.classList.add("dark-mode");
  toggleDarkModeButton.innerHTML = moonIcon;
}

toggleDarkModeButton.addEventListener("click", () => {
  body.classList.toggle("dark-mode");

  // Guardar el estado del modo oscuro en el localStorage
  if (body.classList.contains("dark-mode")) {
    localStorage.setItem("darkMode", "enabled");
    toggleDarkModeButton.innerHTML = moonIcon;
  } else {
    localStorage.setItem("darkMode", "disabled");
    toggleDarkModeButton.innerHTML = sunIcon;
  }
});

// Cerrar Sesión con confirmación
document.getElementById("logoutButton").addEventListener("click", () => {
  const confirmation = confirm("¿Estás seguro de que quieres cerrar sesión?");
  if (confirmation) {
    window.location.href = "index.html";
  }
});

// Navegación entre secciones
const links = document.querySelectorAll(".sidebar nav ul li a");
const sections = document.querySelectorAll(".content-section");

links.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const targetId = link.getAttribute("href").substring(1);

    // Oculta todas las secciones
    sections.forEach((section) => {
      section.classList.remove("active");
    });

    // Muestra la sección seleccionada
    document.getElementById(targetId).classList.add("active");

    // Marca el enlace como activo
    links.forEach((l) => l.classList.remove("active"));
    link.classList.add("active");
  });
});

// Mostrar/Ocultar Sidebar
const sidebarToggle = document.getElementById("sidebarToggle");
const sidebar = document.querySelector(".sidebar");

sidebarToggle.addEventListener("click", () => {
  sidebar.classList.toggle("active");
});

window.addEventListener("load", () => {
  // Recuperar la fecha de aniversario desde el localStorage
  const anniversaryDate = localStorage.getItem("anniversaryDate");

  if (anniversaryDate) {
    const anniversary = new Date(anniversaryDate);
    const today = new Date();

    // Calcular la diferencia en años, meses y días
    let years = today.getFullYear() - anniversary.getFullYear();
    let months = today.getMonth() - anniversary.getMonth();
    let days = today.getDate() - anniversary.getDate();

    // Si el mes actual es anterior al mes de aniversario, restamos 1 año
    if (months < 0) {
      years--;
      months += 12; // Ajustamos los meses a 12 si restamos un año
    }

    // Si el día actual es anterior al día de aniversario, restamos 1 mes
    if (days < 0) {
      months--;
      // Ajustamos los días al último día del mes anterior
      const lastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
      days += lastMonth.getDate();
    }

    // Función para manejar singular o plural
    const yearText = years === 1 ? "año" : "años";
    const monthText = months === 1 ? "mes" : "meses";
    const dayText = days === 1 ? "día" : "días";

    // Mostrar el número de años, meses y días en el dashboard
    document.getElementById(
      "daysCount"
    ).innerText = `Ya han pasado ${years} ${yearText}, ${months} ${monthText} y ${days} ${dayText}, desde que comenzó nuestra historia de amor. Me alegra mucho estar aún a tu lado y disfrutar cada momento, eres la persona que amaré de por vida. ¡Te Amoo❤️!`;
  }
});

particlesJS("particles-js", {
  particles: {
    number: {
      value: 10, // Número de partículas (corazones)
      density: {
        enable: true,
        value_area: 800,
      },
    },
    shape: {
      type: "image",
      image: {
        src: "https://img.icons8.com/?size=100&id=12306&format=png&color=000000", // Aquí puedes usar cualquier imagen de corazón
        width: 2,
        height: 2,
      },
    },
    move: {
      enable: true,
      speed: 1, // Velocidad de caída
      direction: "top", // Dirección hacia abajo
      random: true,
      straight: false,
      out_mode: "out",
    },
  },
  interactivity: {
    events: {
      onhover: {
        enable: false,
      },
      onclick: {
        enable: false,
      },
    },
  },
  retina_detect: true,
});

const mensajes = [
  "Eres mi razón de sonreír cada día. 💖",
  "Contigo, cada momento es especial. 🌟",
  "Tu amor es mi mayor tesoro. 🏆",
  "Eres mi hoy, mi mañana y mi siempre. 🌹",
  "Gracias por hacerme tan feliz. 😊",
  "Eres la mejor parte de mi día. ☀️",
  "Mi corazón late por ti. 💓",
  "Tu risa es mi melodía favorita. 🎶",
  "Cada vez que te miro, me doy cuenta de lo afortunado que soy. 💕",
  "A tu lado, todo tiene más sentido. 💫",
  "Tus pequeños detalles son los que más me enamoran. 💖",
  "Eres esa calma que necesito en este mundo tan ruidoso. 🌙",
  "Cada vez que comparto un momento contigo, me siento más cercano a ti. 🤍",
  "Tu fortaleza y tu corazón me inspiran a ser mejor cada día. 💪",
  "Eres mi confidente y mi apoyo incondicional. 🌼",
  "Nada me hace más feliz que verte sonreír. 😄",
  "Tu amor me da fuerza y me llena de paz. ✨",
  "Me encanta cómo te entregas a lo que te gusta, siempre con pasión y determinación. 💥",
  "Quiero estar a tu lado en cada paso de este hermoso camino. 🛤️",
  "Lo que más valoro de ti es tu autenticidad. Eres única y maravillosa. 💎",
  "Contigo, hasta los días más simples son los más especiales. 🌸",
  "Admiro la forma en que siempre piensas en los demás antes que en ti misma. 💞",
  "Eres una persona tan fuerte y valiente, y me siento tan afortunado de estar a tu lado. 💪💖",
  "Cada momento que paso contigo es un regalo que atesoro profundamente. 🎁",
  "Tu dulzura y tu energía siempre me llenan de alegría. 🍬💫",
  "Cada vez que hablamos, me doy cuenta de lo increíblemente especial que eres. 🥰",
  "Eres la inspiración que necesitaba para ser mejor en todos los aspectos. 🌻",
  "Me encanta cómo logras hacerme sentir tan especial, incluso en los momentos más simples. 💌",
  "Eres la razón por la que creo en el amor verdadero. ❤️",
  "No hay nada que desee más que verte feliz, porque tu felicidad es la mía. 🌟",
  "Me encanta cómo compartes tus pasiones conmigo, me haces querer aprender más cada día. 🎮",
  "Tu forma de ser me hace admirarte cada vez más. 🌹",
  "Verte tan auténtica y confiada me hace sentir increíblemente afortunado. 💫",
  "Tu corazón es tan grande que contagia a todos los que te rodean. 💖",
  "La forma en que te cuidas a ti misma y a los demás me inspira profundamente. 🌷",
  "Eres mi razón para soñar con un futuro mejor. 🌙",
  "Tu fuerza es admirable, y siempre encuentro consuelo en ti. 🦋",
  "Me haces sentir el amor más puro con cada mirada, cada palabra y cada gesto. 💘",
  "Tu sonrisa ilumina mis días y me da paz en los momentos de duda. 🌞",
  "Lo que más amo de ti es cómo me haces sentir seguro y amado. 💕",
  "Cada día contigo es una nueva oportunidad para descubrir cuánto te quiero. 💖",
  "Tu presencia siempre trae calma y felicidad, y me siento muy afortunado por eso. 🌸",
  "Eres la razón por la que me esfuerzo cada día por ser mejor. ✨",
  "Me haces sentir tan especial con tus detalles, y me encanta que te preocupes tanto por mí. 💖",
  "Tu confianza y fortaleza me motivan a nunca rendirme, a seguir adelante. 💪",
  "Cada vez que hablas, me siento como si el mundo se detuviera solo para escucharte. 🎤💖",
  "A tu lado, cada desafío se siente más fácil, porque sé que juntos podemos con todo. 💕",
  "Siempre me haces sentir que lo que más importa en este mundo es el amor que compartimos. 🌹",
  "Me haces sentir amado, aceptado y valorado, y eso es lo que más me importa. ❤️",
  "Eres el sol que ilumina mis días grises. 🌞",
  "Cuando estoy contigo, todo lo demás desaparece, solo existimos tú y yo. 💫",
  "Cada conversación contigo me deja una sonrisa en el rostro y un corazón lleno de amor. 😊💖",
  "Eres la razón por la que me esfuerzo por ser mejor persona. 🌟",
  "Tu forma de amar es única, y me siento afortunado de recibirlo cada día. 💝",
  "Admiro profundamente lo auténtica y genuina que eres, siempre fiel a ti misma. 💫",
  "Contigo, los días son más brillantes, las risas más sinceras, y el amor más profundo. 💖",
  "Eres el lugar donde siempre encuentro paz y felicidad. 🌸",
  "Tu amor es lo que me impulsa a seguir adelante, a pesar de cualquier dificultad. 💪💖",
  "Tu belleza no solo está en tu exterior, sino en tu forma de ser, tu corazón y tu alma. 💎",
  "Eres esa chispa que da vida a todo lo que me rodea. 💥",
  "A tu lado, cada día es un regalo que quiero apreciar al máximo. 🎁",
  "Cada vez que te veo, me doy cuenta de lo increíble que es tenerte en mi vida. 💖",
  "Admiro tu pasión por lo que amas, y eso me inspira a ser más apasionado también. 🔥",
  "Eres el refugio donde siempre encuentro consuelo y calma. 🏡",
  "Tu ternura y tu fortaleza son el equilibrio perfecto que siempre busqué. ⚖️",
  "No hay nada que desee más que verte feliz y saber que estoy haciendo todo por ti. 💖",
  "Eres la razón por la que me siento agradecido por cada momento. 🙏",
  "Cada día a tu lado es una bendición que jamás dejaré de valorar. 🌟",
  "Tu apoyo y tu amor me dan fuerzas para superar cualquier desafío. 💪",
  "Nada me hace más feliz que verte brillar en todo lo que haces. ✨",
  "A tu lado, todo es posible, y eso es lo que más me encanta de nosotros. 💫",
  "Me siento tan afortunado de tener a alguien tan especial como tú en mi vida. 🍀",
  "Tu amor me da paz y tranquilidad, y eso es lo que siempre busqué. 🌙",
  "La forma en que haces todo con amor es lo que más me inspira. 💘",
  "Cada día a tu lado es una nueva oportunidad para aprender y crecer juntos. 🌱",
  "Me haces sentir único, como si no existiera nada más importante que nuestro amor. 💖",
  "Tu esencia es lo que me mantiene fuerte, y siempre quiero estar a tu lado. 💪❤️",
  "Cada día, descubro algo nuevo que me hace admirarte aún más. 💖",
  "Tu sonrisa ilumina mis días, y tus abrazos me llenan de paz. 🤗",
  "Me haces sentir tan afortunado de tener a alguien tan increíblemente especial como tú. 💖",
  "Eres la luz que ilumina mi camino, siempre me guías con tu amor. 💡",
  "Siempre que me siento perdido, solo necesito pensar en ti para encontrar mi camino. 💖",
  "Tu amor me da la fuerza para superar cualquier obstáculo. 💪",
  "A tu lado, me siento completo y verdaderamente feliz. 😄",
  "Lo mejor de mi día es saber que te tengo a ti en mi vida. 🌞",
  "No hay nadie más con quien prefiera compartir mi tiempo que contigo. ⏳",
  "Tu presencia hace que cada momento se sienta como un regalo. 🎁",
  "Siempre me haces sentir que todo es posible cuando estamos juntos. 💫",
  "Tu bondad y compasión me enseñan todos los días lo que significa ser una mejor persona. 💖",
  "Cada vez que te abrazo, siento que el mundo se pone en su lugar. 🤗",
  "Eres el sueño que nunca supe que quería, pero ahora no puedo vivir sin él. 💭💖",
  "Me haces sentir amado incluso en los días más difíciles. ❤️",
  "Tu amor me hace sentir tan vivo, tan completo. 🌟",
  "Siempre me haces reír y me llenas de energía positiva. 🌞",
  "Eres el mayor regalo que la vida me ha dado. 🎁",
  "Tu compañía es todo lo que necesito para ser feliz. 😍",
  "A tu lado, me siento más fuerte, más valiente, y listo para cualquier reto. 💪",
  "El simple hecho de pensar en ti me hace sonreír. 😊",
  "Tu apoyo incondicional es lo que más valoro. 💖",
  "Eres mi mejor amigo, mi amor y mi confidente. 💕",
  "Cada vez que te miro, me doy cuenta de lo afortunado que soy de tenerte a mi lado. 💓",
  "Lo más hermoso de ti no está en tu apariencia, sino en tu alma. 🌸",
  "Eres la calma en medio de mi tormenta. 🌧️☀️",
  "Me haces sentir que todo en este mundo tiene sentido, porque te tengo a ti. 💖",
  "No existe un momento aburrido cuando estoy contigo, siempre haces que cada segundo sea especial. 🎉",
  "A tu lado, siento que todo lo que quiero es posible. 🌈",
  "Gracias por estar siempre ahí para mí, en las buenas y en las malas. 👫",
  "Tu amor me hace sentir que puedo conquistar el mundo. 🌍",
  "Siempre que estoy contigo, siento que todo lo que he soñado es posible. 💖",
  "Me haces sentir tan afortunado de ser parte de tu vida. 🌟",
  "Tu amor es la luz que ilumina mis días más oscuros. 🌟",
  "A tu lado, el mundo parece más brillante, más hermoso. 🌞",
  "Eres lo mejor que me ha pasado en la vida. 💖",
  "Tu risa es la melodía más hermosa para mis oídos. 🎶",
  "Nada me hace más feliz que verte feliz. 💖",
  "Tus abrazos son mi refugio, mi lugar seguro. 🤗",
  "A tu lado, todo es más sencillo y más hermoso. 💕",
  "Me haces sentir amado de una manera que nunca imaginé posible. 💖",
  "Eres mi mejor momento, mi razón de ser. 💫",
  "Te amo con todo lo que soy, sin reservas. ❤️",
  "Eres mi alegría, mi paz, y mi razón para sonreír cada día. 😊",
  "Juntos podemos con todo, porque nuestro amor es más fuerte que cualquier obstáculo. 💪",
  "Tu amor me hace sentir invencible, y contigo todo es posible. 💖",
  "Gracias por ser mi compañera de vida, por estar siempre a mi lado. 👫",
];

const mensajeTexto = document.getElementById("mensaje-texto");
const nuevoMensajeBtn = document.getElementById("nuevo-mensaje-btn");

function mostrarMensajeAleatorio() {
    const mensajeAleatorio = mensajes[Math.floor(Math.random() * mensajes.length)];
    mensajeTexto.textContent = mensajeAleatorio;
}

// Mostrar un mensaje aleatorio al cargar la página
mostrarMensajeAleatorio();

// Cambiar mensaje al hacer clic en el botón
nuevoMensajeBtn.addEventListener("click", mostrarMensajeAleatorio);

document.addEventListener('DOMContentLoaded', function() {
    const audio = document.getElementById('audio');
    const playBtn = document.getElementById('playBtn');
    const pauseBtn = document.getElementById('pauseBtn');
    const volumeControl = document.getElementById('volumeControl');

    playBtn.addEventListener('click', function() {
        audio.play();
    });

    pauseBtn.addEventListener('click', function() {
        audio.pause();
    });

    volumeControl.addEventListener('input', function() {
        audio.volume = volumeControl.value;
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const sorpresaBtn = document.getElementById('sorpresa-btn');
    const sorpresaContent = document.getElementById('sorpresa-content');

    if (sorpresaBtn && sorpresaContent) {
        sorpresaBtn.addEventListener('click', function() {
            sorpresaContent.classList.toggle('hidden'); // Muestra u oculta la sorpresa
        });
    }
});


// JavaScript para mostrar la sorpresa
document.getElementById('sorpresa-btn').addEventListener('click', function() {
    const contenido = document.getElementById('sorpresa-content');
    contenido.classList.toggle('hidden'); // Muestra u oculta la sorpresa
});
