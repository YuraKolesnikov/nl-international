<template>
  <div class="container">
    <h1>Editing user {{id}}</h1>
    <div class="row">
      <div class="col-md-6 col-sm-12 offset-md-3">
        <UserForm
          :user="user"
          :updateManager="updateManager"
        />
      </div>
    </div>
  </div>
</template>
<script>
import UserForm from '@/components/UserForm'
import { mapState, mapActions, mapGetters } from 'vuex'
export default {
  components: { UserForm },
  data() {
    return {
      id: this.$route.params.id,
      user: {}
    }
  },
  computed: {
    ...mapGetters('admin', ['MANAGER'])
  },
  methods: {
    ...mapActions('admin', ['UPDATE_MANAGER']),
    async updateManager(payload) {
      await this.UPDATE_MANAGER(payload)
      this.$router.replace({ path: '/users' })
    }
  },
  created() {
    this.user = {...this.MANAGER(this.id)}
  }
}
</script>