<template>
    <div id="page3">
        <div id="title">{{$t('txt.page3_title')}}</div>
        <div id="txt1">{{$t('txt.page3_txt1')}}</div>
        <div id="txt2">{{$t('txt.page3_txt2')}}</div>
        <div id="txt3">{{$t('txt.page3_txt3')}}</div>
        <!-- <img src="" alt="page3_img"> -->
        <div id="img"></div>
    </div>
</template>

<script>
export default {
    name: "Page3",
};
</script>

<style scoped>
#page3 {
    width: 100%;
    height: 49rem;
    background-color: white;
}
#title {
    position: relative;
    top: 15rem;
    left: 50rem;
    font-size: 3rem;
    font-weight: 900;
    color: blue;
}
#txt1 {
    font-size: 1.4rem;
    color: dimgray;
    position: relative;
    top: 20rem;
    left: 50rem;
}
#txt2 {
    font-size: 1.4rem;
    color: dimgray;
    position: relative;
    top: 21rem;
    left: 50rem;
}
#txt3 {
    font-size: 1.4rem;
    color: dimgray;
    position: relative;
    top: 22rem;
    left: 50rem;
}
#img {
    height: 20rem;
    width: 30rem;
    background-color: bisque;
    position: relative;
    left: 10rem;
    top: 5rem;
}
</style>