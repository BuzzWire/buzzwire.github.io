function guardarPublicacion(texto) {
  const textoPublicacion = `${texto}\n\n`;
  
  // Crear un Blob con el contenido del texto
  const blob = new Blob([textoPublicacion], { type: 'text/plain' });

  // Crear un enlace 'a' para descargar el Blob
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = `${new Date().toISOString()}.txt`;
  a.click();

  // Subir archivo de publicación al repositorio de GitHub
  const encodedText = encodeURIComponent(textoPublicacion);
  const apiUrl = `https://api.github.com/repos/buzzwire/buzzwire.github.io/contents/publicaciones/${new Date().toISOString()}.txt`;
  fetch(apiUrl, {
    method: 'PUT',
    headers: {
      Authorization: 'Token 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',
      Accept: 'application/vnd.github.v3+json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      message: 'Nueva publicación',
      content: btoa(encodedText)
    })
  })
}
