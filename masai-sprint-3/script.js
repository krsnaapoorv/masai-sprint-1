$(document).ready(function(){
    var xhr = new XMLHttpRequest(); 
    xhr.open('GET', 'http://apilayer.net/api/list?access_key=f9f962a44f8ce5d9333e6f4e643e3797');
    xhr.send()
    // This function will be called after the information is retrieved
    xhr.onload = function (){
    // The HTTP 200 code is returned when your request is successful so we check for that
    if(xhr.status == 200){
        var obj=JSON.parse(xhr.response)
        var currencies=obj.currencies
        //console.log(currencies)
        //currencies.forEach(function(key) {
        for(key in currencies){
            $("#contriesfrom").append("<option value=" + key + ">"+currencies[key]+"</option>")
        }
        for(key in currencies){
            $("#contriesto").append("<option value=" + key + ">"+currencies[key]+"</option>")
        }     
    }
    }
    // $("#show").click(function(){
    //     var xhr = new XMLHttpRequest(); 
    //     xhr.open('GET', 'http://apilayer.net/api/live?access_key=f9f962a44f8ce5d9333e6f4e643e3797');
    //     xhr.send()
    //     // This function will be called after the information is retrieved
    //     xhr.onload = function (){
    //     // The HTTP 200 code is returned when your request is successful so we check for that
    //     if(xhr.status == 200){
    //         var obj=JSON.parse(xhr.response)
    //         var quotes=obj.quotes
    //         {
    //             console.log(key+" ")
    //         }
    //     }
    //     }
    //})



    var input1= ''
    var input2= ''
    var amount= ''

    $("#contriesfrom").change(function(){
        input1=$(this).children("option:selected").val();
        //alert(input1)
    })
    $("#contriesto").change(function(){
        input2=$(this).children("option:selected").val();
        //alert(input2)
    })
    $("#amount").change(function(){
        amount=$("#amount").val();
        //alert(amount)
    })
    $("#show").click(function(){
        console.log(input1)
        url= "http://apilayer.net/api/live?access_key=f9f962a44f8ce5d9333e6f4e643e3797"
        var xhr = new XMLHttpRequest(); 
        xhr.open('GET', url);
        xhr.send()
        xhr.onload = function (){
            if(xhr.status == 200){
                var obj=JSON.parse(xhr.response)
                var quotes=obj.quotes
                // console.log(quotes)
                // console.log(quotes.USDAED)
                var x=0
                var y=0
                var out=0
                var key1="USD"+input1
                var key2="USD"+input2
               for(key in quotes)
               {
                   if (key == key1)
                   {
                       x=quotes[key]
                       
                   }
               }
               for(key in quotes)
               {
                   if (key == key2)
                   {
                       y=quotes[key]
                   }
               }
               x=parseFloat(x)
               y=parseFloat(y)
            //    console.log(x)
            //    console.log(x)
               out=(y/x)*parseFloat(amount)
            //    console.log(out)
               $("#req").val(out)

            }   
      
        }
    })
})
 
