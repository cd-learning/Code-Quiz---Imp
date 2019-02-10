import { Answer } from "./answer";

export class Question{
    questionId : number;  //yes 1
    questionText : string; // yes 3
    questionCategory : string; // yesy 2
    subcategory : string;  //
    options:Answer[] = [new Answer(),new Answer()];
}   