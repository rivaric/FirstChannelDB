import styled from "styled-components";
import { useAppDispatch } from "../../hooks/redux.ts";
import { logout } from "../../redux/AppSlice.ts";
import { useLocation, useNavigate } from "react-router-dom";
import { StyledButton } from "../common/StyledButton.tsx";
import { Dropdown, MenuProps, Typography } from "antd";
import { LogoIcon } from "./LogoIcon.tsx";
import { useEffect, useRef, useState } from "react";
import { Settings } from "../Main/Settings/Settings.tsx";

const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const StyledHeaderContent = styled.div`
  position: fixed;
  z-index: 10;
  width: 100%;
  padding: var(--header-padding);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background-color: #fff;
  box-shadow: rgba(31, 41, 55, 0.08) 0 1px 1px;

  .logo {
    cursor: pointer;
    display: flex;
    gap: 5px;
    align-items: center;
  }

  .logo_text {
    margin: 0;
    color: #0757a8;
  }

  .wrapper_logo_menu {
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
  }
`;

interface HeaderProps {
  setIsOpenHelpModal: (isOpen: boolean) => void,
  valueInput: string,
  setValueInput: (x: string) => void,
}

export const Header = ({
  setIsOpenHelpModal,
  valueInput,
  setValueInput,
}: HeaderProps) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const settingsRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const wigthChange = 1150;

  useEffect(() => {
    if (location.pathname !== "/" && settingsRef && settingsRef.current) {
      settingsRef.current.style.display = "none";
    } else if (settingsRef && settingsRef.current) {
      settingsRef.current.style.display = "block";
    }

    if (location.pathname === "/auth" && menuRef && menuRef.current) {
      menuRef.current.style.display = "none"
    } else if (menuRef && menuRef.current) {
      menuRef.current.style.display = "block"
    }
  }, [location.pathname]);

  const onClickLogo = () => {
    navigate("/");
  };

  // we use the useEffect hook to listen to the window resize event
  useEffect(() => {
    window.onresize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
  }, []);

  const onClickExit = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("token_type");
    dispatch(logout());
    navigate("/auth");
  };

  const onClickHelp = () => {
    console.log("help");
    setIsOpenHelpModal(true);
  };

  const onClickManual = () => {
    console.log("manual");
    navigate("/manual");
  };

  const items: MenuProps["items"] = [
    {
      key: "help",
      label: <span onClick={onClickHelp}>Обратная связь</span>,
    },
    {
      key: "manual",
      label: <span onClick={onClickManual}>Инструкция</span>,
    },
    {
      key: "exit",
      label: <span onClick={onClickExit}>Выход</span>,
    },
  ];

  return (
    <StyledHeader>
      <StyledHeaderContent
        style={
          windowSize.width < wigthChange
            ? { flexDirection: "column", padding: "10px" }
            : {}
        }>
        {windowSize.width < wigthChange ? (
          <>
            <div className="wrapper_logo_menu">
              <div className="logo" onClick={onClickLogo}>
                <LogoIcon />
                <Typography.Title
                  level={windowSize.width < 420 ? 4 : 3}
                  className="logo_text">
                  База данных
                </Typography.Title>
              </div>
              <div ref={menuRef}>
                <Dropdown menu={{ items }} placement="bottom" >
                  <StyledButton type="primary" style={{ minWidth: "130px" }}>
                    Меню
                  </StyledButton>
                </Dropdown>

              </div>
            </div>
            <div ref={settingsRef}>
              <Settings valueInput={valueInput} setValueInput={setValueInput}/>
            </div>
          </>
        ) : (
          <>
            <div className="logo" onClick={onClickLogo}>
              <LogoIcon />
              <Typography.Title level={3} className="logo_text">
                База данных
              </Typography.Title>
            </div>
            <div ref={settingsRef}>
              <Settings valueInput={valueInput} setValueInput={setValueInput}/>
            </div>
            <div ref={menuRef}>
              <Dropdown menu={{ items }} placement="bottom">
                <StyledButton type="primary" style={{ minWidth: "130px" }}>
                  Меню
                </StyledButton>
              </Dropdown>
            </div>
          </>
        )}
      </StyledHeaderContent>
    </StyledHeader>
  );
};
