function multiplicationTable(n){
     const table =[]; //empty array for the table
     for (let i=1; i<=n; i++){ //outer loop for row
        const row =[];   //empty row array
        for (let j= 1; j<=n; j++ ){ //inner loop for each column
            row.push(i*j); //calculate & store the priduct
        }
       table.push(row); //add the completed row to the table
     }
      return table;
    }
console.log(multiplicationTable(3));