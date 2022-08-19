import styled from 'styled-components';
import { Helmet } from 'react-helmet';

const MypageImg = styled.img`
  width: 18px;
  height: 18px;
  border-radius: 50%;
  border: none;
`;

const NavBar = styled.div`
  width: 100%;
  height: 27px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`; 

const NavBarBack = styled.div`
  height: 27px;
  display: flex;
  align-items: center;
  span {
    font-size: 15px;
    font-weight: bold;
  }

  span:first-child  {
    font-size: 18px;
    margin-right: 5px;
  }
`;

const NavBarBtn = styled.div`
  width: 90px;
  height: 27px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

function NavFavo() {
  return (
    <>
      <NavBar>
        <Helmet>
        <link rel="stylesheet" 
              href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
        </Helmet>

        <NavBarBack>
          <span class="material-symbols-outlined">arrow_back_ios</span>
          <span>Favorites</span>
        </NavBarBack>
        <NavBarBtn>
          <span class="material-symbols-outlined">search</span>
          <span class="material-symbols-outlined">local_mall</span>
            <MypageImg src = "https://post-phinf.pstatic.net/MjAyMTAzMzFfMTMg/MDAxNjE3MTgyNDY5OTQ2.7lToiE1uDhnZ60mKOC8ZdK3xe9PVOx2pNdefS_afqdkg.hiWgkZfjEygAmhUuHcpv61eB80v3pOgS8_3ph8bQ_Ywg.JPEG/%EA%BC%AC%EB%A6%AC%EC%95%BC_%281%29.jpg?type=w1200" />
        </NavBarBtn>
      </NavBar>
    </>
  );
}

export default NavFavo;