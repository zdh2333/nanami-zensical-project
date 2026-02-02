(function() {
    var isVerified = localStorage.getItem("nanami_auth");
    if (!isVerified) {
        var password = prompt("请输入访问口令 (Nanami 的口令)：");
        if (password === "nanami") {
            localStorage.setItem("nanami_auth", "true");
            alert("验证成功！欢迎回来，老大。喵~");
        } else {
            alert("口令错误！只有老大才能进入这里。喵~");
            document.body.innerHTML = "<h1 style='text-align:center;margin-top:100px'>🔒 抱歉，该区域受保护</h1>";
            window.stop();
        }
    }
})();
