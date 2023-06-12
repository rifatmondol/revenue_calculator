// GST, Reinvestment, Saving and Salary Calculation //

$(document).ready(function(){
    $("#calculate").on('click', function () {
        const amount = $("#amount").val();
        const salary = $("#salary").val();
    
        if (!amount || !salary) {
            alert("Can't be empty any field!")
        }
        else {
            // GST calculation
            const gst = parseFloat((amount / 100) * 18).toFixed(2);
            $("#demo1").html("<strong>GST: </strong>" + gst + " INR");
    
            // Reinvestment calculation
            const secondAmount = amount - gst;
            const thirdAmount = secondAmount - salary;
            const reinvestment = parseFloat((thirdAmount / 100) * 20).toFixed(2);
            $("#demo2").html("<strong>Reinvestment: </strong>" + reinvestment + " INR");
    
            // Savings calculation
            const fourthAmount = thirdAmount - reinvestment;
            const savings = parseFloat((fourthAmount / 100) * 50).toFixed(2);
            $("#demo3").html("<strong>Savings: </strong>" + savings + " INR");
            const fifthAmount = fourthAmount - savings
    
            // Salary Dir 1 calculation
            const salaryDirOne = parseFloat((fifthAmount / 100) * 20).toFixed(2);
            $("#demo4").html("<strong>Salary Dir 1: </strong>" + salaryDirOne + " INR");
    
            // Salary Dir 2 calculation
            const salaryDirTwo = parseFloat((fifthAmount / 100) * 80).toFixed(2);
            $("#demo5").html("<strong>Salary Dir 2: </strong>" + salaryDirTwo + " INR");
        }
    })
})