function atualizarContador() {
  const dataInicial = new Date("2023-02-06T00:00:00");
  const agora = new Date();

  let anos = agora.getFullYear() - dataInicial.getFullYear();
  let meses = agora.getMonth() - dataInicial.getMonth();
  let dias = agora.getDate() - dataInicial.getDate();
  let horas = agora.getHours() - dataInicial.getHours();
  let minutos = agora.getMinutes() - dataInicial.getMinutes();
  let segundos = agora.getSeconds() - dataInicial.getSeconds();

  if (segundos < 0) {
    segundos += 60;
    minutos--;
  }
  if (minutos < 0) {
    minutos += 60;
    horas--;
  }
  if (horas < 0) {
    horas += 24;
    dias--;
  }
  if (dias < 0) {
    const ultimoMes = new Date(agora.getFullYear(), agora.getMonth(), 0);
    dias += ultimoMes.getDate();
    meses--;
  }
  if (meses < 0) {
    meses += 12;
    anos--;
  }

  document.getElementById("contador").innerHTML = 
    `${anos} anos, ${meses} meses, ${dias} dias<br>${horas} horas, ${minutos} minutos e ${segundos} segundos juntos!`;
}

// Atualiza o contador a cada segundo
setInterval(atualizarContador, 1000);

// Chama a função assim que a página carrega
atualizarContador();


// Carrossel
const imagens = [
  "fotos/foto1.jpg",
  "fotos/foto2.jpg",
  "fotos/foto3.jpg",
  "fotos/foto4.jpg",
  "fotos/foto5.jpg"
];

let indiceAtual = 0;

function mostrarImagem() {
  const img = document.getElementById("fotoCarrossel");
  img.src = imagens[indiceAtual];
}

function avancarImagem() {
  indiceAtual = (indiceAtual + 1) % imagens.length;
  mostrarImagem();
}

function voltarImagem() {
  indiceAtual = (indiceAtual - 1 + imagens.length) % imagens.length;
  mostrarImagem();
}
