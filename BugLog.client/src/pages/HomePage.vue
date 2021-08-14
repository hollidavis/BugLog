<template>
  <div class="row w-100 my-3">
    <div class="col-12 d-flex flex-row">
      <h5 class="mr-auto ml-3">
        Bugs
      </h5>
      <div>
        <button type="button" class="btn btn-success text-shadow">
          Report Bug
        </button>
      </div>
    </div>
  </div>
  <div class="row">
    <BugThread />
  </div>
  <CreateBugModal />
</template>

<script>
import { onMounted } from '@vue/runtime-core'
export default {
  setup() {
    onMounted(() => {
      // get bugs
    })
    return {}
  }
}
</script>

<style scoped lang="scss">

</style>
