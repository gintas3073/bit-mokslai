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