! function() {
    var duration = 50;
    let id;

    function writeCode(pre, result, fn) {
        let container = document.querySelector('#code');
        let styleTag = document.querySelector('#styleTag');
        let n = 0;
        id = setTimeout(function run() {
            n += 1;
            container.innerHTML = Prism.highlight(result.substring(0, n), Prism.languages.css);
            styleTag.innerHTML = result.substring(0, n)
            container.scrollTop = container.scrollHeight;
            if (n < result.length) {
                id = setTimeout(run, duration)
            } else {
                fn && fn.call()
            }
        }, duration)
    }

    var result = `
/*
 * Hello 大家好 我是秀强
 * 下面我将以动画的形式来画一个皮卡丘
 * 让我们开始吧
 */

/* 先加个动画效果 */
*{
    transition:all 1s;
}

/*加一个边框吧*/
#code{
    border:1px solid black;
    padding:16px
}

/*皮卡丘要来啦*/
.preview {
    height: 100%;
    border: 1px solid greed;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #FFDD44;
}

.wrapper {
    position: relative;
    height: 165px;
    width: 100%;
}


/*皮卡丘的眼睛*/

.eye {
    position: absolute;
    height: 49px;
    width: 49px;
    background: #2e2e2e;
    border-radius: 50%;
    border: 2px solid #000000;
}
/* 皮卡丘的眼珠子 */
.eye:after {
    content: '';
    display: block;
    position: absolute;
    height: 24px;
    width: 24px;
    background-color: #FFF;
    border-radius: 50%;
    left: 6px;
    top: -1px;
    border: 2px solid #000;
}

.left-eye {
    right: 50%;
    margin-right: 90px;
}

.right-eye {
    left: 50%;
    margin-left: 90px;
}
/* 皮卡丘脸颊 */
.cheek {
    position: absolute;
    height: 68px;
    width: 68px;
    background-color: #FC0D1C;
    border-radius: 50%;
    border: 2px solid #000;
    top: 85px;
}

.left-cheek {
    right: 50%;
    margin-right: 116px;
}

.right-cheek {
    left: 50%;
    margin-left: 116px;
}
/* 皮卡丘的鼻子 */
.nose {
    position: absolute;
    height: 0px;
    width: 0px;
    border-style: solid;
    border-width: 12px;
    border-color: black transparent transparent;
    border-radius: 11px;
    left: 50%;
    top: 28px;
    margin-left: -12px;
}
/* 皮卡丘的上嘴唇 */
.upperLip {
    height: 25px;
    width: 80px;
    border: 3px solid black;
    position: absolute;
    top: 50px;
    border-top: none;
    background: #FFDD44;
    z-index: 2;
}

.upperLip.left {
    right: 50%;
    border-right: none;
    border-bottom-left-radius: 40px 25px;
    transform: rotate(-20deg)
}

.upperLip.right {
    left: 50%;
    border-left: none;
    border-bottom-right-radius: 40px 25px;
    transform: rotate(20deg)
}
/* 皮卡丘的下嘴唇 */
.lowerLip-warpper {
    position: absolute;
    bottom: -30px;
    left: 50%;
    margin-left: -150px;
    height: 135px;
    overflow: hidden;
    width: 300px;
}

.lowerLip {
    position: absolute;
    width: 300px;
    height: 3500px;
    background: #990513;
    border-radius: 200px/2000px;
    bottom: 0;
    left: 50%;
    margin-left: -150px;
    overflow: hidden;
}

.lowerLip::after {
    content: '';
    position: absolute;
    width: 100px;
    height: 100px;
    bottom: 0;
    background: #FC0D1C;
    left: 50%;
    margin-left: -50px;
    border-radius: 50px
}
/* 好了，这只pikachu送给你 */
`
    writeCode('', result)
    $('.actions').on('click', 'button', function(e) {
        let $btn = $(e.currentTarget);
        let speed = $btn.attr('data-speed');
        $btn.addClass('active').siblings('.active').removeClass('active')
        switch (speed) {
            case 'slow':
                duration = 100
                break
            case 'normal':
                duration = 50
                break
            case 'fast':
                duration = 10
                break
            case 'skip':
                window.clearTimeout(id)
                let container = document.querySelector('#code');
                let styleTag = document.querySelector('#styleTag');
                container.innerHTML = Prism.highlight(result, Prism.languages.css);
                styleTag.innerHTML = result
                break;
            case 'refresh':
                location.reload();
                break;
        }
    })

}.call()