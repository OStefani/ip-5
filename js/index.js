document.addEventListener('DOMContentLoaded', () => {
    // UA
    let ua = window.navigator.userAgent;
    var msie = ua.indexOf('MSIE ');
    var trident = ua.indexOf('Trident/');
    console.log('mse: ', msie);
    console.log('trident: ', trident);
  
    // Button
    let headerButton = document.querySelectorAll('.header__button');
    let menu = document.getElementsByClassName('nav')[0];

    for (let ind = 0; ind < headerButton.length; ind++) {
        headerButton[ind].addEventListener('click', () => {
            menu.classList.toggle('nav-list_open')
        })
    }
    /*headerButton.forEach(item => {
        item.addEventListener('click', () => {
            menu.classList.toggle('nav-list_open')
        })
    });*/

// Cursor
let listOfLinks = document.querySelectorAll('.nav-list__item');
let list = document.querySelectorAll('.nav-list__link');
let dot = document.getElementById('dot');
        let pentagon = document.getElementById('pentagon');
    if (window.innerWidth > 1000 && msie < 0 && trident < 0) {
        
    
        
        window.addEventListener('mousemove', (e) => {

            let pos = getCursorPos(e);
            positionDot(...pos);
            positionPent(...pos);
        });

        function getCursorPos(e) {
            let x = e.pageX - window.pageXOffset;
            let y = e.pageY - window.pageYOffset;
            return [x, y];
        }
        function positionDot(x, y) {
            dot.style.left = x + 'px';
            dot.style.top = y + 'px';
        }
        function positionPent(x, y) {
            setTimeout(() => {
                pentagon.style.left = x + 'px';
                pentagon.style.top = y + 'px';
            }, 500);
        }

        
    listOfLinks.forEach(link => {
        link.addEventListener('mouseover', (e) => {
           let target = e.currentTarget.children[0];
           if (target.classList.contains('nav-list__link_hover')) return;
           else {
               list.forEach(item => {
                   item.classList.remove('nav-list__link_hover');
               })
               target.classList.add('nav-list__link_hover')
            }
        })
    });

    }
    else if (msie > 0 || trident > 0) {
        document.documentElement.style.cursor = 'auto';
        dot.style.display = 'none';
        pentagon.style.display = 'none';
        for (let ind = 0; ind < list.length; ind++) {
            list[ind].style.cursor = 'pointer';
        }
    }
    
    
})