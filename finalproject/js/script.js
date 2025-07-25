const topHeader = document.getElementById("topHeader");
const mainNav = document.getElementById("mainNav");

window.addEventListener("scroll", function () {
  if (window.scrollY > 200) {

    topHeader.classList.add("hidden");
    mainNav.classList.add("fixed");
    document.body.classList.add("nav-fixed");
  } else {
    topHeader.classList.remove("hidden");
    mainNav.classList.remove("fixed");
    document.body.classList.remove("nav-fixed");
  }
});

var topBtn = document.getElementById('top-btn')
window.addEventListener('scroll', () => {
  console.log('scrolling')
  console.log(topBtn)
  if (document.documentElement.scrollTop > 200) topBtn.classList.remove('d-none')
  else topBtn.classList.add('d-none')
})


if (document.querySelector('.owl-carousel')) {
    $(document).ready(function () {
        
        $(".owl-carousel").owlCarousel({
            items: 2,
            margin: 30,
            loop: true,
            nav: true,
            responsive: {
                0: {
                    items: 1
                },
                800: {
                    items: 2
                }
            },
          navText: [
        '<div class="custom-nav-btn rounded-start-pill  px-3 py-1"><i class="fa-solid fa-arrow-left fs-4"></i></div>',
        '<div class="custom-nav-btn rounded-end-pill   px-3 py-1"><i class="fa-solid fa-arrow-right fs-4"></i></div>'
      ],

        });
    });
}


document.addEventListener('DOMContentLoaded', function () {
  let filterButtons = document.querySelectorAll('.btn-ourwork a');
  let projectCards = document.querySelectorAll('.row.py-5 .col-lg-4');

  filterButtons.forEach(button => {
    button.addEventListener('click', function (e) {
      e.preventDefault();

      let filter = this.getAttribute('data-filter');

      projectCards.forEach(card => {
        let categories = card.getAttribute('data-category');
        if (filter === 'All' || (categories && categories.includes(filter))) {
          card.classList.remove('d-none');
        } else {
          card.classList.add('d-none');
        }
      });
    });
  });
});

 const counter1 = document.getElementById('counter8000');
  const counter2 = document.getElementById('counter810');
  const counter3 = document.getElementById('counter2000');
  const counter4 = document.getElementById('counter20');

  let started = false; 

  function startCounters() {
    
    let i = 0;
    let s = setInterval(() => {
      i += 10;
      counter1.innerText = i;
      if (i >= 8000) clearInterval(s);
    }, 1); 

    
    let x = 0;
    let s1 = setInterval(() => {
      x++;
      counter2.innerText = x;
      if (x >= 810) clearInterval(s1);
    }, 5);

    
    let y = 0;
    let s2 = setInterval(() => {
      y += 5;
      counter3.innerText = y;
      if (y >= 2000) clearInterval(s2);
    }, 5);

    
    let z = 0;
    let s3 = setInterval(() => {
      z++;
      counter4.innerText = z;
      if (z >= 20) clearInterval(s3);
    }, 100);
  }

  
  window.addEventListener("scroll", () => {
    if (window.scrollY >= 200 && !started) {
      startCounters();
      started = true; 
    }
  });


  
let myForm = document.getElementById('myForm')

let handleError = (element, msg = "") => {
    element.nextElementSibling.innerText = msg
}
  let emailValidation = (element) => {
    let regExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    console.log(regExp.test(element.value));
        (!regExp.test(element.value)) ?
        handleError(element, "please enter a valid email")
        : handleError(element)
}
let nameValidation = (element) => {
    let inputValue = element.value.trim()
    if (inputValue.length < 3) handleError(element, "enter at least 3 character")
    else handleError(element)

}
myForm.addEventListener('input', function (e) {
   
    if (e.target.id == "userName") {
        nameValidation(e.target)
    }
    else if (e.target.id == 'userEmail') {
        emailValidation(e.target)
    }
    
})

myForm.addEventListener('submit', function (e) {
  e.preventDefault(); 

  let inputs = myForm.querySelectorAll('input, textarea');
  let allValid = true;

  inputs.forEach((input) => {
    if (input.value.trim() === '') {
      input.nextElementSibling.innerText = "This field is required";
      allValid = false;
    } else {
      input.nextElementSibling.innerText = "";
    }
  });

});






