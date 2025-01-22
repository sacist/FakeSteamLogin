import tray from '/hamburger.png'
import steamLogo from '/steamHeaderLogo.png'
import styled from 'styled-components'




export const FakePageHeader = () => {
    return (
        <HeaderWrapper>
            <TrayIcon
                src={tray}
                alt="Tray Icon"
            />
            <Logo
                src={steamLogo}
                alt="Steam Logo"
            />
        </HeaderWrapper>
    )
}


const HeaderWrapper = styled.div`
  width: 100%;
  height: 62px;
  display: flex;
  align-items: center;
  background-color: #171a21;
  box-shadow: 0 3px 4px rgba(0, 0, 0, 0.3);
  box-sizing: border-box;
  user-select: none;
  position: relative;
  flex-shrink: 0;
  position: sticky; 
  top: 0;
  left :0 ;
  z-index: 2; 
`;

const Logo = styled.img`
  width: 155px;
  height: auto;
  margin-left: 195px;
  cursor: pointer;
`;

const TrayIcon = styled.img`
  width: 35px;
  height: 28px;
  cursor: pointer;
  margin-left: 8px;
  margin-bottom: 7px;
`;