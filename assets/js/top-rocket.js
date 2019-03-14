$("header").mousemove(function(e) {
    parallexRocket(e, "div.L-1-svg", -140);
    parallexRocket(e, "div.L-2-svg", -35);
    parallexRocket(e, "div.L-3-svg", -50);
});
//
// $('body').bind('mousewheel', function (e) {
//     if ($('#contact-nav a').hasClass('active')) {
//         parallexCube({x: 100}, '#cube-bottom-1');
//     } else {
//         parallexCube({x: 900}, '#cube-bottom-1');
//     }
// })

function parallexRocket(e, target, movement) {
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
//
// function parallexCube(pos, target) {
//     console.log(target, pos);
//     TweenMax.to(target, 1, pos);
// }