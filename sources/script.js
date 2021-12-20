$('.tedris').on('mouseover', ()=>{
    $('.tedul').css({'display':'block', 'transition':'2s'});
    // $('.tedul').css('transition', '2s !important')
} )

$('.tedris').on('mouseout', ()=>{
    $('.tedul').css('display', 'none')
} )
