function selectPlan( planName, monthlyPrice){
    console.log(planName, monthlyPrice)

    const planElement = document.getElementById('planname');
    planElement.innerHTML = planName; 

    const monthlyElement = document.getElementById('monthlyrate');
    monthlyElement.innerHTML = "$" + monthlyPrice + "/mo";

    const yearlyElement = document.getElementById('annualrate');
    yearlyElement.innerHTML = "$" + (monthlyPrice*12) + "/yr";

    let nextYear = new Date(); 
    nextYear.setFullYear( nextYear.getFullYear() + 1)
    const gooduntilElement = document.getElementById('gooduntil');
    gooduntilElement.innerHTML = nextYear.toDateString ();
   
}