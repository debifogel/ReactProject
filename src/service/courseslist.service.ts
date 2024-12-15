import { Injectable } from '@angular/core';
import { Course, Subbject } from '../classes/Course';
@Injectable({
  providedIn: 'root'
})
export class CourseslistService {

  constructor() { }
  static  courses = [
    new Course("קוגל",Subbject.QA),
    new Course("קוגל",Subbject.אנגלית), 
    new Course("קוגל",Subbject.הוראה),
    new Course("קוגל",Subbject.אנגלית),
    ];
    static getCourses() {
    return CourseslistService.courses;
    }
    static getCourseById(id: number) {
    return CourseslistService.courses.find(course => course.idCourse === id);
    }
}
