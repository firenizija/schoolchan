import React, { useState } from 'react';
import closeIco from 'svg/closeIco.svg';
import formIco from 'svg/formIco.svg';
import { useSelector } from 'react-redux'

import './styles/createPostForm.scss'

const CreatePostForm = ({ setCreatePostFrom }) => {
    const [body, setBody] = useState("")
    const [image, setImage] = useState("")
    const socket = useSelector(state => state.socket)

    const sendPost = (e, data) => {
        e.preventDefault();
        const postData = { body, image }
        if (postData) {
            socket.emit('sendPost', postData);
        }
    }

    const uploadImage = () => {
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
                .then(response => response.json())
                .then(result => setImage({ large: result.data.image.url, mini: result.data.thumb.url, medium: result.data.medium.url }))
                .catch(error => console.log('error', error));
        }
        var file = document.getElementById('file').files[0]
        var reader = new FileReader();

        reader.onloadend = function () {
            var base64result = reader.result.substr(reader.result.indexOf(',') + 1);
            sendImage(base64result)
        }

        if (file) {
            reader.readAsDataURL(file);
        }

    }

    return (
        <div className="createPostForm">
            <div className="createPostForm__handle">
                <div>
                    <img src={formIco} alt="createPost" />
                    Utwórz post
                    </div>
                <button
                    className="createPostForm__closeButton"
                    onClick={() => setCreatePostFrom(false)}
                >
                    <img src={closeIco} alt="closeForm" />
                </button>
            </div>
            <form action="" className="createPostForm__form">
                Treść:
                    <textarea
                    name=""
                    id=""
                    cols="30"
                    rows="10"
                    onChange={e => setBody(e.target.value)}
                    value={body}
                >

                </textarea>
                Obraz:
                    <input
                    type="file"
                    id="file"
                    onChange={() => uploadImage()}
                />
                <button
                    onClick={(e) => sendPost(e)}
                >
                    Opublikuj
                </button>
            </form>
        </div>
    );
}

export default CreatePostForm;