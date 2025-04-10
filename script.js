<script>
  function calcularDiferenca() {
    const dataInicio = new Date("2020-02-14T00:00:00"); // << Coloque aqui a data que eles se conheceram
    const agora = new Date();

    let anos = agora.getFullYear() - dataInicio.getFullYear();
    let meses = agora.getMonth() - dataInicio.getMonth();
    let dias = agora.getDate() - dataInicio.getDate();

    if (dias < 0) {
      meses--;
      const mesAnterior = new Date(agora.getFullYear(), agora.getMonth(), 0);
      dias += mesAnterior.getDate();
    }

    if (meses < 0) {
      anos--;
      meses += 12;
    }

    const diffTempo = agora - new Date(
      agora.getFullYear(),
      agora.getMonth(),
      agora.getDate(),
      0,
      0,
      0
    );

    const horas = Math.floor(diffTempo / (1000 * 60 * 60));
    const minutos = Math.floor((diffTempo % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diffTempo % (1000 * 60)) / 1000);

    document.getElementById("contador").innerHTML =
      `${anos} anos, ${meses} meses, ${dias} dias, ` +
      `${horas}h ${minutos}min ${segundos}s`;
  }

  setInterval(calcularDiferenca, 1000);
</script>

// Chama a função assim que a página carrega
calcularDiferenca();


const imagens = [
    "foto1.jpg",
    "foto2.jpg",
    "foto3.jpg",
    "foto4.jpg",
    "foto5.jpg"
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
  
