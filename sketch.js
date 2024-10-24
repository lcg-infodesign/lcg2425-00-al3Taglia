function setup() {
  createCanvas(windowWidth, windowHeight);
  // put setup code here
  noLoop();
  
}

let nLines = 100;

function draw() {
  // put drawing code here
  background("#b6c2cd");

 

  fill('#161a1e');
  noStroke(); 
  let lato = 20;
  let distanza = lato * sqrt(2);
  
  let nColums = (windowWidth - lato)/distanza; //lato*sqrt2
  let nRows = (windowHeight - lato )/distanza;

  
  
  //if qualcosa --> creo questo, else --> ruoto di QUARTER_PI
  //qualcosa: se  100 è divisibile per 3

  for(let i = 0; i < nColums; i++) { //ciclo per fare le colonne

    for(let j = 0; j < nRows; j++) { //ciclo per fare le righe
      
      let x = i * distanza + distanza/2;
      let y = j * distanza + distanza/2;
      
      push();
      translate(x, y);
      
      let q = random(0, 10);

      if(q < 7) {
        rotate(QUARTER_PI);
        
      }
  rectMode (CENTER);
      
      rect(0, 0, lato, lato); 
      pop();
    }
    
  }

} 
{}