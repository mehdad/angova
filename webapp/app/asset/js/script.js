$(function () {
    $('nav.footer ul.nav-tabs li').click(function () {
        $(this).addClass('active').siblings().removeClass('active');
    });


        $('.type').change(function () {
        alert('ha');
        //alert($('select#type').val());
        switch ($('select#type').val()) {
            case '1':
                $('form.create-ad input#price').removeClass('hide');
                $('form.create-ad input#rent-p').addClass('hide');
                $('form.create-ad input#rent-m').addClass('hide');
                $('form.create-ad input#mortgage').addClass('hide');
                break;
                case '2':
                    $('form.create-ad input#price').addClass('hide');
                    $('form.create-ad input#rent-p').removeClass('hide');
                    $('form.create-ad input#rent-m').removeClass('hide');
                    $('form.create-ad input#mortgage').addClass('hide');
                break;
                case '3':
                    $('form.create-ad input#price').addClass('hide');
                    $('form.create-ad input#rent-p').addClass('hide');
                    $('form.create-ad input#rent-m').addClass('hide');
                    $('form.create-ad input#mortgage').removeClass('hide');
                break;
            default:
                $('form.create-ad input#price').removeClass('hide');
                $('form.create-ad input#rent-p').addClass('hide');
                $('form.create-ad input#rent-m').addClass('hide');
                $('form.create-ad input#mortgage').addClass('hide');
        }
    })
});
