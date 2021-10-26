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
    height: 49rem;
    width: 100%;
    background-color: dodgerblue;
}
#title {
    position: relative;
    top: 10rem;
    left: 7rem;
    font-size: 3.5rem;
    font-weight: 900;
    color: white;
}
#txt {
    width: 100%;
    font-size: 1.4rem;
    color: white;
    position: relative;
    top: 15rem;
    left: 7rem;
}
button {
    width: 9rem;
    height: 5rem;
    border-color: white;
    color: cornflowerblue;
    -moz-border-radius: .5rem;
    -webkit-border-radius: .5rem;
    border-radius: .5rem; /* future proofing */
    -khtml-border-radius: .5rem; /* for old Konqueror browsers */
    vertical-align: middle;
    font-weight: 700;
    font-size: 1.7rem;
    position: relative;
    left: 7rem;
    top: 24rem;
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
    height: 20rem;
    width: 30rem;
    background-color: bisque;
    position: relative;
    left: 56rem;
    top: 5rem;
}
</style>
