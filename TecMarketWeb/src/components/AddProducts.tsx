import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './AddProducts.module.css';
import { addProductRequest } from '../api/products';
import erase from '../assets/erase.svg';

const AddProduct: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
    stock: '',
    deliveryType: '',
    condition: '',
    category: '',
    images: [] as File[], // Array para guardar las imágenes
  });
  const [formError, setFormError] = useState('');
  const [formSuccess, setFormSuccess] = useState('');
  const [previewImages, setPreviewImages] = useState<string[]>([]);

  const handleCancel = () => {
    navigate('/');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const updatedImages = [...formData.images];
      const updatedPreviewImages = [...previewImages];
      Array.from(files).forEach(file => {
        if (updatedImages.length < 5) {
          updatedImages.push(file);
          const reader = new FileReader();
          reader.onloadend = () => {
            updatedPreviewImages.push(reader.result as string);
            setPreviewImages(updatedPreviewImages);
          };
          reader.readAsDataURL(file);
        }
      });
      setFormData({ ...formData, images: updatedImages });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError('');
    setFormSuccess('');

    if (formData.title.trim() === '') {
      setFormError('El título es obligatorio');
      return;
    }

    const formDataToSend = new FormData();
    formDataToSend.append('title', formData.title);
    formDataToSend.append('description', formData.description);
    formDataToSend.append('price', formData.price);
    formDataToSend.append('stock', formData.stock);
    formDataToSend.append('deliveryType', formData.deliveryType);
    formDataToSend.append('condition', formData.condition);
    formDataToSend.append('category', formData.category);

    for (const image of formData.images) {
      formDataToSend.append('images', image, image.name);
    }

    try {
      const response = await addProductRequest(formDataToSend);

      if (response.status === 200 || response.status === 201) {
        setFormSuccess('¡Producto agregado con éxito!');
        // Aquí puedes limpiar el formulario si lo deseas
        setFormData({
          title: '',
          description: '',
          price: '',
          stock: '',
          deliveryType: '',
          condition: '',
          category: '',
          images: [],
        });
        setPreviewImages([]);
      } else {
        setFormError('Hubo un error al agregar el producto');
      }
    } catch (error) {
      console.error('Error:', error);
      setFormError('Hubo un error al agregar el producto');
    }
  };


  useEffect(() => {
    if (formSuccess) {
      navigate('/');
    }
  }, [formSuccess, navigate]);


  const handleDeleteImage = (index: any) => {
    // Copia el array de imágenes previas
    const updatedImages = [...previewImages];
    // Elimina la imagen en la posición 'index'
    updatedImages.splice(index, 1);
    // Actualiza el estado con las imágenes actualizadas
    setPreviewImages(updatedImages);
  };

  return (
    <div className={styles.addProductContainer}>
      <div className={styles.header}>
        <h1>Agregar un producto</h1>
      </div>
      <div className={styles.content}>
        <div className={styles.formContainer}>
          <form onSubmit={handleSubmit} encType="multipart/form-data">
            <input
              type="text"
              name="title"
              placeholder="Titulo"
              value={formData.title}
              onChange={handleChange}
            />
            <textarea
              name="description"
              placeholder="Descripción"
              value={formData.description}
              onChange={handleChange}
            />
            <input
              type="number"
              name="price"
              placeholder="Precio"
              value={formData.price}
              onChange={handleChange}
            />
            <input
              type="number"
              name="stock"
              placeholder="Stock"
              value={formData.stock}
              onChange={handleChange}
            />
            <select
              name="deliveryType"
              value={formData.deliveryType}
              onChange={handleChange}
            >
              <option value="">Selecciona el tipo de entrega</option>
              <option value="entrega personal">Entrega personal</option>
              <option value="envio a domicilio">Envío a domicilio</option>
            </select>
            <select
              name="condition"
              value={formData.condition}
              onChange={handleChange}
            >
              <option value="">Selecciona la condición</option>
              <option value="nuevo">Nuevo</option>
              <option value="usado">Usado</option>
            </select>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
            >
              <option value="">Selecciona la categoría</option>
              <option value="electronica">Electrónica</option>
              <option value="hogar">Hogar</option>
              <option value="ropa">Ropa</option>
              <option value="juguetes">Juguetes</option>
              <option value="otros">Otros</option>
            </select>
            <div>
              <label htmlFor="imagen" style={{ color: 'black' }}>Imagen:</label>
              <input
                type="file"
                id="imagen"
                name="imagen"
                accept="image/*"
                multiple
                onChange={handleImageChange}
              />
            </div>
            {previewImages.length > 0 && (
              <div className={styles.previewImages}>
                {previewImages.map((src, index) => (
                  <div key={index} className={styles.previewImageContainer}>
                    <img src={src} alt="Preview" className={styles.previewImage} />
                    <button className={styles.deleteButton} onClick={() => handleDeleteImage(index)}> <img src={erase} alt="boton de eliminar" /> </button>
                  </div>
                ))}
              </div>
            )}

            {formError && <div className={styles.errorMessage}>{formError}</div>}
            {formSuccess && <div className={styles.successMessage}>{formSuccess}</div>}
            <div className={styles.formButtons}>
              <button type="button" className={styles.cancelButton} onClick={handleCancel}>
                Cancelar
              </button>
              <button type="submit" className={styles.publishButton}>
                Publicar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
