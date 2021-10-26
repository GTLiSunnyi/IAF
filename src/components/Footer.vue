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
    height: 30%;
    background-color: blue;
    color: white;
}
#title {
    width: 70%;
    position: relative;
    top: 23%;
    left: 9%;
    font-size: 1.2rem;
    font-weight: 500;
}
#email {
    width: 100%;
    font-size: 1rem;
    font-weight: 400;
    position: relative;
    top: 29%;
    left: 9%;
}
#band {
    position: relative;
    bottom: -43%;
    text-align: center;
}
</style>