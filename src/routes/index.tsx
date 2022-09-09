import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
// import FooterContainer from '../Containers/FooterContainer/FooterContainer';
// import HeaderContainers from '../Containers/HeaderContainers/HeaderContainers';
// import OverlayContainer from '../Containers/OverlayContainer/OverlayContainer';
// import Websocket from '../Containers/websocket/Websocket';
// import Error404 from '../pages/ErrorPage/Error404';
// import Landing from '../pages/HomePage/Landing';
// import ProtectedRoute from './ProtectedRoute';
// import { AdminRoutersGroup } from './RoutesGroup/AdminRoutersGroup';
// import { LoginAndSignupRoutersGroup } from './RoutesGroup/LoginAndSignupRoutersGroup';
// import { UserRoutersGroup } from './RoutesGroup/UserRoutersGroup';

const Routes = (props:React.ReactElement ) => (
  <Router>
    {/* <Websocket />
    <OverlayContainer />
    <HeaderContainers /> */}
    <Routes>
      {/* <ProtectedRoute exact path="/" component={Landing} /> */}
      {/* {AdminRoutersGroup()}
      {LoginAndSignupRoutersGroup()}
      {UserRoutersGroup()}*/}
      {/* <Route component={<>ghdfjkghdjk</>} /> </> */}
    </Routes>
    {/* <FooterContainer /> */}
  </Router>
);

export default Routes;
