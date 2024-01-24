<script>
    // Hier import ik de components die nodig zijn in deze pagina
    import { Search, Nav, LinkButton } from '$lib/index.js';
    // Hier export ik de data zodat ik de data vanuit hygraph kan gebruiken die ik query in de page.server
    export let data;

    console.log(data.hygraphData.contacts);
</script>

<header> 
     <Nav />
     <Search 
     cardData={data.apiBooks.results.concat(data.apiEBooks.results, data.apiAudioBooks.results)}/>
  
</header>

<h1>Contact</h1>

{#each data.hygraphData.contacts as contactSection}
    <section>
        <h2>{contactSection.title}</h2>
        <p>
            {contactSection.description}
        </p>
        <div>
            <LinkButton 
            buttonText="meer"
            buttonLink="https://www.oba.nl/service/contact.html"/>
        </div>
        {#if contactSection.image != null && contactSection.image != undefined}
            <img src={contactSection.image.url} alt={contactSection.title}>
        {/if}
    </section>
{/each}



<style>
    header{
        width: 100%;
        height: 15vh;
    }

    section{
        height: fit-content;
        display: flex;
        flex-direction: column;
        padding: 0 1.5em 2.5rem 1.5rem;
        height: 75vh;
    }

    section > *{
        max-width: 35rem;
    }

    section:nth-child(odd){
        background-color: var(--primary-light-color);
    }

    h1{
        padding: 1.5rem;
        font-size: 3rem;
    }

    h2{
        padding-top: 2.5rem;
        padding-bottom: 1.5rem;
    }   

    p:first-of-type{
        padding-bottom: 0;
    }

    div{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin-top: 2rem;
    }

    @media only screen and (min-width: 45rem) { 
        h1 {
            font-size: 2rem;
        }
    }
</style>