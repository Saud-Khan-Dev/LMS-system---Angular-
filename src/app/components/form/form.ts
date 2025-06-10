import { Component } from '@angular/core';
import {
  FormControl,
  ReactiveFormsModule,
  FormGroup,
  Validators,
} from '@angular/forms';
import Tesseract from 'tesseract.js';

@Component({
  selector: 'app-form',
  imports: [ReactiveFormsModule],
  templateUrl: './form.html',
})
export class Form {
  isFormCheckedWithDocument = false;

  form = new FormGroup({
    name: new FormControl<string>('', [Validators.required]),
    fatherName: new FormControl<string>('', [Validators.required]),
    documentName: new FormControl<string>('', [Validators.required]),
    completedDate: new FormControl<string>('', [Validators.required]),
  });

  message = '';
  loading = false;

  get name() {
    return this.form.get('name');
  }
  get fatherName() {
    return this.form.get('fatherName');
  }
  get documentName() {
    return this.form.get('documentName');
  }

  get completedDate() {
    return this.form.get('completedDate');
  }

  onDocumentUpload(event: any) {
    const file = event.target?.files[0];

    if (file) {
      const read = new FileReader();
      this.loading = true;
      read.onload = () => {
        const fileData = read.result as string;

        this.performOCR(fileData);
      };
      read.readAsDataURL(file);
    }
  }

  performOCR(imageData: string) {
    Tesseract.recognize(imageData)
      .then(({ data: { text } }) => {
        const data = this.removeBrackets(text);
        this.searchTags(data);
        this.loading = false;
      })
      .catch(() => {
        this.message = 'Error occured during performing OCR';
      });
  }

  searchTags(text: string) {
    if (this.checkingInputFields(text)) {
      this.isFormCheckedWithDocument = true;
      this.message = 'c';
    } else {
      this.message = 'Entered Data is not matched with the provided document';
    }
  }

  removeBrackets(text: string): string {
    return text.replace(/[<>]/g, ' ');
  }

  checkingInputFields(text: string): boolean {
    return (
      text.toLowerCase().includes(this.name?.value?.toLowerCase() as string) &&
      text
        .toLowerCase()
        .includes(this.fatherName?.value?.toLowerCase() as string) &&
      text
        .toLowerCase()
        .includes(this.documentName?.value?.toLowerCase() as string) &&
      this.checkingDate(text)
    );
  }

  checkingDate(text: string): boolean {
    const dateFormateStr = this.completedDate?.value;
    if (!dateFormateStr) return false;
    const dateFormate = new Date(dateFormateStr);
    const dd = String(dateFormate.getDate()).padStart(2, '0');
    const mm = String(dateFormate.getMonth() + 1).padStart(2, '0');
    const yyyy = dateFormate.getFullYear();

    const possibleFormats = [
      `${dd}-${mm}-${yyyy}`,
      `${dd}/${mm}/${yyyy}`,
      `${yyyy}-${mm}-${dd}`,
      `${mm}-${dd}-${yyyy}`,
      `${mm}/${dd}/${yyyy}`,
    ];

    return possibleFormats.some((formate) => {
      return text.includes(formate);
    });
  }

  onSubmitForm() {}
}
