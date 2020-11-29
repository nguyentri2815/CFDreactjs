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
    // =====================================
    // slide feedback=======> ko lam duoc
    // const clickBTN={
    //     init:function(){
    //         this.clickButton()
    //     },
    //     clickButton:function(){
    //         var elementBTN=document.querySelector('.slide-right');
    //         console.log(elementBTN.children);
    //         elementBTN.forEach(element => {
    //             // element.addEventListener('click',function(){
    //             //     console.log('click');
    //             // })
    //             // console.log(element);
    //         });
    //     }
    // }
    // clickBTN.init()
    // ==============
    // var elem = document.querySelector('.slide-right');
    //     var flkty = new Flickity( elem, {
    //     // options
    //     cellAlign: 'left',
    //     contain: true,
    //     wrapAround: true
    //     });

    //     // element argument can be a selector string
    //     //   for an individual element
    //     var flkty = new Flickity( '.slide-right', {
    //     // options
    //     });
    // =====================================
    //tech
    const clickbtn = {
        init:function(){
            this.clickNext()
            this.clickPrev()
        },
        clickNext:function(){
           var elementSlides=document.querySelectorAll('.slide-right__item');
           var btnNext=document.querySelector('.btnNext');
           var elementTexts=document.querySelectorAll('.slide-left__item');
           var slidesLegth=elementSlides.length;
           var indexSlideActive=0;
           var run='ready';
           var clickBTNNext=function(e){
               e.preventDefault()
               if (run=='run') { return false; }
               run="run"
               var elementSlideActive=elementSlides[indexSlideActive];
               var elementSlideNext;
               if (indexSlideActive < slidesLegth - 1 ) {
                    indexSlideActive++
               }else{
                    indexSlideActive=0;
               }
               var count=0;
               elementSlideNext=elementSlides[indexSlideActive];
               var slideHide=function(){
                   this.classList.remove('active');
                   this.classList.remove('hideanimation');
                   count++
                   if (count=2) {
                        run="ready"
                   }
               }
               var slideShow=function(){
                   this.classList.add('active');
                   this.classList.remove('showanimation');
                    count++
                    if (count=2) {
                        run="ready"
                    } 
               }
               elementSlideActive.addEventListener('webkitAnimationEnd',slideHide);
               elementSlideNext.addEventListener('webkitAnimationEnd',slideShow);
               elementSlideActive.classList.add('hideanimation');
               elementSlideNext.classList.add('showanimation');
               elementSlideNext.classList.add('active');
               var idText =elementSlideNext.getAttribute("data-text");
               for (let j = 0; j < elementTexts.length; j++) {
                    elementTexts[j].classList.remove('active');
                }
                var elementText=document.getElementById(idText);
                elementText.classList.add('active');
               
           }
           if(btnNext){
               btnNext.addEventListener('click',clickBTNNext)
           }
        },
        clickPrev:function(){
            var elementSlides=document.querySelectorAll('.slide-right__item');
            var clickPrev=document.querySelector('.btnprev');
            var elementTexts=document.querySelectorAll('.slide-left__item');
            var slidesLegth=elementSlides.length;
            var indexSlideActive=0;
            var run='ready';
            var clickBTNPrev=function(e){
                e.preventDefault()
                //slide hien tai
                if (run=='run') { return false; }
                run="run"
                var elementSlideActive=elementSlides[indexSlideActive];
                var elementSlidePrev;
                if (indexSlideActive > 0 ) {
                     indexSlideActive--
                }else{
                     indexSlideActive=slidesLegth-1
                }
                elementSlidePrev=elementSlides[indexSlideActive];
                var count=0;
                var slideHide=function(){
                    this.classList.remove('active');
                    this.classList.remove('hideanimationPrev');
                    count++
                    if (count=2) {
                         run="ready"
                    }
                }
                var slideShow=function(){
                    this.classList.add('active');
                    this.classList.remove('showanimationPrev');
                     count++
                     if (count=2) {
                         run="ready"
                     } 
                }
                elementSlideActive.addEventListener('webkitAnimationEnd',slideHide);
                elementSlidePrev.addEventListener('webkitAnimationEnd',slideShow);
                elementSlideActive.classList.add('hideanimationPrev');
                elementSlidePrev.classList.add('showanimationPrev');
                elementSlidePrev.classList.add('active');
                var idText =elementSlidePrev.getAttribute("data-text");
               for (let j = 0; j < elementTexts.length; j++) {
                    elementTexts[j].classList.remove('active');
                }
                var elementText=document.getElementById(idText);
                elementText.classList.add('active');
                
            }
            if(clickPrev){
                clickPrev.addEventListener('click',clickBTNPrev)
            }
        }
    }
    clickbtn.init()
    // ========================
},false) 