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

  deleteTask(i: number) {
    console.log(i);
    this.tasks.splice(i, 1);
    console.log(this.tasks);
  }

  deleteCaregory(i: number) {
    this.categories.splice(this.categories.indexOf(i), 1);
    console.log(this.categories);
  }

  check() {
    console.log('change detection');
  }
}
