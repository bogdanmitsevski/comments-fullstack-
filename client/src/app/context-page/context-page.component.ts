import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
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
  @ViewChild('input') inputRef: ElementRef | undefined
  uploadedFile!: File
  filePreview:any = ''
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

triggerClick() {
  this.inputRef?.nativeElement.click();
}

onFileUpload(event: any) {
  const file = event.target.files[0];
  this.uploadedFile = file;

  const reader = new FileReader();

  reader.onload = () => {
    this.filePreview = reader.result
  }
  reader.readAsDataURL(file);
  this.form.enable()
}

onSubmit () {
  console.log('Hello');
  this.form.disable()
    this.aSub = this.comment.addComment(this.form.value, this.uploadedFile).subscribe(
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
