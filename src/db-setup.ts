import mongoose, { Model } from "mongoose";
import * as fs from 'fs';

const authString: string = "mongodb://test:DevRole@localhost:27017/emacs?authSource=admin";

type userInput =
    | string
    | null;

type size = {
    sm?: string;
    md?:string,
    gt?: string;
    ld?: string;
}

type page = {
    title: string;
    templateId: string;
}
type cards = {
    id: string;
    title: string;
    sizes: size[];
    basePrice: number;
    pages: page[];

}

type template = {
    id: string;
    width: string;
    height: string;
    imageUrl: string;
}

const cardSchema:mongoose.Schema = new mongoose.Schema({
             id: { type: String, required: true, unique: true },
             title: { type: String, required: true, unique: false },
             sizes: { type: Array, required: true, unique: false },
             basePrice: { type: Number, required: true, unique: false },
             pages: { type: Array, required: true, unique: false },
}); 


const sizeSchema: mongoose.Schema= new mongoose.Schema({
             id: { type: String, required: true, unique: true },
             title: { type: String, required: true, unique: false },
             sizes: { type: Array, required: true, unique: false },
             basePrice: { type: Number, required: true, unique: false },
             pages: { type: Array, required: true, unique: false },
        });

const templateSchema: mongoose.Schema = new mongoose.Schema({
            id: { type: String, required: true, unique: true },
            width: { type: String, required: true, unique: false },
            height: { type: String, required: true, unique: false },
            imageUrl: { type: String, required: false, unique: false },
        });

const cardsModel=mongoose.model("Cards", cardSchema);
const sizesModel=mongoose.model("Sizes", sizeSchema);
const templateModel=mongoose.model("Templates", templateSchema);


const seed = async():Promise<void> => { 
   
    try {
        let cardData:cards[]= JSON.parse(fs.readFileSync('src/data/cards.json', 'utf8'));
        let sizeData:size[] = JSON.parse(fs.readFileSync('src/data/sizes.json', 'utf8'));
        let templateData:template[]= JSON.parse(fs.readFileSync('src/data/templates.json', 'utf8'));
        
        cardData.forEach((element: cards) => {
            new cardsModel(element).save()
           
        })

        sizeData.forEach((element: size) => {
            new sizesModel(element).save()
           
        })

        templateData.forEach((element: template) => {
    
            new templateModel(element).save()
           
        })
        
        console.log("Seed completed")

    } catch (err) { 
        console.log(err)
    }

}


const connect = async(): Promise<void> => { 
    try {
        await mongoose.connect(authString);
        if (mongoose.connection.readyState === 1) { 
           console.log("connected to database")
        };
     
        await seed();
        
         console.log("Seed completed")

    } catch(error){ 
        
      console.log("Invalid response:" + error)
    }

}



connect();



module.exports = {
cardsModel, sizesModel, templateModel
}