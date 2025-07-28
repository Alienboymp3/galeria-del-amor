const frases = [
  {
    texto: `"El amor es lo único que podemos llevarnos cuando partimos; y convierte el final en un comienzo."`,
    autor: "Louisa May Alcott"
  },
  {
    texto: `"El amor se compone de una sola alma que habita en dos cuerpos."`,
    autor: "Aristóteles"
  },
  {
    texto: `"El corazón es una riqueza que no se vende ni se compra: se regala."`,
    autor: "Gustave Flaubert"
  },
  {
    texto: `"El amor es la cura, porque el amor es el origen de todo."`,
    autor: "Muhammad Rumi"
  },
  {
    texto: `"El amor no necesita ser perfecto, solo necesita ser verdadero."`,
    autor: "Marilyn Monroe"
  },
  {
    texto: `“El amor es algo hermoso que todos debemos sentir alguna vez.”`,
    autor: "Juan Gabriel"
  },
  {
    texto: `"El amor es, en su esencia, el proyecto de hacer que el otro exista."`,
    autor: "Jean-Paul Sartre"
  },
  {
    texto: `"El amor es hijo de la comprensión; el amor es tanto, más ardiente, cuanto más profunda es la comprensión."`,
    autor: "Leonardo da Vinci"
  },
  {
    texto: `“El amor es un arte que nunca termina de aprenderse.”`,
    autor: "Rubén Darío"
  },
  {
    texto: `"El amor inmaduro dice: 'Te amo porque te necesito'. El amor maduro dice: 'Te necesito porque te amo'."`,
    autor: "Erich Fromm"
  },
  {
    texto: `"Lo más simple puede convertirse en lo más hermoso cuando hay amor."`,
    autor: "Keanu Reeves"
  },
  {
    texto: `"El amor es la expresión última de la libertad."`,
    autor: "Søren Kierkegaard"
  },
  {
    texto: `"Nos enseñaron que el amor es entrega, cuando en realidad el amor es compartir.”`,
    autor: "Eduardo Galeano"
  },
  {
    texto: `“El amor es un rayo de luz directo al alma.”`,
    autor: "Luis Alberto Spinetta"
  },
  {
    texto: `“El amor es el ala veloz que Dios ha dado al alma para que vuele hasta el cielo.”`,
    autor: "Amado Nervo"
  },
  {
    texto: `"El amor no tiene nada que ver con lo que esperas conseguir, solo con lo que esperas dar."`,
    autor: "Audrey Hepburn"
  },
  {
    texto: `"Lo más importante es vivir una vida plena de amor, sin importar cuán corta sea."`,
    autor: "Freddie Mercury"
  },
  {
    texto: `"Amar no es mirarse el uno al otro; es mirar juntos en la misma dirección."`,
    autor: "Antoine de Saint-Exupéry"
  },
  {
    texto: `“El verdadero revolucionario está guiado por grandes sentimientos de amor.”`,
    autor: `Ernesto "Che" Guevara`
  },
  {
    texto: `"Ser profundamente amado por alguien, te da fuerzas; mientras que amar profundamente a alguien, te da coraje."`,
    autor: "Lao-Tsé"
  },
  {
    texto: `"La suprema felicidad de la vida es saber que eres amado por ser tú mismo o, más exactamente, a pesar de ti mismo."`,
    autor: "Victor Hugo"
  },
  {
    texto: `"El amor no es algo que se pueda planear. Simplemente te golpea como un rayo."`,
    autor: "David Bowie"
  },
  {
    texto: `“La amistad nace del intercambio frecuente; el amor, de un flechazo.”`,
    autor: "Octavio Paz"
  },
  {
    texto: `"Te amo como se aman ciertas cosas oscuras: Secretamente, entre la sombra y el alma."`,
    autor: "Pablo Neruda"
  },
  {
    texto: `"El amor muchas veces no se encuentra, se construye."`,
    autor: "Vincent van Gogh"
  },
  {
    texto: `"Él es más yo que yo misma. Sea de lo que sea, que nuestras almas estén hechas, la suya y la mía son iguales."`,
    autor: "Emily Brontë"
  },
  {
    texto: `"Amar es querer ser amado. Es dar y recibir. Es compartir sin pedir."`,
    autor: "John Lennon"
  },
  {
    texto: `"Cruza el amor, yo cruzaré los dedos; y gracias por venir."`,
    autor: "Gustavo Cerati"
  },
  {
    texto: `"Donde hay amor, hay vida."`,
    autor: "Confucio"
  },
  {
    texto: `“El amor es lo único que trasciende el tiempo y el espacio.”`,
    autor: "Isabel Allende"
  },
  {
    texto: `"El amor no mira con los ojos, sino con el alma."`,
    autor: "William Shakespeare"
  },
  {
    texto: `"Te amo, no por quien eres, sino por quien soy cuando estoy contigo."`,
    autor: "Gabriel García Márquez"
  },
  {
    texto: `"Amar la vida es amar a quien hace que la vida valga la pena."`,
    autor: "Bob Marley"
  },
  {
    texto: `"El amor es una tela adornada por la naturaleza y bordada por la imaginación."`,
    autor: "Voltaire"
  },
  {
    texto: `“El amor no se encuentra, se construye cada día.”`,
    autor: "Rainer Maria Rilke"
  },
  
];

