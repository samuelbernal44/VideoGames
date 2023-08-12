import { useState } from 'react';

const Form = () => {
  const [form, setForm] = useState({
    name: '',
    description: '',
    platforms: '',
    image: '',
    releaseDate: '',
    rating: '',
    genres: '',
  });

  const changeHandler = (event) => {
    const property = event.target.name;
    const value = event.target.value;

    setForm({ ...form, [property]: value });
  };

  return (
    <form>
      <div>
        <label>Name: </label>
        <input
          type="text"
          value={form.name}
          onChange={changeHandler}
          name="name"
        />
      </div>
      <div>
        <label>Description: </label>
        <input
          type="text"
          value={form.description}
          onChange={changeHandler}
          name="description"
        />
      </div>
      <div>
        <label>Platforms: </label>
        <input
          type="text"
          value={form.platforms}
          onChange={changeHandler}
          name="platforms"
        />
      </div>
      <div>
        <label>Image: </label>
        <input
          type="text"
          value={form.image}
          onChange={changeHandler}
          name="image"
        />
      </div>
      <div>
        <label>Release Date: </label>
        <input
          type="text"
          value={form.releaseDate}
          onChange={changeHandler}
          name="releaseDate"
        />
      </div>
      <div>
        <label>Rating: </label>
        <input
          type="text"
          value={form.rating}
          onChange={changeHandler}
          name="rating"
        />
      </div>
      <div>
        <label>Genres: </label>
        <input
          type="text"
          value={form.genres}
          onChange={changeHandler}
          name="genres"
        />
      </div>
    </form>
  );
};

export default Form;
