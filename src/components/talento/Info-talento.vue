<script setup></script>
<template>
  <section class="w-screen h-[184vh]">
    <article class="w-full h-1/2 max-h-[92vh] py-[3%] px-[1%] flex flex-col justify-between items-center">
      <h2 class="xl:text-6xl lg:text-5xl md:text-4xl text-3xl xl:w-[80%] w-[70%] md:w-[75%] mx-auto lg:indent-[10%] md:indent-[5%]">
        ¿Quieres trabajar para empresas 
        <span class="font-bold leading-tight text-red-700 uppercse xl:text-9xl lg:text-7xl text-7xl">
          Líderes?
        </span>
      </h2>
      <div class="w-[80%] h-[50%] grid grid-cols-6 grid-rows-2 mx-auto gap-[2%] ">
        <figure class="flex items-center justify-center col-span-2">
          <img src="/icons/walmart-color.svg" alt="Icono Walmart" class="max-h-[80%]">
        </figure>
        <figure class="flex items-center justify-center col-span-2">
          <img src="/icons/nestle-color.svg" alt="Icono Nestle" class="md:max-h-[80%] max-h-[70%]">
        </figure>
        <figure class="flex items-center justify-center col-span-2">
          <img src="/icons/dhl-color.svg" alt="Icono Dhl" class="max-h-[80%]">
        </figure>
        <figure class="flex items-center justify-center col-span-2 col-start-2">
          <img src="/icons/sams-color.svg" alt="Icono Sams" class="max-h-[80%]">
        </figure>
        <figure class="flex items-center justify-center col-span-2 col-start-4">
          <img src="/icons/unilever-color.svg" alt="Icono Unilever" class="md:max-h-[80%] max-h-[70%]">
        </figure>
      </div>
      <h3 class="w-[85%] mx-auto xl:text-4xl lg:text-3xl md:text-2xl text-center text-xl">
        <span class="font-bold uppercase">Coorsa</span> es una empresa líder en <span class="font-bold">Soluciones Logísticas</span> 
        con una sólida <span class="font-bold">presencia a nivel nacional.</span>
      </h3>
    </article>
    
    <!-- More info -->
    <article class="w-screen text-white bg-black h-1/2 max-h-[92vh] p-[5%] flex flex-col justify-between xl:text-3xl lg:text-2xl text-xl">
      <div class="flex lg:flex-row flex-col justify-around items-center w-full h-[45%]">
        <p class="lg:w-1/2">
          Estamos comprometidos a proporcionar un entorno de trabajo dinámico y enriquecedor donde cada
          Colaborador pueda alcanzar su máximo potencial. Somos líderes en soluciones logísticas y creemos que nuestro éxito depende del 
          talento y la dedicación de nuestro equipo.
        </p>
        <figure class="lg:max-w-[30%] w-1/2 bg-gray-900 overflow-hidden rounded-2xl">
          <img src="/img/RecursoMob.png" alt="Imagen entorno" class="max-w-full max-h-full lg:mx-auto">
        </figure>
      </div>
      <div class="flex flex-col lg:flex-row-reverse justify-around items-center w-full h-[45%]">
        <p class="lg:w-1/2">
          Nuestra cultura se basa en la innovación, la Colaboración y el crecimiento continuo. Aquí, encontrarás oportunidades para 
          desarrollar tus habilidades, asumir nuevos retos y hacer una diferencia real en la industria logística.
        </p>
        <figure class="lg:max-w-[30%] w-1/2 max-h-full bg-gray-900 rounded-2xl overflow-hidden">
          <img src="/img/maniobras.png" alt="Imagen maniobras" class="max-w-[80%] max-h-full mx-auto">
        </figure>
      </div>
    </article>
  </section>
</template>