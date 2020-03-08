<template>
<div>
  <div class="wrapper">
    <h1>Contact Book</h1>
    <div class="search">
      <form class="pure-form">
        <i class="fas fa-search"></i><input v-model="searchText" />
      </form>
    </div>
  </div>
  <ContactList :contacts="contacts" :isDetail=false />
</div>
</template>

<script>
import ContactList from "../components/ContactList.vue"

export default {
  name: 'Home',
  components: {
    ContactList
  },
  data() {
    return {
      searchText: '',
    }
  },
  computed: {
    contacts() {
      return this.$root.$data.contacts.filter(contact => contact.first_name.toLowerCase().search(this.searchText.toLowerCase()) >= 0 ||
                                                        contact.last_name.toLowerCase().search(this.searchText.toLowerCase()) >= 0);
    }
  }
}
</script>
<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.search {
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 50%;
}

form {
  display: table;
  width: 100%;
}

i {
  display: table-cell;
  padding-left: 10px;
  width: 1px;
  background-color: #fff;
  border-radius: 4px;
}

input {
  display: table-cell;
  font-size: 20px;
  border: none !important;
  box-shadow: none !important;
  width: 100%;
  height: 40px;
}
</style>
