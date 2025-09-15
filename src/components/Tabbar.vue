<template>
    <div id="tabbar">
        <button class="tab" id="home"></button>
        <button class="tab" id="search">
        </button>
        <button class="tab" id="library"></button>
    </div>
</template>

<script>

</script>
<style scoped>
#tabbar{
    width:100%;
    height:100%;
    gap:20%;
    display:flex;
}
.tab{
    width:3rem;
    height:3rem;
    display:flex;
    margin-left:1rem;
}
#search {
    width:3.5rem;
    height:3.5rem;
    background-image:url('lupabg.png');
    background-size:cover;
    background-color:linear-gradient(135deg var(--color-main) , var(--accent));
    border:0;
    transition:transform 1s ease;
}
#search:hover{
    transform:rotate(340deg) scale(1.05);
}
#library{
    width:3.5rem;
    height:3.5rem;
    background-image:url('library.png');
    background-size:cover;
    background-color:linear-gradient(135deg var(--color-main) , var(--accent));
    border:0;
    transition: transform 0.3s ease;
}
#library:hover{
    transform:scale(1.03) translateY(-5px) ;
}
#home{
    width:4rem;
    height:3rem;
    background-image:url('home.png');
    background-size:cover;
    background-color:linear-gradient(135deg var(--color-main) , var(--accent));
    border:0;
    transition: transform 0.3s ease;
}
#home:hover{
    transform:scale(1.03) translateY(-5px) ;
}

</style>