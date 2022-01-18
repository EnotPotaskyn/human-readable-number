module.exports = function toReadable (number) {
    const lastNumber = ['zero','one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen']
  const hundredNumber = ['twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'] 
  let a = String(number);
  let b = '';
  let c = 0;

  if (number<20) {  b =  lastNumber[number] } 

  if( number>=20 && number<100 ){
    
            if (Number(a[1])===0) { b = hundredNumber[Number(a[0])-2] }
                                    else { b = hundredNumber[Number(a[0])-2] + ' ' + lastNumber[a[1]]; }
  }
   if(number>=100&&number<1000){

            c = a.slice(-2,-1) + a.slice(-1);
            if(Number(a[2])===0 && Number(c)>=20) { b = lastNumber[Number(a[0])] + ' hundred ' + hundredNumber[Number(a[1])-2] }
            else if (Number(c)===0){ b = lastNumber[Number(a[0])] + ' hundred' }
            else if (Number(c)===20){ b = lastNumber[Number(a[0])] + ' hundred' +  hundredNumber[Number(a[1])-2]}
           else if (Number(c)<20) { b = lastNumber[Number(a[0])] + ' hundred ' + lastNumber[Number(c)] }
                             else { b = lastNumber[Number(a[0])] + ' hundred ' + hundredNumber[Number(a[1])-2] + ' '+ lastNumber[a[2]]} 
                
  }
  return b
  }

