<template>
  <div class="row bg-light mt-3">
    <div class="col-12">
      {{ bug }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    bug: { type: Object, required: true }
  },
  setup() {
    return {}
  }
}
</script>

<style lang="scss" scoped>

</style>
