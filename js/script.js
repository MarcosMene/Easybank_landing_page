const navSlide =() => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.header_nav');
    
 

    burger.addEventListener('click', () => {
        //toggle Nav
        nav.classList.toggle('nav_active');
       
         // stop scroll
         document.body.classList.toggle('nav_fixed');

        //Burger Animation
        burger.classList.toggle('toggle');
    });

}

navSlide(); 