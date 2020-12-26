<template>
  <div>
    <navbar-component></navbar-component>
    <main>

      <!--******************* VISTA DE INICIO ********************************-->
      <div class="mt-4 relative pt-16 pb-32 flex justify-center w-full"
      style="height: 27em"
       
      >
      
        <div class="absolute top-0 w-full h-full bg-center bg-cover">
          
          <span
            id="blackOverlay"
            class="w-full h-full absolute  bg-blue-500 opacity-100 "
          >
          
          </span>

        </div>
      
        <img src="../assets/img/programador.svg" width="25%"  class="absolute sm:relative left-0 mt-1" >
     
        <div class="container relative mx-auto ">

          <div class="items-center flex flex-wrap">
 
            <div class=" w-6/12 md:w-8/12 px-4 ml-auto mr-auto text-center mt-4">
            
                <h1 class="text-blue-800 font-semibold  text-2xl sm:text-4xl xl:text-6xl">
                WALTHER ALFREDO <span class="text-white">FIG</span>UEROA <span class="text-white">TE</span>JADA
                </h1>
                <p class="mt-4 text-sm lg:text-lg text-blue-800 ">
               Informatico, desarrollador de software, profesor y formador en
                el area.
                </p>
             
            </div> 

          </div>

        </div>
           
          <img src="../assets/img/fondo.svg" width="18%" class="absolute sm:relative right-0 mt-4" >

        <div class="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
          style="height: 70px; transform: translateZ(0px);"
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
              class="text-gray-300 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>

      </div>
      <!-- ****************************************************************** -->

     <!-- Seccion experiencia *******************************************************-->
      <section class="pb-20 bg-gray-300 -mt-24">
        <div class="container mx-auto px-4">
           <!-- CARDS O TARJETAS ************** -->
          <div class="flex flex-wrap">
            
           
            <div class="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
              <div
                class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg"
              >
                <div class="px-4 py-5 flex-auto">
                  <div
                    class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400"
                  >
                    <i class="fas fa-award"></i>
                  </div>
                  <h6 class="text-xl font-semibold">Mi Experiencia</h6>
                  <p class="mt-2 mb-4 text-gray-600">
                      Te mostrare un recorrido de mi carrera, donde apreciaras los
                      conocimientos que poseo.
                  </p>
                </div>
              </div>
            </div>

            <div class="w-full md:w-4/12 px-4 text-center">
              <div
                class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg"
              >
                <div class="px-4 py-5 flex-auto">
                  <div
                    class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-400"
                  >
                    <i class="fas fa-retweet"></i>
                  </div>
                  <h6 class="text-xl font-semibold">Mis proyectos</h6>
                  <p class="mt-2 mb-4 text-gray-600">
                   Puedes conocer proyectos en los que he trabajado, te compartire repositoriso
                   y codigos, esperando tambien contibuir y ayudarte en lo que tu trabajes.
                  </p>
                </div>
              </div>
            </div>

            <div class="pt-6 w-full md:w-4/12 px-4 text-center">
              <div
                class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg"
              >
                <div class="px-4 py-5 flex-auto">
                  <div
                    class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-green-400"
                  >
                    <i class="fas fa-fingerprint"></i>
                  </div>
                  <h6 class="text-xl font-semibold">Mi Blog</h6>
                  <p class="mt-2 mb-4 text-gray-600">
                      Es un espacio  para compartir conocimiento, notocias y de buscar de esta forma
                   fomentar el autoaprendizaje 
                  </p>
                </div>
              </div>
            </div>
          </div>
          <!-- ************************************************ -->

          <!-- Informacion personal *************************-->
          <div class="flex flex-wrap items-center mt-24">

            <!-- texto informativo -->
            <div class="w-full md:w-5/12 px-4 mr-auto ml-auto -mt-24">
              <div
                class="text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-gray-100"
              >
                <i class="fas fa-user-friends text-xl"></i>
              </div>
              <h3 class="text-3xl mb-2 font-semibold leading-normal">
                Mi experiencia
              </h3>
              <p
                class="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700"
              >
                Mi recorrido
              </p>
              <p
                class="text-lg font-light leading-relaxed mt-0 mb-4 text-gray-700"
              >
                Texto
              </p>
              <a
                href="https://www.creative-tim.com/learning-lab/tailwind-starter-kit#/presentation"
                class="font-bold text-gray-800 mt-8"
                >Enlace</a
              >
            </div>

          <!-- card con imagen referente a la seccion -->
            <div class="w-full md:w-4/12   px-8 mr-auto ml-auto  mt-4">
              <div
                class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-blue-700"
              >
                <img
                  alt="..."
                  src="../assets/img/foto1.jpg"
                  class="align-middle rounded-t-lg"
                  width="100%%"
                  
                  
                />
                <blockquote class="relative px-8 py-2 mb-4">
                  <svg
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 583 95"
                    class="absolute left-0 w-full block"
                    style="height: 95px; top: -94px;"
                  >
                    <polygon
                      points="-30,95 583,95 583,65"
                      class="text-blue-700 fill-current"
                    ></polygon>
                  </svg>
                  <h4 class="text-xl font-bold text-white">
                    Mi Experiencia
                  </h4>
                  <p class="text-md font-light mt-2 text-white">
                   Este un poco sobre lo que he adquirido
                  </p>
                </blockquote>
              </div>
            </div>
          </div>
          <!-- ******************************************** -->
        </div>
      </section>
    <!-- ************************************************************************** -->

    <!-- seccion de proyectos********************************************************* -->
      <section class="relative py-20">
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
              class="text-white fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
        <div class="container mx-auto px-4">
          <div class="items-center flex flex-wrap">
            <!-- imagen del car -->
            <div class="w-full md:w-4/12 ml-auto mr-auto px-4">
              <img
                alt="..."
                class="max-w-full rounded-lg shadow-lg"
                src="../assets/img/emoji2.gif"
              />
            </div>
            
            <!-- contenido de la seccion -->
            <div class="w-full md:w-5/12 ml-auto mr-auto px-4">
              <div class="md:pr-12">
                <!-- icono del contenido de la seccion -->
                <div
                  class="mt-6 text-pink-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-pink-300"
                >
                  <i class="fas fa-rocket text-xl"></i>
                </div>
                <h3 class="text-3xl font-semibold">Proyectos</h3>
                <p class="mt-4 text-lg leading-relaxed text-gray-600">
                  Presentacion de proyectos.
                </p>
                <ul class="list-none mt-6">
                  <li class="py-2">
                    <div class="flex items-center">
                      <div>
                        <span
                          class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3"
                          ><i class="fas fa-fingerprint"></i
                        ></span>
                      </div>
                      <div>
                        <h4 class="text-gray-600">
                          Sitios Web
                        </h4>
                      </div>
                    </div>
                  </li>
                  <li class="py-2">
                    <div class="flex items-center">
                      <div>
                        <span
                          class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3"
                          ><i class="fab fa-html5"></i
                        ></span>
                      </div>
                      <div>
                        <h4 class="text-gray-600">Aplicaciones Web</h4>
                      </div>
                    </div>
                  </li>
                  <li class="py-2">
                    <div class="flex items-center">
                      <div>
                        <span
                          class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3"
                          ><i class="far fa-paper-plane"></i
                        ></span>
                      </div>
                      <div>
                        <h4 class="text-gray-600">Proyectos generales</h4>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    <!-- **************************************************************************** -->

      <!-- seccion de proyectos implementados ********************************************-->
      <section class="pt-20 pb-48">
        <div class="container mx-auto px-4">
          <div class="flex flex-wrap justify-center text-center mb-24">
            <!-- texto de la seccion -->
            <div class="w-full lg:w-6/12 px-4">
              <h2 class="text-4xl font-semibold">Proyectos implementados</h2>
              <p class="text-lg leading-relaxed m-4 text-gray-600">
                A continuacion puedes ver algunos proyectos en lo que he trabajado, y tambien logros
              </p>
            </div>
          </div>

         <!-- items de cards de la seccion -->
          <div class="flex flex-wrap">

            <div class="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
              <div class="px-6">
                <img
                  alt="..."
                  src="../assets/img/programador.svg"
                  class="shadow-lg rounded-full max-w-full mx-auto"
                  style="max-width: 120px;"
                />
                <div class="pt-6 text-center">
                  <h5 class="text-xl font-bold">CCode</h5>
                  <p class="mt-1 text-sm text-gray-500 uppercase font-semibold">
                    un proyecto de prototipo de lenguaje de programacion
                  </p>
                  <div class="mt-6">
                    <a href="#"
                      
                    >
                      Ir al sitio</a>
                   
                  </div>
                </div>
              </div>
            </div>

                  <div class="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
              <div class="px-6">
                <img
                  alt="..."
                  src="../assets/img/programador.svg"
                  class="shadow-lg rounded-full max-w-full mx-auto"
                  style="max-width: 120px;"
                />
                <div class="pt-6 text-center">
                  <h5 class="text-xl font-bold">CCode</h5>
                  <p class="mt-1 text-sm text-gray-500 uppercase font-semibold">
                    un proyecto de prototipo de lenguaje de programacion
                  </p>
                  <div class="mt-6">
                    <a href="#"
                      
                    >
                      Ir al sitio</a>
                   
                  </div>
                </div>
              </div>
            </div>

                  <div class="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
              <div class="px-6">
                <img
                  alt="..."
                  src="../assets/img/programador.svg"
                  class="shadow-lg rounded-full max-w-full mx-auto"
                  style="max-width: 120px;"
                />
                <div class="pt-6 text-center">
                  <h5 class="text-xl font-bold">CCode</h5>
                  <p class="mt-1 text-sm text-gray-500 uppercase font-semibold">
                    un proyecto de prototipo de lenguaje de programacion
                  </p>
                  <div class="mt-6">
                    <a href="#"
                      
                    >
                      Ir al sitio</a>
                   
                  </div>
                </div>
              </div>
            </div>

                  <div class="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
              <div class="px-6">
                <img
                  alt="..."
                  src="../assets/img/programador.svg"
                  class="shadow-lg rounded-full max-w-full mx-auto"
                  style="max-width: 120px;"
                />
                <div class="pt-6 text-center">
                  <h5 class="text-xl font-bold">CCode</h5>
                  <p class="mt-1 text-sm text-gray-500 uppercase font-semibold">
                    un proyecto de prototipo de lenguaje de programacion
                  </p>
                  <div class="mt-6">
                    <a href="#"
                      
                    >
                      Ir al sitio</a>
                   
                  </div>
                </div>
              </div>
            </div>
            

            

          </div>
        </div>
      </section>
      <!-- ****************************************************************************** -->

      <!-- seccion para blog **********************************************************-->
      <section class="pb-20 relative block bg-blue-500">
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
           <!-- texto de la seccion -->
          <div class="flex flex-wrap text-center justify-center">
            <div class="w-full lg:w-6/12 px-4">
              <h2 class="text-4xl font-semibold text-white">Mi blog</h2>
              <p class="text-lg leading-relaxed mt-4 mb-4 text-blue-800">
                Este espacio es para poder compartir:
              </p>
            </div>
          </div>

          <!-- cards -->
          <div class="flex flex-wrap mt-12 justify-center">
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

          </div>
        </div>
      </section>
      <!-- ********************************************************************************* -->

      <!-- seccion del formulacion para contacto ******************************************-->
      <section class="relative block py-24 lg:pt-0 bg-blue-500">

        <div class="container mx-auto px-4 ">
          <div class="flex flex-wrap justify-center lg:-mt-64 -mt-48">
            
            <div class="w-full lg:w-6/12 px-4">

              <div
                class="mt-4 relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300"
              >
                <div class="flex-auto p-5 lg:p-10 ">
                  <h4 class="text-2xl font-semibold">Contactame</h4>
                  <p class="leading-relaxed mt-1 mb-4 text-gray-600">
                    
                  </p>
                  <div class="relative w-full mb-3 mt-8">
                    <label
                      class="block uppercase text-gray-700 text-xs font-bold mb-2"
                      for="full-name"
                      >Nombre</label
                    ><input
                      type="text"
                      class="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                      placeholder="Digita tu nombre"
                      style="transition: all 0.15s ease 0s;"
                    />
                  </div>
                  <div class="relative w-full mb-3">
                    <label
                      class="block uppercase text-gray-700 text-xs font-bold mb-2"
                      for="email"
                      >Email</label
                    ><input
                      type="email"
                      class="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                      placeholder="digita tu email"
                      style="transition: all 0.15s ease 0s;"
                    />
                  </div>
                  <div class="relative w-full mb-3">
                    <label
                      class="block uppercase text-gray-700 text-xs font-bold mb-2"
                      for="message"
                      >Mensaje</label
                    ><textarea
                      rows="4"
                      cols="80"
                      class="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                      placeholder="digita el mensaje"
                    ></textarea>
                  </div>
                  <div class="text-center mt-6">
                    <button
                      class="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                      type="button"
                      style="transition: all 0.15s ease 0s;"
                    >
                      Enviar
                    </button>
                  </div>
                </div>
              </div>
           
            </div>
          </div>
        </div>
      </section>
      <!-- ********************************************************************************* -->
    </main>

    <footer-component></footer-component>

  </div>
</template>
<script>
import NavbarComponent from "../components/Navbar.vue";
import FooterComponent from "../components/Footer.vue";
export default {
  name: "landing-page",
  components: {
    NavbarComponent,
    FooterComponent
  }
}
</script>
