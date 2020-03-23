import React, { useState, useEffect } from 'react';
import Comment from './Comment';
import imageIcon from 'svg/image_icon.svg';
import { useSelector } from 'react-redux';
// import uploadImage from 'api/uploadImage';

import './styles/comments.scss';

const Comments = ({ post, setCommentsView }) => {
    const [image, setImage] = useState("");
    const [commentText, setCommentText] = useState("");
    const [comments, setComments] = useState([]);

    const socket = useSelector(state => state.socket);

    useEffect(() => {
        socket.emit('showComments', post._id);
    }, [socket, post._id]);

    useEffect(() => {
        if (socket) {
            socket.on('comments', data => {
                setComments(data)
            })
            socket.on("comment", (comment) => {
                setComments([comment, ...comments])
            });
        }
    }, [comments, socket]);

    const sendComment = (e) => {
        e.preventDefault();
        const commentData = { image, commentText, postId: post._id };
        socket.emit("sendComment", commentData);
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
                    setImage({ large: res.data.image.url, mini: res.data.thumb.url, medium: res.data.medium.url })
                })
                .catch(error => console.log('error', error));
        }

        var file = e.target.files[0]
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
        <div className="comments">
            <div className="comments__topBar">
                <button
                    onClick={() => setCommentsView(false)}
                >
                    ◀️
                </button>
                <div className="comments__title">Komentarze</div>
            </div>
            <ul className="comments__list">
                {comments.map((comment, key) => <Comment key={key} comment={comment} />)}
            </ul>
            <form className="comments__commentForm">
                <label>
                    <img src={imageIcon} alt="sendImage" />
                    <input
                        className="comments__imageInput"
                        type="file"
                        onChange={(e) => uploadImage(e)}
                    />
                </label>
                <textarea
                    rows="1"
                    wrap="hard"
                    placeholder="Napisz komentarz..."
                    className="comments__textInput"
                    onChange={e => setCommentText(e.target.value)}
                    value={commentText}
                >
                </textarea>
                <button onClick={e => sendComment(e)}>⌲</button>
            </form>
        </div>
    );
}

export default Comments;