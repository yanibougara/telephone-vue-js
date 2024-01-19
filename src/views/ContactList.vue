<template>
  <div class="list-contacts">
    <h2>Liste de Contacts</h2>
    <ul>
   <li v-for="contact in contacts" :key="contact.phoneNumber">
        {{ contact.contactName || contact.phoneNumber }}
        <button @click="callContact(contact)">Appeler</button>
        
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    contacts: Array,
  },
  methods: {
    callContact(contact) {
      console.log('Appeler le contact :', contact);
      this.$emit('make-call', contact);
    },
    callContact(contact) {
      this.$emit('call-contact', contact);
    },
  },
};
</script>

<style scoped>
.contact-liste{
display: flex;
flex-direction: row;
}
.list-contacts {
    margin-top: 30px;
    height: 300px;
    width: 210px;
    border: 1px solid black;
    box-shadow: 0 0 30px;
    border-radius: 20px;
}
</style>