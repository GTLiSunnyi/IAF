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
    height: 100%;
    width: 100%;
}
#head {
    position: fixed;
    height: 12%;
    width: 100%;
    top: 0;
    background-color: white;
    z-index: 1;
}
#logo {
    width: 2.6%;
    height: 100%;
    position: absolute;
    left: 3%;
    top: 5%;
}
#changeLang {
    width: 4%;
    height: 70%;
    position: absolute;
    border-color: cornflowerblue;
    color: cornflowerblue;
    background-color: white;
    -moz-border-radius: 5px;
    -webkit-border-radius: 5px;
    border-radius: 5px; /* future proofing */
    -khtml-border-radius: 5px; /* for old Konqueror browsers */
    vertical-align: middle;
    font-weight: 700;
    font-size: 100%;
    right: 3%;
    top: 15.5%;
}
#changeLang:hover {
    cursor: pointer;
}
</style>
