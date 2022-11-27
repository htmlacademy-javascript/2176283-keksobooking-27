const FILE_TYPES = ['jpg', 'jpeg', 'png'];

const fileChooserAvatar = document.querySelector('.ad-form__field input[type=file]');
const previewAvatar = document.querySelector('.ad-form-header__preview img');
const fileChooserPhoto = document.querySelector('.ad-form__upload input[type=file]');
const previewPhoto = document.querySelector('.ad-form__photo');

const onFileChooserAvatarChange = () => {
  const file = fileChooserAvatar.files[0];
  const fileName = file.name.toLowerCase();
  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));
  if (matches) {
    previewAvatar.src = URL.createObjectURL(file);
  }
};

const onFileChooserPhotoChange = () => {
  const file = fileChooserPhoto.files[0];
  const fileName = file.name.toLowerCase();
  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));
  previewPhoto.innerHTML = '';
  const photoElement = document.createElement('img');
  photoElement.style.maxWidth = '100%';
  photoElement.style.height = 'auto';
  if (matches) {
    photoElement.src = URL.createObjectURL(file);
  }
  previewPhoto.append(photoElement);
};

fileChooserAvatar.addEventListener('change', onFileChooserAvatarChange);
fileChooserPhoto.addEventListener('change', onFileChooserPhotoChange);
