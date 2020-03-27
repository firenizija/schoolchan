import React, { useState } from 'react';
import autosize from 'autosize'
import { useSelector } from 'react-redux';
import imageIcon from 'svg/image_icon.svg';

import './styles/commentForm.scss'
const CommentForm = ({ focus, post }) => {
    const [image, setImage] = useState("");
    const [commentText, setCommentText] = useState("");
    const socket = useSelector(state => state.socket);

    const sendComment = (e) => {
        e.preventDefault();
        const commentData = { image, commentText, postId: post._id };
        socket.emit("sendComment", commentData);
        setCommentText("");
        setImage("");
    }

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
                    setImage({ large: res.data.image.url, mini: res.data.thumb.url });
                })
                .catch(error => console.log('error', error));
        }

        var file = e.target.files[0];
        var reader = new FileReader();

        reader.onloadend = function () {
            var base64result = reader.result.substr(reader.result.indexOf(',') + 1);
            sendImage(base64result);
        }

        if (file) {
            reader.readAsDataURL(file);
        }
    }
    autosize(document.querySelector('textarea'));
    return (
        <form className="commentForm">
            <label>
                <img src={imageIcon} alt="sendImage" />
                <input
                    className="commentForm__imageInput"
                    type="file"
                    onChange={(e) => uploadImage(e)}
                />
            </label>
            <textarea
                autoFocus={focus}
                rows="1"
                wrap="hard"
                placeholder="Napisz komentarz..."
                className="commentForm__textInput"
                onChange={e => setCommentText(e.target.value)}
                value={commentText}
            >
            </textarea>
            <button className="commentForm__submit" onClick={e => sendComment(e)}>⌲</button>
        </form>
    );
}

export default CommentForm;