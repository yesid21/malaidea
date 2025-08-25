import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {
  contactForm: FormGroup;
  enviado = false;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      mensaje: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  onSubmit() {
    this.enviado = true;

    if (this.contactForm.valid) {
      console.log('Datos enviados:', this.contactForm.value);

      // Aquí podrías llamar a un servicio para enviar el mensaje al backend
      alert('¡Tu mensaje fue enviado con éxito!');

      // Limpiar el formulario
      this.contactForm.reset();
      this.enviado = false;
    }
  }

  // getter para facilitar acceso a los controles en el HTML
  get f() {
    return this.contactForm.controls;
  }
}
