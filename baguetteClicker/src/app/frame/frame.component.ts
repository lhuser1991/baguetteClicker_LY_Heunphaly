import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-frame',
  templateUrl: './frame.component.html',
  styleUrls: ['./frame.component.css'],
})
export class FrameComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Input() inputTitle: string="";
  @Input() inputCopyrightYear: number=0;
  @Input() inputCopyrightName: string="";
}
