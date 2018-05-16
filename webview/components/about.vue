<template>
  <div>
    <p>{{ message }}</p>
    <router-link to="/">戻る</router-link>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      message: "This is about"
    }
  }
}
</script>
