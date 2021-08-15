let xmlhttp = new XMLHttpRequest();
//step 2 or step 8
xmlhttp.responseType="json";
xmlhttp.open('GET','https://restcountries.eu/rest/v2/all');
xmlhttp.onload = () =>
    {
        let responsedata = xmlhttp.response;
        //let responseinJSON = JSON.parse(responsedata);

        console.log("All the countries from Asia continent /region : ");
        console.log(responsedata.filter(countryDetails => countryDetails.region==="Asia"));
        console.log("************************************************************************************************************************");
        
        console.log("All the countries  with a population of less than 2 lakhs : ");
        console.log(responsedata.filter(countryDetails => countryDetails.population<200000));
        console.log("************************************************************************************************************************");


        console.log("Printing  name, capital, flag of all the countries :");
        responsedata.forEach(country => 
            console.log("Country_Name :"+ country["name"]+" ; Capital :"+country.capital+" ; Flag :"+country.flag)
            );
        console.log("************************************************************************************************************************");

        
        console.log("Total Population of all  the countries : ");
        console.log(responsedata.reduce( function (population,countrydetail) {  
                return      population+ +countrydetail.population;
        },0)); 
        console.log("************************************************************************************************************************");
        
        console.log("Countries using US Dollars as currency : ");

         let expectedResult=[];
         responsedata.forEach(country => {
             country.currencies.forEach( currency => {
                 if(currency.code==="USD")
                 {  let result={};
                    result.name=country.name;
                    result.currency=currency;
                    expectedResult.push(result);
                 }
                })
         });
        console.log(expectedResult);
        console.log("************************************************************************************************************************");

    }

xmlhttp.send();