import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SignOut, SetUser } from 'redux/actions/index';
import Start from 'components/mobile/start/Start';
import Main from 'components/mobile/chan/Main';
import isMobile from 'is-mobile';

const SocketConnect = () => {
    const ENDPOINT = process.env.REACT_APP_API;
    const dispatch = useDispatch();
    const isLogged = useSelector(state => state.isLogged);
    const socket = useSelector(state => state.socket);
    const userInfo = useSelector(state => state.userInfo)

    console.count("SocketConnect Render")

    useEffect(() => {
        if (socket) {
            socket.on("error", function (err) {
                if (err) {
                    localStorage.removeItem("token");
                    dispatch(SignOut());
                }
            });
            socket.on('connect', () => {
            })
            socket.on('userInfo', (res) => {
                dispatch(SetUser(res));
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
        }
    }, [ENDPOINT, dispatch, socket]);
    return (
        <>
            {
                isLogged ?
                    isMobile() ? <Main /> : "Tymczasowo wersja strony dostępna tylko na urządzenia mobilne"
                    :
                    isMobile() ? <Start /> : "Tymczasowo wersja strony dostępna tylko na urządzenia mobilne"
            }
        </>
    )
}

export default SocketConnect;