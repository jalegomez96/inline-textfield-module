import { Component, Input } from '@angular/core';

@Component({
  selector: 'il-textfield',
  templateUrl: './inline-textfield.component.html',
  styleUrls: ['./inline-textfield.component.scss']
})
export class InlineTextfieldComponent {
  @Input() label: string = "";
  @Input() type: string = "";
  @Input() placeholder: string = "";

}
