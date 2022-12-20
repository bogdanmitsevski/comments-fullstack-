import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CommentService } from '../shared/services/data.service';

@Component({
  selector: 'app-context-page',
  templateUrl: './context-page.component.html',
  styleUrls: ['./context-page.component.css']
})
export class ContextPageComponent implements OnInit {
  options = ''
  form!: FormGroup
  aSub!: Subscription


constructor (private comment: CommentService, private router:Router) {

}

ngOnDestroy(): void {
  if(this.aSub) {
    this.aSub.unsubscribe();
  }
}

ngOnInit() {

  this.form = new FormGroup({
    text: new FormControl(null, [Validators.required]),
  })
};

onSubmit () {
  console.log('Hello');
  this.form.disable()
    this.aSub = this.comment.addComment(this.form.value).subscribe(
      () => this.router.navigate(['/comments']),
      error => { console.warn(error),
      this.form.enable()
      }
    )
    this.aSub = this.comment.getComment().subscribe(
      () => console.log(this.comment.getComment()),
      error => { console.warn(error),
      this.form.enable()
      }
    )

}
    
}
