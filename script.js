const jsonUrl = 'https://api.github.com/repos/BuzzWire/buzzwire.github.io/contents/msj.json';
const variable1Input = document.getElementById('variable1');
const variable2Input = document.getElementById('variable2');
const saveChangesButton = document.getElementById('saveChanges');

// Obtener el token de acceso de GitHub
const githubToken = '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';

// Función para leer el archivo JSON
async function readJsonFile() {
  try {
    const response = await fetch(jsonUrl, {
      headers: {
        'Authorization': `Bearer ${githubToken}`
      }
    });
    const data = await response.json();
    return JSON.parse(atob(data.content));
  } catch (error) {
    console.error('Error al leer el archivo JSON:', error);
  }
}

// Función para actualizar el archivo JSON
async function updateJsonFile(data) {
  try {
    const response = await fetch(jsonUrl, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${githubToken}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        message: 'Actualizar variables en msj.json',
        content: btoa(JSON.stringify(data))
      })
    });
    if (response.ok) {
      console.log('Archivo JSON actualizado exitosamente');
    } else {
      console.error('Error al actualizar el archivo JSON:', response.status);
    }
  } catch (error) {
    console.error('Error al actualizar el archivo JSON:', error);
  }
}

// Cargar los valores iniciales del archivo JSON
readJsonFile().then(data => {
  variable1Input.value = data.variable1;
  variable2Input.value = data.variable2;
});

// Evento para guardar los cambios
saveChangesButton.addEventListener('click', () => {
  const updatedData = {
    variable1: variable1Input.value,
    variable2: variable2Input.value
  };
  updateJsonFile(updatedData);
});
