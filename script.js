function atualizarContador() {
  // Substitua essa data pela data real em que eles se conheceram
  const dataInicial = new Date("2023-02-06T00:00:00");
  const agora = new Date();

  const diferenca = agora - dataInicial;

  const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diferenca / (1000 * 60 * 60)) % 24);
  const minutos = Math.floor((diferenca / (1000 * 60)) % 60);
  const segundos = Math.floor((diferenca / 1000) % 60);

  document.getElementById("contador").innerHTML = 
    `${dias} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos juntos!`;
}

// Atualiza o contador a cada segundo
setInterval(atualizarContador, 1000);

// Chama a função assim que a página carrega
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
  