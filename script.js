const textFileUrl = 'https://raw.githubusercontent.com/BuzzWire/buzzwire.github.io/main/msj.txt';
const variable1Input = document.getElementById('variable1');
const variable2Input = document.getElementById('variable2');
const saveChangesButton = document.getElementById('saveChanges');

// Función para leer el archivo de texto
async function readTextFile() {
  try {
    const response = await fetch(textFileUrl);
    const data = await response.text();
    return data;
  } catch (error) {
    console.error('Error al leer el archivo de texto:', error);
  }
}

// Función para actualizar el archivo de texto
async function updateTextFile(data) {
  try {
    const response = await fetch(textFileUrl, {
      method: 'PUT',
      headers: {
        'Content-Type': 'text/plain'
      },
      body: data
    });
    if (response.ok) {
      console.log('Archivo de texto actualizado exitosamente');
    } else {
      console.error('Error al actualizar el archivo de texto:', response.status);
    }
  } catch (error) {
    console.error('Error al actualizar el archivo de texto:', error);
  }
}

// Cargar los valores iniciales del archivo de texto
readTextFile().then(data => {
  const variables = data.split('\n');
  variable1Input.value = variables[0];
  variable2Input.value = variables[1];
});

// Evento para guardar los cambios
saveChangesButton.addEventListener('click', () => {
  const updatedData = `${variable1Input.value}\n${variable2Input.value}`;
  updateTextFile(updatedData);
});
