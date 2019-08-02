var result = `
/*
 * Hello 大家好 我是居居
 * 下面我将以动画的形式来画一个皮卡丘
 * 让我们开始吧
 */

/* 先加个动画效果 */
*{
    transition:all 1s;
}

/* 设置一个背景色 */
html{
    background: rgb(222,222,222);
    font-size:16px;
}

/*加一个边框吧*/
#code{
    border:1px solid black;
    padding:16px
}
`
var n = 0;
var id = setInterval(() => {
    n++;
    //代码高亮
    code.innerHTML = Prism.highlight(result.substring(0, n), Prism.languages.css);
    styleTag.innerHTML = result.substring(0, n)
    if (n >= result.length) {
        window.clearInterval(id)
    }
}, 10)