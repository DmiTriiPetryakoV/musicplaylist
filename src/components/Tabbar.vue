<template>
    <div id="tabbar">
        <div class="box">
        <button class="tab" id="home"></button>
                     <p>Home</p>
        </div>
        <div class="box">
        <button class="tab" id="search"></button>
                    <p>Search</p>       
        </div>
        <div class="box">
        <button class="tab" id="library"></button>
                    <p>Library</p>
        </div>
        <div class="box">
            <button id="menu" class="tab"></button>
            <p>Settings</p>
        </div>
    </div>
</template>

<script>



</script>
<style scoped>
#tabbar{
    width:100%;
    height:100%;
    display:grid;
    grid-template-columns:repeat(4,1fr);
    background-color:var(--grey);
    align-items:center;
    align-content:center;
    overflow-y:hidden;
}
.tab{
    width:2.8rem;
    height:3rem;
    display:flex;
}
.box{   
    display:grid;
    grid-template-rows:80% 20%;
    width:100%;
    height:80%;
    align-content:center;
    align-items:center;
    align-self:center;
    justify-content:center;
    justify-items:center;
}
#search {
    width:3.2rem;
    background-image:url('/musicplaylist/lupabg.png');
    background-size:cover;
    border:0;
    transition:transform 1s ease;
    background-color:transparent;
}
#search:hover{
    transform:rotate(360deg) scale(1.05);
}
#library{
    width:3.2rem;
    background-image:url('/musicplaylist/library.png');
    background-size:cover;
    border:0;
    transition: transform 0.3s ease;
    background-color:transparent;
}
#library:hover{
    transform:scale(1.03) translateY(-5px) ;
}
#home{
    width:5rem;
    height:2.7rem;
    background-image:url('/musicplaylist/home.png');
    background-size:cover;
    border:0;
    transition: transform 0.3s ease;
    background-color:transparent;
}
#home:hover{
    transform:scale(1.03) translateY(-5px) ;
}
p{
    grid-row:2;
    font-size:0.9rem;
}
#home p {
    margin-left:0.8rem;
}
#menu{
    height:3rem;
    background-image:url('/musicplaylist/settings2.png');
    border:0;
    width:3rem;
    background-color:linear-gradient(135deg var(--color-main) , var(--accent));
    transition:transform 0.5s ease;
    background-size: contain;
}
#menu:hover{
    transform:scale(1.1);
}


</style>