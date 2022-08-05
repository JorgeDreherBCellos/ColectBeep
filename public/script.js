(async function connectSdk() {
  // -------------------------------------------- VARIÁVEIS
  const sdkKey = "h84nxgkkme5qb01uhpz2ci72c"
  const modelSid = "d7cf53d0e9534e17";
  const params = `m=${modelSid}&hr=0&play=1&qs=1`;

  /** O ponto de orientão do mapa */
  L.marker([lat, lng], { icon }).addTo(map).bindPopup(popup);

  // -------------------------------------------- Inserindo as variáveis no iframe
  const iframe = document.getElementById('showcase-iframe');
  
  document.addEventListener("DOMContentLoaded", () => {
    iframe.setAttribute('src', `https://my.matterport.com/show/?${params}`);
    iframe.addEventListener('load', () => showcaseLoader(iframe));
  });

  // -------------------------------------------- TryCatch de conexão com o SDK
  function showcaseLoader(iframe){
    try{
      window.MP_SDK.connect(iframe, sdkKey, '')
        .then(onShowcaseConnect)
        .catch(console.error);
    } catch(e){
      console.error(e);
    }
  }
})();

// ------------------------------------------------------------------------------------------------------------------------------------

/*
  FUNÇÃO CHAMADA APÓS A CONEXÃO COM O SDK

  - Ela recebe a variável [mpSdk] obtida na conexão
  - Dentro desta função, é feita toda a interação e manipulação do SDK
*/

async function onShowcaseConnect(mpSdk) {
  mpSdk.Mattertag.registerIcon('customIcon', 'https://i.imgur.com/sc0I8Aw.png'); // Registrando um ícone, para que possa ser utilizado posteriormente

  await createTag( // Chamando a função de criação de tag, passando os parâmetros esperados
    'Teste',
    'Legenda do Teste',
    { x: 2.5, y: 0, z: 4.5 },
    1,
    0,
    mpSdk
  )

  // -------------------------------------------- ESCUTADOR DE EVENTOS
  // Ao clicar nos respectivos botões, é chamado a função de edição da posição da tag, passando novos parâmetros para a mesma

  document.getElementById('escritorio').addEventListener('click', async () => {
    await changeTagPosition(
      0, 
      { x: 2.5, y: 0, z: 4.5 },
      1,
      0, 
      mpSdk
    )
  })

  document.getElementById('cozinha').addEventListener('click', async () => {
    await changeTagPosition(
      0, 
      { x: 5, y: 0, z: 4.5 },
      1,
      0, 
      mpSdk
    )
  })
  
  // -------------------------------------------- INTERAÇÕES & MANIPULAÇÕES DO SDK

  try {
    const mattertagData = await mpSdk.Mattertag.getData(); // Obtendo todas as tags (e informações de cada uma) criadas no projeto
    const modelData = await mpSdk.Model.getData(); // Obtendo informações do modelo 3D, neste caso o escritório digitalizado

    mpSdk.Mattertag.editIcon(mattertagData[0].sid, 'customIcon'); // Alterando o ícone da tag, pelo ícone criado na linha 46
  } catch (e) {
    console.error(e);
  }
}


// ----------------------------------------------------------- FUNÇÃO CRIAÇÃO DE TAG -----------------------------------------------------------

async function createTag(label, description, position, height, floor, mpSdk) {

  // --------------------------------------------------------------------- Função original do SDK de CRIAÇÃO da TAG
  await mpSdk.Mattertag.add([{
    label: label,
    description: description,
    anchorPosition: position,
    stemVector: { x: 0, y: height, z: 0 },
    floorIndex: floor,
  }])
}

// ----------------------------------------------------------- FUNÇÃO EDIÇÃO DE TAG ------------------------------------------------------------

async function changeTagPosition(index, position, height, floor, mpSdk) {
  const mattertagData = await mpSdk.Mattertag.getData();

  // --------------------------------------------------------------------- Função original do SDK de EDIÇÃO da TAG
  mpSdk.Mattertag.editPosition(mattertagData[index].sid, {
    anchorPosition: position,
    stemVector: { x: 0, y: height, z: 0 },
    floorIndex: floor,
  });
}
