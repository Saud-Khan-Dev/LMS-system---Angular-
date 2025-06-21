import { Component, Input } from '@angular/core';
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
  @Input() formTitle!: string;
  @Input() tag1?: string;
  @Input() tag2?: string;
  @Input() tag3?: string;
  @Input() tag4?: string | Date;

  isFormCheckedWithDocument = false;
  form = new FormGroup({
    tag1Value: new FormControl<string>('', [Validators.required]),
    tag2Value: new FormControl<string>('', [Validators.required]),
    tag3Value: new FormControl<string>('', [Validators.required]),
    tag4Value: new FormControl<string>('', [Validators.required]),
  });

  successMessage = '';
  errorMessage = '';

  loading = false;

  get tag1Value() {
    return this.form.get('tag1Value');
  }
  get tag2Value() {
    return this.form.get('tag2Value');
  }
  get tag3Value() {
    return this.form.get('tag3Value');
  }

  get tag4Value() {
    return this.form.get('tag4Value');
  }

  onDocumentUpload(event: any) {
    const file = event.target?.files[0];

    if (file) {
      const read = new FileReader();
      this.loading = true;
      this.errorMessage = '';
      read.onload = () => {
        try {
          const fileData = read.result as string;

          this.performOCR(fileData);
        } catch {
          this.errorMessage = 'Error reading file:';
          this.loading = false;
        }
      };
      read.onerror = () => {
        this.errorMessage = 'Error reading file:';
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
        this.errorMessage = 'Error occured during performing OCR';
        this.loading = false;
      });
  }

  searchTags(text: string) {
    if (this.checkingInputFields(text)) {
      this.isFormCheckedWithDocument = true;
      this.successMessage = 'Document verified successfully!';
      this.errorMessage = '';
    } else {
      this.errorMessage =
        'Entered Data is not matched with the provided document';
      this.successMessage = '';
    }
  }

  removeBrackets(text: string): string {
    return text.replace(/[<>]/g, ' ');
  }

  checkingInputFields(text: string): boolean {
    return (
      text
        .toLowerCase()
        .includes(this.tag1Value?.value?.toLowerCase() as string) &&
      text
        .toLowerCase()
        .includes(this.tag2Value?.value?.toLowerCase() as string) &&
      text
        .toLowerCase()
        .includes(this.tag3Value?.value?.toLowerCase() as string) &&
      this.checkingDate(text)
    );
  }

  checkingDate(text: string): boolean {
    const dateFormateStr = this.tag4Value?.value;
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

  onSubmitForm() {
    
  }
}
