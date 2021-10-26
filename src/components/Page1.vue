<template>
    <div id="page1">
        <div id="title">{{$t('txt.page1_title')}}</div>
        <div id="txt">{{$t('txt.page1_txt')}}</div>
        <button><a href="">{{$t('txt.page1_button')}}</a></button>
        <!-- <img src="../assets/page1.png" alt="page1_img"> -->
        <div id="img"></div>
	</div>
</template>

<script>
export default {
    name: "Page1",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#page1 {
    height: 100%;
    width: 100%;
    background-color: cornflowerblue;
}
#title {
    width: 70%;
    position: relative;
    top: 30%;
    left: 9%;
    font-size: 3rem;
    font-weight: 900;
    color: white;
}
#txt {
    width: 100%;
    font-size: 1.4rem;
    color: white;
    position: relative;
    top: 45%;
    left: 9%;
}
button {
    width: 7%;
    height: 12%;
    border-color: white;
    color: cornflowerblue;
    -moz-border-radius: 5px;
    -webkit-border-radius: 5px;
    border-radius: 5px; /* future proofing */
    -khtml-border-radius: 5px; /* for old Konqueror browsers */
    vertical-align: middle;
    font-weight: 700;
    font-size: 123%;
    position: relative;
    left: 9%;
    top: 58.5%;
    background-color: transparent;
}
button:hover {
    cursor: pointer;
}
a {
    text-decoration: none;
    color: white;
}
#img {
    height: 64%;
    width: 30%;
    background-color: bisque;
    position: relative;
    left: 64%;
}
</style>
