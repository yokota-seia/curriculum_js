class Taiyaki {
    
    constructor(contents){
        this.contents = contents;

    }

    maincontents(){
        console.log(`中身は${this.contents}です`);
    }
}

let anko = new Taiyaki('あんこ');
anko.maincontents();

let cream = new Taiyaki('クリーム');
cream.maincontents();

let cheese = new Taiyaki('チーズ');
cheese.maincontents();
