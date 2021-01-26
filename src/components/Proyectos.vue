<template>
    <section class="relative py-8 mt-2">
       
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
             <div class="flex mt-8">
           
                <h3 class="flex-1 text-3xl font-semibold text-center">
                     <!-- icono del contenido de la seccion -->
                <div
                  class="mt-6 text-pink-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-pink-300"
                >
                 <i class="fas fa-flag"></i>
                </div>
                  Logros
               </h3>

            </div>
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
                
                <!-- logros -->
                <!-- <p class="mt-4 text-lg leading-relaxed text-gray-600">
                  Logros
                </p> -->
                <ul class="list-none mt-6">
                  <li class="py-2">
                    <div class="flex items-center">
                      <div>
                        <span
                          class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3"
                          ><i class="fas fa-medal text-xl"></i></span>
                      </div>
                      <div>
                        <h4 class="text-gray-600">
                          Publicación de paper, documento cinetifico, en IEEExplore, con el tema: Depurador de procedimientos almacenados
                          para MySQL. enlace: <span class="text-blue-800">https://ieeexplore.ieee.org/document/8075214</span> 
                        </h4>
                      </div>
                    </div>
                  </li>
                  <li class="py-2">
                    <div class="flex items-center">
                      <div>
                        <span
                          class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3"
                          ><i class="fas fa-medal text-xl"></i></span>
                      </div>
                      <div>
                        <h4 class="text-gray-600">Participación en CONESCAPAN 2016 Guatemala, Evento de IEEE a nivel centroamericano, como ponente
                          con el tema: Depuración de procedimientos almacenados para MySQL. 
                        </h4>
                      </div>
                    </div>
                  </li>
                  <!-- <li class="py-2">
                    <div class="flex items-center">
                      <div>
                        <span
                          class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3"
                          ><i class="fas fa-medal text-xl"></i></span>
                      </div>
                      <div>
                        <h4 class="text-gray-600"></h4>
                      </div>
                    </div>
                  </li> -->
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
</template>

<script>
export default {

}
</script>

<style>

</style>