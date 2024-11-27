<script setup>
  import ApplicationMark from '@/components/icons/ApplicationMark.vue'

  const pages = [
    {
      page: 'Vacantes',
      actions: ['See', 'Create', 'Edit', 'Delete']
    },
    {
      page: 'Categorias',
      actions: ['See', 'Create', 'Edit', 'Delete']
    },
    {
      page: 'Consultas',
      actions: ['See','', '', '']
    },
    {
      page: 'Postulaciones',
      actions: ['See', '', '', '']
    },
    {
      page: 'Directivos',
      actions: ['See', 'Create', 'Edit', 'Delete']
    },
  ]
</script>
<template>
  <section class="h-screen w-5/6 ml-[16.7%] md:w-3/4 p-4 md:mx-auto md:ml-[25%] relative flex flex-col justify-between items-center">
    <h2 class="my-4 text-2xl font-bold lg:text-4xl lg:pl-10">
      <span class="text-4xl italic font-extrabold text-blue-900 lg:text-6xl">Bienvenido</span> al panel de Administración
    </h2>

    <article class="w-full px-2 mb-5 space-y-3">
      <table class="w-full text-center border border-blue-950">
        <caption class="p-2 mb-4 text-sm italic bg-blue-200 rounded-lg caption-top lg:text-base">
          Te mostramos las acciones que puedes hacer en cada pagina del panel de Administración.
        </caption>
        <thead class="border border-inherit">
          <tr class="text-white uppercase bg-blue-950">
            <th rowspan="2" class="">Paginas</th>
            <th colspan="4" class="py-1 border-l">Acciones</th>
          </tr>
          <tr class="text-blue-900 divide-x divide-blue-950">
            <th class="py-1">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="inline-block stroke-2 size-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              </svg>
              Ver
            </th>
            <th class="py-1">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="inline-block stroke-2 size-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
              Crear
            </th>
            <th class="py-1">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="inline-block stroke-2 size-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
              </svg>
              Editar
            </th>
            <th class="py-1">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="inline-block stroke-2 size-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
              </svg>
              Borrar
            </th>
          </tr>
        </thead>
        <tbody class="divide-y divide-blue-950">
          <tr v-for="(page, index) in pages" :key="index" class="divide-x divide-blue-950">
            <td class="py-1 font-semibold">{{ page.page }}</td>
            <td v-for="(action, index) in page.actions" :key="index">
              <svg v-if="action.length != 0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mx-auto size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
              </svg>
            </td>
          </tr>
        </tbody>
      </table>
    </article>

    <footer class="flex flex-col items-center w-full gap-5 mb-5 text-blue-900 lg:justify-around lg:flex-row">
      <h5 class="text-lg italic">"Haciendo de lo bueno algo mejor"</h5>
      <ApplicationMark class="w-60"/>
    </footer>
  </section>
</template>