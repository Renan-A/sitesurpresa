function atualizarContador() {
  const dataInicial = new Date("2023-02-06T00:00:00");
  const agora = new Date();

  // Cálculo de anos, meses e dias
  let anos = agora.getFullYear() - dataInicial.getFullYear();
  let meses = agora.getMonth() - dataInicial.getMonth();
  let dias = agora.getDate() - dataInicial.getDate();

  if (dias < 0) {
    meses--;
    const ultimoDiaDoMesAnterior = new Date(agora.getFullYear(), agora.getMonth(), 0).getDate();
    dias += ultimoDiaDoMesAnterior;
  }

  if (meses < 0) {
    anos--;
    meses += 12;
  }

  // Cálculo de horas, minutos e segundos (apenas do dia atual)
  const hoje = new Date(agora.getFullYear(), agora.getMonth(), agora.getDate());
  const tempoHoje = agora - hoje;
  const horas = Math.floor(tempoHoje / (1000 * 60 * 60));
  const minutos = Math.floor((tempoHoje / (1000 * 60)) % 60);
  const segundos = Math.floor((tempoHoje / 1000) % 60);

  document.getElementById("contador").innerHTML =
    `${anos} anos, ${meses} meses, ${dias} dias, ` +
    `${horas} horas, ${minutos} minutos e ${segundos} segundos juntos!`;
}

setInterval(atualizarContador, 1000);
atualizarContador();

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
