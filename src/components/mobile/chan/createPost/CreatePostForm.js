import React, { useState } from 'react';
import { useSelector } from 'react-redux'
import Draggable from 'react-draggable';
import autosize from 'autosize'

import closeIco from 'svg/closeIco.svg';
import formIco from 'svg/formIco.svg';
import uploadImageIco from 'svg/uploadImage.svg';
import uploadImageDoneIco from 'svg/uploadImageDone.svg';
// import uploadImageLoadingIco from 'svg/uploadImageLoading.svg';

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
            setCreatePostFrom(false)
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
    autosize(document.querySelector('textarea'))

    return (
        <Draggable
            axis="y"
            handle=".createPostForm__handle"
        >
            <div className="createPostForm">
                <div className="createPostForm__handle">
                    <div>
                        <img className="createPostForm__formIco" src={formIco} alt="createPost" />
                        <span className="createPostForm__handleTitle">Utwórz post</span>
                    </div>
                    <button
                        className="createPostForm__closeButton"
                        onClick={() => setCreatePostFrom(false)}
                    >
                        <img src={closeIco} alt="closeForm" />
                    </button>
                </div>
                <form action="" className="createPostForm__form">
                    <label className="createPostForm__label" htmlFor="body">
                        Treść:
                </label>
                    <textarea
                        name="body"
                        className="createPostForm__postBody"
                        rows="8"
                        placeholder="Nie ma to jak koronawirus x_x"
                        onChange={e => setBody(e.target.value)}
                        value={body}
                    >

                    </textarea>
                    <label className="createPostForm__label" htmlFor="image">
                        Obraz:
                </label>
                    <label>
                        <img src={image === "" ? uploadImageIco : uploadImageDoneIco} alt="upload" className="createPostForm__uploadImg" />
                        <input
                            className="createPostForm__imageButton"
                            name="image"
                            type="file"
                            accept="image/x-png,image/jpeg"
                            id="file"
                            onChange={() => uploadImage()}
                        />
                    </label>
                    <button
                        className="createPostForm__submit"
                        onClick={(e) => sendPost(e)}
                    >
                        Opublikuj
                </button>
                </form>
            </div>
        </Draggable>
    );
}

export default CreatePostForm;