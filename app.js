const { createApp } = Vue;

const app = createApp({
    data() {
        return {
            // Add any reactive state here later
            isMenuOpen: false
        };
    },
    methods: {
        // Add component logic here
        toggleMenu() {
            this.isMenuOpen = !this.isMenuOpen;
        }
    },
    mounted() {
        console.log('Lubrinum Vue application initialized.');
    }
});

app.mount('#app');
