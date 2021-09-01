import React, { useState } from 'react';
import styled from 'styled-components';
import { SidebarData } from './SidebarData';
import SubMenu from './SubMenu';
import logo from '../spark.svg';

const SidebarNav = styled.nav`
  background: #FAFAFA;
  border-right: 1px solid #EBEBEB;
  box-sizing: border-box;
  padding 10px;
  width: 250px;
  height: 100vh;
  position:fixed;
  justify-content: center;
  top: 0;
  // left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
  transition: 350ms;
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

const Sidebar = () => {

  const [sidebar] = useState(false);

  // const [sidebar, setSidebar] = useState(false);
  // const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
        <SidebarNav sidebar={sidebar}>
          <SidebarWrap>
            <img src={logo}  className="logo" alt='Spark' />
            <h2 className="title">Manual de Marca</h2>
            {SidebarData.map((item, index) => {
              return <SubMenu item={item} key={index} />;
            })}
          </SidebarWrap>
        </SidebarNav>
    </>
  );
};

export default Sidebar;
