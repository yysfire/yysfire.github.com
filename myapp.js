!function ($) {
    //$(document).ready(function() {
    $(function(){

    var $window = $(window)

    $("pre").addClass("pre-scollable prettyprint linenums");
    $("table").addClass("table table-bordered table-striped table-condensed");
    $("h1").addClass("page-header");
    $('h1').detach().insertBefore($('.row-fluid'));
    $("h2").addClass("page-header");

    // make code pretty
    window.prettyPrint && prettyPrint()

    //$(".toc").addClass("well page-nav");
    //$(".toc>ul").addClass("nav nav-pills");

    if (window.innerWidth >= 460) {
        var toggler = $('<div class="toggler" title="点击展开/收起，Shift+Z 隐藏或打开">目录</div>'),
            toc = $('.toc');
        toc.wrap('<div class="tocWrap">');

        $('.tocWrap').prepend(toggler).delay(500).fadeTo(500, '0.25')
            .hover( function(){$(this).stop().fadeTo(300, '1.0');},function(){$(this).stop().fadeTo(300,'0.25');} );

        $('html').keypress(function(e) {
            if (e.shiftKey && (e.charCode || e.keyCode) == '90') {
                e.preventDefault();
                $('div.tocWrap').toggle(200);
            }
        });

        toggler.click(function() {
            $('div.toc').slideToggle(300);
        });
    }

    //外链在新窗口（或标签）打开
    $("a[href^='http']").each(function(){
        this.target = "_blank";
    });
    //点击目录内链,滚动到所在位置
    $('a[href^=#][href!=#]').click(function() {
        //这里的this指向的是完整的内链地址，hash后就得到'#'号和它后面的部分
        var target = document.getElementById(this.hash.slice(1));
        if (!target) return false;
        var targetOffset = $(target).offset().top - $('.navbar-fixed-top').height();
        $('html,body').animate({scrollTop: targetOffset}, 400);
        return true;
    });

    });
}(window.jQuery)
