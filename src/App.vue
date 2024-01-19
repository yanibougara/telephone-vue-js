<template>
    <div id="app">
        <router-link to="/">Clavier Numérique</router-link> |
        <router-link to="/call-log">Journal d'Appels</router-link> |
        <router-link to="/contact-list">Liste de Contacts</router-link> |
        <router-link to="/add-contact">Ajouter un Contact</router-link>

 <router-view :contacts="contacts" @add-contact="addContact" @call-contact="callContact" />    </div>
</template>

<script>
import AddContactForm from "@/views/AddContactForm.vue";

export default {
  data() {
    return {
      contacts: [],
      callLog: [],
      currentCallNumber: null, 
    };
  },
  methods: {
    addContact(newContact) {
      this.contacts.push(newContact);

      const callEntry = {
        dateTime: new Date().toLocaleString(),
        contact: newContact.contactName || newContact.phoneNumber,
      };
      this.callLog.unshift(callEntry);
    },
    callContact(contact) {
      this.currentCallNumber = contact.phoneNumber;
    },
    makeCall() {
      if (this.currentCallNumber) {
        const callEntry = {
          dateTime: new Date().toLocaleString(),
          contact: this.currentCallNumber,
        };
        this.callLog.unshift(callEntry);

        // Réinitialisez le numéro d'appel en cours après avoir effectué l'appel
        this.currentCallNumber = null;
      }
    },
  },
  components: {
    AddContactForm,
  },
};
</script>


<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
    display: flex;
    flex-direction: column;
}

router-link {
    margin: 0 10px;
    text-decoration: none;
    font-weight: bold;
    color: #3498db;
}

router-link:hover {
    color: #2980b9;
}

.container {
    display: flex;
    flex-direction: column;
}
</style>
