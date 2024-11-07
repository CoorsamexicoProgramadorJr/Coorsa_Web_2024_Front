<script setup>
  import { onUnmounted } from 'vue'
  import { useLoginStore } from '@/stores/login'
  import { resetForm } from '@/components/helpers'

  const loginStore = useLoginStore()

  onUnmounted(() => {
    resetForm(loginStore.loginForm)
  })
</script>

<template>
  <section class="w-screen h-screen pt-[8vh] px-4 bg-[url('https://storage.googleapis.com/coorsa-mexico-web/img/insights.png')] bg-center flex flex-col justify-center">
    <div class="p-6 text-white border border-red-700 rounded-xl min-h-[50%] bg-white/10 w-full md:w-[80%] lg:w-[60%] mx-auto">
      <h2 class="mb-6 text-2xl font-semibold text-center text-white uppercase md:text-3xl">Administración</h2>
      <form action="" @submit.prevent="loginStore.login" class="flex flex-col gap-4 lg:w-[90%] xl:w-[70%] mx-auto" novalidate>
        <div class="flex flex-col pb-1">
          <label for="email" class="text-lg font-medium uppercase md:text-xl">Correo Electronico</label>
          <input type="email" v-model="loginStore.loginForm.email" name="email" id="email" placeholder="ejemplo: email@email.com" class="py-1 pl-2 text-base bg-transparent border-b outline-none md:text-lg focus:border-b-red-700">
          <p v-if="Object.keys(loginStore.errors).length != 0 && Object.keys(loginStore.errors).includes('email')"  class="pl-2 mt-1 text-sm font-semibold text-red-700 md:text-base">
            {{ loginStore.errors.email[0] }}
          </p>
        </div>
        <div class="flex flex-col pb-1">
          <label for="password" class="text-lg font-medium uppercase md:text-xl">Contraseña</label>
          <input type="password" v-model="loginStore.loginForm.password" name="password" id="password" placeholder="********" class="py-1 pl-2 text-base bg-transparent border-b outline-none md:text-lg focus:border-b-red-700">
          <p v-if="Object.keys(loginStore.errors).length != 0 && Object.keys(loginStore.errors).includes('password')" class="pl-2 mt-1 text-sm font-semibold text-red-700 md:text-base">
            {{ loginStore.errors.password[0] }}
          </p>
          <label for="vis-pass" class="flex items-center gap-2 mt-1 text-base">
            <input type="checkbox" v-model="loginStore.passwordVisibility" name="visible-password" id="vis-pass"  class="accent-red-600">
            Mostrar contraseña
          </label>
        </div>
        <div class="my-4" :class="{ 'my-2' : Object.keys(loginStore.errors).includes('status') }">
          <p v-if="Object.keys(loginStore.errors).length != 0 && Object.keys(loginStore.errors).includes('status')" class="mb-2 text-base font-semibold text-center text-red-700 md:text-lg">
            {{ loginStore.errors.message }}
          </p>
          <button type="submit" :disabled="loginStore.sending" class="w-full py-2 uppercase border rounded-full disabled:opacity-75">Iniciar Sesion</button>
        </div>
      </form>
    </div>
  </section>
</template>