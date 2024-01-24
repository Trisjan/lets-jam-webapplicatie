<script>
    import { LinkButton, Logo } from '$lib/index.js'
</script>
<footer>
    <article>
        <img src="{Logo}" alt="oba logo" width="200">
        <nav>
            <a href="/">Home</a>
            <a href="/leeslijst">Leeslijst</a>
            <a href="/uitleningen">Uitleningen</a>
            <a href="/reserveringen">Reserveringen</a>
            <a href="/betalingen">Betalingen</a>
          </nav>
    </article>
    <article>
        <iframe src="https://localfocuswidgets.net/63186130b1b46" height="300" width="300" style="background-color:var(--primary-light-color);"></iframe>
    </article>
</footer>
<style>
    footer{
        width: 100%;
        height: max-content;
        display: flex;
        flex-direction: column;
        background-color: var(--primary-dark-color);
        padding: 1rem;

    }
    nav{
        display: flex;
        flex-direction: column;
        
    }
    nav a{
        text-decoration: none;
        color: var(--primary-light-color);
        padding: .5rem 0;
    }

    @media only screen and (min-width: 45rem) {
        footer{
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    }

    iframe{
        width: 100%;
        height: 100%;
    }
    }

</style>