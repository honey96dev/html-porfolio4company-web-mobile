$("header").mousemove(function(e) {
    // parallaxIt(e, ".slide", -100);
    // parallaxIt(e, "img", -30);
    parallaxIt(e, "div.L-1-svg", -140);
    parallaxIt(e, "div.L-2-svg", -20);
    parallaxIt(e, "div.L-3-svg", -50);
});

function parallaxIt(e, target, movement) {
    var $this = $("header");
    var relX = e.pageX - $this.offset().left;
    var relY = e.pageY - $this.offset().top;

    TweenMax.to(target, 1, {
        x: (relX - $this.width() / 2) / $this.width() * movement,
        y: (relY - $this.height() / 2) / $this.height() * movement
    });
    // var scene = document.getElementById('header');
    // var parallax = new Parallax(scene);
}