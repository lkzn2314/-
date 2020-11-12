window.addEventListener('load', function() {
    var arrow_l = document.querySelector('.arrow_l');
    var arrow_r = document.querySelector('.arrow_r');
    // var imgs = document.querySelector('.focus').querySelectorAll('img');
    var ul = document.querySelector('.focus').querySelector('ul');
    var ol = document.querySelector('.focus_btn');
    for (var i = 0; i < ul.children.length; i++) {
        // 写到这里是方便 arrow 按钮调用
        var focusWidth = ul.children[0].offsetWidth;
        //创建 li
        var li = document.createElement('li');
        // 把 li 插入到 ol 里
        ol.appendChild(li);
        // 给 li 追加索引 index
        li.setAttribute('index', i);
        // 在小圆圈生成同时绑定点击事件,排他思想
        li.addEventListener('click', function() {
            for (var i = 0; i < ol.children.length; i++) {
                ol.children[i].className = '';
            }
            this.className = 'current';
            var index = this.getAttribute('index');
            // 引进移动动画
            // ul移动距离就是 小圆圈索引号*图片宽度
            animate(ul, - index * focusWidth);
            //控制图片、圆圈与按钮同步
            num = circle = index;
        });
    }
    ol.children[0].className = 'current';
    // 克隆第一张图片放到 ul 最后面
    var clone_first = ul.children[0].cloneNode(true);
    ul.appendChild(clone_first);
    var num = 0;
    // circle控制小圆圈跟随
    var circle = 0;
    // flag节流阀.控制速度
    var flag = true;
    // 点击右侧按钮,图片切换下一张
    arrow_r.addEventListener('click', function() {
            if (flag) {
                flag = false; //关闭节流阀
                // 如果走到最后复制的一张图片, ul 迅速复原
                if (num == ul.children.length - 1) {
                    ul.style.left = 0;
                    num = 0;
                }
                num++;
                animate(ul, -num * focusWidth, function() {
                    flag = true;
                });
                circle++;
                if (circle == ol.children.length) {
                    circle = 0;
                }
                circleChange();
            }
    });

    arrow_l.addEventListener('click', function() {
        if(flag) {
            flag = false;
            if (num == 0) {
                num = ul.children.length - 1;
                ul.style.left = - num * focusWidth + 'px';
            }
            num--;
            animate(ul, -num * focusWidth, function() {
                flag = true;
            });
            circle--;
            if (circle == -1) {
                circle = ol.children.length - 1;
            }
            circleChange();
        }
    });
    function circleChange() {
        for (var i = 0; i < ol.children.length; i++) {
            ol.children[i].className = '';
        }
        ol.children[circle].className = 'current';
    };
    
    // 自动播放轮播图
    var timer = setInterval(function() {
        // 手动调用点击事件
        arrow_r.click();
    }, 5000);
})
