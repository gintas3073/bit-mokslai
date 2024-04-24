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
note.service.ts:
typescript
Copy code
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  notes: string[] = [];

  constructor() {
    this.loadNotes();
  }

  addNote(note: string) {
    this.notes.push(note);
    this.saveNotes();
  }

  deleteNote(index: number) {
    this.notes.splice(index, 1);
    this.saveNotes();
  }

  private saveNotes() {
    localStorage.setItem('notes', JSON.stringify(this.notes));
  }

  private loadNotes() {
    const savedNotes = localStorage.getItem('notes');
    if (savedNotes) {
      this.notes = JSON.parse(savedNotes);
    }
  }
}
Redaguokite šablono failus:
Redaguokite pagrindinį app.component.html failą taip, kad jis įtrauktų NoteFormComponent ir atvaizduotų sąrašą iš NoteService.app.component.html:
html
Copy code
<div>
  <h1>Mano Užrašai</h1>
  <app-note-form></app-note-form>
  <ul>
    <li *ngFor="let note of notes; let i = index">
      {{ note }}
      <button (click)="deleteNote(i)">Ištrinti</button>
    </li>
  </ul>
</div>
app.component.ts:
typescript
Copy code
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