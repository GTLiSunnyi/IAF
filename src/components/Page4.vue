<template>
    <div id="page4">
        <div id="title">{{$t('txt.page4_title')}}</div>
        <div id="txt1">{{$t('txt.page4_txt1')}}</div>
        <div id="txt2">{{$t('txt.page4_txt2')}}</div>
        <div id="txt3">{{$t('txt.page4_txt3')}}</div>
        <!-- <img src="" alt="page2_img"> -->
        <div id="img"></div>
    </div>
</template>

<script>
export default {
    name: "Page4",
};
</script>

<style scoped>
#page4 {
    width: 100%;
    height: 49rem;
    background-color: whitesmoke;
}
#title {
    position: relative;
    top: 16rem;
    left: 7rem;
    font-size: 3rem;
    font-weight: 900;
    color: blue;
}
#txt1 {
    font-size: 1.4rem;
    color: dimgray;
    position: relative;
    top: 22rem;
    left: 7rem;
}
#txt2 {
    font-size: 1.4rem;
    color: dimgray;
    position: relative;
    top: 23rem;
    left: 7rem;
}
#txt3 {
    font-size: 1.4rem;
    color: dimgray;
    position: relative;
    top: 24rem;
    left: 7rem;
}
#img {
    height: 20rem;
    width: 30rem;
    background-color: bisque;
    position: relative;
    left: 58rem;
    top: 5rem;
}
</style>