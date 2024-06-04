function guardarPublicacion(texto) {
  const textoPublicacion = `${texto}\n\n`;
  
  // Subir archivo de publicación al repositorio de GitHub
  const encodedText = btoa(textoPublicacion);
  const apiUrl = 'https://api.github.com/repos/buzzwire/buzzwire.github.io/contents/publicaciones/' + new Date().toISOString() + '.txt';
  
  fetch(apiUrl, {
    method: 'PUT',
    headers: {
      Authorization: 'Token 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',
      Accept: 'application/vnd.github.v3+json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      message: 'Nueva publicación',
      content: encodedText
    })
  })
  .then(response => {
    if (response.ok) {
      console.log('Archivo subido con éxito.');
    } else {
      console.error('Error al subir el archivo.');
    }
  })
  .catch(error => {
    console.error('Error al subir el archivo:', error);
  });
}
