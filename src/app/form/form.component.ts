import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { QuestionData, Questions } from 'src/app/models/question-data'
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  questions: any[] = [];
  questionair: Questions[] = [];
  formData: QuestionData = new QuestionData();
  constructor(db: AngularFireDatabase) {
    db.list('/questions').valueChanges().subscribe(data => {
      this.questions = data;
      this.questionair = this.questions;
      console.log(this.questionair);
    });
  }

  ngOnInit(): void {

  }

}
