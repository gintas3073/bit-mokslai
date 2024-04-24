import { Component } from '@angular/core';
import { NoteService } from '../note.service';

@Component({
  selector: 'app-note-form',
  templateUrl: './note-form.component.html',
  styleUrls: ['./note-form.component.css']
})
export class NoteFormComponent {
  newNote: string;

  constructor(private noteService: NoteService) {}

  addNote() {
    if (this.newNote.trim()) {
      this.noteService.addNote(this.newNote);
      this.newNote = '';
    }
  }
}