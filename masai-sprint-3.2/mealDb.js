$(document).ready(function()
{

    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://www.themealdb.com/api/json/v1/1/filter.php?a=Indian");
    xhr.send()
    xhr.onload = function(){
        if(xhr.status == 200)
        {
            var obj = JSON.parse(xhr.response)
            //console.log(obj)
        }
        else
        {
            alert("wrong API")
        }
        var meals = obj.meals
        //var div = document.getElementById("displayIndianMeals")
        meals.forEach(function(key)
        {
            //console.log(key.idMeal)
            $("#displayIndianMeals").append(meal(key.strMealThumb, key.strMeal, key.idMeal))
        })
    }
    

    var xhrNew =new XMLHttpRequest();
    xhrNew.open("GET","https://www.themealdb.com/api/json/v1/1/list.php?c=list")
    xhrNew.send()
    xhrNew.onload = function(){
        if(xhrNew.status == 200)
        {
            var obj = JSON.parse(xhrNew.response)
            //console.log(obj)
        }
        else
        {
            alert("wrong API")
        }
        var meals = obj.meals
        meals.forEach(function(key)
        {
            //console.log(key.strCategory)
            $("#mealList").append("<option value=" + key.strCategory + ">"+key.strCategory+"</option>")
        })
    }



    $("#mealList").change(function(){
        input1=$(this).children("option:selected").val();
        //alert(input1)
        var baseUrl = "https://www.themealdb.com/api/json/v1/1/filter.php?c="
        var url = baseUrl + input1
        console.log(url)
        var xhr = new XMLHttpRequest()
        xhr.open("GET", url);
        xhr.send()
        xhr.onload = function(){
            if(xhrNew.status == 200)
            {
                var obj = JSON.parse(xhr.response)
                console.log(obj)
            }
            else
            {
                alert("wrong API")
            }
            $("#displayIndianMeals").html("")
            var meals = obj.meals
            console.log(obj)
            //var div = document.getElementById("displayIndianMeals")
            meals.forEach(function(key)
            {
                //console.log(key.idMeal)
                $("#displayIndianMeals").append(meal(key.strMealThumb, key.strMeal, key.idMeal))
                var detailKey = key.idMeal
            })
        }
        $("#detail").click(function(){
            var input1=$(this).children("option:selected").val();
            alert(input1)
            // var baseUrl = "https://www.themealdb.com/api/json/v1/1/lookup.php?i="
            // var url = baseUrl + detailKey
            // console.log(url)
            // var xhr = new XMLHttpRequest()
            // xhr.open("GET", url);
            // xhr.send()
            // xhr.onload = function(){
            //     if(xhrNew.status == 200)
            //     {
            //         var obj = JSON.parse(xhr.response)
            //         console.log(obj)
            //     }
            //     else
            //     {
            //         alert("wrong API")
            //     }
            // }
        })
        //$("#displayIndianMeals").append(description())
    })
    
})
function meal(image, name, id)
{
    var card = "";
    card = `<div class="card mx-2 my-3" style="width: 18rem;">
                <img class="card-img-top img-fluid hover" src="${image}" alt="Card image cap">
                <div class="card-body bg-dark text-center">
                    <h5 class="card-title">${name}</h5>
                    <button type="button" id="${id}"class="btn btn-secondary">Show Details</button>
                </div>
            </div>`;
    return card;
}
function description(type, description)
{
    var card = "";
    card = `<div class="card">
                <div class="card-header">
                    ${type}
                </div>
                <div class="card-body">
                    <blockquote class="blockquote mb-0">
                        <p>${description}</p>
                    </blockquote>
                </div>
            </div>`;
    return card;
}

