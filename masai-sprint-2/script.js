var total=[]
var totalexpense=[]
function submitCredit()
{
    var sum1=0
    var credAmount=document.getElementById("credit").value
    var credType=document.getElementById("creditType").value
    var credDate=document.getElementById("creditDate").value
    var test = credDate.toString()
    var para1=document.createElement('li')
    var para2=document.createElement('li')
    para1.textContent=test+' ' +credType
    para2.textContent=credAmount
    total.push(para2.innerHTML)
    var credit1=document.getElementById("CreditHeadBox2")
    var credit2=document.getElementById("amountCredBox2")
    credit1.appendChild(para1)
    credit2.appendChild(para2)
    for(i=0;i<total.length;i++)
    {
        sum1+=parseInt(total[i])
    }
    
    document.getElementById("totalCreditBox2").innerHTML=sum1

}
function submitExpense()
{
    sum2=0
    var credAmount=document.getElementById("debit").value
    var credType=document.getElementById("expenseType").value
    var credDate=document.getElementById("expenseDate").value
    var test = credDate.toString()
    var para1=document.createElement('li')
    var para2=document.createElement('li')
    para1.textContent=test+' ' +credType
    para2.textContent=credAmount
    totalexpense.push(para2.innerHTML)
    var credit1=document.getElementById("DebitHeadBox2")
    var credit2=document.getElementById("amountDebitBox2")
    credit1.appendChild(para1)
    credit2.appendChild(para2)
    for(i=0;i<totalexpense.length;i++)
    {
        sum2+=parseInt(totalexpense[i])
    }
    
    document.getElementById("totalDebitBox2").innerHTML=sum2

}
function showBalance()
{
    var sum1=0
    var sum2=0
    var totalBalance=0
    for(i=0;i<total.length;i++)
    {
        sum1+=parseInt(total[i])
    }
    for(j=0;j<totalexpense.length;j++)
    {
        sum2+=parseInt(totalexpense[j])
    }

    totalBalance=parseInt(sum1)-parseInt(sum2)
    document.getElementById("result").innerHTML=totalBalance
    if(totalBalance<2000)
    {
        document.querySelector(".balanceShow").style.backgroundColor="red"
    }
    


}
