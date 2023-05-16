// $(document).ready(function(){
//     $('button').click(function(){
//         $('img').attr('src',$('input').val())
//         $('input').val('')
//     })



// })

// 2 input və düymə verilir, istifadəçi 1 inputa ad daxil edir və düyməyə kliklədikdə inputdakı dəyər listə əlavə olunur 
// (jquerydə append funksiyası var, onunla yazın). Digər input isə listdə olan adları axtarmaq üçün istifadə olunur və 
// yazdıqca axtarışın nəticəsinə uyğun olan list itemları görsənir

$(document).ready(function () {
    $('#btn').click(function(){
        $("ol").append("<li>"+$('#add').val()+"</li>");
        $('#add').val('')

    });

    $('#srch').click(function(){
        var search =$(this).val();
        $("ol li").each(function(){
            var list=$(this).text();
            if(list.includes(search)){
                $(this).show();
            }
            else{
                $(this).hide();
            }
        })
    })
})


