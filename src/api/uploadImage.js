const uploadImage = (e) => {
    const sendImage = (base64) => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

        var urlencoded = new URLSearchParams();
        urlencoded.append("key", process.env.REACT_APP_SECRET);
        urlencoded.append("image", base64);

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: urlencoded,
            redirect: 'follow'
        };

        fetch("https://api.imgbb.com/1/upload", requestOptions)
            .then(res => res.json())
            .then(res => {
                console.log(res.data)
                return ({ large: res.data.image.url, mini: res.data.thumb.url, medium: res.data.medium.url })
            })
            .catch(error => console.log('error', error));
    }

    var file = e.target.files[0]
    var reader = new FileReader();

    reader.onloadend = function () {
        var base64result = reader.result.substr(reader.result.indexOf(',') + 1);
        return sendImage(base64result)
    }

    if (file) {
        reader.readAsDataURL(file);
    }
}
export default uploadImage;