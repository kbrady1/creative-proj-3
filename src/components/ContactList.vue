<template>
<div class="wrapper">
  <div class="contacts" :class="contacts.length === 0 ? 'hidden' : 'notHidden'">
    <div class="contact" v-for="contact in contacts" :key="contact.id">
      <div class="contact-info">
        <div class="image">
          <img :src="contact.image">
        </div>
        <button class="info" v-on:click.prevent="showDetails(contact)">
          <h2>{{contact.last_name}}, {{contact.first_name}}</h2>
        </button>
        <button v-on:click.prevent="addToFavorites(contact)"><i class="far fa-star" :class="contact.isFavorite ? 'favorite' : 'notFavorite'"></i></button>
      </div>
      <hr>
    </div>
  </div>
  <div class="contacts" :class="contacts.length != 0 ? 'hidden' : 'notHidden'">
    <h4>No Favorites Currently Saved</h4>
  </div>
</div>
</template>
<script>
export default {
  name: 'ContactList',
  props: {
    contacts: Array,
    isDetail: Boolean
  },
  methods: {
    addToFavorites: function (contact) {
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
    },
    showDetails: function (contact) {
      this.$root.$data.selectedContact = contact;
      this.$router.push('details');
    }
  },
}
</script>
<style scoped>
.hidden {
  visibility: hidden;
}
.notHidden {
  visibility: visible;
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
  background-color: #fafafa;
  border: none;
}
button:hover {
  color: #D6D32E;
}
button:focus {
  outline: none;
}
.contacts {
  display: flex;
  flex-direction: column;
  background-color: #fafafa;
  padding: 8px;
  margin: 32px;
  border-radius: 8px;
}
.contact-info {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
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
