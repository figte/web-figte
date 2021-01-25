<template>
  <div>
    <navbar-component></navbar-component>
    <main>

      <!--******************* VISTA DE INICIO ********************************-->
      <inicio></inicio>
      <!-- ****************************************************************** -->

     <!-- Seccion experiencia *******************************************************-->
      <experiencia></experiencia>
    <!-- ************************************************************************** -->

    <!-- seccion de proyectos********************************************************* -->
      <proyectos></proyectos>
    <!-- **************************************************************************** -->

    <!-- seccion de proyectos implementados ********************************************-->
      <proyectos-implementados></proyectos-implementados>
    <!-- ****************************************************************************** -->

      <!-- seccion para blog **********************************************************-->
     <blog></blog>
      <!-- ********************************************************************************* -->

      <!-- seccion del formulacion para contacto ******************************************-->
      <form-contact></form-contact>
      <!-- ********************************************************************************* -->
    </main>

    <footer-component></footer-component>

  </div>
</template>
<script>
import NavbarComponent from "../components/Navbar.vue"
import FooterComponent from "../components/Footer.vue"
import Experiencia from "../components/Experiencia.vue"
import Proyectos from '../components/Proyectos.vue'
import ProyectosImplementados from "../components/ProyectosImplementados.vue"
import Blog from '../components/Blog.vue'
import FormContact from '../components/FormContact.vue'
import Inicio from '../components/Inicio.vue'

export default {
  name: "landing-page",
  components: {
    NavbarComponent,
    FooterComponent,
    Experiencia,
    Proyectos,
    ProyectosImplementados,
    Blog,
    FormContact,
    Inicio,
  }
}
</script>,
    
