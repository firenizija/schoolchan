import React, { useEffect, useState } from 'react';
import Posts from './post/Posts'
import CreatePost from './createPost/CreatePost'
import io from 'socket.io-client'
import { useSelector, useDispatch } from 'react-redux'
import { SignOut, SetSocket } from 'redux/actions/index';
import './styles/chan.scss'

const ENDPOINT = 'http://192.168.8.30:5000/';
const name = 'anonim';
const room = 'room'
const jwt = localStorage.getItem("token")
let socket;

const Chan = () => {
    const [username, setUsername] = useState("");
    const [school, setSchool] = useState("");
    const dispatch = useDispatch();

    useEffect(() => {
        socket = io(ENDPOINT, {
            'query': 'token=' + jwt
        });

        socket.on("error", function (error) {
            window.location.pathname = ""
        });

        socket.on('userInfo', (res) => {
            setUsername(res.username);
            setSchool(res.school);
            dispatch(SetSocket(socket));
            socket.emit('joinChan', { name, room }, (error) => {
                if (error) {
                    alert(error);
                }
            });
        });

        socket.on('newPost', data => {
            console.log(data)
        })

        socket.on('connect_error', () => {
            console.log("Brak połączenia")
            dispatch(SignOut())
            window.location.pathname = ""
        });

    }, [ENDPOINT, "kilińskiego"]);

    return (
        <div className="chan">
            <ul>
                <Posts />
            </ul>
            <CreatePost />
        </div>
    );
}

export default Chan;