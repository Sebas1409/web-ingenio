import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/helper/contact/contact-helper.service';
import { Contact } from '../../models/contact/contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  model = new Contact; 
  submitted = false;
  error: {} | undefined;
  constructor(private contactService: ContactService) { }
  onSubmit() {
    this.submitted = true;
    return this.contactService.contactForm(this.model).subscribe(
      data => this.model = data,
      error => this.error = error
    );
  };
  resolved(captchaResponse: string) {
    console.log(`Resolved response token: ${captchaResponse}`);
  }

  ngOnInit(): void {
  }

}