const iconos = ['🌸','🌟','💖','🌼','🌈','✨','💐','💫','❤️','🌻','🌹','💝','🎀','🍓','🦋','🌺','🎇','🍒','🌞','💌','🌙','🌷','🌟','🎉','💘','🎵','🫶','🎶','🌤','💕','🌟','🍃','🎈','🌊','🎠'];
const galeria = document.getElementById('galeria');
const imagenModal = document.getElementById('imagenModal');
const imagenExpandida = document.getElementById('imagenExpandida');
const fraseSuperpuesta = document.getElementById('fraseSuperpuesta');
const fraseTexto = document.getElementById('frase');
const cerrarFrase = document.getElementById('cerrarFrase');

// Crear los botones con iconos
for (let i = 0; i < 35; i++) {
  const btn = document.createElement('button');
  btn.textContent = iconos[i];
  btn.classList.add('icono-flotante');
  const delay = Math.random() * 3;
  btn.style.animationDelay = `${delay}s`;
  btn.addEventListener('click', () => {
    imagenExpandida.src = `imagenes/Foto${i + 1}.png`;
    fraseSuperpuesta.style.display = "none";
    imagenModal.style.display = "flex";
    document.getElementById("controlMusica").style.display = "none";
    imagenExpandida.onclick = () => {
      fraseTexto.innerHTML = `${frases[i].texto}<br><br><em>— ${frases[i].autor}</em>`;

      // Reinicia la animación cada vez que aparece
fraseSuperpuesta.style.display = "block";
fraseSuperpuesta.style.animation = "none"; // reinicia
void fraseSuperpuesta.offsetWidth;        // truco para forzar reinicio
fraseSuperpuesta.style.animation = "fadeIn 0.6s ease forwards";;
    };
  });
  galeria.appendChild(btn);
}
// Cerrar la frase, pero mantener la imagen visible
cerrarFrase.onclick = () => {
  fraseSuperpuesta.style.display = "none";
};









// Cerrar imagen si se toca fuera de la imagen o frase
const modal = document.getElementById("imagenModal");
const contenido = document.querySelector(".modal-contenido");

function cerrarModal() {
  contenido.classList.add("cerrando");
  setTimeout(() => {
    modal.style.display = "none";
    contenido.classList.remove("cerrando");
    document.getElementById("controlMusica").style.display = "block";
    document.getElementById("fraseSuperpuesta").style.display = "none";
  }, 400);
}

modal.addEventListener("click", (e) => {
  if (!contenido.contains(e.target)) {
    cerrarModal();
  }
});

// ✅ para iPhone / Safari
modal.addEventListener("touchstart", (e) => {
  if (!contenido.contains(e.target)) {
    cerrarModal();
  }
});












// Cerrar todo al hacer clic fuera
//window.onclick = function(event) {
//  if (event.target === imagenModal) {
//    const contenido = document.querySelector('.modal-contenido.combinado');
// Agrega clase para animar salida
//    contenido.classList.add('cerrando');

    // Espera a que la animación termine
//    setTimeout(() => {
//      imagenModal.style.display = "none";
//      fraseSuperpuesta.style.display = "none";
//      contenido.classList.remove('cerrando');
//      document.getElementById("controlMusica").style.display = "block";
//    }, 400); // misma duración que la animación
//  }
//};

  const boton = document.getElementById('controlMusica');
  const audio = document.getElementById('musica');

  boton.addEventListener('click', () => {
    if (audio.paused) {
      audio.volume = 1.0;
      audio.play();
      boton.textContent = '🔇 Off';
    } else {
      audio.pause();
      boton.textContent = '🔈 On';
    }
  });