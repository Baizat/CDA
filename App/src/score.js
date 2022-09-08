/*
var gradeData= { 
    sections: [

        {  
                    "key" : "bugeting",
                    "name" : {default: "Bugeting",ar:"Bugeting"},

                    "grades":[
                    
                        {
                        "value" : "A",
                        "minscrore":10,
                        "maxscore":10,
                        "brief": {default:"strong",ar:"strong"},
                        "desc": {default: "You are prepared for expenses and setting a regular household budget",ar: "You are prepared for expenses and setting a regular household budget"}
                    },
                    {
                        "value" : "B",
                        "minscrore":7,
                        "maxscore":9,
                        "brief": {default:"fair",ar:"fair"},
                        "desc":{default:"You are budgeting and keeping some control of your expenses, with some household involvement",ar:"You are budgeting and keeping some control of your expenses, with some household involvement"} 
                    },
                    {
                        "value" : "C",
                        "minscrore":4,
                        "maxscore":6,
                        "brief":{default: "weak",ar:"weak"},
                        "desc":{default: "You are putting basic effort towards budgeting and preparing for expenses",ar: "You are putting basic effort towards budgeting and preparing for expenses"}
                    },
                    {
                        "value" : "D",
                        "minscrore":0,
                        "maxscore":3,
                        "brief": {default:"poor",ar:"poor"},
                        "desc": {default:"You are not keeping track of your budget effectively or preparing for expenses",ar:"You are not keeping track of your budget effectively or preparing for expenses"}
                    }
                ]
        },
        {
            "key" : "debtandcc",
            "name" : {default:"Debt and Credit Cards",ar:"Debt and Credit Cards"},

            "grades" : [
                    {
                        "value" : "A",
                        "minscrore":16,
                        "maxscore":16,
                        "brief": "strong",
                        "desc": "You are in control of your debts and credit cards"
                    },
                    {
                        "value" : "B",
                        "minscrore":12,
                        "maxscore":15,
                        "brief": "fair",
                        "desc": "Your debts and credit cards are well managed with occasional challenges"
                    },
                    {
                        "value" : "C",
                        "minscrore":9,
                        "maxscore":11,
                        "brief": "weak",
                        "desc": "Outstanding debts and credit cards are affecting your chances of financial success"
                    },
                    {
                        "value" : "D",
                        "minscrore":0,
                        "maxscore":8,
                        "brief": "poor",
                        "desc": "Your debt and credit card situation is in need of urgent improvement"
                    }
                                    
                    ]
        },
        {
            "key":"savingsandsi",
            "name"  :{default: "Savings and Investment",ar: "Savings and Investment"},
            "grades" : [
                    {
                        "value" : "A",
                        "minscrore":17,
                        "maxscore":18,
                        "brief": "strong",
                        "desc": "You are saving regularly with a financial plan and diversified investments"
                    },
                    {
                        "value" : "B",
                        "minscrore":15,
                        "maxscore":16,
                        "brief": "fair",
                        "desc": "Your savings, financial plans and investments are under control with some areas for improvement."
                    },
                    {
                        "value" : "C",
                        "minscrore":10,
                        "maxscore":14,
                        "brief": "weak",
                        "desc": "You are participating in saving, planning and investing with some key improvements required"
                    },
                    {
                        "value" : "D",
                        "minscrore":0,
                        "maxscore":9,
                        "brief": "poor",
                        "desc": "Major work is required in securing regular savings and investing towards your goals"
                    }
                                    
                    ]
        },
        {
            "key":"insurance",
            "name" :{default: "Insurance",ar: "Insurance"},
            "grades" : [
                    {
                        "value" : "A",
                        "minscrore":5,
                        "maxscore":5,
                        "brief": "strong",
                        "desc": "Your income and possessions are well protected by insurance"
                    },
                    {
                        "value" : "B",
                        "minscrore":4,
                        "maxscore":4,
                        "brief": "fair",
                        "desc": "Your income and posessions are well protected. Consider improving your insurance packages"
                    },
                    {
                        "value" : "C",
                        "minscrore":2,
                        "maxscore":3,
                        "brief": "weak",
                        "desc": "You have some insurance, however there are areas in your life that may need protection"
                    },
                    {
                        "value" : "D",
                        "minscrore":0,
                        "maxscore":1,
                        "brief": "poor",
                        "desc": "You have no insurance. Your income and possessions may not be protected from loss or the unexpected"
                    }
                                    
                    ]
        },
        {
            "key":"retirement",
            "name" : {default:"Retirement",ar:"Retirement"},
            "grades" : [
                    {
                        "value" : "A",
                        "minscrore":8,
                        "maxscore":8,
                        "brief": "strong",
                        "desc": "You are well prepared for retirement, with plans and pension contributions in place"
                    },
                    {
                        "value" : "B",
                        "minscrore":5,
                        "maxscore":7,
                        "brief": "fair",
                        "desc": "You are working towards retirement with a need to finalize your plans and contributions"
                    },
                    {
                        "value" : "C",
                        "minscrore":1,
                        "maxscore":4,
                        "brief": "weak",
                        "desc": "You need to finalize retirement plans and consider starting to contribute personally towards your pension"
                    },
                    {
                        "value" : "D",
                        "minscrore":0,
                        "maxscore":0,
                        "brief": "poor",
                        "desc": "You have not made any retirement plans and you are not contributing towards your retirement"
                    }
                                    
                    ]
        },
        {
            "key":"finknowledge",
            "name" : {default:"Financial Knowledge",ar: "Financial Knowledge"},

            "grades" : [
                    {
                        "value" : "A",
                        "minscrore":4,
                        "maxscore":4,
                        "brief": "strong",
                        "desc": "You have a good understanding of key personal finance areas"
                    },
                    {
                        "value" : "B",
                        "minscrore":3,
                        "maxscore":3,
                        "brief": "fair",
                        "desc": "You have an average understanding of key personal finance areas"
                    },
                    {
                        "value" : "C",
                        "minscrore":2,
                        "maxscore":2,
                        "brief": "weak",
                        "desc": "You have a weak understanding of key personal finance areas"
                    },
                    {
                        "value" : "D",
                        "minscrore":0,
                        "maxscore":1,
                        "brief": "poor",
                        "desc": "You have poor or no understanding of key personal finance areas"
                    }
                                    
                    ]
        }
        ]
}
*/

