import { Course } from './../model/course';
import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../services/courses.service';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
  courses: Observable<Course[]>;

  displayedColumns = ['name', 'category'];

  constructor(private coursesService: CoursesService) {
    this.courses = this.coursesService.list();
  }

  ngOnInit(): void {}
}
