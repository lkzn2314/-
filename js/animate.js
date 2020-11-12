function animate(obj, target, callback) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function() {
        // 步长值写到定时器里
        var step = (target - obj.offsetLeft) / 10;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        if (obj.offsetLeft == target) {
            clearInterval(obj.timer);
            // 回调函数写到定时器结束后
            if (callback) {
                callback();
            }
        }
        // 改变步长值,实现动画变速移动效果.步长=(目标值-当前值)/10
        obj.style.left = obj.offsetLeft + step + 'px';
    }, 30);
};
