<template>
  <div class="row">
    <div class="col-12">
      <div class="bg-primary text-light rounded">
        {{ note }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    note: { type: Object, required: true }
  },
  setup() {
    return {}
  }
}
</script>

<style lang="scss" scoped>

</style>
