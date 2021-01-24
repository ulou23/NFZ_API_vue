/* 

const axios=require('axios');


const path='https://api.nfz.gov.pl/app-itl-api/queues?format=json&case=1&province=01&benefitForChild=true&api-version=1.3"';
axios.get(path).then((res)=> {
  
   let data=res.data.data;
   data.forEach(element => {console.log(`${element.attributes.provider}`)

       
   });
   
  
        
    
}).catch((error)=> { console.log(error);
});  */