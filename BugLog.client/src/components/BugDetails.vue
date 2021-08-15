<template>
  <div class="row mt-3">
    <div class="col-12">
      <div class="bg-light rounded p-3">
        {{ bug }}
      </div>
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