// For Each sections call the function to calculate the score.
var total_budgt_score = 5;
var locale = "en"; 
var jqxhr = $.getJSON( "src/scores.json", function() {
   // console.log( "success" );
})
.done(function(data) { 
 var result=   processData(data);
 console.log(result);
});

function processData(sections){ 
var grade = jsonQ(sections).find("key",function(){
    return this.toLowerCase() =='bugeting';
 });
 
 // console.log(grade);
 
 var sectionItem = grade.sibling('grades').value()[0];
   
 // // sectionItem.each(function (index, path, value) {
 // //     console.log(value.maxscore + '  ' + value.minscrore);
 // // });
 //   console.log(sectionItem);
 
 //  //refactor into a function which returns formatted HTML 
 
 var resultHtml = "";
 resultHtml +="<ul>";
 $.each(sectionItem,function(key,value){ 
     if(total_budgt_score>=value.minscrore && total_budgt_score <= value.maxscore) 
     { 
         resultHtml+="<li> Grade : "+ value.value + " </li>" ;
         resultHtml+= "<li>"+ locale=="en"? value.desc.default: value.desc.ar + "</li>" ;
         resultHtml+= "<li>" + locale=="en" ? value.brief.default: value.brief.ar + "</li>";
        //     console.log(value);
     } 
 });
 resultHtml +="</ul>";
 return resultHtml;
}
