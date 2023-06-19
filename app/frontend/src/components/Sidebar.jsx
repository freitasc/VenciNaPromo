import React, { useState } from 'react';
import '../styles/Sidebar.css';
import { logout } from "../services/auth";

const Sidebar = (props) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const user_data = props.props.UserData;

  // empty call, just for demonstration
  const doNothing = () => {};


  return (
    <div className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
      <div className="sidebar-header">
        {user_data ? (
          <div className="sidebar-user">
            <div className="sidebar-user-img">
              <img src={props.avatar} alt="avatar" />
            </div>
            <div className="sidebar-user-name">
              {"Nome: "}{user_data.user.name}
            </div>
            <div className="sidebar-user-name">
              {"Email: "}{user_data.user.email}
            </div>
            <div className="sidebar-user-name">
              {"Nome: "}{user_data.user.name}
            </div>
            <div className="sidebar-user-name">
              {"Tipo de usuario: "}{user_data.user.user_flag}
            </div>
            <button className="sidebar-button" onClick={() => logout()}>
              Sair
            </button>
          </div>
        ) : (
          <button className="login-button" onClick={() => window.location.href='/'}>Entrar</button>
        )}
      </div>
      <div className="sidebar-content" />
      <div className="sidebar-footer">
        <button className={`${user_data ? 'sidebar' : 'collapse'}-button`} onClick={user_data ? () => window.location.href='/' : doNothing}>
          Compras
        </button>
        <button className={`${user_data ? 'sidebar' : 'collapse'}-button`} onClick={user_data ? () => window.location.href='/' : doNothing}>
          Cupons
        </button>
        <button className="sidebar-button" onClick={() => window.location.href='/home'}>
          Info
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
