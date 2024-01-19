<template>
    <div>
        <h2>Ajouter un contact</h2>
        <div class="contact-liste">
        <form @submit.prevent="addContact">
            <label for="phoneNumber">Numéro de téléphone :</label>
            <input
                v-model="phoneNumber"
                type="text"
                id="phoneNumber"
                required
            />

            <label for="contactName">Nom du contact :</label>
            <input v-model="contactName" type="text" id="contactName" />

            <button type="submit">Ajouter</button>
        </form>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        contacts: Array,
    },
    data() {
        return {
            phoneNumber: "",
            contactName: "",
        };
    },
    methods: {
        addContact() {
            const existingContact = this.contacts.find(
                (c) => c.phoneNumber === this.phoneNumber
            );

            if (!existingContact) {
                const newContact = {
                    phoneNumber: this.phoneNumber,
                    contactName: this.contactName,
                };

                // Émettre un événement pour ajouter le contact au parent
                this.$emit("add-contact", newContact);

                // Réinitialiser les champs du formulaire
                this.phoneNumber = "";
                this.contactName = "";
            } else {
                alert("Ce contact existe déjà.");
            }
        },
    },
};
</script>

<style scoped>
form {
    display: flex;
    flex-direction: column;
    width: 161px;
    margin: 0 auto;
    gap: 14px;
}


.contact-liste{
       height: 279px;
    box-shadow: 0 0 30px;
    border-radius: 20px;
    border: 1px solid black;
}
</style>
