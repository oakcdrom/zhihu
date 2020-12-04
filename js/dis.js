// window.onload = function() {
    try {
        var ht = document.querySelector("html");
        ht.style.overflow = "auto"
        let inte = setInterval(()=>{
            if(document.querySelector(".Modal-wrapper")) {
                var el = document.querySelector(".Modal-wrapper");
                el.parentNode.removeChild(el)
            }else {
                clearInterval(inte)
            }
        },1)
    }catch(e) {
        console.log(e)
    }
// }
