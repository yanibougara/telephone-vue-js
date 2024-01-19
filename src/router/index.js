import { createRouter, createWebHistory } from "vue-router";
import NumericalKeyboard from "@/views/NumericalKeyboard.vue";
import CallLog from "@/views/CallLog.vue";
import ContactList from "@/views/ContactList.vue";
import AddContactForm from "@/views/AddContactForm.vue";

const routes = [
    { path: "/", component: NumericalKeyboard },
    { path: "/call-log", component: CallLog },
    { path: "/contact-list", component: ContactList },
    { path: "/add-contact", component: AddContactForm },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;

