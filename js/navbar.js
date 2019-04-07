jQuery(document).ready(function (e) {
    function t(t) {
        e(t).bind("click", function (t) {
            t.preventDefault();
            e(this).parent().fadeOut()
        })
    }
    e(".dropdown-toggle").click(function () {
        var t = e(this).parents(".dropdown-link").children(".dropdown-menu").is(":hidden");
        e(".dropdown-link .dropdown-menu").hide();
        e(".dropdown-link .dropdown-toggle").removeClass("active");
        if (t) {
            e(this).parents(".dropdown-link").children(".dropdown-menu").toggle().parents(".dropdown-link").children(".dropdown-toggle").addClass("active")
        }
    });
    e(document).bind("click", function (t) {
        var n = e(t.target);
        if (!n.parents().hasClass("dropdown-link")) e(".dropdown-link .dropdown-menu").hide();
    });
    e(document).bind("click", function (t) {
        var n = e(t.target);
        if (!n.parents().hasClass("dropdown-link")) e(".dropdown-link .dropdown-toggle").removeClass("active");
    })
});