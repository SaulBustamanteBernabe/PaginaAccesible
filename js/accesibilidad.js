// Panel de accesibilidad
function togglePanel() {
  const panel = document.getElementById('panel-content');
  panel.classList.toggle('hidden');
}

// Tamaño de fuente
let fontSizeLevel = 2; // de 1 a 6
function changeFontSize(change) {
  fontSizeLevel = Math.min(6, Math.max(1, fontSizeLevel + change));
  document.body.className = document.body.className.replace(/font-size-\d/, '');
  document.body.classList.add(`font-size-${fontSizeLevel}`);
  saveSettings();
}

// Cambio de fuente
function changeFont(font) {
  document.body.classList.remove('font-arial', 'font-georgia', 'font-verdana');
  if (font === 'Arial') document.body.classList.add('font-arial');
  else if (font === 'Georgia') document.body.classList.add('font-georgia');
  else if (font === 'Verdana') document.body.classList.add('font-verdana');
  saveSettings();
}

// Modo oscuro
function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
  saveSettings();
}

// Alto contraste
function toggleHighContrast() {
  document.body.classList.toggle('high-contrast');
  saveSettings();
}

// Daltonismo
function toggleDaltonism() {
  document.body.classList.toggle('daltonism');
  saveSettings();
}

// Cambiar cursor
function toggleCursor() {
  document.body.classList.toggle('cursor-big');
  saveSettings();
}

// Ocultar imágenes
function toggleImages() {
  document.body.classList.toggle('hidden-img');
  saveSettings();
}

// Quitar y resaltar enlaces
function toggleLinks() {
  document.querySelectorAll('a').forEach(link => {
    link.classList.toggle('no-links');
  });
  saveSettings();
}

// Guardar configuraciones en localStorage
function saveSettings() {
  const classes = Array.from(document.body.classList);
  const font = document.body.classList.contains('font-arial') ? 'Arial' :
               document.body.classList.contains('font-georgia') ? 'Georgia' :
               document.body.classList.contains('font-verdana') ? 'Verdana' : 'default';
  localStorage.setItem('accessibility-settings', JSON.stringify({
    fontSizeLevel,
    font,
    classes
  }));
}

// Cargar configuraciones
function loadSettings() {
  const settings = JSON.parse(localStorage.getItem('accessibility-settings'));
  if (!settings) return;
  settings.classes?.forEach(cls => document.body.classList.add(cls));
  fontSizeLevel = settings.fontSizeLevel || 2;
  document.body.classList.add(`font-size-${fontSizeLevel}`);
  if (settings.font) changeFont(settings.font);
}

// Aplicar configuración al cargar
window.addEventListener('DOMContentLoaded', loadSettings);
