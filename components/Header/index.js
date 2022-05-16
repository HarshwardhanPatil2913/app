import HamburgerMenu from "../../assets/Icons/hamburgermenu";
import Logo from "../../assets/Icons/logo";
import NotificationTray from "./NotificationTray";
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import { useRouter } from "next/router";
import styled from "@emotion/styled";
import Location from "./Location";

const PageTitle = styled(Typography)`
  color: #448dfb;
  font-weight: bold;
  letter-spacing: 0.8px;
  font-size: clamp(17px, 2.4vw, 19px);
  line-height: calc(1rem + 0.5em);
  &::first-letter {
    text-transform: capitalize;
  }
`;

const StyledAppBar = styled(AppBar)`
  background-color: white;
  color: black;
`;
const StyledToolbar = styled(Toolbar)`
  min-height: 60px;
  justify-content: space-between;
`;
const location = " Austin Texas,96066,United States";
const Header = () => {
  const router = useRouter();

  return (
    <StyledAppBar>
      <StyledToolbar>
        <IconButton>
          <HamburgerMenu />
        </IconButton>
        <PageTitle>{router.pathname.substring(1)}</PageTitle>
        <Logo />
      </StyledToolbar>
      <Location location={location} />
      <NotificationTray />
    </StyledAppBar>
  );
};

export default Header;
