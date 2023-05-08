// var divv = document.getElementById('sidebar_message');
// var display=0;
// function changediv1(){
//   if(display==1){
//     divv.style.display='block';
//     display=0;
//   }
//   else{
//     divv.style.display='none';
//     display=1;
//   }
// }

// const changediv1 =()=>{
//   var contentDiv = document.getElementById("sidebar_message");
//   var diiv1 = document.getElementById("")
//   contentDiv.innerHTML = ;
// }
// const changediv2 =() =>{
 
// }
// const changediv3 =() =>{    
      
//     }
// var divv1=document.getElementById('sidebar_message1');
// var display1=0;
// function changediv2(){
//   if(display1==1){
//     divv1.style.display='block';
//     display1=0;
//   }
//   else{
//     divv1.style.display='none';
//     display1=1;
//   }
// }

// Get all the buttons and divs
// const buttons = document.querySelectorAll('.btn');
// const divs = document.querySelectorAll('.content');

// // Find the div with the active class and show it
// const activeDiv = document.querySelector('.content.active');
// if (activeDiv) {
//   activeDiv.style.display = 'block';
// }

// // Add event listeners to the buttons
// buttons.forEach((button) => {
//   button.addEventListener('click', () => {
//     // Get the ID of the div to show/hide
//     const target = button.getAttribute('data-target');
    
//     // Hide all the divs except for the target
//     divs.forEach((div) => {
//       if (div.id === target) {
//         div.style.display = 'block';
//       } else {
//         div.style.display = 'none';
//       }
//     });
//   });
// });

// Get all the buttons and divs
// const buttons = document.querySelectorAll('.btn');
// const divs = document.querySelectorAll('.content');

// // Find the div with the active class and show it
// const activeDiv = document.querySelector('.content.active');
// if (activeDiv) {
//   activeDiv.style.display = 'block';
// }

// // Add event listeners to the buttons
// buttons.forEach((button) => {
//   button.addEventListener('click', () => {
//     // Get the ID of the div to show/hide
//     const target = button.getAttribute('data-target');

//     // Find the currently active div
//     const activeDiv = document.querySelector('.content.active');

//     // Hide the currently active div and remove the active class
//     if (activeDiv) {
//       activeDiv.style.display = 'none';
//       activeDiv.classList.remove('active');
//     }

//     // Show the target div and add the active class
//     const targetDiv = document.getElementById(target);
//     targetDiv.style.display = 'block';
//     targetDiv.classList.add('active');
//   });
// });

// Get all the buttons and divs
// const buttons = document.querySelectorAll('.btn');
// const divs = document.querySelectorAll('.content');

// // Find the div with the active class and show it
// const activeDiv = document.querySelector('.content.active');
// if (activeDiv) {
//   activeDiv.style.display = 'block';
// }

// // Add event listeners to the buttons
// buttons.forEach((button) => {
//   button.addEventListener('click', () => {
//     // Get the ID of the div to show/hide
//     const target = button.getAttribute('data-target');

//     // Find the currently active div
//     const activeDiv = document.querySelector('.content.active');

//     // Check if the target div is the same as the currently active div
//     if (activeDiv && activeDiv.id !== target) {
//       // Hide the currently active div and remove the active class
//       activeDiv.style.display = 'none';
//       activeDiv.classList.remove('active');
//     }

//     // Show the target div and add the active class
//     const targetDiv = document.getElementById(target);
//     targetDiv.style.display = 'block';
//     targetDiv.classList.add('active');
//   });
// });
// Get all the buttons and divs
const buttons = document.querySelectorAll('.btn');
const divs = document.querySelectorAll('.content');

// Show the first div initially and hide the rest
divs.forEach((div, index) => {
  if (index === 0) {
    div.classList.add('active');
  } else {
    div.classList.remove('active');
  }
});

// Add event listeners to the buttons
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    // Get the ID of the div to show
    const target = button.getAttribute('data-target');

    // Find the target div
    const targetDiv = document.getElementById(target);

    // Add the 'active' class to the target div
    targetDiv.classList.add('active');

    // Remove the 'active' class from the other divs
    divs.forEach((div) => {
      if (div !== targetDiv) {
        div.classList.remove('active');
      }
    });
  });
});



const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})



// var openChatButton = document.getElementById("open-chat-button");
//   var chatBox = document.getElementById("chat-box");

//   openChatButton.addEventListener("click", function() {
//     chatBox.style.display = "block";
//   });


var searchIcon = document.getElementById("search-icon");
var searchInput = document.getElementById("search-input");
var message_sear=document.getElementById("message_search");
searchIcon.addEventListener("click", function() {
  searchIcon.style.display = "none";
  message_sear.style.display="none";
  searchInput.style.display = "block";
});

var searchIconn = document.getElementById("search-icon1");
var searchInputt = document.getElementById("search-input1");
var message_searr=document.getElementById("message_search1");
searchIcon.addEventListener("click", function() {
  searchIconn.style.display = "none";
  message_searr.style.display="none";
  searchInputt.style.display = "block";
});





// function searchfun() {
//   // Get the input value and convert it to lowercase
//   const input = document.getElementById("myInput");
//   const filter = input.value.toLowerCase();

//   // Get all the user name elements in the sidebar
//   const userNames = document.querySelectorAll(".sidebar__user .user_name");

//   // Loop through each user name element and hide or show it based on the filter
//   userNames.forEach((userName) => {
//     const name = userName.textContent.toLowerCase();
//     if (name.includes(filter)) {
//       userName.parentElement.style.display = "block";
//     } else {
//       userName.parentElement.style.display = "none";
//     }
//   });
// }

function searchfun() {
  // Get the input value and convert it to lowercase
  const input = document.getElementById("myInput");
  const filter = input.value.toLowerCase();

  // Get all the user elements in the sidebar
  const users = document.querySelectorAll(".sidebar__user");

  // Loop through each user element and hide or show it based on the filter
  users.forEach((user) => {
    const name = user.querySelector(".user_name").textContent.toLowerCase();
    if (name.includes(filter)) {
      user.style.display = "block";
      user.style.display = "flex";
    } else {
      user.style.display = "none";
    }
  });
}


function searchfun1() {
  let input, filter, ul, li, a, i, txtValue;
  input = document.getElementById("myInput1");
  filter = input.value.toUpperCase();
  ul = document.getElementsByTagName("ul")[0];
  li = ul.getElementsByTagName("li");

  for (i = 0; i < li.length; i++) {
    a = li[i];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}


