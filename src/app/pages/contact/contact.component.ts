import { Component } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})

export class ContactComponent {
  contactForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.contactForm = this.formBuilder.group({
      name: ["", [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      email: ["", [Validators.required, Validators.email, Validators.maxLength(100), Validators.minLength(5), Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)]],
      message: ["", [Validators.required, Validators.minLength(2), Validators.maxLength(500)]],
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      alert("✅ Formulario enviado correctamente");
      console.log("Form Submitted!", this.contactForm.value);
    } else {
      alert("❌ El formulario es inválido. Por favor, revisa los campos.");
      console.log("Form is invalid");
    }
  }
  
}
