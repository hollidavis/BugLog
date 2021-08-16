<template>
  <div class="row">
    <!-- Header -->
    <div class="col-12 mb-2">
      <div class="row bg-light rounded p-3 mx-1 d-flex flex-row align-items-center">
        <!-- Title -->
        <div class="col-md-3 text-center">
          <h5 class="">
            Title:
          </h5>
        </div>
        <!-- Reported By -->
        <div class="col-md-3 text-center">
          <h5 class="">
            Reported By:
          </h5>
        </div>
        <!-- Last Modified -->
        <div class="col-md-3 text-center">
          <h5 class="">
            Last Modified:
          </h5>
        </div>
        <!-- Status -->
        <div class="col-md-3 text-center">
          <h5 class="">
            Status:
          </h5>
          <button type="button" class="btn btn-sm btn-info" @click.stop="filterBugs('all')">
            All
          </button>
          <button type="button" class="btn btn-sm btn-success mx-1" @click.stop="filterBugs('open')">
            Open
          </button>
          <button type="button" class="btn btn-sm btn-danger" @click.stop="filterBugs('closed')">
            Closed
          </button>
        </div>
      </div>
    </div>
    <!-- Bug Cards -->
    <div class="w-100" v-if="state.filterClosed === true">
      <div class="col-12" v-for="b in closed" :key="b.id">
        <Bug :bug="b" />
      </div>
    </div>
    <div class="w-100" v-else-if="state.filterOpen === true">
      <div class="col-12" v-for="b in open" :key="b.id">
        <Bug :bug="b" />
      </div>
    </div>
    <div class="w-100" v-else-if="state.filterAll === true">
      <div class="col-12" v-for="b in bugs" :key="b.id">
        <Bug :bug="b" />
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from '@vue/reactivity'
import { computed } from '@vue/runtime-core'
import { AppState } from '../AppState'
export default {
  props: {
    bugs: { type: Array, required: true }
  },
  setup() {
    const state = reactive({
      filterAll: true,
      filterClosed: false,
      filterOpen: false
    })
    return {
      state,
      open: computed(() => AppState.bugs.filter(bug => bug.closed === false)),
      closed: computed(() => AppState.bugs.filter(bug => bug.closed === true)),
      async filterBugs(filter) {
        if (filter === 'all') {
          state.filterAll = true
          state.filterClosed = false
          state.filterOpen = false
        } else if (filter === 'open') {
          state.filterAll = false
          state.filterClosed = false
          state.filterOpen = true
        } else if (filter === 'closed') {
          state.filterAll = false
          state.filterClosed = true
          state.filterOpen = false
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
