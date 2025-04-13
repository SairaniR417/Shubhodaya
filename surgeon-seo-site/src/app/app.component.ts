import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { SurgeonComponent } from "../components/header/header.component";
import { FooterComponent } from "../components/footer/footer.component";
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SurgeonComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
 
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
