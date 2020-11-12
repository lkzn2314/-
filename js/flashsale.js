window.addEventListener('load', function() {
    var pre = document.querySelector('.flashsale_prev');
    var next = document.querySelector('.flashsale_next');    
    var ul = document.querySelector('.focus_flashsale').querySelector('ul');
    var num = 0;
    var first = ul.children[0].cloneNode(true);
    var second = ul.children[1].cloneNode(true);
    var third = ul.children[2].cloneNode(true);
    var forth = ul.children[3].cloneNode(true);
    ul.appendChild(first);
    ul.appendChild(second);
    ul.appendChild(third);
    ul.appendChild(forth);
    // pre和next方向写反了
    pre.addEventListener('click', function() {
        if (num == 3) {
            ul.style.left = 0;
            num = 0;
        }
        num++;
        animate(ul, - num * 978 );
    });
    
    next.addEventListener('click', function() {
        if (num == 0) {
            num = 3;
            ul.style.left = - num * 978 + 'px';
        }
        num--;
        animate(ul, - num * 978 );
    })
    setInterval(function() {
        pre.click();
    }, 9000)
    
    
})