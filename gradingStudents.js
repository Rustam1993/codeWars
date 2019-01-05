function gradingStudents(grades) {
    for(let i=0;i<grades.length;i++){
      if(grades[i] >=38) {
        console.log(grades[i])
        for(let j = 0; j<=100; j++){
  
          if(j>=grades[i] && j%5==0){
            console.log(j)
            if(j-grades[i]<3){
              grades[i]=j
              break
            }
          }
        }
      }
    }
     return grades
  }