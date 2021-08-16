<template>
  <div class="row mt-3">
    <!-- Header -->
    <div class="col-12 mb-2">
      <div class="bg-light rounded p-3 d-flex flex-row align-items-center">
        <h5 class="m-0 mr-auto">
          Notes:
        </h5>
        <div v-if="account.id == bug.creatorId">
          <button type="button"
                  class="btn btn-success text-shadow"
                  data-toggle="modal"
                  data-target="#createNoteModal"
                  v-if="bug.closed === false"
                  title="Create Note Button"
          >
            New Note
          </button>
        </div>
      </div>
    </div>
    <!-- Note Cards -->
    <div class="col-12" v-for="n in notes" :key="n.id">
      <Note :note="n" :bug="bug" />
    </div>
  </div>
</template>

<script>
import { computed } from '@vue/runtime-core'
import { AppState } from '../AppState'
export default {
  props: {
    notes: { type: Array, required: true },
    bug: { type: Object, required: true }
  },
  setup() {
    const account = computed(() => AppState.account)
    return {
      account
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
