<script>
    import { Card } from "$lib/index.js"
    import { onMount } from 'svelte';
    import {Searchsvg} from "$lib/index.js"
    
    export let cardData;
    let value = '';
    let error = '';
    let showDialog = false;

function openDialog() {
  showDialog = true;
}

function closeDialog() {
  showDialog = false;
  error = '';
}
// console.log(cardData)

onMount(() => {
    const searchInput = document.getElementById('zoekinput');

    searchInput.addEventListener('input', submitted);

    return () => {
      // Cleanup event listener when component is unmounted
      searchInput.removeEventListener('input', submitted);
    };
  });

  function submitted(event) {
    event.preventDefault();

    const searchValue = event.target.value.toLowerCase();
    const filteredCards = Object.values(cardData).filter(card => card.frabl.key1.toLowerCase().includes(searchValue));

    if (filteredCards.length === 0) {
      error = 'Geen resultaten gevonden';
    } else {
      cardData = filteredCards;
      error = '';
    }
    if (searchValue.trim() === '') {
      closeDialog();
    }
  }

</script>
<section>
  <div on:click={openDialog} class="button">
    <form action="" on:submit={submitted}>
      <input id="zoekinput" type="text" placeholder="Zoek.." name="search" bind:value autocomplete="off">
      <a href={value} ><img src={Searchsvg} alt="submit" width="35"></a>
   </form> 
  </div>
  {#if showDialog}
        <div class="model">
                <p>Je zoekt: <span>{value}</span></p> 
                <!-- <article>
                  <a href={value}>Toon meer</a>
                  <button on:click={closeDialog}>Sluiten</button>
                  </article> -->
            {#if error}
                <h2>{error}</h2>
                {:else}
              <ul>
              {#each Object.values(cardData) as card}  
                  <a href={card.detailLink}>
                      <li>
                          <img src="{card.coverimages[0]}" alt="foto van {card.frabl.key1}" loading="lazy" width="50" height="50">
                          <p>{card.frabl.key1}</p>
                      </li>
                    </a>
              {/each}
            </ul>
            {/if}
          
        </div>   
{/if}

</section>

<style>

    .button{
        all: unset;
        position: fixed;
        left: 25%;
        top: 0;
        padding: 1rem;
        border-radius: 0 0 1rem 1rem;
        background-color: var(--primary-accent-color);
        color: var(--primary-light-color);
        text-decoration: none;
        z-index: 999;
          
    }
    .model{
        background-color: var(--primary-background-color);
        position: fixed;
        left: 25%;
        top:9.5%;
        width: 70vw;
        height: 50vh;
        box-shadow: rgba(0, 0, 0, 0.25) 0 0.875rem 1.75rem, rgba(0, 0, 0, 0.22) 0px 0.625rem 0.625rem;
        border-radius: 0.625rem;
        padding: 1rem;
        overflow-y: auto;
        z-index: 999;
    }
    form{
    text-align: center;
    display: flex;
    align-items: center;
}

    input{
        padding: .8rem .2rem; 
    }
    button{
        all: unset;
        padding: 1rem .5rem;
       background-color: var(--primary-accent-color);
       color: var(--primary-light-color);
    }
    article a{
      all: unset;
        padding: 1rem .5rem;
       background-color: var(--primary-accent-color);
       color: var(--primary-light-color);
    } 
    .close-button{
      position: absolute;
      right: 3%;
      bottom: 3%;
    }
    ul{
        padding: 1.5rem ;
    }
    li{
        list-style: none;
        border-bottom: 1px solid rgb(172, 171, 171);
        display: flex;
        align-items: center;
        gap: 1rem;
        margin-bottom: .5rem;

    }
    span{
        color: var(--primary-accent-color);
        font-weight: 900;
    }
    h2{
        padding: 1.5rem ;
        text-align: center;
    }
    article{
      display: flex;
    align-items: center;
    top: 85%;
    justify-content: space-between;
      position: sticky;
    }
</style>