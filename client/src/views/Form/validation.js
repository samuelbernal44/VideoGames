const validator = (data) => {
  const errors = {};

  if (!data.name) {
    errors.name = 'Name is required';
  } else {
    const nameRegex = /^[a-zA-Z0-9\s]*$/;
    if (!nameRegex.test(data.name)) {
      errors.name = 'Name must not contain symbols or special characters';
    }
  }

  if (!data.description) {
    errors.description = 'Description is required';
  }

  if (!data.platforms.length) {
    errors.platforms = 'At least one platform must be selected';
  }

  if (!data.image) {
    errors.image = 'Image is required';
  } else {
    const urlRegex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/;
    const imageRegex = /\.(jpe?g|png|gif)$/i;
    if (!urlRegex.test(data.image) || !imageRegex.test(data.image)) {
      errors.image = 'Image must be a valid URL that points to an image file';
    }
  }

  if (!data.releaseDate) {
    errors.releaseDate = 'Release Date is required';
  } else {
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (!dateRegex.test(data.releaseDate)) {
      errors.releaseDate = 'Release Date must be in the format "YYYY-MM-DD"';
    }
  }

  if (!data.rating) {
    errors.rating = 'Rating is required';
  } else if (isNaN(data.rating)) {
    errors.rating = 'Rating must be a number';
  } else if (data.rating < 0 || data.rating > 5) {
    errors.rating = 'Rating must be between 0 and 5';
  }

  if (!data.genres.length) {
    errors.genres = 'At least one genre must be selected';
  }

  return errors;
};

export default validator;
