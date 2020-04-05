$(function() {
    $("header").load("../common_file/header/header.html");
    $("footer").load("../common_file/footer/footer.html");

    $('.btn1').on('click', function() {
        $(this).siblings('.choice_ans').css('display', 'block');
        $(this).siblings('.explanation').css('display', 'block');
        $(this).css('background-color', '#67c5ff');
        $(this).siblings('.btn2').css('background-color', 'white');
        $(this).css('color', 'white');
        $(this).siblings('.btn2').css('color', '#67c5ff');
        $(this).siblings('.choice_ans').children('.choice').text("A店を選択しました。");
    });
    $('.btn2').on('click', function() {
        $(this).siblings('.choice_ans').css('display', 'block');
        $(this).siblings('.explanation').css('display', 'block');
        $(this).css('background-color', '#67c5ff');
        $(this).siblings('.btn1').css('background-color', 'white');
        $(this).css('color', 'white');
        $(this).siblings('.btn1').css('color', '#67c5ff');
        $(this).siblings('.choice_ans').children('.choice').text("B店を選択しました。");
    });

    /*queryごとに正解不正解製作 */
    $(".query1>.btn1").on('click', function() {
        $(this).siblings('.choice_ans').children('.ans').text("おめでとう。正解です！");
        $(this).siblings('.choice_ans').children('.ans').css('color', 'red');
    });
    $(".query1>.btn2").on('click', function() {
        $(this).siblings('.choice_ans').children('.ans').text("残念。不正解です。");
        $(this).siblings('.choice_ans').children('.ans').css('color', 'blue');
    });
    /*queryごとに正解不正解製作 */
    $(".query2>.btn1").on('click', function() {
        $(this).siblings('.choice_ans').children('.ans').text("おめでとう。正解です！");
        $(this).siblings('.choice_ans').children('.ans').css('color', 'red');
    });
    $(".query2>.btn2").on('click', function() {
        $(this).siblings('.choice_ans').children('.ans').text("残念。不正解です。");
        $(this).siblings('.choice_ans').children('.ans').css('color', 'blue');
    });
    /*queryごとに正解不正解製作 */
    $(".query3>.btn1").on('click', function() {
        $(this).siblings('.choice_ans').children('.ans').text("残念。不正解です。");
        $(this).siblings('.choice_ans').children('.ans').css('color', 'blue');
    });
    $(".query3>.btn2").on('click', function() {

        $(this).siblings('.choice_ans').children('.ans').text("おめでとう。正解です！");
        $(this).siblings('.choice_ans').children('.ans').css('color', 'red');
    });
});