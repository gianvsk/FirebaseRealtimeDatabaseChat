<script setup lang="ts">
const { retrieveMessage, sendText, messageList } = useFirebase();

onMounted(async () => await retrieveMessage())

const model = ref<{ user: string; text: string }>({ user: "", text: "" });

const onSubmit = () => {
  sendText(model.value)
}
</script>

<template>
<div>
  <NuxtRouteAnnouncer />
  <div class="h-screen w-screen bg-blue-300">
    <div class="p-5 flex flex-col gap-5 max-w-1/4">
      <div class="min-h-[400px] w-full bg-white">
        <ul class="flex flex-col gap-3 px-2 py-2">
          <li v-for="{ user, text } in messageList" class="border flex flex-col gap-2">
            <span>{{ user }}</span>
            <span>{{ text }}</span>
          </li>
        </ul>
      </div>
      <form @submit.prevent="onSubmit()">
        <input v-model="model.user" class="bg-white px-3 py-2" placeholder="user" />
        <input v-model="model.text" class="bg-white px-3 py-2" placeholder="message" />
        <div>
          <button class="inline-flex justify-start">Send</button>
        </div>
      </form>
    </div>
  </div>
</div>
</template>
