<section class="p-menu1">
    <nav id="navbar" class="navigation" role="navigation">
      <input id="toggle1" type="checkbox" />
      <label class="hamburger1" for="toggle1">
        <div class="top"></div>
        <div class="meat"></div>
        <div class="bottom"></div>
      </label>
    
      <nav class="menu1">
        <a class="link1" href="/">Leeslijst</a>
        <a class="link1" href="/uitleningen">Uitleningen</a>
        <a class="link1" href="/">Uitleengeschiedenis</a>
        <a class="link1" href="/betalingen">Betalingen</a>
        <a class="link1" href="/">Reserveringen</a>
        <a class="link1" href="/">Contact</a>
      </nav>
  </nav>
  </section>
  
  <style>
  
  a {
    color: var(--primary-light-color);;
    text-decoration: none;
  }
  section {
    position: absolute;
    top: 0;
    left: 9%;
    width: 15vw;
    position: fixed;
  }
    
  /* Hamburger */
  .hamburger1 {
    display: grid;
    justify-content: center;
    grid-template-rows: repeat(3, 1fr);
    padding: 2rem 3em;
    z-index: 120;
    background-color: var(--primary-accent-color);
    border-radius: 0 0 1rem 1rem;
  }
  
  .hamburger1 div {
    background-color: var(--primary-light-color);;
    position: relative;
    width: 40px;
    height: 5px;
    margin-top: 7px;
    -webkit-transition: all 0.2s ease-in-out;
    transition: all 0.2s ease-in-out;
  }
  
  #toggle1 {
    display: none;
  }
  
  #toggle1:checked + .hamburger1 .top {
    -webkit-transform: rotate(-45deg);
            transform: rotate(-45deg);
    margin-top: 2.5px;
    
  }
  
  #toggle1:checked + .hamburger1 .meat {
    -webkit-transform: rotate(45deg);
            transform: rotate(45deg);
    margin-top: -10px;
    border-radius: 0;
  }
  
  #toggle1:checked + .hamburger1 .bottom {
    -webkit-transform: scale(0);
            transform: scale(0);
            border-radius: 0;
  }
  #toggle1:checked + .hamburger1 {
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}
  #toggle1:checked ~ .menu1 {
    height: auto;
  }
  
  
  /* Menu */
  .menu1 {
    width: 100vw !important;
    background-color: var(--primary-accent-color);
    margin: 0;
    display: -ms-grid;
    display: grid;
    grid-template-rows: 1fr repeat(4, 0.5fr);
    grid-row-gap: 25px;
    list-style: none;
    clear: both;
    width: auto;
    padding: 0 1rem ;
    height: 0px;
    overflow: hidden;
    transition: height .4s ease;
    -webkit-transition: all 0.3s ease;
    transition: all 0.3s ease;
    z-index: 9;
    
  }
  
  .menu1 a:first-child {
    margin-top: 40px;
  }
  
  .menu1 a:last-child {
    margin-bottom: 40px;
  }
  
  .link1 {
    width: 100%;
    margin: 0;
    padding: 10px 0;
    font: 700 20px 'Oswald', sans-serif;
  }
  
  .link1:hover {
    background-color: var(--primary-light-color);
    padding: 1rem;
    color: rgb(61, 61, 61);
    -webkit-transition: all 0.3s ease;
    transition: all 0.3s ease;
  }

  @media only screen and (min-width: 43rem) {
    .menu1 {
    width: 50vw !important;
    }
    .hamburger1{
        width: 10vw;
    }
}
  </style>