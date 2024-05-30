import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import ProductListing from './Home'; // Asegúrate de que la ruta sea correcta
import AddProduct from './AddProducts'; // Asegúrate de que la ruta sea correcta
import { getProducts, addProductRequest } from '../api/products';
import { vi } from 'vitest';



// Mockea las funciones getProducts y addProductRequest
vi.mock('../api/products');
const mockGetProducts = getProducts as vi.MockedFunction<typeof getProducts>;
const mockAddProductRequest = addProductRequest as vi.MockedFunction<typeof addProductRequest>;

const mockProducts = [
  {
    _id: '1',
    title: 'Producto 1',
    description: 'Descripción del producto 1',
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
    description: 'Descripción del producto 2',
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
  statusText: 'OK',
  headers: {},
  config: {
    headers: {
      'Content-Type': 'application/json',
    },
  },
};

describe('ProductListing Component', () => {
  beforeEach(() => {
    mockGetProducts.mockResolvedValue(Promise.resolve(mockResponse) as any);
  });

  test('recupera y muestra los productos correctamente', async () => {
    render(
      <Router>
        <ProductListing />
      </Router>
    );

    // Espera a que los elementos de los productos aparezcan en el documento
    await waitFor(() => {
      expect(screen.getByText('Producto 1')).toBeInTheDocument();
      expect(screen.getByText('Producto 2')).toBeInTheDocument();
    });

    // Verifica que los elementos se muestren correctamente
    expect(screen.getByText('Producto 1')).toBeInTheDocument();
    expect(screen.getByText('Precio: $50000')).toBeInTheDocument();
    expect(screen.getByText('Stock: 10')).toBeInTheDocument();
    expect(screen.getByText('Tipo de entrega: entrega personal')).toBeInTheDocument();
    expect(screen.getByText('Condición: nuevo')).toBeInTheDocument();
    expect(screen.getByText('Categoría: electronica')).toBeInTheDocument();
    expect(screen.getByText('Descripción del producto 1')).toBeInTheDocument();
    expect(screen.getByText('Producto 2')).toBeInTheDocument();
    expect(screen.getByText('Precio: $75000')).toBeInTheDocument();
    expect(screen.getByText('Stock: 5')).toBeInTheDocument();
    expect(screen.getByText('Tipo de entrega: envio a domicilio')).toBeInTheDocument();
    expect(screen.getByText('Condición: usado')).toBeInTheDocument();
    expect(screen.getByText('Categoría: hogar')).toBeInTheDocument();
    expect(screen.getByText('Descripción del producto 2')).toBeInTheDocument();

    // Verifica que las imágenes se muestren correctamente
    const images = screen.getAllByRole('img');
    const image1 = images[0];
    const image2 = images[1];
    expect(image1).toHaveAttribute('src', '/path/to/image1.jpg');
    expect(image2).toHaveAttribute('src', '/path/to/image2.jpg');
  });
});

describe('AddProduct Component', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  test('envía los datos del formulario correctamente', async () => {
    // Mock de la respuesta de addProductRequest
    mockAddProductRequest.mockResolvedValue({ status: 201 });

    render(
      <Router>
        <AddProduct />
      </Router>
    );

    // Rellenar el formulario
    fireEvent.change(screen.getByPlaceholderText(/Título/i), { target: { value: 'Nuevo Producto' } });
    fireEvent.change(screen.getByPlaceholderText(/Descripción/i), { target: { value: 'Descripción del nuevo producto' } });
    fireEvent.change(screen.getByPlaceholderText(/Precio/i), { target: { value: '100' } });
    fireEvent.change(screen.getByPlaceholderText(/Stock/i), { target: { value: '20' } });
    fireEvent.change(screen.getByPlaceholderText(/Tipo de entrega/i), { target: { value: 'entrega personal' } });
    fireEvent.change(screen.getByPlaceholderText(/Condición/i), { target: { value: 'nuevo' } });
    fireEvent.change(screen.getByPlaceholderText(/Categoría/i), { target: { value: 'electronica' } });

    // Simular la subida de una imagen
    const file = new File(['dummy content'], 'example.png', { type: 'image/png' });
    const input = screen.getByLabelText(/Imagen:/i) as HTMLInputElement;
    fireEvent.change(input, { target: { files: [file] } });

    // Enviar el formulario
    fireEvent.click(screen.getByText(/Publicar/i));

    await waitFor(() => {
      // Verificar que addProductRequest haya sido llamada correctamente
      expect(mockAddProductRequest).toHaveBeenCalledTimes(1);
      const formData = (mockAddProductRequest as vi.Mock).mock.calls[0][0] as FormData;
      expect(formData.get('title')).toBe('Nuevo Producto');
      expect(formData.get('description')).toBe('Descripción del nuevo producto');
      expect(formData.get('price')).toBe('100');
      expect(formData.get('stock')).toBe('20');
      expect(formData.get('deliveryType')).toBe('entrega personal');
      expect(formData.get('condition')).toBe('nuevo');
      expect(formData.get('category')).toBe('electronica');
      expect(formData.get('images')).toBeInstanceOf(File);
    });

    // Verificar que el mensaje de éxito se muestre
    expect(screen.getByText('¡Producto agregado con éxito!')).toBeInTheDocument();
  });
});


describe('AddProduct Component', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  test('envía los datos del formulario correctamente al hacer clic en el botón de enviar', async () => {
    // Mock de la respuesta de addProductRequest
    mockAddProductRequest.mockResolvedValue({ status: 201 });

    render(
      <Router>
        <AddProduct />
      </Router>
    );

    // Rellenar el formulario
    fireEvent.change(screen.getByPlaceholderText(/Título/i), { target: { value: 'Nuevo Producto' } });
    fireEvent.change(screen.getByPlaceholderText(/Descripción/i), { target: { value: 'Descripción del nuevo producto' } });
    fireEvent.change(screen.getByPlaceholderText(/Precio/i), { target: { value: '100' } });
    fireEvent.change(screen.getByPlaceholderText(/Stock/i), { target: { value: '20' } });
    fireEvent.change(screen.getByPlaceholderText(/Tipo de entrega/i), { target: { value: 'entrega personal' } });
    fireEvent.change(screen.getByPlaceholderText(/Condición/i), { target: { value: 'nuevo' } });
    fireEvent.change(screen.getByPlaceholderText(/Categoría/i), { target: { value: 'electronica' } });

    // Simular la subida de una imagen
    const file = new File(['dummy content'], 'example.png', { type: 'image/png' });
    const input = screen.getByLabelText(/Imagen:/i) as HTMLInputElement;
    fireEvent.change(input, { target: { files: [file] } });

    // Simular el clic en el botón de enviar
    fireEvent.click(screen.getByText(/Publicar/i));

    // Esperar a que se complete la llamada a la función mockeada
    await vi.waitFor(() => mockAddProductRequest.mock.calls.length === 1);

    // Verificar que addProductRequest haya sido llamada correctamente
    expect(mockAddProductRequest).toHaveBeenCalledTimes(1);
    const formData = mockAddProductRequest.mock.calls[0][0] as FormData;
    expect(formData.get('title')).toBe('Nuevo Producto');
    expect(formData.get('description')).toBe('Descripción del nuevo producto');
    expect(formData.get('price')).toBe('100');
    expect(formData.get('stock')).toBe('20');
    expect(formData.get('deliveryType')).toBe('entrega personal');
    expect(formData.get('condition')).toBe('nuevo');
    expect(formData.get('category')).toBe('electronica');
    expect(formData.get('images')).toBeInstanceOf(File);
  });
});
