import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-input-files',
  standalone: true,
  imports: [MatIconModule, CommonModule],
  templateUrl: './input-files.component.html',
  styleUrl: './input-files.component.css'
})
export class InputFilesComponent {
  selectedFiles: File[] = [];

  onFilesSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files) {
      this.selectedFiles = this.selectedFiles.concat(Array.from(input.files));
    }
  }

  removeFile(fileToRemove: File): void {
    this.selectedFiles = this.selectedFiles.filter(file => file !== fileToRemove);
  }
  
}
