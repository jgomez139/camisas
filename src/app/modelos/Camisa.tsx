export class Camisa{
    public codCamisa: number;
    public marcaCamisa: string;
    public codTallaCamisa: string;
    public colorCamisa: string;

    constructor(codc: number, marc: string, talc: string, colc: string){
        this.codCamisa = codc;
        this.marcaCamisa = marc;
        this.codTallaCamisa = talc;
        this.colorCamisa = colc;
    }
}