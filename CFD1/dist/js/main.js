document.addEventListener("DOMContentLoaded",function(){
    // =====================================
    // Layouts/loadingPage
    window.onload = function() {
        document.getElementById('preloader').style.display = "none";
    }
    // =====================================
    // header
    const header ={
        init:function(){
            this.clickBar()
        },
        clickBar:function(){
            let elementBtn=document.querySelectorAll('.show-content');
            let elementClose=document.querySelectorAll('.close');
            let elementOverlay=document.querySelector('.overlay');
            let elementmodal=document.querySelectorAll('.modal');
            elementBtn.forEach(element => {
                element.addEventListener('click',function(e){
                    e.preventDefault();
                    let idShow=this.getAttribute("data-show");
                    let elementID=document.getElementById(idShow);
                    elementID.classList.toggle('active');
                    elementOverlay.classList.toggle('active');
                })
            });
            elementOverlay.addEventListener('click',function(){
                for(let i=0;i<elementmodal.length;i++){
                    elementmodal[i].classList.remove('active');
                    this.classList.remove('active');
                }
            })
            elementClose.forEach(element => {
                element.addEventListener('click',function(){
                    for(let i=0;i<elementmodal.length;i++){
                        elementmodal[i].classList.remove('active');
                        elementOverlay.classList.remove('active');
                    }
                })    
            });
        }
    }
    header.init()
    // =====================================
    // scroll top
    const scrollTop={
        init:function(){
            this.scrollMenu()
            this.clickBackTopTop()
        },
        scrollMenu:function(){
            window.addEventListener('scroll',function(){
                var header=document.querySelector('.header')
                if (window.scrollY>186) {
                    header.classList.add('active')
                }
                else{
                    header.classList.remove('active')
                }
            })
        },
        clickBackTopTop:function(){
            var backToTop =document.getElementById('back-to-top');
            // window.addEventListener('scroll',function(){
            //     if (window.scrollY>400) {
            //         backToTop.classList.add('active')
            //     }
            //     else{
            //         backToTop.classList.remove('active')
            //     }
            // })
            backToTop.addEventListener('click',function(){
                window.scrollTo({ top: 0, behavior: 'smooth' });
                 return false;
            })
        }
    }
    scrollTop.init()
},false) 