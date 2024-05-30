import axios from 'axios';

const API = 'http://localhost:3000/api';

export const addProductRequest = async (formData: FormData) => {
  try {
    const response = await axios.post(`${API}/products`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response; // Devuelve la respuesta del backend
  } catch (error) {
    console.error('Error al agregar producto:', error);
    throw error; // Propaga el error para que pueda ser manejado por el frontend
  }
};

export const getProducts = async () => {
  try {
    const response = await axios.get(`${API}/products`);
    return response; // Devuelve la respuesta del backend
  } catch (error) {
    console.error('Error al obtener productos:', error);
    throw error; // Propaga el error para que pueda ser manejado por el frontend
  }
};
