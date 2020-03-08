<template>
<div>
  <div class="wrapper">
    <div class="image">
      <img :src="contact.image">
    </div>
    <div class="header">
      <h1>{{contact.last_name}}, {{contact.first_name}}</h1>
      <button v-on:click.prevent="addToFavorites(contact)"><i class="far fa-star" :class="contact.isFavorite ? 'favorite' : 'notFavorite'"></i></button>
    </div>
  </div>
  <div class="details">
    <div class="row">
      <h4>Gender</h4>
      <h4>{{contact.gender}}</h4>
    </div>
    <div class="row">
      <h4>Phone Number</h4>
      <h4>{{contact.phone_number}}</h4>
    </div>
    <div class="row">
      <h4>Email</h4>
      <h4>{{contact.email}}</h4>
    </div>
    <div class="row">
      <h4>City</h4>
      <h4>{{contact.city}}, {{contact.state}}</h4>
    </div>
    <div class="notes-body">
      <h4>Notes</h4>
      <textarea class="notes" v-model="contact.notes" placeholder="Record notes here about this contact.">
      </textarea>
    </div>
  </div>
</div>
</template>

<script>
import ContactList from "../components/ContactList.vue"

export default {
  name: 'Details',
  components: {
    ContactList
  },
  computed: {
    contact() {
      let contact = this.$root.$data.contacts.filter(contact => contact.id === this.$root.$data.selectedContact.id)[0];
      if(!contact) {
        this.$router.push('/');
      } else {
        return contact;
      }
    }
  },
  methods: {
    addToFavorites: function(contact) {
      if("isFavorite" in contact) {
        contact.isFavorite = !contact.isFavorite;
        if(contact.isFavorite) {
          this.$root.$data.favorites.push(contact)
        } else {
          for(let i = 0; i < this.$root.$data.favorites.length; i++) {
            if(this.$root.$data.favorites[i].id === contact.id) {
              this.$root.$data.favorites.splice(i, 1);
              break;
            }
          }
        }
      } else {
        contact.isFavorite = true;
        this.$root.$data.favorites.push(contact);
      }

      this.$forceUpdate();
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

.header {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  vertical-align: baseline;
}

img {
  height: 80px;
}

.image {
  height: 80px;
}

i {
  display: table-cell;
  padding-left: 10px;
  width: 1px;
}

.notes-body {
  width: 80%;
}

textarea {
  width: 100%;
}

.details {
  padding: 0px 32px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.row {
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.favorite {
  font-size: 2.5em;
  color: #D6D32E;
}
.notFavorite {
  font-size: 2.5em;
  color: #2c3e50;
}
button {
  background-color: #eee;
  border: none;
}
button:hover {
  color: #dae782;
}
button:focus {
  outline: none;
}
.info {
  width: 300px;
  padding: 0px 12px;
  text-align: left;
  justify-content: right;
}

.info:hover {
  color: #82A5E7;
}
</style>
