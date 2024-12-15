import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StudentsComponent } from '../component/students/students.component';
import { FormOfTeacherComponent } from "../component/form-of-teacher/form-of-teacher.component";
import { Teacher } from '../classes/Teacher';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, StudentsComponent, FormOfTeacherComponent,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'first-project';
  teacher=new Teacher(1,"dvory",["v1","v2"])
}
