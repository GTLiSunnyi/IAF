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
    width: 43rem;
    font-size: 1.4rem;
    color: dimgray;
    position: relative;
    top: 22rem;
    left: 7rem;
}
#txt2 {
    width: 43rem;
    font-size: 1.4rem;
    color: dimgray;
    position: relative;
    top: 25rem;
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