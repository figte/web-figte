<template>
  <footer class="relative bg-gray-300 pt-24 pb-6 ">
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
          class="text-gray-300 fill-current"
          points="2560 0 2560 100 0 100"
        ></polygon>
      </svg>
    </div>
    <div class="container mx-auto px-4">
      <div class="flex flex-wrap">
        <div class="w-full lg:w-6/12 px-4">
          <h4 class="text-3xl font-semibold">Puedes seguirme</h4>
          <h5 class="text-lg mt-0 mb-2 text-gray-700">
           Buscame en las siguientes plataformas
          </h5>
          <div class="mt-6">
            <button
              class="bg-white text-blue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
 
            >
            <a href="https://www.facebook.com/walther.figueroatejada">
              <i class="flex fab fa-facebook-square"></i>
            </a>
            </button>
            
            <button
              class="bg-white text-blue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
             
            >
            <a href="https://twitter.com/Figte4">
            <i class="flex fab fa-twitter"></i>
            </a>
              </button
            ><button
              class="bg-white text-gray-900 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
              
            >
            <a href="https://github.com/figte">
              <i class="flex fab fa-github"></i>
            </a>
            </button>
          </div>
        </div>
        <div class="w-full lg:w-6/12 px-4">
          <div class="flex flex-wrap items-top mb-6">
            <div class="w-full lg:w-4/12 px-4 ml-auto mt-4">
              <span
                class="block uppercase text-gray-600 text-sm font-semibold mb-2"
                >Enlaces importantes</span
              >
              <ul class="list-unstyled">
                <li>
                  <a
                    class="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                    href="https://www.creative-tim.com/presentation"
                    >Inicio</a
                  >
                </li>
                <li>
                  <a
                    class="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                    href="https://blog.creative-tim.com"
                    >Sobre mi</a
                  >
                </li>
                <li>
                  <a
                    class="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                    href="https://www.github.com/creativetimofficial"
                    >Experiencia</a
                  >
                </li>
             
              </ul>
            </div>
            <div class="w-full lg:w-4/12 px-4 mt-4">
              <span
                class="block uppercase text-gray-600 text-sm font-semibold mb-2"
                >OTROS RECURSOS</span
              >
              <ul class="list-unstyled">
                <li>
                  <a
                    class="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                    href="#"
                    >Mi Blog</a
                  >
                </li>
                <li>
                  <a
                    class="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                   href="https://github.com/figte"
                    >GitHub</a
                  >
                </li>
                <li>
                  <a
                    class="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                    href="#"
                    >Proyectos</a
                  >
                </li>
               
              </ul>
            </div>
          </div>
        </div>
      </div> 
      <hr class="my-6 border-gray-400" />
      <div
        class="flex flex-wrap items-center md:justify-between justify-center"
      >
        <div class="w-full md:w-4/12 px-4 mx-auto text-center">
          <div class="text-sm text-gray-600 font-semibold py-1">
            Copyright © {{date}} FIGTE-Walther Alfredo Figueroa Tejada
            <a
              href="https://www.creative-tim.com"
              class="text-gray-600 hover:text-gray-900"
              >Desarrollador</a
            >.
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  data() {
    return {
      date: new Date().getFullYear()
    }
  }
}
</script>
