import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-surgeon',
  imports: [],
  templateUrl: './surgeon.component.html',
  styleUrl: './surgeon.component.scss'
})
export class SurgeonComponent implements OnInit{
  constructor(private titleService: Title, private metaService: Meta) {}

  ngOnInit(): void {
    const title = `Best Surgeon in Malur,Whitefield,Kolar,Hoskote | Dr. Shubhodaya R Surgeon`;
    const description = `Need a top surgeon in Malur? Dr. Shubhodaya R Surgeon offers expert surgical
     care with 8+ years of experience. Book an appointment today.`;

    this.titleService.setTitle(title);
    this.metaService.updateTag({ name: 'description', content: description });
    this.metaService.updateTag({ name: 'robots', content: 'index, follow' });
  }
}
