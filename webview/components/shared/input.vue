<template>
  <div class="field is-horizontal">
    <div class="field-label is-normal">
      <label class="label">From</label>
    </div>
    <div class="field-body">
      <div class="field">
        <p class="control">
          <input class="input" type="text" v-model="name" placeholder="名前を入力してください。">
        </p>
        <p class="name">Value: {{ name }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'name',
  data () {
    return {
      name: ''
    }
  }
}
</script>

<style scoped lang="scss">
.input{
  width: 130pt;
  height:30pt;
}
</style>
