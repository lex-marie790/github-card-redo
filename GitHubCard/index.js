import axios from 'axios';
/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
axios.get('https://api.github.com/users/lex-marie790')
  .then(res => {
    console.log(res)
    const myCard = res.data;
    const cards = document.querySelector('.cards')
    cards.appendChild(createCard(myCard))
  })
  .catch(err => {
    console.log('Error:', err)
  })
/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = [];

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/
function createCard(items) {
  let container = document.createElement('div')
  let userImg = document.createElement('img');
  let cardInfo = document.createElement('div')
  let usersName = document.createElement('h3')
  let usersName1 = document.createElement('p')
  let usersLocation = document.createElement('p')
  let usersProfile = document.createElement('p')
  let usersUrl = document.createElement('a')
  let usersFollowers = document.createElement('p')
  let usersFollowing = document.createElement('p')
  let usersBio = document.createElement('p')



  // add class names to elements
  container.classList.add('card');
  cardInfo.classList.add('card-info');
  usersName.classList.add('name');
  usersName1.classList.add('username');

  // set attributes
  userImg.src = items.avatar_url;

    // append items
  container.appendChild(cardInfo)
  container.appendChild(userImg);
  cardInfo.appendChild(usersName)
  cardInfo.appendChild(usersName1)
  cardInfo.appendChild(usersLocation)
  cardInfo.appendChild(usersProfile)
  cardInfo.append(usersFollowers)
  cardInfo.append(usersFollowing)
  cardInfo.append(usersBio)
  usersProfile.append(usersUrl)

  // fill in rest of items
  usersName.textContent = "Username: " + items.login
  usersName1.textContent = "Name: " + items.name
  usersLocation.textContent = "Location: " + items.location
  usersProfile.textContent = "URL: " + items.url
  usersFollowers.textContent = "Followers: " + items.followers
  usersFollowing.textContent = "Following: " + items.following
  usersBio.textContent = "Bio: " + items.bio
  usersProfile.textContent = "Profile: " + items.html_url

  return container
}

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
