import { Component, inject, OnInit } from '@angular/core';
import { ContactComponent } from '../../components/contact/contact';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-contact-page',
  imports: [ContactComponent],
  template: `
    <div class="pt-16">
      <app-contact />
    </div>
  `,
})
export class ContactPageComponent implements OnInit {
  private seo = inject(SeoService);

  ngOnInit(): void {
    this.seo.updateMetaTags({
      title: 'Contact | SoftPro - Get In Touch',
      description: 'Contact SoftPro for your digital solutions needs. Reach out via our contact form, email, or phone.',
      keywords: 'contact SoftPro, get in touch, digital solutions inquiry',
    });
  }
}
