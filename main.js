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

/*加一个边框吧*/
#code{
    border:1px solid black;
    padding:16px
}

.preview {
    height: 100%;
    border: 1px solid greed;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #EAD71C;
}

.wrapper {
    position: relative;
    height: 100%;
    width: 900px;
}

.eye {
    position: absolute;
    height: 120px;
    width: 120px;
    background-color: #000;
    border-radius: 100%;
    top: 80px;
    z-index: 3;
}

.eye:after {
    content: "";
    position: absolute;
    height: 30px;
    width: 30px;
    background-color: #FFF;
    border-radius: 100%;
    top: 5px;
}

.left-eye {
    left: 230px;
}

.left-eye:after {
    left: 60px;
}

.right-eye {
    right: 230px;
}

.right-eye:after {
    right: 60px;
}

.cheek {
    position: absolute;
    height: 180px;
    width: 180px;
    background-color: #D63700;
    border-radius: 100%;
    border: 3px solid #000;
    top: 240px;
}

.left-cheek {
    left: 60px;
}

.right-cheek {
    right: 60px;
}

.mouth {
    position: absolute;
    height: 450px;
    width: 250px;
    background-color: #5D0B01;
    border-radius: 100%;
    border: 5px solid #000;
    top: 60px;
    left: 325px;
    overflow: hidden;
}

.lips {
    position: absolute;
    height: 150px;
    width: 180px;
    background-color: #EAD71C;
    border-radius: 100%;
    box-shadow: 5px 5px 0px 0px;
    left: 270px;
    top: 135px;
    z-index: 1;
}

.lips:after {
    content: "";
    position: absolute;
    height: 150px;
    width: 180px;
    background-color: #EAD71C;
    border-radius: 100%;
    box-shadow: -5px 5px 0px 0px;
    left: 180px;
}

.tongue {
    position: absolute;
    height: 250px;
    width: 290px;
    background-color: #CD565D;
    border-radius: 100%;
    border: 5px solid #000;
    top: 300px;
    left: -15px;
    box-shadow: inset 0 0 80px #000;
}

.nose {
    position: absolute;
    height: 175px;
    width: 290px;
    background-color: #EAD71C;
    left: 300px;
    top: 55px;
    z-index: 2;
}

.nose:before {
    content: "";
    position: absolute;
    height: 20px;
    width: 30px;
    background-color: #000;
    border-radius: 100% / 80% 80% 120% 120%;
    top: 120px;
    left: 135px;
    z-index: 3;
}

`
var n = 0;
var id = setInterval(() => {
    n++;
    //代码高亮
    code.innerHTML = Prism.highlight(result.substring(0, n), Prism.languages.css);
    styleTag.innerHTML = result.substring(0, n)
    code.scrollTop = code.scrollHeight;
    if (n >= result.length) {
        window.clearInterval(id)
            //fn2(result);
    }
}, 10)

function fn2(preResult) {
    var paper = document.createElement('div');
    paper.id = 'paper';
    document.body.appendChild(paper);

    var result = `
#paper{
    width:100px;height:100px;
    background:red;
}
`
    var n = 0;
    var id = setInterval(() => {
        n = n + 1;
        code.innerHTML = Prism.highlight(preResult + result.substring(0, n), Prism.languages.css);

        styleTag.innerHTML = styleTag.innerHTML + result[n - 1]
        if (n >= result.length) {
            window.clearInterval(id)
        }
    }, 10)
}