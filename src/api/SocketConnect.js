import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SetUser } from 'redux/actions/index';
import Start from 'components/mobile/start/Start';
import Main from 'components/mobile/chan/Main';
import isMobile from 'is-mobile';

const SocketConnect = () => {
  const ENDPOINT = process.env.REACT_APP_API;
  const dispatch = useDispatch();
  const socket = useSelector((state) => state.socket);
  const isLogged = useSelector((state) => state.socket.connected);
  useEffect(() => {
    if (socket) {
      socket.on('error', (err) => {
        if (err) {
          localStorage.removeItem('token');
        }
      });
      socket.on('connect', () => {});
      socket.on('userInfo', (res) => {
        dispatch(SetUser(res));
        socket.emit('joinChan', (error) => {
          if (error) {
            // alert(error);
          }
        });
      });

      socket.on('connect_error', () => {
        localStorage.removeItem('token');
      });
    }
  }, [ENDPOINT, dispatch, socket]);
  const status = () => {
    if (isMobile()) {
      if (isLogged) {
        return <Main />;
      }
      if (!isLogged) {
        return <Start />;
      }
    }
    if (!isMobile()) {
      if (isLogged) {
        return 'noMobileLogged';
      }
      if (!isLogged) {
        return 'noMobileNoLogged';
      }
    }
    return null;
  };
  return <>{status()}</>;
};

export default SocketConnect;
