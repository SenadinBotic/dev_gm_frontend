jQuery(function ($) {
    $(document).ready(function () {

        // Menu
        $('#navtoggle').on('click', function () {
            //$('.nav').toggleClass('open');
            $('body').removeClass('search-open');
            $('body').toggleClass('menu-open');
        });

        // Mobile Search Open
        $('.mobile-search-icon').on('click', function () {
            $('body').toggleClass('search-open');
            $('.nav').removeClass('open');
            $('body').removeClass('menu-open');
        });
        $('.site-content').on('click', function (e) {
            console.log('test');
            if ($(e.target).is('.header-search') === false) {
                $('body').removeClass('search-open');

            }
        });

        // Open/Close Desktop Search Open
        $('.search-icon-wrapper').on('click', function () {
            $('.header-search').slideDown();
        });
        $('.desktop-close-search').on('click', function () {
            $('.header-search').slideUp();
        });

        // Hide Sign Up Form
        $('.close-promo-offers').on('click', function () {
            $(this).parents('.promo-offers-container').slideUp();
            $('body').removeClass('has-promo-offers');
            $(window).scroll(function () {
                $('body').removeClass('has-promo-offers');
            });
        });

        // Check Mobile OS
        // if (navigator.userAgent.match(/Android/i)) {
        //     $('.download-app').addClass('android-app');
        // }
        // else if (navigator.userAgent.match(/iPhone|iPad|iPod/i)) {
        //     $('.download-app').addClass('ios-app');
        // }
        // else {
        //     $('.download-app').addClass('desktop-app');
        // }

        // Check Subscribe Form
        if ($('.promo-offers-container').length) {
            $('body').addClass('has-promo-offers');
            $(window).scroll(function () {
                var winOffset = document.documentElement.scrollTop || document.body.scrollTop;
                if (winOffset > 59) {
                    $('body').removeClass('has-promo-offers');
                } else {
                    $('body').addClass('has-promo-offers');
                }
            });
        }
        else {
            $('body').removeClass('has-promo-offers');
        }

        // Load more for Multiple  Columns Component
        $(".loadColumnsBtn").click(function () {
            var parent = $(this).parent();
            var index = parent.data("index");
            index++;
            var selector = ".columnRow-" + index;

            var child = parent.children(selector);
            child.removeAttr("style");

            selector = ".columnRow-" + index + 1;
            if (parent.children(selector).length == 0) {
                $(this).attr("style", "display:none")
            }
        });

        //Load more for Video section
        $(".loadVideoBtn").click(function () {
            var parent = $(this).parent();
            var index = parent.data("index");

            var selector = ".columnVideoRow-" + index;
            var child = parent.children(selector);
            child.removeAttr("style");

            index++;
            parent.data("index", index);

            selector = ".columnVideoRow-" + index;
            if (parent.children(selector).length == 0) {
                $(this).attr("style", "display:none")
            }
        });

        // Show/Hide Earn Product Content
        $(".earn-product-item-heading").on("click", function () {
            $(this).parents('.earn-product-item').siblings().removeClass('active');
            $(this).parents('.earn-product-item').toggleClass('active');
        });

        // Tabs to Accordion
        $(".tab-content").hide();
        $(".tab-content:first").show();
        $(".custom-tabs li").click(function () {
            $(".tab-content").hide();
            var activeTab = $(this).attr("rel");
            $("#" + activeTab).fadeIn();
            $(".custom-tabs li").removeClass("active");
            $(this).addClass("active");
            $(".tab-heading").removeClass("d-active");
            $(".tab-heading[rel^='" + activeTab + "']").addClass("d-active");
        });
        $(".tab-heading").click(function () {
            $(".tab-content").hide();
            var d_activeTab = $(this).attr("rel");
            $("#" + d_activeTab).fadeIn();
            $(".tab-heading").removeClass("d-active");
            $(this).addClass("d-active");
            $(".custom-tabs li").removeClass("active");
            $(".custom-tabs li[rel^='" + d_activeTab + "']").addClass("active");
        });


    });
});