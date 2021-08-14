<template>
  <div class="row">
    <div class="col-12">
      Note Thread Header
    </div>
  </div>
  <div class="row">
    <div class="col-12" v-for="n in notes" :key="n.id">
      <Note :note="n" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    notes: { type: Array, required: true }
  },
  setup() {
    return {}
  }
}
</script>

<style lang="scss" scoped>

</style>
