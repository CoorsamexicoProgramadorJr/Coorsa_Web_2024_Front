<script setup>
  import Map from '@/components/icons/Map.vue'
</script>

<template>
  <section class="w-screen overflow-hidden">
    <video src="https://storage.googleapis.com/coorsa-mexico-web/Videos/FONDO%20INICIO.mp4" autoplay loop muted class="object-cover object-center w-full h-[50vh] blur-sm">
      Tu navegador no soporta el tag video 
    </video>
  </section>
  <div class="absolute right-[50%] top-[46vh] bg-white/20 translate-x-[50%] h-20 w-2/3 lg:w-2/5 border-2 border-white rounded-2xl backdrop-blur-sm flex justify-center items-center text-center">
    <h2 class="text-2xl font-semibold text-white lg:text-4xl">Soluciones Logísticas</h2>
  </div>
  <section class="w-screen min-h-[100vh] bg-[url('/img/fondoBlog.jpg')] bg-cover bg-center border-t-2 border-white text-white flex flex-col lg:flex-row justify-center items-center py-10">
    <div class="w-[90%] mt-10">
      <h3 class="text-2xl font-semibold uppercase lg:tracking-wide lg:text-3xl">Soluciones logísticas innovadoras</h3>
      <h4 class="text-2xl font-light uppercase lg:tracking-wide lg:text-3xl">Para impulsar tu empresa</h4>
      
      <div class="flex flex-col items-center mt-16 text-xl font-light lg:flex-row">
        <div class="space-y-4 lg:w-1/2">
          <p>
            <span class="font-semibold uppercase">Coorsa</span> es una empresa mexicana fundada en el año 2013, dedicada a eficientar los procesas de las cadenas de suministro.
            Somos un equipo integrado por profesionales capacitados, experimentados y altamente comprometidos.
          </p>
          <p>
            Trabajamos con clientes de talla internacional que reconocen nuestro compromiso con la calidad y la optimización de los tiempos y los
            recursos operativos a través de cinco lineas de negocio: <span class="font-semibold">Camiones de Patio, Desarrollo de Software, Warehouse, Delivery.</span>
          </p>
        </div>
        <Map class="mt-10 lg:w-1/2" />
      </div>
    </div>
  </section>
</template>