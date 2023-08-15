import { useState, useEffect } from 'react';
import axios from 'axios';
import MultiSelect from '../../components/MultiSelect/MultiSelect';
import { platformOptions, genreOptions } from './constan';
import validator from './validation';
import {
  FormContainer,
  FormField,
  FormLabel,
  FormInput,
  FormButton,
  FormP,
  ButtonContainer,
} from '../../components/StyledComponent/StyledForm';

const Form = () => {
  const [form, setForm] = useState({
    name: '',
    description: '',
    platforms: [],
    image: '',
    releaseDate: '',
    rating: '',
    genres: [],
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    setErrors(validator(form));
  }, [form]);

  const changeHandler = (event) => {
    const property = event.target.name;
    let value = event.target.value;

    if (property === 'platforms' || property === 'genres') {
      value = Array.from(event.target.selectedOptions).map(
        (option) => option.value
      );
    }

    setForm((prevForm) => ({ ...prevForm, [property]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const validationErrors = validator(form);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      try {
        // Submit the form
        await axios.post('http://localhost:3001/videogames', form);
        alert('Form submitted successfully');
        // Reset the form state
        setForm({
          name: '',
          description: '',
          platforms: [],
          image: '',
          releaseDate: '',
          rating: '',
          genres: [],
        });
      } catch (error) {
        // Show error message
        alert(`Form not submitted: ${error.response.data.error}`);
      }
    } else {
      // Show error message
      alert('Form not submitted: invalid data');
    }
  };

  return (
    <>
      <FormContainer onSubmit={handleSubmit}>
        <FormField>
          <FormLabel>Name: </FormLabel>
          <FormInput
            type="text"
            value={form.name}
            onChange={changeHandler}
            name="name"
          />
          {errors.name && <FormP>{errors.name}</FormP>}
        </FormField>
        <FormField>
          <FormLabel>Description: </FormLabel>
          <FormInput
            type="text"
            value={form.description}
            onChange={changeHandler}
            name="description"
          />
          {errors.description && <FormP>{errors.description}</FormP>}
        </FormField>
        <FormField>
          <FormLabel>Image: </FormLabel>
          <FormInput
            type="text"
            value={form.image}
            onChange={changeHandler}
            name="image"
          />
          {errors.image && <FormP>{errors.image}</FormP>}
        </FormField>
        <FormField>
          <FormLabel>Release Date: </FormLabel>
          <FormInput
            type="text"
            value={form.releaseDate}
            onChange={changeHandler}
            name="releaseDate"
          />
          {errors.releaseDate && <FormP>{errors.releaseDate}</FormP>}
        </FormField>
        <FormField>
          <FormLabel>Rating: </FormLabel>
          <FormInput
            type="text"
            value={form.rating}
            onChange={changeHandler}
            name="rating"
          />
          {errors.rating && <FormP>{errors.rating}</FormP>}
        </FormField>
        <MultiSelect
          label="Platforms"
          options={platformOptions}
          onChange={(platforms) =>
            setForm((prevForm) => ({ ...prevForm, platforms }))
          }
        />
        {errors.platforms && <FormP>{errors.platforms}</FormP>}
        <MultiSelect
          label="Genres"
          options={genreOptions}
          onChange={(genres) =>
            setForm((prevForm) => ({ ...prevForm, genres }))
          }
        />
        {errors.genres && <FormP>{errors.genres}</FormP>}
        <ButtonContainer>
          <FormButton type="submit">Submit</FormButton>
        </ButtonContainer>
      </FormContainer>
    </>
  );
};

export default Form;
