<template>
  <div class="row">
    <!-- Header -->
    <div class="col-12 mb-2">
      <div class="bg-light rounded p-3 d-flex flex-row justify-content-around">
        <!-- Title -->
        <div class="w-25 text-center">
          <h5 class="m-0">
            Title:
          </h5>
        </div>
        <!-- Reported By -->
        <div class="w-25 text-center">
          <h5 class="m-0">
            Reported By:
          </h5>
        </div>
        <!-- Last Modified -->
        <div class="w-25 text-center">
          <h5 class="m-0">
            Last Modified:
          </h5>
        </div>
        <!-- Status -->
        <div class="w-25 text-center">
          <h5 class="m-0">
            Status:
          </h5>
        </div>
      </div>
    </div>
    <!-- Bug Cards -->
    <div class="col-12" v-for="b in bugs" :key="b.id">
      <Bug :bug="b" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    bugs: { type: Array, required: true }
  },
  setup() {
    return {}
  }
}
</script>

<style lang="scss" scoped>

</style>
