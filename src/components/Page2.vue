<template>
    <div id="page2">
        <div id="title">{{$t('txt.page2_title')}}</div>
        <div id="txt1">{{$t('txt.page2_txt1')}}</div>
        <div id="txt2">{{$t('txt.page2_txt2')}}</div>
        <!-- <img src="" alt="page2_img"> -->
        <div id="img"></div>
    </div>
</template>

<script>
export default {
    name: "Page2",
};
</script>

<style scoped>
#page2 {
    width: 100%;
    height: 100%;
    background-color: whitesmoke;
}
#title {
    width: 70%;
    position: relative;
    top: 30%;
    left: 9%;
    font-size: 3rem;
    font-weight: 900;
    color: blue;
}
#txt1 {
    width: 100%;
    font-size: 1.4rem;
    color: dimgray;
    position: relative;
    top: 45%;
    left: 9%;
}
#txt2 {
    width: 100%;
    font-size: 1.4rem;
    color: dimgray;
    position: relative;
    top: 55%;
    left: 9%;
}
#img {
    height: 64%;
    width: 30%;
    background-color: bisque;
    position: relative;
    left: 64%;
}
</style>