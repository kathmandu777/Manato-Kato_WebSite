//var num = 6;
var num = Math.ceil(7 * Math.random());
var quote = [
    [
        "url('../image/top_header_background3.jpg')",
        "Done is better than perfect.",
        "-by Mark Zuckerberg."

    ],

    [
        "url('../image/top_header_background5.jpg')",
        "艱難汝を玉にす",
        "-困難を乗り越えてこそ、立派な人間に成長する-",
        {
            p_fontsize: "13px"
        }
    ],

    [
        "url('../image/top_header_background6.png')",
        "No one has ever drowned in sweat.",
        "-汗で溺れた者はいない-",
        {
            h3_fontsize: "18px",
        },
        {
            h3_fontsize: "50px"
        }
    ],

    [
        "url('../image/top_header_background7.jpg')",
        "I’d rather have more heart than talent any day.",
        "-才能よりも常に勇気をもっていたい-",
        {
            hoge: "hoge"
        },
        {
            h3_fontsize: "36px"
        }

    ],

    [
        "url('../image/top_header_background8.jpg')",
        "Let him who would move the world, first move himself.",
        "-世界を動かそうと思ったら、まず自分自身を動かせ-",
        {
            p_fontsize: "12px"
        },
        {
            h3_fontsize: "32px",
            p_fontsize: "30px"
        }
    ],

    [
        "url('../image/top_header_background9.jpg')",
        "If you can dream it, you can do it.",
        "-夢見ることができれば、それは実現できる-",
        {
            h3_fontsize: "18px",
        },
        {
            h3_fontsize: "50px",
            p_fontsize: "34px"
        }
    ],

    [
        "url('../image/top_header_background10.jpg')",
        "進まざる者は必ず退き、退かざる者は必ず進む",
        "-福沢諭吉",
        {
            h3_fontsize: "15px",
        },
        {
            h3_fontsize: "40px",
        }
    ]
];







$(function() {
    /*
        $('header ul li').hover(
            function() {
                //マウスカーソルが重なった時の処理
                $(this).css('transform', 'rotate(5deg)');
            },
            function() {
                //マウスカーソルが離れた時の処理
                $(this).css('transform', 'rotate(0deg)');
            }
        );*/


    $('#header').css('background-image', quote[num][0]);
    $('#quote h3').text(quote[num][1]);
    $('#quote p').text(quote[num][2]);
    $('#quote h3').css("color", quote[num][3].h3_color);
    $('#quote p').css("color", quote[num][3].p_color);



});




$(window).on('load resize', function() {
    var windowWidth = $(window).width();

    if (windowWidth >= 959) {
        // PCの処理
        $('#quote h3').css("font-size", quote[num][4].h3_fontsize);
        $('#quote p').css("font-size", quote[num][4].p_fontsize);
        $('#quote h3').css("color", quote[num][4].h3_color);
        $('#quote p').css("color", quote[num][4].p_color);

    } else if (windowWidth >= 600) {
        // TABの処理
    } else {
        // SPの処理
        $('#quote h3').css("font-size", quote[num][3].h3_fontsize);
        $('#quote p').css("font-size", quote[num][3].p_fontsize);
        $('#quote h3').css("color", quote[num][3].h3_color);
        $('#quote p').css("color", quote[num][3].p_color);
    }
});