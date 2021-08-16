<template>
  <div class="col-12">
    <div class="row">
      <div class="col-12 d-flex flex-row my-3">
        <h4 class="mr-auto ml-3">
          Bugs
        </h4>
        <!-- Create Bug Button -->
        <div v-if="account.id">
          <button type="button" class="btn btn-success text-shadow" data-toggle="modal" data-target="#createBugModal">
            Report Bug
          </button>
        </div>
      </div>
      <!-- Bug Thread -->
      <div class="col-12">
        <BugThread :bugs="bugs" />
      </div>
    </div>
  </div>
  <CreateBugModal />
</template>

<script>
import { computed, onMounted } from '@vue/runtime-core'
import { bugsService } from '../services/BugsService'
import { AppState } from '../AppState'
export default {
  setup() {
    const account = computed(() => AppState.account)
    onMounted(() => {
      bugsService.getAllBugs()
    })
    return {
      account,
      bugs: computed(() => AppState.bugs)
    }
  }
}
</script>

<style scoped lang="scss">

</style>
