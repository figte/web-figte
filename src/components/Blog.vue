<template>
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
</template>

<script>
export default {

}
</script>

<style>

</style>