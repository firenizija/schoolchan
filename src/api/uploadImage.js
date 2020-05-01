const imageStatus = {
  before: 'BEFORE',
  during: 'DURING',
  done: 'DONE',
};
const uploadImage = (input, setImage, setImageStatus) => {
  setImageStatus(imageStatus.during);

  const sendImage = (base64) => {
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/x-www-form-urlencoded');

    const urlencoded = new URLSearchParams();
    urlencoded.append('key', process.env.REACT_APP_SECRET);
    urlencoded.append('image', base64);

    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: urlencoded,
      redirect: 'follow',
    };

    fetch('https://api.imgbb.com/1/upload', requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setImageStatus(imageStatus.done);
        return setImage({
          large: result.data.image.url,
          mini: result.data.thumb.url,
          // medium: result.data.medium.url,
        });
      })
      .catch((error) => console.log('error', error));
  };
  const file = input.current.files[0];
  const reader = new FileReader();

  reader.onloadend = () => {
    const base64result = reader.result.substr(reader.result.indexOf(',') + 1);
    sendImage(base64result);
  };

  if (file) {
    reader.readAsDataURL(file);
  }
};
export default uploadImage;
