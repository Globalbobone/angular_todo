import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  public tasks = [];
  public categories = [];

  public form: FormGroup = new FormGroup({
    task: new FormControl(),
    category: new FormControl()
  });

  submit_task() {
    if (this.form.value.task != null){
      this.tasks.push(this.form.value.task);
      this.form.reset();
      console.log(this.tasks);
    }
  }

  submit_category() {
    if (this.form.value.category != null){
      this.categories.push(this.form.value.category);
      this.form.reset();
      console.log(this.categories);
    }
  }

  deleteCaregory(category: number) {
    console.log(category);
    this.categories.splice(category, 1);
    console.log(this.categories);
  }

  deleteTask(task: number) {
    console.log(task);
    this.tasks.splice(task, 1);
    console.log(this.tasks);
  }

  check() {
    console.log('change detection');
  }
}
