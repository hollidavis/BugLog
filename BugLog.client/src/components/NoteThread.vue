<template>
  <div class="row mt-3">
    <!-- Header -->
    <div class="col-12 mb-2">
      <div class="bg-light rounded p-3 d-flex flex-row justify-content-around">
        Header?
      </div>
    </div>
    <!-- Note Cards -->
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
