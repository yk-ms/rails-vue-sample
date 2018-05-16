<template>
  <div>
    <p>{{ message }}</p>
    <vue-input />
    <vue-select />
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      message: "This is index"
    }
  }
}
</script>
