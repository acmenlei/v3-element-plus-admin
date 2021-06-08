<template>
  <div id="myheader">
    <el-avatar :size="30" :src="head" />
    <span>name</span>
  </div>
</template>

<script>
export default {
  name: "myheader",
  setup() {
    let head =
      "https://images.nowcoder.com/images/20180629/0_1530258288040_8455BFE79F1384FD927ADCA47F03E049";
    return {
      head,
    };
  },
};
</script>
<style scoped>
#myheader {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}
#myheader span {
  margin-left: 0.5rem;
}
</style>
