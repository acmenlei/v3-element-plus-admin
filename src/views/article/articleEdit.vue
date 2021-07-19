<template>
  <div class="publish">
    <mavon-editor class="mavon-editor" v-model="value" />
  </div>
</template>

<script>
export default {
  name: "edit",
  data() {
    return {
      value: "",
    };
  },
};
</script>

<style>
.mavon-editor {
  height: 100%;
}
</style>