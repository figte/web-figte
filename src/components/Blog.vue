<template>
   <section class="pb-20 relative  bg-blue-500">
        <div
          class="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
          style="height: 80px; transform: translateZ(0px);"
        >
          <svg
            class="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              class="text-blue-500 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
        
       
        <div class="container mx-auto px-4 lg:pt-24 lg:pb-64">
<!-- 
          <div class="flex flex-wrap text-center justify-center">
            <div class="w-full lg:w-6/12 px-4">
              <h2 class="text-4xl font-semibold text-white">Mi blog</h2>
              <p class="text-lg leading-relaxed mt-4 mb-4 text-blue-800">
                Este espacio es para poder compartir:
              </p>
            </div>
          </div> -->

           <!-- SECCION PARA PROYECTOS DIDACTICOS -->
        <div class="container mx-auto px-4 text-white">
          <div class="flex flex-wrap justify-center text-center mb-20 mt-20">
            <!-- texto de la seccion -->
            <div class="w-full lg:w-6/12 px-4">
                 <h3 class="flex-1 text-3xl font-semibold text-center">
                     <!-- icono del contenido de la seccion -->
                <div
                  class="mt-1 text-pink-600 p-1 text-center inline-flex items-center justify-center w-16 h-16 mb-4 shadow-lg rounded-full bg-pink-300"
                >
                 <i class="fas fa-retweet"></i>
                </div>
                  Mi Blog De Proyectos
               </h3>
              <p class="text-lg leading-relaxed m-4 text-blue-800">
                En esta seccion se presentan proyectos de plantillas o de proposito espcifico que implementa una solucion
                a una prueba especifica, donde prodras ejecutarlo, porbarlo y acceder al repositorio y ver su codigo fuente
              </p>
            </div>
          </div>

         <!-- items de cards de la seccion -->
          <div class="flex flex-wrap">

            <div class="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4  p-2 hover:bg-gray-300">
              <div class="px-2">
                <img
                  alt="..."
                  src="../assets/img/programador.svg"
                  class="shadow-lg  mx-auto"
                  style="width: 60px;"
                />
                <div class="pt-6 text-center">
                  <h5 class="text-xl font-bold uppercase">API REST ASP.NET CORE</h5>
                  <p class="mt-1 text-sm text-blue-800  font-semibold">
                    Implementa una API REST para administrar Publicaciones(Posts), con ASP.net core,
                    documentada con Swagger e implementada en Azure.
                  </p>
                  <div>
                    <p class="font-bold">Tecnologias</p>
                     <img class="inline m-1 object-center" src="../assets/iconos/csharp.png" width="12%">
                    <img class="inline m-1 object-center" src="../assets/iconos/netCore.svg" width="12%">
                    <img class="inline m-1 object-center" src="../assets/iconos/mssql.png" width="20%">
                    <img class="inline m-1 object-center" src="../assets/iconos/restful.png" width="18%">
                     <img class="inline m-1 object-center" src="../assets/iconos/azure.svg" width="20%">
                     <img class="inline m-1 object-center" src="../assets/iconos/git.png" width="15%">
                  </div>
                  <div class="mt-6 font-bold text-blue-800">
                    <a href="https://github.com/figte/apiRestPublicacionesNetCore"
                      target="_blank"
                      class="text-green-800 hover:text-green-200"
                    >
                     <i class="fab fa-github"></i> ir a repositorio</a> <br><br>

                      <a href="https://app-figte.azurewebsites.net/index.html"
                      target="_blank"
                       class=" hover:text-blue-300"
                    >
                     <i class="fas fa-bolt"></i> Ejecutar proyecto</a>
                   
                  </div>
                </div>
              </div>
            </div>
          
             <div class="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4  p-2 hover:bg-gray-300">
              <div class="px-2">
                <img
                  alt="..."
                  src="../assets/img/programador.svg"
                  class="shadow-lg  mx-auto"
                  style="width: 60px;"
                />
                <div class="pt-6 text-center">
                  <h5 class="text-xl font-bold uppercase">CRUD para Posts ASP.Net MVC</h5>
                  <p class="mt-1 text-sm text-blue-800  font-semibold">
                   Aplicacion web para administrar 'posts' desarrollada con ASP.net MVC, Razor, 
                   JQuery, Bootstrap. Utilizando servicio para bases de datos e implementada con Azure.
                  </p>
                  <div>
                    <p class="font-bold">Tecnologias</p>
                    <img class="inline m-1 object-center" src="../assets/iconos/csharp.png" width="12%">
                    <img class="inline m-1 object-center" src="../assets/iconos/net.png" width="12%">
                    <img class="inline m-1 object-center" src="../assets/iconos/mssql.png" width="20%">
                    <img class="inline m-1 object-center" src="../assets/iconos/bootstrap.png" width="20%">
                    <img class="inline m-1 object-center" src="../assets/iconos/azure.svg" width="20%">
                    <img class="inline m-1 object-center" src="../assets/iconos/git.png" width="15%">

                  </div>
                  <div class="mt-6 font-bold text-blue-800">
                    <a href="https://github.com/figte/app-web-net"
                      target="_blank"
                      class="text-green-800 hover:text-green-200"
                    >
                     <i class="fab fa-github"></i> ir a repositorio</a> <br><br>

                      <a href="https://app-azure.azurewebsites.net"
                      target="_blank"
                       class=" hover:text-blue-300"
                    >
                     <i class="fas fa-bolt"></i> Ejecutar proyecto</a>
                   
                  </div>
                </div>
              </div>
            </div>

             <div class=" w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4  p-2 hover:bg-gray-300">
              <div class="px-2">
                <img
                  alt="..."
                  src="../assets/img/programador.svg"
                  class="shadow-lg  mx-auto"
                  style="width: 60px;"
                />
                <div class="pt-6 text-center">
                  <h5 class="text-xl font-bold uppercase">API REST PARA LOGIN Y MANEJO DE SESIONES CON LARAVEL Y JWT</h5>
                  <p class="mt-1 text-sm text-blue-800  font-semibold">
                    Proyecto API REST para Login, menejo de sesiones y administración de usuarios, con Laravel y JWT.
                    Implementado en Heroku , con su servicos de base de datos para PostgreSQL.
                    
                  </p>
                  <div>
                    <p class="font-bold">Tecnologias</p>
                     <img class="inline m-1 object-center" src="../assets/iconos/php.png" width="12%">
                    <img class="inline m-1 object-center" src="../assets/iconos/laravel.png" width="20%">
                     <img class="inline m-1 object-center" src="../assets/iconos/postgresql.png" width="15%">
                    <img class="inline m-1 object-center" src="../assets/iconos/restful.png" width="18%">
                     <img class="inline m-1 object-center" src="../assets/iconos/jwt.png" width="12%">
                     <img class="inline m-1 object-center" src="../assets/iconos/heroku.png" width="20%">
                     <img class="inline m-1 object-center" src="../assets/iconos/git.png" width="15%">
                  </div>
                  <div class="mt-6 font-bold text-blue-800">
                    <a href="https://github.com/figte/PHP_LARAVEL_SESSION_MANAGER"
                      target="_blank"
                      class="text-green-800 hover:text-green-200"
                    >
                     <i class="fab fa-github"></i> ir a repositorio</a> <br><br>

                      <a href="https://mi-api-2020.herokuapp.com/"
                      target="_blank"
                       class=" hover:text-blue-300"
                    >
                     <i class="fas fa-bolt"></i> Ejecutar proyecto</a>
                   
                  </div>
                </div>
              </div>
            </div>

             <div class="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4  p-2 hover:bg-gray-300">
              <div class="px-2">
                <img
                  alt="..."
                  src="../assets/img/programador.svg"
                  class="shadow-lg  mx-auto"
                  style="width: 60px;"
                />
                <div class="pt-6 text-center">
                  <h5 class="text-xl font-bold uppercase">Plantilla Login, VueJS, tailWind y Firebase</h5>
                  <p class="mt-1 text-sm text-blue-800  font-semibold">
                   Aplicacion SPA desarrollada con Vue JS, Vuex y Vue-Router, aplicandole estilo con
                   Tailwind CSS, implementando los servicios de autentificacion y base de datos en tiempo real 
                   de Firebase, el proyecto se ejecuta en Heroku. Credenciales para probar la app:
                   USER: wal.figte@gmail.com
                   PASSWORD: figte0207
                  </p>
                  <div>
                    <p class="font-bold">Tecnologias</p>
                     <img class="inline m-1 object-center" src="../assets/iconos/vue.png" width="12%">
                    <img class="inline m-1 object-center" src="../assets/iconos/firebase.png" width="30%">
                     <img class="inline m-1 object-center" src="../assets/iconos/tailwind.svg" width="12%">
                     <img class="inline m-1 object-center" src="../assets/iconos/heroku.png" width="20%">
                     <img class="inline m-1 object-center" src="../assets/iconos/git.png" width="15%">
                  </div>
                  <div class="mt-6 font-bold text-blue-800">
                    <a href="https://github.com/figte/VueJS-Figte/tree/master/vuejs10_login"
                      target="_blank"
                      class="text-green-800 hover:text-green-200"
                    >
                     <i class="fab fa-github"></i> ir a repositorio</a> <br><br>

                      <a href="https://app-figte.herokuapp.com/login"
                      target="_blank"
                       class=" hover:text-blue-300"
                    >
                     <i class="fas fa-bolt"></i> Ejecutar proyecto</a>
                   
                  </div>
                </div>
              </div>
            </div>


          </div>
        </div>

          <!-- cards -->
          <!-- <div class="flex flex-wrap mt-12 justify-center">
            <div class="w-full lg:w-3/12 px-4 text-center">
              <div
                class="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center"
              >
                <i class="fas fa-medal text-xl"></i>
              </div>
              <h6 class="text-xl mt-5 font-semibold text-white">
                Conocimientos
              </h6>
              <p class="mt-2 mb-4 text-blue-800">
                compartimos temas que te puedan interesar y porque no de alguna forma ayudar en el area de
                la informatica y computacion.
              </p>
            </div>

            <div class="w-full lg:w-3/12 px-4 text-center">
              <div
                class="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center"
              >
                <i class="fas fa-poll text-xl"></i>
              </div>
              <h5 class="text-xl mt-5 font-semibold text-white">
                Novedades
              </h5>
              <p class="mt-2 mb-4 text-blue-800">
                Manteniendonos al margen de nuevas versiones o nuevas tecnologias, manteniendonos de 
                esta forma actualizados.
              </p>
            </div>

            <div class="w-full lg:w-3/12 px-4 text-center">
              <div
                class="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center"
              >
                <i class="fas fa-lightbulb text-xl"></i>
              </div>
              <h5 class="text-xl mt-5 font-semibold text-white">Aplicaciones/Codigo</h5>
              <p class="mt-2 mb-4 text-blue-800">
                Un espacio para compartir codigos , componetes , diseños y Aplicaciones
                que te puedan ayudar como desarrollador.
              </p>
            </div>

          </div> -->
        </div>
        
      </section>
</template>

<script>
export default {

}
</script>

<style>

</style>