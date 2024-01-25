  <section>
  <div>
      <h1>Welkom bij OBA!</h1>
      <h3>Log in or sign up</h3>
      <form action="/action_page.php">
        <input type="text" id="fname" name="firstname" placeholder="E-mailadres of telefoonnummer...">
        <input type="text" id="lname" name="lastname" placeholder="Wachtwoord...">
  
        <input type="submit1" value="Log in">
        <a href="/signup" type="submit2">Sign up</a>
      </form>
    </div>
  </section>

<style>

  section {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }

  h1, h3 {
      color: white;
  }


  input[type=text] {
    text-align: center;
    width: 100%;
    padding: 20px 20px;
    margin: 8px 0;
    display: inline-block;
    border: none;
    border-radius: 4px;
    box-sizing: border-box;
    background-color: #F5F5F5;
  }
  
  input[type=submit1] {
    width: 20%;
    background-color: white;
    color: black;
    font-weight: bold;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    text-align: center;
  }

  a {
  text-decoration: none;
    width: 20%;
    background-color: black;
    color: white;
    font-weight: bold;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    text-align: center;
  }
  
  input[type=submit1]:hover {
    background-color: black;
    color: white;
  }
  
  a[type=submit2]:hover {
    background-color: white;
    color: black;
  }

  div {
    text-align: center;
    border-radius: 10px;
    background-color: var(--primary-accent-color);
    padding: 40px;
    height: 20em;
    width: 40rem;
    /* position: absolute; */
    /* top: 50%;
    left: 50%; */
    /* margin-right: -50%; */
    /* transform: translate(-50%, -50%); */
  }
  @media only screen and (max-width: 600px) {
  img {
    margin: 0;
  }
}
    </style>

  
