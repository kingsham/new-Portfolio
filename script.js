$('.navbar .a ').on('click', function(event){
    console.log(this.hash);
    if(this.hash !== ''){
        event.preventDefault();

        const hash=this.hash;
        $('html, body').animate(
            {
                scrollTop: $(hash).offset().top
            },
            800
        );
    }
});

$('.arrow').on('click', function(event){
    $('html,body').animate(
        {
            scrollTop:$(window).height()
        },1200);
        }
    )
