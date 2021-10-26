<template>
    <div id="app">
        <div id="head">
            <img id ="logo" alt="IAF logo" src="./assets/logo.png" />
            <button id="changeLang" @click="changeLang">
                {{ $t("language.name") }}
            </button>
        </div>
        <Page1 />
        <Page2 />
        <Page3 />
        <Page4 />
        <Footer />
    </div>
</template>

<script>
import Page1 from "./components/Page1.vue";
import Page2 from "./components/Page2.vue";
import Page3 from "./components/Page3.vue";
import Page4 from "./components/Page4.vue";
import Footer from "./components/Footer.vue";

export default {
    name: "App",
    methods: {
        changeLang() {
            if (this.$i18n.locale == "zh") {
                this.$i18n.locale = "en";
            } else {
                this.$i18n.locale = "zh";
            }
        },
    },
    components: {
        Page1,
        Page2,
        Page3,
        Page4,
        Footer,
    },
};
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: left;
    color: #2c3e50;
}
#head {
    position: fixed;
    top: 0;
    width: 100%;
    height: 3rem;
    background-color: white;
    z-index: 1;
}
#logo {
    width: 2rem;
    height: 2rem;
    position: fixed;
    left: 3rem;
    top: .7rem;
}
#changeLang {
    width: 4.6rem;
    height: 2rem;
    position: fixed;
    border-color: cornflowerblue;
    color: cornflowerblue;
    background-color: white;
    -moz-border-radius: .5rem;
    -webkit-border-radius: .5rem;
    border-radius: .5rem; /* future proofing */
    -khtml-border-radius: .5rem; /* for old Konqueror browsers */
    vertical-align: middle;
    font-weight: 700;
    font-size: 100%;
    right: 3rem;
    top: .5rem;
}
#changeLang:hover {
    cursor: pointer;
}
</style>
