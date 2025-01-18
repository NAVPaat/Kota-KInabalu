jQuery(document).ready(function($) {
    $('.toc-toggle').click(function() {
        $(this).siblings('.toc-list').toggle();
        $(this).text($(this).text() == '[+]' ? '[-]' : '[+]');
    });
});
