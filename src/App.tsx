import React, {useEffect} from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {Routes, Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import {UsersContainer} from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {AppRootStateType} from "./redux/redux-store";
import {initializeAppTC} from "./redux/app-reducer";
import Preloader from "./components/common/preloader/Preloader";


const App = (props: UsersMapPropsType) => {

    useEffect(()=> {
        props.initializeApp()
    },[])


    if (!props.isInitialized) {
        return <Preloader/>
    }

    return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Routes>
                        <Route path="/profile/:userId?" element={<ProfileContainer/>}/>
                        <Route path="/dialogs" element={<DialogsContainer/>}/>
                        <Route path="/users" element={<UsersContainer/>}/>
                        <Route path="/new" element={News}/>
                        <Route path="/music" element={Music}/>
                        <Route path="/settings" element={Settings}/>
                        <Route path="/login" element={<Login/>}/>
                    </Routes>

                </div>
            </div>
        );
}
const mapStateToProps = (state: AppRootStateType): mapStateToPropsType => ({
    isInitialized: state.app.isInitialized
})

const MapObj = {
    initializeApp: initializeAppTC,
}

type mapStateToPropsType = {
    isInitialized: boolean
}
type mapDispatchToPropsType = {
    initializeApp: () => void
}
export type UsersMapPropsType = mapStateToPropsType & mapDispatchToPropsType

export default connect(mapStateToProps, MapObj)(App);

// class App extends React.Component {
//     // componentDidMount() {
//     //     this.props.getAuthUserData()
//     // }
//
//     render() {
//         return (
//             <div className="app-wrapper">
//                 <HeaderContainer/>
//                 <Navbar/>
//                 <div className="app-wrapper-content">
//                     <Routes>
//                         <Route path="/profile/:userId?" element={<ProfileContainer/>}/>
//                         <Route path="/dialogs" element={<DialogsContainer/>}/>
//                         <Route path="/users" element={<UsersContainer/>}/>
//                         <Route path="/new" element={News}/>
//                         <Route path="/music" element={Music}/>
//                         <Route path="/settings" element={Settings}/>
//                         <Route path="/login" element={<Login/>}/>
//                     </Routes>
//
//                 </div>
//             </div>
//         );
//     }
// }
// const mapStateToProps = (state: AppRootStateType): mapStateToPropsType => ({
//
// })
//
// const MapObj = {
//     getAuthUserData: getAuthUserDataTC()
// }
// // type mapStateToPropsType = {}
// type mapDispatchToPropsType = {
//     getAuthUserData: any
// }
// type UsersMapPropsType =  mapDispatchToPropsType
// export default connect(null, MapObj)(App);
// export default App;


