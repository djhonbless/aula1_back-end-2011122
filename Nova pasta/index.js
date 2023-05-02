function calculateGrade(gp,gt) {
    var grade = gp * 0.6 + gt * 0.4;
    if (grade >= 9.5)
    console.log("Aprovado")
    else 
    console.log("Reprovado")  
}

var approval = calculateGrade(12,14);

