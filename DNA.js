// Returns a random DNA base
const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G']
    return dnaBases[Math.floor(Math.random() * 4)] 
  }
  
  // Returns a random single stand of DNA containing 15 bases
  const mockUpStrand = () => {
    const newStrand = []
    for (let i = 0; i < 15; i++) {
      newStrand.push(returnRandBase())
    }
    return newStrand
  }
  
  　function pAequorFactory(specimenNum, dna){
    return {
      specimenNum,
      dna,
      mutate(){
        let randomBaseNum = Math.floor(Math.random()*this.dna.length);
        let newBase = returnRandBase();
        while (this.dna[randomBaseNum] === newBase){
              newBase = returnRandBase()
        }
         this.dna[randomBaseNum] = newBase;
      },
  
      compareDNA(object){
        let count = 0;
        for(let i = 0; i < object.dna.length; i++){
          if (this.dna[i] === object.dna[i]){
            count++;
          }
        }
        //console.log(`specimen #${this.specimenNum} and specimen #${object.specimenNum} have a ${count/15*100}% in common`)
        return count/15;
        
      },
  
      willLikelySurvive(){
        let count = 0;
        for (let i = 0; i < this.dna.length; i++){
          if (this.dna[i] === 'C' || this.dna[i] === 'G'){
            count++;
          }
        }
        console.log(count/15 >= 0.6 ? true : false); 
      },
      complementStrand(){
        return this.dna.map(base =>{
          switch(base){
            case 'A':
            return 'T';
            break;
            case 'T':
            return'A';
            break;
            case 'C':
            return 'G';
            break;
            case 'G':
            return 'C';
            break;
          }
        })
      }
    }
  }
  function generate30instances(){
    let arr = [];
    for (let num = 1; num <= 30; num++){
        arr.push(pAequorFactory(num, mockUpStrand()))
    }
    return arr;
  }
  
  const object1 = pAequorFactory(1, mockUpStrand());
  const object2 = pAequorFactory(2, mockUpStrand());
  
  //console.log(object1.compareDNA(object2));
  //object1.willLikelySurvive();
  //console.log(object1)
  //console.log(object1.complementStrand())
  
  
  let pAequor30 = generate30instances();
  
  function mostRelated (arr){
    let mostMatchNum = 0;
    let a = 0;
    let b = 0;
    for (let i = 0; i < arr.length-1; i++){
      for (let j = i+1; j <arr.length; j++){
        let currentMatch = arr[i].compareDNA(arr[j])
        if (currentMatch > mostMatchNum){
          mostMatchNum = currentMatch;
           a = arr[i].specimenNum;
           b = arr[j].specimenNum;
        }
      }
   }
   console.log(`specimenNum ${a} and specimenNum ${b} are the most related instances of pAequor, and the related DNA rate is ${mostMatchNum*100}% `)
  }
  
  mostRelated(pAequor30)
  
  
  
  
  
  
  
  
  
  