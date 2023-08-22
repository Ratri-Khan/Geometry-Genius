
// for-triangle box**********
document.getElementById('first-calculate').addEventListener('click',function(){
    const bInput = document.getElementById('b-input').value;
    const hInput = document.getElementById('h-input').value;
    const firstName = document.getElementById('first-name').innerText;

    if(bInput > 0 && hInput > 0 && typeof  bInput == "string" && typeof hInput == "string"){
        const triangle = 0.5 * bInput * hInput ;
        triangleData(triangle , firstName);       
     }
    //for error massege
     else{
        alert("Please enter a valid number"); }   
});
function triangleData(triangle , firstName){
    
    const forTriangle = document.getElementById('for-triangle');
    const tr = document.createElement('tr');
    tr.innerHTML = `
    <td>${1}&nbsp&nbsp&nbsp&nbsp</td>   
    <td>${firstName}&nbsp&nbsp&nbsp&nbsp</td>
    <td>${triangle}<span>cm <sup>2</sup></span></td>
    `
    forTriangle.appendChild(tr);
}
// for-rectangle box*********

document.getElementById('second-calculate').addEventListener('click',function(){
    const wInput = document.getElementById('w-input').value;
    const lInput = document.getElementById('l-input').value;
    const rectangleName = document.getElementById('rectangle-name').innerText;

    if(wInput > 0 && lInput > 0 && typeof  wInput == "string" && typeof lInput == "string"){
        const rectangle = wInput * lInput ;
        rectangleData(rectangle , rectangleName);       
     }
     //for error massege
     else{
        alert("Please enter a valid number"); } 
});
function rectangleData(rectangle , rectangleName){
    const forRectangle = document.getElementById('for-rectangle');
    const tr = document.createElement('tr');
    tr.innerHTML = `
    <td>${2}&nbsp&nbsp&nbsp&nbsp</td>   
    <td>${ rectangleName }&nbsp&nbsp&nbsp&nbsp</td>
    <td>${ rectangle}<span>cm <sup>2</sup></span></td>
    `
    forRectangle.appendChild(tr);
}

// for Parallelogram box***********
document.getElementById('third-calculate').addEventListener('click',function(){
    const pbInput = document.getElementById('pb-input').value;
    const phInput = document.getElementById('ph-input').value;
    const parallelogramName = document.getElementById('Parallelogram-name').innerText;

    if(pbInput > 0 && phInput > 0 && typeof  pbInput == "string" && typeof phInput == "string"){
        const parallelogram = pbInput *  phInput;
        parallelogramData (parallelogram , parallelogramName);       
     }
     //for error massege
     else{
        alert("Please enter a valid number"); } 
});
function parallelogramData(parallelogram , parallelogramName){
    const forTriangle = document.getElementById('for-Parallelogram');
    const tr = document.createElement('tr');
    tr.innerHTML = `
    <td>${3}&nbsp&nbsp&nbsp&nbsp</td>   
    <td>${parallelogramName}&nbsp&nbsp&nbsp&nbsp</td>
    <td>${parallelogram}<span>cm <sup>2</sup></span></td>
    `
    forTriangle.appendChild(tr);
}
// for-rhombus box***********

document.getElementById('four-calculate').addEventListener('click',function(){
    const d1Input = document.getElementById('d1-input').value;
    const d2Input = document.getElementById('d2-input').value;
    const rhombusName = document.getElementById('rhombus-name').innerText;

    if(d1Input > 0 && d2Input > 0 && typeof  d1Input == "string" && typeof d2Input == "string"){
    const rhombus = 0.5 * d1Input * d2Input ;
    rhombusData(rhombusName,rhombus)
    }
    //for error massege
    else{alert("Please enter a valid number");} 

});
function rhombusData(rhombusName,rhombus){
    const forRhombus = document.getElementById('for-rhombus');
    const tr = document.createElement('tr');
    tr.innerHTML = `
    <td>${4}&nbsp&nbsp&nbsp&nbsp</td>   
    <td>${rhombusName}&nbsp&nbsp&nbsp&nbsp</td>
    <td>${rhombus}<span>cm <sup>2</sup></span></td>
    `
    forRhombus.appendChild(tr);
}
// for pentagon box***************
document.getElementById('five-calculate').addEventListener('click',function(){
    const pentagonPInput = document.getElementById('pentagonP-input').value;
    const pentagonBInput = document.getElementById('pentagonB-input').value;
    const PentagonName = document.getElementById('Pentagon-name').innerText;

    if(pentagonPInput > 0 && pentagonBInput > 0 && typeof  pentagonPInput == "string" && typeof pentagonBInput == "string"){
    const pentagon = 0.5 * pentagonPInput * pentagonBInput ;
    pentagonData(PentagonName,pentagon)} 
    //for error massege
    else{alert("Please enter a valid number");}

});
function pentagonData(PentagonName,pentagon){
    const forPentagon = document.getElementById('for-pentagon');
    const tr = document.createElement('tr');
    tr.innerHTML = `
    <td>${5}&nbsp&nbsp&nbsp&nbsp</td>   
    <td>${ PentagonName }&nbsp&nbsp&nbsp&nbsp</td>
    <td>${ pentagon}<span>cm <sup>2</sup></span></td>
    `
    forPentagon.appendChild(tr);
}

// for pentagon box***************
document.getElementById('six-calculate').addEventListener('click',function(){
    const ellipseAInput = document.getElementById('ellipseA-input').value;
    const ellipseBInput = document.getElementById('ellipseB-input').value;
    const ellipseName = document.getElementById('Ellipse-name').innerText;

    if(ellipseAInput > 0 && ellipseBInput > 0 && typeof  ellipseAInput == "string" && typeof ellipseBInput == "string"){
    const ellipse = 3.1415 * ellipseAInput * ellipseBInput ;
    const finalEllips = ellipse.toFixed(2);
    ellipseData(ellipseName,finalEllips)} 
    //for error massege
    else{alert("Please enter a valid number");}

});
function ellipseData(ellipseName,finalEllips){
    const forEllipse = document.getElementById('for-Ellipse');
    const tr = document.createElement('tr');
    tr.innerHTML = `
    <td>${6}&nbsp&nbsp&nbsp&nbsp</td>   
    <td>${ ellipseName }&nbsp&nbsp&nbsp&nbsp</td>
    <td>${ finalEllips}<span>cm <sup>2</sup></span></td>
    `
    forEllipse.appendChild(tr);
}