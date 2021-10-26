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
    height: 100%;
    background-color: white;
}
#title {
    width: 70%;
    position: relative;
    top: 30%;
    left: 50%;
    font-size: 3rem;
    font-weight: 900;
    color: blue;
}
#txt1 {
    width: 100%;
    font-size: 1.4rem;
    color: dimgray;
    position: relative;
    top: 37%;
    left: 50%;
}
#txt2 {
    width: 100%;
    font-size: 1.4rem;
    color: dimgray;
    position: relative;
    top: 42%;
    left: 50%;
}
#txt3 {
    width: 100%;
    font-size: 1.4rem;
    color: dimgray;
    position: relative;
    top: 47%;
    left: 50%;
}
#img {
    height: 64%;
    width: 30%;
    background-color: bisque;
    position: relative;
    left: 9%;
}
</style>