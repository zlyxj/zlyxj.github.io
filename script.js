function uselessT() {
        if (localStorage.staytime) {
            localStorage.staytime = Number(localStorage.staytime)+1;
        } else {
            localStorage.staytime= 1;
        }
        document.getElementById("uselesstimer").innerHTML = "你在这个页面停留了" + localStorage.staytime + "秒";
    } 
setInterval("uselessT()",1000)
