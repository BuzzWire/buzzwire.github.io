const jsonUrl = 'https://raw.githubusercontent.com/BuzzWire/buzzwire.github.io/main/msj.json';
const variable1Input = document.getElementById('variable1');
const variable2Input = document.getElementById('variable2');
const saveChangesButton = document.getElementById('saveChanges');

// Función para leer el archivo JSON
async function readJsonFile() {
  try {
    const response = await fetch(jsonUrl);
    const data = await response.json();
    return data;
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
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
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
