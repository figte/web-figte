<template>
  <nav
    class="fixed top-0 bg-blue-500 z-50 w-full flex flex-wrap items-center justify-between px-2 pb-6 navbar-expand-lg"
  >
    <div
      class="container px-auto mx-auto flex flex-wrap items-center justify-between"
    >
     

      <div
        class="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start"
      >
         
        <img src="../assets/img/emoji.gif" width="60" height="60" class="rounded-full mr-4 inline-block ">
        <a
          class="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase text-white"
          href="#"
          >
         
          <span class="text-white text-2xl text-center">FIGTE</span>
        </a>

        <button
          class="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
          type="button"
          v-on:click="toggleNavbar()"
        >
          <i class="text-white fas fa-bars"></i>
        </button>

      </div>

      <div
        class="lg:flex flex-grow items-center bg-white lg:bg-transparent lg:shadow-none"
        v-bind:class="{'hidden': !showMenu, 'block': showMenu}"
      >
        <ul class="flex flex-col lg:flex-row list-none mr-auto">
          <li class="flex items-center">
            <a
              class="lg:text-white lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
              href="#proyectos"
              ><i
                class="lg:text-gray-300 text-gray-500 fas fa-file-code circle-down text-lg leading-lg mr-2"
              ></i>
              Proyectos
              </a
            >
          </li>
        </ul>
        <ul class="flex flex-col lg:flex-row list-none lg:ml-auto">
          <li class="flex items-center">
            <a
              class="lg:text-white lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
              href="https://www.facebook.com/walther.figueroatejada"
               target="_blank"
              ><i
                class="lg:text-gray-300 text-gray-500 fab fa-facebook text-lg leading-lg "
              ></i
              ><span class="lg:hidden inline-block ml-2">facebook</span></a
            >
          </li>
          <li class="flex items-center">
            <a
              class="lg:text-white lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
              href="https://twitter.com/Figte4"
               target="_blank"
              ><i
                class="lg:text-gray-300 text-gray-500 fab fa-twitter text-lg leading-lg "
              ></i
              ><span class="lg:hidden inline-block ml-2">twitter</span></a
            >
          </li>
          <li class="flex items-center">
            <a
              class="lg:text-white lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
              href="https://github.com/figte"
               target="_blank"
              ><i
                class="lg:text-gray-300 text-gray-500 fab fa-github text-lg leading-lg "
              ></i
              ><span class="lg:hidden inline-block ml-2">github</span></a
            >
          </li>
          <li class="flex items-center">
            <a
              class="bg-white text-gray-800 active:bg-gray-100 text-xs font-bold uppercase px-4 py-2 
              rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3"
              type="button"
              style="transition: all 0.15s ease 0s;"
              href="#blog"
            >
               <i class="fab fa-blogger-b circle-down"></i> Mi Blog
            </a>
          </li>
        </ul>
      </div>

    </div>
  </nav>
</template>
<script>
export default {
  data() {
    return {
      showMenu: false
    }
  },
  methods: {
    toggleNavbar: function(){
      this.showMenu = !this.showMenu;
    }
  }
}
</script>
