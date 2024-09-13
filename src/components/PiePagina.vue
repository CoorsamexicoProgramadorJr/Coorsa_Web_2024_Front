<script setup>
  import { ref, watch } from 'vue'
  import { RouterLink } from 'vue-router'
  import { Fancybox } from "@fancyapps/ui"
  import ApplicationMark from '@/components/icons/ApplicationMark.vue'

  const props = defineProps({
    currentRoute: {
      type: String,
      required: true
    }
  })
  
  const availableLinks = ref([])
  const links = [
    {
      name: 'Inicio',
      pathName: 'home',
    }, 
    {
      name: 'Servicios',
      pathName: 'servicios'
    }, 
    {
      name: 'Conocenos',
      pathName: 'conocenos'
    }, 
    {
      name: 'Talento',
      pathName: 'talento'
    }, 
    {
      name: 'Blog',
      pathName: 'blog'
    }
  ]
  
  watch(props, () => {
    availableLinks.value = links.filter((link) => link.pathName != props.currentRoute)
  })

  Fancybox.bind("[data-fancybox]", {})
</script>
<template>
  <footer class="w-screen h-[30vh] bg-black border-t text-white lg:pr-[2%] relative lg:block sm:hidden z-[2]">
    <!-- Upper footer -->
    <article class="flex justify-around items-center gap-[1%] w-full h-2/3">
      <figure class="lg:w-2/6">
        <ApplicationMark class="object-cover m-auto md:w-[80%]"/>
      </figure>

      <div class="flex flex-col items-center justify-around w-1/6 h-full py-[1%] xl:gap-[2%] lg:gap-[1%] xl:text-lg font-semibold lg:text-base">
        <div v-for="link in availableLinks" :key="link.name" class="hover:border-b border-b-red-700">
          <RouterLink class="uppercase" :to="{ name: link.pathName }">{{ link.name }}</RouterLink>
        </div>
      </div>

      <div class="w-2/6 h-full">
        <div class="my-[2%]">
          <h4 class="w-1/4 xl:text-lg lg:text-base uppercase border-b border-b-red-700 my-[2%] font-bold">Sede</h4>
          <a href="https://maps.app.goo.gl/idmYkCsb3UBVveJX9" target="_blank" class="xl:text-base lg:text-sm">Terra Business Park # 31 y 32C, 76269. Querétaro México.</a>
        </div>
        <div>
          <h3 class="w-1/4 xl:text-lg lg:text-base uppercase border-b border-b-red-700 my-[2%] font-bold">Warehouse</h3>
          <a href="https://maps.app.goo.gl/ZduUtuawGdiq4P4z5" target="_blank" class="xl:text-base lg:text-sm">Mexiquense 75, Coacalco, 54910. Tultitlán de Mariano Escobedo, Méx.</a>
        </div>
      </div>

      <div class="flex flex-col items-center justify-center w-1/6 h-full gap-[10%]">
        <div class="w-[50%] flex items-center justify-center gap-[20%]">
          <a href="https://www.linkedin.com/company/corsa-méxico/mycompany/" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" class="size-8 fill-white hover:fill-red-700" viewBox="0 0 50 50">
              <path d="M 8 3.0117188 C 6.3126093 3.0117188 4.8354789 3.4916328 3.7539062 4.3652344 C 2.6723337 5.238836 2.0117188 6.533218 2.0117188 7.9472656 C 2.0117188 10.690836 4.4687078 12.814467 7.7167969 12.941406 A 0.98809878 0.98809878 0 0 0 8 12.988281 C 9.753566 12.988281 11.246191 12.474267 12.3125 11.564453 C 13.378809 10.654639 13.988281 9.3429353 13.988281 7.9472656 A 0.98809878 0.98809878 0 0 0 13.986328 7.8925781 C 13.832307 5.1316834 11.374781 3.0117187 8 3.0117188 z M 8 4.9882812 C 10.60907 4.9882812 11.895883 6.2693448 12.005859 7.9726562 C 11.998759 8.8049335 11.676559 9.5118991 11.03125 10.0625 C 10.378809 10.619186 9.371434 11.011719 8 11.011719 C 5.3980542 11.011719 3.9882813 9.5991704 3.9882812 7.9472656 C 3.9882812 7.1213132 4.3276663 6.4422421 4.9960938 5.9023438 C 5.6645211 5.3624454 6.6873907 4.9882813 8 4.9882812 z M 3 15 A 1.0001 1.0001 0 0 0 2 16 L 2 45 A 1.0001 1.0001 0 0 0 3 46 L 13 46 A 1.0001 1.0001 0 0 0 14 45 L 14 35.664062 L 14 16 A 1.0001 1.0001 0 0 0 13 15 L 3 15 z M 18 15 A 1.0001 1.0001 0 0 0 17 16 L 17 45 A 1.0001 1.0001 0 0 0 18 46 L 28 46 A 1.0001 1.0001 0 0 0 29 45 L 29 29 L 29 28.75 L 29 28.5 C 29 26.555577 30.555577 25 32.5 25 C 34.444423 25 36 26.555577 36 28.5 L 36 45 A 1.0001 1.0001 0 0 0 37 46 L 47 46 A 1.0001 1.0001 0 0 0 48 45 L 48 28 C 48 23.873476 46.787888 20.604454 44.744141 18.375 C 42.700394 16.145546 39.849212 15 36.787109 15 C 32.882872 15 30.521631 16.426076 29 17.601562 L 29 16 A 1.0001 1.0001 0 0 0 28 15 L 18 15 z M 4 17 L 12 17 L 12 35.664062 L 12 44 L 4 44 L 4 17 z M 19 17 L 27 17 L 27 19.638672 A 1.0001 1.0001 0 0 0 28.744141 20.306641 C 28.744141 20.306641 31.709841 17 36.787109 17 C 39.360007 17 41.615528 17.922268 43.269531 19.726562 C 44.923534 21.530858 46 24.261524 46 28 L 46 44 L 38 44 L 38 28.5 A 1.0001 1.0001 0 0 0 37.916016 28.089844 C 37.694061 25.26411 35.38033 23 32.5 23 C 29.474423 23 27 25.474423 27 28.5 L 27 28.75 L 27 29 L 27 44 L 19 44 L 19 17 z"></path>
            </svg>
          </a>
          <a href="https://www.youtube.com/@CoorsaSolucionesLogisticas" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" class="size-9 fill-white hover:fill-red-700" viewBox="0 0 50 50">
              <path d="M 24.402344 9 C 17.800781 9 11.601563 9.5 8.300781 10.199219 C 6.101563 10.699219 4.199219 12.199219 3.800781 14.5 C 3.402344 16.898438 3 20.5 3 25 C 3 29.5 3.398438 33 3.898438 35.5 C 4.300781 37.699219 6.199219 39.300781 8.398438 39.800781 C 11.902344 40.5 17.898438 41 24.5 41 C 31.101563 41 37.097656 40.5 40.597656 39.800781 C 42.800781 39.300781 44.699219 37.800781 45.097656 35.5 C 45.5 33 46 29.402344 46.097656 24.902344 C 46.097656 20.402344 45.597656 16.800781 45.097656 14.300781 C 44.699219 12.101563 42.800781 10.5 40.597656 10 C 37.097656 9.5 31 9 24.402344 9 Z M 24.402344 11 C 31.601563 11 37.398438 11.597656 40.199219 12.097656 C 41.699219 12.5 42.898438 13.5 43.097656 14.800781 C 43.699219 18 44.097656 21.402344 44.097656 24.902344 C 44 29.199219 43.5 32.699219 43.097656 35.199219 C 42.800781 37.097656 40.800781 37.699219 40.199219 37.902344 C 36.597656 38.601563 30.597656 39.097656 24.597656 39.097656 C 18.597656 39.097656 12.5 38.699219 9 37.902344 C 7.5 37.5 6.300781 36.5 6.101563 35.199219 C 5.300781 32.398438 5 28.699219 5 25 C 5 20.398438 5.402344 17 5.800781 14.902344 C 6.101563 13 8.199219 12.398438 8.699219 12.199219 C 12 11.5 18.101563 11 24.402344 11 Z M 19 17 L 19 33 L 33 25 Z M 21 20.402344 L 29 25 L 21 29.597656 Z"></path>
            </svg>
          </a>
        </div>
        <RouterLink to="/contacto" class=" text-center lg:py-1 uppercase bg-red-700 xl:w-[40%] lg:w-2/3 h-[20%] rounded-xl hover:bg-red-800">Contacto</RouterLink>
      </div>
    </article>
    <!-- Lower footer -->
    <article class="flex items-center w-full h-1/3 gap-[1%]">
      <div class="flex items-center justify-center border-r border-red-700 h-2/3 w-[66.66%]">
        <p class="tracking-widest xl:text-xl lg:text-lg">
          &#xA9; 2023 COORSA MÉXICO. TODOS LOS DERECHOS RESERVADOS 
        </p>
      </div>
      
      <div class="flex items-center w-1/3 divide-x divide-red-700 h-2/3 gap-[1%] 2xl:text-xl lg:text-base">
        <div class="flex items-center justify-center w-[54.5%] h-full p-[1%]">
          <a data-fancybox data-src="https://storage.googleapis.com/coorsa-mexico-web/Documentos/AVISO%20DE%20PRIVACIDAD%20COLABORADOR.pdf" class="text-center hover:cursor-pointer">
            AVISO PRIVACIDAD COLABORADOR
          </a>
        </div>
        <div class="flex items-center justify-center w-[54.5%] h-full p-[1%]">
          <a data-fancybox href="https://storage.googleapis.com/coorsa-mexico-web/Documentos/AVISO%20DE%20PRIVACIDAD%20CLIENTES.pdf" class="text-center hover:cursor-pointer">
            AVISO PRIVACIDAD CLIENTE
          </a>
        </div>
      </div>
    </article>
  </footer>
  
  <!-- Mobile footer -->
  <footer class="w-screen h-[40vh] bg-black border-t text-white z-[2] relative lg:hidden block">
    <!-- Upper footer -->
    <div class="flex justify-around items-center gap-[1%] w-full h-3/6">
      <div class="flex flex-col items-center justify-around w-3/12 h-full py-[1%] font-semibold">
        <div v-for="link in availableLinks" :key="link.name" class="tex-base hover:border-b border-b-red-700">
          <RouterLink class="uppercase" :to="{ name: link.pathName }">{{ link.name }}</RouterLink>
        </div>
      </div>

      <div class="flex flex-col justify-center w-6/12 h-full">
        <div>
          <h3 class="w-1/4 uppercase border-b border-b-red-700 my-[1%] font-bold">Sede</h3>
          <a href="https://maps.app.goo.gl/idmYkCsb3UBVveJX9" target="_blank" class="tracking-tighter lg:tracking-normal">
            Terra Business Park # 31 y 32C, 76269. Querétaro México.
          </a>
        </div>
        <div>
          <h4 class="w-1/4 uppercase border-b border-b-red-700 my-[1%] font-bold text-lg">Warehouse</h4>
          <a href="https://maps.app.goo.gl/ZduUtuawGdiq4P4z5" target="_blank" class="tracking-tighter lg:tracking-normal">
            Mexiquense 75, Coacalco, 54910. Tultitlán de Mariano Escobedo, Méx.
          </a>
        </div>
      </div>

      <div class="flex flex-col items-center justify-center w-3/12 h-full gap-[10%]">
        <div class="w-[50%] flex items-center justify-center gap-[20%]">
          <a href="https://www.linkedin.com/company/corsa-méxico/mycompany/" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" class="w-9 fill-white hover:fill-red-700" viewBox="0 0 50 50">
              <path d="M 8 3.0117188 C 6.3126093 3.0117188 4.8354789 3.4916328 3.7539062 4.3652344 C 2.6723337 5.238836 2.0117188 6.533218 2.0117188 7.9472656 C 2.0117188 10.690836 4.4687078 12.814467 7.7167969 12.941406 A 0.98809878 0.98809878 0 0 0 8 12.988281 C 9.753566 12.988281 11.246191 12.474267 12.3125 11.564453 C 13.378809 10.654639 13.988281 9.3429353 13.988281 7.9472656 A 0.98809878 0.98809878 0 0 0 13.986328 7.8925781 C 13.832307 5.1316834 11.374781 3.0117187 8 3.0117188 z M 8 4.9882812 C 10.60907 4.9882812 11.895883 6.2693448 12.005859 7.9726562 C 11.998759 8.8049335 11.676559 9.5118991 11.03125 10.0625 C 10.378809 10.619186 9.371434 11.011719 8 11.011719 C 5.3980542 11.011719 3.9882813 9.5991704 3.9882812 7.9472656 C 3.9882812 7.1213132 4.3276663 6.4422421 4.9960938 5.9023438 C 5.6645211 5.3624454 6.6873907 4.9882813 8 4.9882812 z M 3 15 A 1.0001 1.0001 0 0 0 2 16 L 2 45 A 1.0001 1.0001 0 0 0 3 46 L 13 46 A 1.0001 1.0001 0 0 0 14 45 L 14 35.664062 L 14 16 A 1.0001 1.0001 0 0 0 13 15 L 3 15 z M 18 15 A 1.0001 1.0001 0 0 0 17 16 L 17 45 A 1.0001 1.0001 0 0 0 18 46 L 28 46 A 1.0001 1.0001 0 0 0 29 45 L 29 29 L 29 28.75 L 29 28.5 C 29 26.555577 30.555577 25 32.5 25 C 34.444423 25 36 26.555577 36 28.5 L 36 45 A 1.0001 1.0001 0 0 0 37 46 L 47 46 A 1.0001 1.0001 0 0 0 48 45 L 48 28 C 48 23.873476 46.787888 20.604454 44.744141 18.375 C 42.700394 16.145546 39.849212 15 36.787109 15 C 32.882872 15 30.521631 16.426076 29 17.601562 L 29 16 A 1.0001 1.0001 0 0 0 28 15 L 18 15 z M 4 17 L 12 17 L 12 35.664062 L 12 44 L 4 44 L 4 17 z M 19 17 L 27 17 L 27 19.638672 A 1.0001 1.0001 0 0 0 28.744141 20.306641 C 28.744141 20.306641 31.709841 17 36.787109 17 C 39.360007 17 41.615528 17.922268 43.269531 19.726562 C 44.923534 21.530858 46 24.261524 46 28 L 46 44 L 38 44 L 38 28.5 A 1.0001 1.0001 0 0 0 37.916016 28.089844 C 37.694061 25.26411 35.38033 23 32.5 23 C 29.474423 23 27 25.474423 27 28.5 L 27 28.75 L 27 29 L 27 44 L 19 44 L 19 17 z"></path>
            </svg>
          </a>
          <a href="https://www.youtube.com/@CoorsaSolucionesLogisticas" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" class="w-10 fill-white hover:fill-red-700" viewBox="0 0 50 50">
              <path d="M 24.402344 9 C 17.800781 9 11.601563 9.5 8.300781 10.199219 C 6.101563 10.699219 4.199219 12.199219 3.800781 14.5 C 3.402344 16.898438 3 20.5 3 25 C 3 29.5 3.398438 33 3.898438 35.5 C 4.300781 37.699219 6.199219 39.300781 8.398438 39.800781 C 11.902344 40.5 17.898438 41 24.5 41 C 31.101563 41 37.097656 40.5 40.597656 39.800781 C 42.800781 39.300781 44.699219 37.800781 45.097656 35.5 C 45.5 33 46 29.402344 46.097656 24.902344 C 46.097656 20.402344 45.597656 16.800781 45.097656 14.300781 C 44.699219 12.101563 42.800781 10.5 40.597656 10 C 37.097656 9.5 31 9 24.402344 9 Z M 24.402344 11 C 31.601563 11 37.398438 11.597656 40.199219 12.097656 C 41.699219 12.5 42.898438 13.5 43.097656 14.800781 C 43.699219 18 44.097656 21.402344 44.097656 24.902344 C 44 29.199219 43.5 32.699219 43.097656 35.199219 C 42.800781 37.097656 40.800781 37.699219 40.199219 37.902344 C 36.597656 38.601563 30.597656 39.097656 24.597656 39.097656 C 18.597656 39.097656 12.5 38.699219 9 37.902344 C 7.5 37.5 6.300781 36.5 6.101563 35.199219 C 5.300781 32.398438 5 28.699219 5 25 C 5 20.398438 5.402344 17 5.800781 14.902344 C 6.101563 13 8.199219 12.398438 8.699219 12.199219 C 12 11.5 18.101563 11 24.402344 11 Z M 19 17 L 19 33 L 33 25 Z M 21 20.402344 L 29 25 L 21 29.597656 Z"></path>
            </svg>
          </a>
        </div>
        <button class="uppercase bg-red-700 md:w-[50%] w-[70%] h-[20%] rounded-xl hover:bg-red-800">Contacto</button>
      </div>
    </div>

    <!-- Middle footer -->
    <div class="flex items-center divide-x divide-red-700 h-2/6">
      <figure class="w-1/2">
        <ApplicationMark class="object-cover m-auto md:w-[80%] w-[75%]"/>
      </figure>

      <div class="flex items-center w-1/2 divide-x divide-red-700 h-2/3 gap-[1%] 2xl:text-xl md:text-base text-sm">
        <div class="flex items-center justify-center w-[54.5%] h-full p-[1%]">
          <a data-fancybox href="https://storage.googleapis.com/coorsa-mexico-web/Documentos/AVISO%20DE%20PRIVACIDAD%20COLABORADOR.pdf" class="text-center">
            AVISO PRIVACIDAD COLABORADOR
          </a>
        </div>
        <div class="flex items-center justify-center w-[54.5%] h-full p-[1%]">
          <a data-fancybox href="https://storage.googleapis.com/coorsa-mexico-web/Documentos/AVISO%20DE%20PRIVACIDAD%20CLIENTES.pdf" class="text-center">
            AVISO PRIVACIDAD CLIENTE
          </a>
        </div>
      </div>
    </div>
    <div class="flex items-center justify-center h-1/6">
      <p class="text-base tracking-widest md:text-lg">
        &#xA9; 2023 COORSA MÉXICO. TODOS LOS DERECHOS RESERVADOS 
      </p>
    </div>
  </footer>
</template>