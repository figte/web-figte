<template>
  <div>
    <navbar-component></navbar-component>
    <main>

      <!--******************* VISTA DE INICIO ********************************-->
      <inicio></inicio>
      <!-- ****************************************************************** -->

     <!-- Seccion experiencia *******************************************************-->
      <a name="experiencia"></a>
      <experiencia></experiencia>
    <!-- ************************************************************************** -->

    <!-- seccion de proyectos********************************************************* -->
    <a name="logros"></a>
      <proyectos></proyectos>
    <!-- **************************************************************************** -->

    <!-- seccion de proyectos implementados ********************************************-->
     <a name="proyectos"></a>
      <proyectos-implementados></proyectos-implementados>
    <!-- ****************************************************************************** -->

      <!-- seccion para blog **********************************************************-->
       <a name="blog"></a>
     <blog></blog>
      <!-- ********************************************************************************* -->

      <!-- seccion del formulacion para contacto ******************************************-->
      <!-- <form-contact></form-contact> -->
      <!-- ********************************************************************************* -->
    </main>
    <footer-component></footer-component>

  </div>
</template>
<script>
// import NavbarComponent from "../components/Navbar.vue"
// import FooterComponent from "../components/Footer.vue"
// import Experiencia from "../components/Experiencia.vue"
// import Proyectos from '../components/Proyectos.vue'
// import ProyectosImplementados from "../components/ProyectosImplementados.vue"
// import Blog from '../components/Blog.vue'
// import FormContact from '../components/FormContact.vue'
// import Inicio from '../components/Inicio.vue'

const NavbarComponent = () => import('../components/Navbar.vue')
const FooterComponent = () => import('../components/Footer.vue')
const Experiencia = () => import('../components/Experiencia.vue')
const Proyectos = () => import('../components/Proyectos.vue')
const ProyectosImplementados = () => import('../components/ProyectosImplementados.vue')
const Blog = () => import('../components/Blog.vue')
// const FormContact = () => import('../components/FormContact.vue')
const Inicio = () => import('../components/Inicio.vue')

export default {
  name: "landing-page",
  components: {
    NavbarComponent,
    FooterComponent,
    Experiencia,
    Proyectos,
    ProyectosImplementados,
    Blog,
    // FormContact,
    Inicio,
  }
}
</script>,
    
