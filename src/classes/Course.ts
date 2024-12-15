

export enum Subbject
{
    QA,
    אנגלית,
    תכנות,
    הוראה
}
export class Course {
    static count=0
    public idCourse!:number
     
    constructor(public _nameCourse:string,public _subbject:Subbject) {
        this.idCourse=++Course.count
    }
}
