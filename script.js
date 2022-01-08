var element=creatediv('div','container-sm');
var row1=creatediv('div','row');
var row2=creatediv('div','row result');

var nav=creatediv('nav','navbar navbar-expand-lg');
nav.innerHTML="Human Names With Country Probability";

var input=document.createElement('input');
input.setAttribute('id','input');
input.setAttribute('type','search');
input.setAttribute('placeholder','Search...');

var button=document.createElement('button');
button.setAttribute('id','button');
button.setAttribute('onclick','displaydata()');
button.innerHTML="Submit";

row1.append(input,button);





var footer=creatediv('footer',' footer fixed-bottom');

var footrow=creatediv('div','row');
var col_1=creatediv('div','col-4 ');
var p=creatediv('p','ptag fo');
p.innerHTML="Our Social Media's<br>";
var ico=creatediv('i','fa fa-facebook-square fa-3x');
var ico1=creatediv('i','fa fa-instagram fa-3x');
var ico2=creatediv('i','fa fa-twitter-square fa-3x');
var ico3=creatediv('i','fa fa-linkedin-square fa-3x');
var col_2=creatediv('div','col-4');
var p1=creatediv('p','ptag');

p1.innerHTML="You can implement the countries web service to get a list of the countries supported by the Oracle Data Cloud platform. This API provides the unique IDs,ISO 3166-1 alpha-2 country codes,names, and country category IDs";
var col_3=creatediv('div','col-4');
var p2=creatediv('p','ptag fo');
p2.innerHTML="Predict The Nationality of a Name<br> Use Cases";
var i=creatediv('i',' fa fa1 fa-copyright');
i.innerHTML="nationalize.io @2001"
col_1.append(p,ico,ico1,ico2,ico3);
col_2.append(p1);
col_3.append(p2,i)
footrow.append(col_1,col_2,col_3);
footer.append(footrow);

element.append(nav,row1,row2,footer);
document.body.append(element);

function creatediv(elemen,classname){
    var divele=document.createElement(elemen);
    divele.setAttribute('class',classname);
    return divele;
}

async function displaydata(){
    row2.innerHTML=" ";
    var name=document.getElementById('input').value;
    try {
        var res=await fetch(`https://api.nationalize.io/?name=${name}`);
        var result=await res.json();

        var card=creatediv('div','col-6-sm card text-white');
        var cardhead=creatediv('div','card-header');
        cardhead.innerHTML=`Country_Id: ${result.country[0].country_id}`;
        var cardbody=creatediv('div','card-body');
        var cardtitle=creatediv('h4','card-title');
        cardtitle.innerHTML=`Name: ${name}`;
        var cardtext=creatediv('h4','card-title');
        cardtext.innerHTML=`Probability: ${result.country[0].probability}`;

        cardbody.append(cardtitle,cardtext);
        card.append(cardhead,cardbody);
        


        var card1=creatediv('div','col-6-sm card text-white');
        var cardhead1=creatediv('div','card-header');
        cardhead1.innerHTML=`Country_Id: ${result.country[1].country_id}`; 
        var cardbody1=creatediv('div','card-body');
        var cardtitle1=creatediv('h4','card-title');
        cardtitle1.innerHTML=`Name: ${name}`;
        var cardtext1=creatediv('h4','card-title');
        cardtext1.innerHTML=`Probability: ${result.country[1].probability}`;

        cardbody1.append(cardtitle1,cardtext1);
        card1.append(cardhead1,cardbody1);
        row2.append(card,card1);

        console.log(result.country[0].country_id);
        console.log(result.country[0].probability);
        console.log(result.country[1].country_id);
        console.log(result.country[1].probability);
        
    } catch (error) {
        row2.innerHTML="Please Enter The Valid Name!...";
        row2.setAttribute('style','color:red;text-align:center; font-size:50px')
    }
    
}
