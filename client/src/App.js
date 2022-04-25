import { useEffect } from "react";
import React, { Fragment } from "react";
import "./App.css";
import Dash from "./Components/loyout/dashbord";
import Login from "./Components/auth/login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Contact from "./Components/loyout/contact";
import About from "./Components/loyout/about";
import { useDispatch } from "react-redux";
import { current } from "./js/actions/user";
import Acceil from "./Components/loyout/acceil";
import UserEtud from "./Components/admin/UserList";
import UserProf from "./Components/admin/ProfesseurList"
import Profil from "./Components/profil/Profil";
import PrivateRoute from "./Components/router/PrivateRoute";
import Publication from "./Components/publication/PublicationList";
import Classe from "./Components/admin/classes";
import Formation from "./Components/admin/formationList";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(current());
  },[current]);

  return (
    
    <Router>
      <Fragment>
        <section className='container'>
          <Routes>
            <Route exact path='/' element={<Dash />} />
            <Route exact path='/contact' element={<Contact />} />
            <Route exact path='/about' element={<About />} />
            <Route exact path='/login' element={<Login />} />
            <Route
              exact
              path='/acceil'
              element={
                <PrivateRoute>
                  <Acceil />
                </PrivateRoute>
              }
            />
            <Route
              exact
              path='/profil/:id'
              element={
                <PrivateRoute>
                  <Profil />
                </PrivateRoute>
              }
            />
            <Route
              exact
              path='/admin/user/etudiant'
              element={
                <PrivateRoute>
                  <UserEtud />
                </PrivateRoute>
              }
            />
            <Route
              exact
              path='/admin/user/professeur'
              element={
                <PrivateRoute>
                  <UserProf />
                </PrivateRoute>
              }
            />
            <Route
              exact
              path='/forum'
              element={
                <PrivateRoute>
                  <Publication />
                </PrivateRoute>
              }
            />
            <Route
              exact
              path='/classe'
              element={
                <PrivateRoute>
                  <Classe />
                </PrivateRoute>
              }
            />
            <Route
              exact
              path='/formation'
              element={
                <PrivateRoute>
                  <Formation />
                </PrivateRoute>
              }
            />
          </Routes>
        </section>
      </Fragment>
    </Router>
  );
}

export default App;
