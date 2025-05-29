// Configuración de la URL del backend
const API_URL = 'http://localhost:3000/api/users';

// Configuración de elementos del DOM
const elements = {
  usersGrid: document.getElementById('users-grid'),
  refreshBtn: document.getElementById('refresh'),
  genderFilter: document.getElementById('gender-filter'),
  ageFilter: document.getElementById('age-filter')
};

// Configuración de los filtros
const filters = {
  gender: 'all',
  age: 'all'
};

// Configuración de formatos
const formats = {
  date: { year: 'numeric', month: 'long', day: 'numeric' }
};