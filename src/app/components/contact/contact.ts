import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslationService } from '../../services/translation.service';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.html',
})
export class ContactComponent {
  translation = inject(TranslationService);
  theme = inject(ThemeService);

  formData = signal({ name: '', email: '', message: '' });
  sending = signal(false);
  submitted = signal(false);

  updateField(field: 'name' | 'email' | 'message', value: string): void {
    this.formData.update(data => ({ ...data, [field]: value }));
  }

  onSubmit(): void {
    this.sending.set(true);
    // Simulate form submission
    setTimeout(() => {
      this.sending.set(false);
      this.submitted.set(true);
      this.formData.set({ name: '', email: '', message: '' });
      setTimeout(() => this.submitted.set(false), 3000);
    }, 1500);
  }
}
