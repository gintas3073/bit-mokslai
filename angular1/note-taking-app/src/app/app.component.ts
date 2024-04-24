import { Component } from '@angular/core';
import { NoteService } from './note.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  notes: string[];

  constructor(private noteService: NoteService) {
    this.notes = this.noteService.notes;
  }

  deleteNote(index: number) {
    this.noteService.deleteNote(index);
  }
}