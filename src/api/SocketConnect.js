import React, { useEffect } from 'react';
import io from 'socket.io-client';
import { useDispatch, useSelector } from 'react-redux';
import { SignOut, SetSocket } from 'redux/actions/index';
import Start from 'components/mobile/start/Start';
import Main from 'components/mobile/chan/Main';
import isMobile from 'is-mobile';

let socket;

const SocketConnect = () => {
    const ENDPOINT = process.env.REACT_APP_API;
    const dispatch = useDispatch();
    const isLogged = useSelector(state => state.isLogged);
    useEffect(() => {
        socket = io(ENDPOINT, {
            'query': 'token=' + localStorage.getItem("token")
        });
        dispatch(SetSocket(socket));
        socket.on("error", function (err) {
            if (err) {
                localStorage.removeItem("token");
                dispatch(SignOut());
            }
        });
        socket.on('connect', () => {

        })
        socket.on('userInfo', (res) => {
            // setUsername(res.username);
            // setSchool(res.school);
            socket.emit('joinChan', (error) => {
                if (error) {
                    alert(error);
                }
            });
        });

        socket.on('connect_error', () => {
            console.log("Brak połączenia")
            localStorage.removeItem("token");
            dispatch(SignOut())
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ENDPOINT, dispatch, socket]);
    return (
        <>
            {isLogged ?
                isMobile() ? <Main /> : "Tymczasowo wersja strony dostępna tylko na urządzenia mobilne"
                :
                isMobile() ? <Start /> : "Tymczasowo wersja strony dostępna tylko na urządzenia mobilne"}
        </>
    )
}

export default SocketConnect;