function guardarYMostrarPublicacion(texto) {
  const contenido = `${texto}\n\n`;

  // Guardar el texto en un archivo .txt en el servidor
  fetch('https://buzzwire.github.io/publi.txt', {
    method: 'PUT',
    body: contenido
  })
  .then(response => {
    if (response.ok) {
      console.log('Texto guardado con éxito en el archivo publi.txt');
      return response.text();
    } else {
      console.error('Error al guardar el texto en el archivo publi.txt');
      throw new Error('No se pudo guardar el texto en el archivo');
    }
  })
  .then(textoGuardado => {
    // Mostrar el texto guardado en pantalla
    document.getElementById('contenido-guardado').textContent = textoGuardado;
  })
  .catch(error => {
    console.error('Error:', error);
  });
}

// Llamada a la función con un texto de ejemplo
guardarYMostrarPublicacion('Este es un ejemplo de texto que se guarda en el archivo publi.txt');
