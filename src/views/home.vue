<template>
  <el-card id="home">
    <div class="user" v-for="user in users" :key="user.id">
      <p>username: {{ user.username }}</p>
      <p>address: {{ user.address.street }}</p>
      <p>website: {{ user.website }}</p>
      <p>email: {{ user.email }}</p>
    </div>
  </el-card>
</template>

<script>
import { getusersList } from "@/api/user";
import { onMounted, reactive, toRefs } from "vue";

export default {
  name: "home",
  setup() {
    const store = reactive({
      users: [],
    });
    onMounted(() => {
      getusersList().then((result) => {
        store.users = result;
      });
    });

    return {
      ...toRefs(store),
    };
  },
};
</script>
