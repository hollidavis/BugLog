<template>
  <div class="row">
    <div class="col-12">
      <div class="bg-primary text-light rounded">
        <div class="row align-items-center">
          <div class="d-flex align-items-center">
            <!-- Picture -->
            <img class="profile-pic ml-3" :src="note.creator?.picture" :alt="note.creator?.name + 'Profile Picture'">
            <!-- Reported/Name -->
            <div class="ml-3">
              <p class="m-0">
                <b>{{ note.creator?.name }}</b>
              </p>
            </div>
          </div>
        </div>
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
.profile-pic{
  max-height: 10vh;
  object-fit: cover;
  object-position: center;
  border-radius: 50%;
}
</style>
