import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import AddProduct from './AddProducts';
import Home from './Home';
import { addProductRequest, getProducts } from '../api/products';
import { vi } from 'vitest';

// Mockear las funciones de la API
vi.mock('../api/products');
const mockAddProductRequest = addProductRequest as vi.MockedFunction<typeof addProductRequest>;
const mockGetProducts = getProducts as vi.MockedFunction<typeof getProducts>;

// Mockear datos de productos
const mockProducts = [
  {
    _id: '1',
    title: 'Producto 1',
    price: 500,
    stock: 10,
    deliveryType: 'entrega personal',
    condition: 'nuevo',
    category: ['electronica'],
    images: ['/path/to/image1.jpg'],
  },
  {
    _id: '2',
    title: 'Producto 2',
    price: 750,
    stock: 5,
    deliveryType: 'envio a domicilio',
    condition: 'usado',
    category: ['hogar'],
    images: ['/path/to/image2.jpg'],
  },
];

const mockResponse = {
  data: mockProducts,
  status: 200,
};

describe('Componentes de TecMarket', () => {
  describe('AddProduct Component', () => {
    beforeEach(() => {
      mockAddProductRequest.mockResolvedValue({ status: 200 });
    });

    test('renderiza correctamente el formulario', () => {
      render(
        <Router>
          <AddProduct />
        </Router>
      );

      expect(screen.getByPlaceholderText('Titulo')).toBeInTheDocument();
      expect(screen.getByPlaceholderText('Descripción')).toBeInTheDocument();
      expect(screen.getByPlaceholderText('Precio')).toBeInTheDocument();
      expect(screen.getByPlaceholderText('Stock')).toBeInTheDocument();
      expect(screen.getByLabelText('Imagen:')).toBeInTheDocument();
      expect(screen.getByText('Agregar un producto')).toBeInTheDocument();
    });

    test('actualiza los campos del formulario correctamente', () => {
      render(
        <Router>
          <AddProduct />
        </Router>
      );

      fireEvent.change(screen.getByPlaceholderText('Titulo'), { target: { value: 'Producto de prueba' } });
      fireEvent.change(screen.getByPlaceholderText('Descripción'), { target: { value: 'Descripción de prueba' } });
      fireEvent.change(screen.getByPlaceholderText('Precio'), { target: { value: '100' } });
      fireEvent.change(screen.getByPlaceholderText('Stock'), { target: { value: '10' } });

      expect(screen.getByPlaceholderText('Titulo')).toHaveValue('Producto de prueba');
      expect(screen.getByPlaceholderText('Descripción')).toHaveValue('Descripción de prueba');
      expect(screen.getByPlaceholderText('Precio')).toHaveValue(100);
      expect(screen.getByPlaceholderText('Stock')).toHaveValue(10);
    });

    test('envía el formulario correctamente', async () => {
      render(
        <Router>
          <AddProduct />
        </Router>
      );

      fireEvent.change(screen.getByPlaceholderText('Titulo'), { target: { value: 'Producto de prueba' } });
      fireEvent.change(screen.getByPlaceholderText('Descripción'), { target: { value: 'Descripción de prueba' } });
      fireEvent.change(screen.getByPlaceholderText('Precio'), { target: { value: '100' } });
      fireEvent.change(screen.getByPlaceholderText('Stock'), { target: { value: '10' } });
      fireEvent.change(screen.getByLabelText('Imagen:'), { target: { files: [new File(['image'], 'image.png', { type: 'image/png' })] } });

      fireEvent.click(screen.getByText('Publicar'));

      await waitFor(() => {
        expect(mockAddProductRequest).toHaveBeenCalled();
        expect(screen.getByText('¡Producto agregado con éxito!')).toBeInTheDocument();
      });
    });
  });

  describe('Home Component', () => {
    beforeEach(() => {
      mockGetProducts.mockResolvedValue(mockResponse as any);
    });

    test('renderiza correctamente la lista de productos', async () => {
      render(
        <Router>
          <Home />
        </Router>
      );

      // Espera a que los productos se carguen y se muestren
      await waitFor(() => {
        expect(screen.getByText('Producto 1')).toBeInTheDocument();
        expect(screen.getByText('Producto 2')).toBeInTheDocument();
      });

      // Verifica que los elementos se muestren correctamente
      expect(screen.getByText('Producto 1')).toBeInTheDocument();
      expect(screen.getByText('Precio: $500')).toBeInTheDocument();
      expect(screen.getByText('Producto 2')).toBeInTheDocument();
      expect(screen.getByText('Precio: $750')).toBeInTheDocument();
    });
  });
});
