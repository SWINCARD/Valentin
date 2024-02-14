let rechazoMessages = [
    '¡Qué pena! Tal vez la próxima vez. 😔',
    '¡Vaya, una oportunidad perdida! 😞',
    '¡No te preocupes, siempre hay un mañana! 😌',
    '¡Eres genial! Pero no es el momento adecuado. 😊',
    '¡Todo en la vida pasa por algo! 🌟',
    '¡La vida está llena de sorpresas! 🎁'
  ];
  
  let currentMessageIndex = 0;
  let shrinkingScale = 1;
  let audioPaused = true;
  
  function aceptar() {
    document.getElementById('flower').style.display = 'block';
    document.querySelector("h1").style.display = 'none';
    document.getElementById('siButton').style.display = 'none'; // Oculta solo el botón 'Sí'
    document.getElementById('noButton').style.display = 'none'; // Oculta solo el botón 'No'
    document.getElementById('siButton').style.transform = 'scale(1.5)';
  }
  
  function rechazar() {
    document.getElementById('noButton').textContent = rechazoMessages[currentMessageIndex];
    currentMessageIndex = (currentMessageIndex + 1) % rechazoMessages.length;
    document.getElementById('noButton').style.transform = 'scale(' + shrinkingScale + ')';
    shrinkingScale -= 0.1;
    if (shrinkingScale <= 0) {
      document.getElementById('noButton').style.display = 'none';
      document.getElementById('siButton').style.transform = 'scale(' + (1.5 + (0.1*(currentMessageIndex+1))) + ')';
    }
  }
  
  function toggleAudio() {
    var audio = document.getElementById("backgroundAudio");
    if (audioPaused) {
      audio.play();
      document.getElementById('musicButton').textContent = 'Pausar música';
    } else {
      audio.pause();
      document.getElementById('musicButton').textContent = 'Reproducir música';
    }
    audioPaused = !audioPaused;
  }
  
  const numFireflies = 50;
  for (let i = 0; i < numFireflies; i++) {
    createFirefly();
  }
  
  function createFirefly() {
    const firefly = document.createElement('div');
    firefly.classList.add('firefly');
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    firefly.style.left = `${x}px`;
    firefly.style.top = `${y}px`;
    document.body.appendChild(firefly);
  }
  