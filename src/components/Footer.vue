<template>
    <div id="footer">
        <div id="title">{{$t('txt.footer_title')}}</div>
        <div id="email">{{$t('txt.footer_email')}}</div>
        <div id="band">{{$t('txt.footer_band')}}</div>
    </div>
</template>

<script>
export default {
    name: "Foot",
};
</script>

<style scoped>
#footer {
    width: 100%;
    height: 8rem;
    background-color: blue;
    color: white;
}
#title {
    position: relative;
    top: 1.5rem;
    left: 10rem;
    font-size: 1.2rem;
    font-weight: 500;
}
#email {
    width: 100%;
    font-size: 1rem;
    font-weight: 400;
    position: relative;
    top: 1.7rem;
    left: 10rem;
}
#band {
    position: relative;
    bottom: -3rem;
    text-align: center;
}
</style>