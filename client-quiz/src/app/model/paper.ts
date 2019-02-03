import { PaperQuestion } from "./paper-question";

export class Paper {
    paperId : number;
    paperCategory : string;
    paperQuestionList : PaperQuestion[]=[];     
}
