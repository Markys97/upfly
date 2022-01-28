let social_block= document.querySelector('.social')
let header_center_block=document.querySelector('.header__center')
let header_block_button= document.querySelector('.header__mobile-button-block');
let header_mobile_icon =document.querySelector('.rightBtn')
let content_header_center= header_center_block.innerHTML
let help_background= document.querySelector('.help__background')
let header_phone=document.querySelector('.header__mobile-phone-block');

console.log(header_center_block,content_header_center)
if(header_mobile_icon.classList.contains('rightBtn')){
    
}

header_mobile_icon.addEventListener('click',e=>{
    if(header_mobile_icon.classList.contains('rightBtn')){
        e.stopPropagation()
        header_center_block.innerHTML= social_block.innerHTML;
        header_center_block.classList.add('social')
    
        header_block_button.style.borderLeft='0';
        header_mobile_icon.src='./image/leftBtn.png';
        header_phone.style.display='block';
        e.target.classList.remove('rightBtn')
        console.log(getComputedStyle(header_phone).display)
        
    }else{
        header_mobile_icon.src='./image/rightBtn.png';
        e.target.classList.add('rightBtn')
        header_center_block.innerHTML= content_header_center
        header_block_button.style.borderLeft='2px solid  #52C2F2';
        header_phone.style.display="none";
     
      
    }


    
})




    window.addEventListener('resize',e=>{
        if(window.screen.width>503){
            header_center_block.innerHTML= content_header_center;
            header_center_block.innerHTML= content_header_center
            header_block_button.style.borderLeft='2px solid  #52C2F2';
            header_phone.style.display="none";
            header_mobile_icon.classList.add('rightBtn')
        }

        if(window.screen.width<= 500){
            help_background.src='./image/fontMobile.png';
        }else{
            help_background.src='./image/main.jpg';
        }
    })





if(window.screen.width<= 500){
help_background.src='./image/fontMobile.png';
}

console.log(window.screen.width)