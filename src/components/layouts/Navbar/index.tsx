import * as NavStyle from './styles'
import { ButtonNormal } from '../../index'
import { useState } from 'react';
import { SCMenuLeft, SCMenuItem, SCItemChild, SCLogoutBtn } from './styles'
import { useLocation, useNavigate } from 'react-router-dom';
import { useUserData } from '../../../context';
import { useQueryClient } from '@tanstack/react-query';
import { MainService } from '../../../module-main/services/api';


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

  const navigate = useNavigate();
  const location = useLocation();
  const [listMenu, setListMenu] = useState([
    {
      id: 1,
      name: 'Inter Store Transfer',
      img: '../assets/img/nav/Group 1091.png',
      url: '',
      status: true,
      child: [
        {
          name: "Manual Upload",
          img: "../assets/img/nav/upload.png",
          url: '/'
        },
        {
          name: "Pending IST Requests",
          img: "../assets/img/nav/files.png",
          url: '/ist'
        },
        {
          name: "IST Status",
          img: "../assets/img/nav/status.png",
          url: '/manual2'
        },
        {
          name: "IST Forced Closure",
          img: "../assets/img/nav/Icon-Close-O.png",
          url: '/ist-forced'
        },
        {
          name: "Store Status",
          img: "../assets/img/nav/stores.png",
          url: '/store-status'
        },
        {
          name: "Availability Comparison",
          img: "../assets/img/nav/status.png",
          url: '/availability-comparison'
        },
      ]
    },
  ])
  const renderListMenu = (listMenu: any) => {
    return listMenu.map((item: any) => {
      return <SCMenuItem key={item.id} active={item.url === location.pathname || item.child.some((i: any) => i.url === location.pathname)}>
        {
          item.child.length > 0 ? (
            <>
              <NavStyle.SCNavMenu onClick={() => activeCollapseItem(item.id)}>
                <img src={item.img} width={22} alt="logo" />
                <NavStyle.SCAvatarName>
                  {item.name}
                </NavStyle.SCAvatarName>
              </NavStyle.SCNavMenu>
              {renderListMenuChild(item.child, item.status)}
            </>
          ) : (
            <NavStyle.SCNavMenu onClick={() => navigate(item.url)}>
              <img src={item.img} width={22} alt="logo" />
              <NavStyle.SCAvatarName>
                {item.name}
              </NavStyle.SCAvatarName>
            </NavStyle.SCNavMenu>
          )
        }
      </SCMenuItem>
    })
  }
  const renderListMenuChild = (listChild: any, status: boolean) => {
    return listChild.map((item: any) => {
      return <SCItemChild key={item.url} onClick={() => navigate(item.url)} active={item.url === location.pathname} status={status}>
        <img src={item.img} width={22} alt="logo" />
        <NavStyle.SCNavChild>  {item.name}</NavStyle.SCNavChild>

      </SCItemChild>
    })
  }
  const activeCollapseItem = (id: any) => {
    const index = listMenu.findIndex(item => item.id === id);
    const temp = [...listMenu];
    temp[index].status = !temp[index].status;
    setListMenu(temp);
  }


  const handleChange = () => { }

  const { user } = useUserData()
   const queryClient = useQueryClient();

  const handleLogout = async () => {
    await MainService.logout(queryClient)
    navigate('/login')
  }

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
            <NavStyle.SCAvatarName>{ user.name }</NavStyle.SCAvatarName>
          </NavStyle.SCAvatar>
          <ButtonNormal onChange={handleChange} text="Brand Manager" />
        </NavStyle.SCProfile>
        <NavStyle.SCNavBox>
          <SCMenuLeft>
            {
              renderListMenu(listMenu)
            }
          </SCMenuLeft>
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
            <p>Incremental Benefits</p>
            <p>0.4/80 Lakhs</p>
          </NavStyle.SCNavCountFooter>
        </NavStyle.SCCount>
        <NavStyle.SCNavLogout onClick={handleLogout}>
          <img src="../assets/img/nav/loguot.png" alt="logo" />
          <NavStyle.SCNavLogoutText>Logout</NavStyle.SCNavLogoutText>
        </NavStyle.SCNavLogout>
      </NavStyle.SCNavbar>
    </NavStyle.SCGridNav>
  )
}

export default Navbar