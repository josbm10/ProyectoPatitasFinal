import React from "react";
import "./App.css";
import "tailwindcss/tailwind.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./store";

import PagePerfil from "./Pages/perfil";
import PageFormulario from "./Pages/formulario";
import PageError from "./Pages/error";
import PageAdopta from "./Pages/adopta";
import PageHome from "./Pages/home";
import PageDonar from "./Pages/donar";
import PageNosotros from "./Pages/nosotros";
import PageConsultas from "./Pages/consultas";
import PageRegistroUsuarios from "./Pages/registroUsers";
import PageAdministrar from "./Pages/administrar";
import PageModificarAnimales from "./Pages/modificarAnimales";
import PageEliminarAnimales from "./Pages/eliminarAnimales";
import PageRegistroAnimales from "./Pages/registroAnimales";
import PageLogin from "./Pages/login";
import PageBlog from "./Pages/blog";

import Header from "./components/header";
import Footer from "./components/footer";
import Main from "./components/main";
import ProtectedRoute from "./components/route_privad";



function App() {
  
  return (
    <div>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Router>
            <Header />
            <Main>
              <Switch>
                <ProtectedRoute exact path="/administrativo">
                  <PageAdministrar />
                </ProtectedRoute>
                <Route exact path="/administrativo/modificar_mascota/:mascota_id">
                  <PageModificarAnimales />
                </Route>
                <Route exact path="/administrativo/agregar_mascota">
                  <PageRegistroAnimales />
                </Route>
                <Route exact path="/administrativo/eliminar_mascota">
                  <PageEliminarAnimales />
                </Route>
                
                <Route exact path="/login">
                  <PageLogin />
                </Route>
                <Route exact path="/blog">
                  <PageBlog/>
                </Route>
                <Route exact path="/registrarse">
                  <PageRegistroUsuarios />
                </Route>
                <Route exact path="/consultas">
                  <PageConsultas />
                </Route>
                <Route exact path="/nosotros">
                  <PageNosotros />
                </Route>

                <Route exact path="/">
                  <PageHome />
                </Route>
                <Route exact path="/adopta">
                  <PageAdopta />
                </Route>
                <Route path="/donar">
                  <PageDonar />
                </Route>
                <Route path="/adopta/:mascota_id">
                  <PagePerfil />
                </Route>
                <Route path="/formulario">
                  <PageFormulario/>
                </Route>
                <Route path="*">
                  <PageError />
                </Route>
              </Switch>
            </Main>
            <Footer />
          </Router>
        </PersistGate>
      </Provider>
    </div>
  );
}

export default App;
