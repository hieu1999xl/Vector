import * as NavStyle from './styles'
import { ButtonNormal } from '../../index'

const listChildMenu = [
  {
    name: "Manual Upload",
    img: "../assets/img/nav/upload.png",
  },
  {
    name: "Pending IST Requests",
    img: "../assets/img/nav/files.png",
  },
  {
    name: "IST Status",
    img: "../assets/img/nav/status.png",
  },
  {
    name: "IST Forced Closure",
    img: "../assets/img/nav/Icon-Close-O.png",
  },
  {
    name: "Store Status",
    img: "../assets/img/nav/stores.png",
  },
  {
    name: "Availability Comparison",
    img: "../assets/img/nav/status.png",
  },
];

const listCounters = [
  {
    name: "Total IST Line Items",
    count: "3000",
  },
  {
    name: "Total IST Line Items Satisfying MOQ",
    count: "1300",
  },
  {
    name: "IST Suggestions Ignored/Rejected",
    count: "100",
  },
  {
    name: "IST Suggestions Accepted",
    count: "25",
  },
  {
    name: "Size Set Completion",
    count: "07",
  },
];

const Navbar = () => {

  const handleChange = () => { }

  return (
    <NavStyle.SCGridNav>
      <img src="../assets/img/logo.png" alt="logo" />
      <NavStyle.SCNavbar>
        <NavStyle.SCProfile>
          <NavStyle.SCAvatar>
            <img
              src="../assets/img/Profile image.png"
              alt="logo"
              width={46}
            />
            <NavStyle.SCAvatarName>Nikhil Shah</NavStyle.SCAvatarName>
          </NavStyle.SCAvatar>
          <ButtonNormal onChange={handleChange} text="Brand Manager" />
        </NavStyle.SCProfile>
        <NavStyle.SCNavBox>
          <NavStyle.SCNavMenu>
            <img
              src="../assets/img/nav/Group 1091.png"
              alt="logo"
            />
            <NavStyle.SCAvatarName>
              Inter Store Transfer
            </NavStyle.SCAvatarName>
          </NavStyle.SCNavMenu>
          <NavStyle.SCNavList>
            {listChildMenu.map((item, idx) => (
              <NavStyle.SCNavItem key={idx}>
                <img src={item.img} width={22} alt="logo" />
                <NavStyle.SCNavChild>{item.name}</NavStyle.SCNavChild>
              </NavStyle.SCNavItem>
            ))}
          </NavStyle.SCNavList>
        </NavStyle.SCNavBox>
        <NavStyle.SCCount>
          <NavStyle.SCNavCount>
            <NavStyle.SCNavCountHeader>
              <span>Paticulars</span>
              <span>500</span>
            </NavStyle.SCNavCountHeader>
            <NavStyle.SCNavCountList>
              {listCounters.map((item, idx) => (
                <NavStyle.SCNavCountItem key={idx}>
                  <span>{item.name}</span>
                  <span>{item.count}</span>
                </NavStyle.SCNavCountItem>
              ))}
            </NavStyle.SCNavCountList>
          </NavStyle.SCNavCount>
          <NavStyle.SCNavCountFooter>
            <span>Incremental Benefits</span>
            <span>0.4/80 Lakhs</span>
          </NavStyle.SCNavCountFooter>
        </NavStyle.SCCount>
        <NavStyle.SCNavLogout>
          <img src="../assets/img/nav/loguot.png" alt="logo" />
          <NavStyle.SCNavLogoutText>Logout</NavStyle.SCNavLogoutText>
        </NavStyle.SCNavLogout>
      </NavStyle.SCNavbar>
    </NavStyle.SCGridNav>
  )
}

export default Navbar