// wrapper for querySelector con manejo de errores
export function qs(selector, parent = document) {
  const element = parent.querySelector(selector);
  if (!element) console.error(`Selector "${selector}" no encontrado`);
  return element;
}

// getLocalStorage con validación
export function getLocalStorage(key) {
  try {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  } catch (error) {
    console.error(`Error al leer ${key} del localStorage:`, error);
    return null;
  }
}

// setLocalStorage con validación
export function setLocalStorage(key, data) {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (error) {
    console.error(`Error al guardar en ${key}:`, error);
  }
}

// setClick mejorado
export function setClick(selector, callback) {
  const element = qs(selector);
  if (!element) return;

  element.addEventListener("touchend", (event) => {
    event.preventDefault();
    callback();
  });
  element.addEventListener("click", callback);
}