import { Component, OnInit, ViewChild } from '@angular/core';
import { MatCheckbox } from '@angular/material';


export interface Task {
  name: string;
  completed: boolean;
  subtasks?: Task[];
}

@Component({
  moduleId: module.id,
  selector: 'mat-checkbox-demo-nested-checklist',
  styles: [`
    li {
      margin-bottom: 4px;
    }
  `],
  templateUrl: 'nested-checklist.html',
})
export class MatCheckboxDemoNestedChecklist {
  tasks: Task[] = [
    {
      name: 'Reminders',
      completed: false,
      subtasks: [
        { name: 'Cook Dinner', completed: false },
        { name: 'Read the Material Design Spec', completed: false },
        { name: 'Upgrade Application to Angular', completed: false }
      ]
    },
    {
      name: 'Groceries',
      completed: false,
      subtasks: [
        { name: 'Organic Eggs', completed: false },
        { name: 'Protein Powder', completed: false },
        { name: 'Almond Meal Flour', completed: false }
      ]
    }
  ];

  allComplete(task: Task): boolean {
    let subtasks = task.subtasks;

    if (!subtasks) {
      return false;
    }

    return subtasks.every(t => t.completed) ? true
        : subtasks.every(t => !t.completed) ? false
        : task.completed;
  }

  someComplete(tasks: Task[]): boolean {
    console.log('entrou no some completed.....')
    const numComplete = tasks.filter(t => t.completed).length;
    return numComplete > 0 && numComplete < tasks.length;
  }

  setAllCompleted(tasks: Task[], completed: boolean) {
    console.log('set all completed....')
    tasks.forEach(t => t.completed = completed);
  }
}


@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css']
})
export class CheckboxComponent implements OnInit {

  @ViewChild('myCheck') myCheck: MatCheckbox;

  constructor() { }

  ngOnInit() {
    console.log(this.myCheck._inputElement.nativeElement.isIndeterminate)
  }

  determina(tudo:any) {
    console.log(tudo);
  }

  estadoIndeterminado(event: boolean) {
    console.log(`indeterminate é: ${event}`);
  }

  estadoMudado(event: boolean) {
    console.log(`checked é: ${event}`);
  }

  isIndeterminate: boolean = false;
  isChecked: boolean = false;
  isDisabled: boolean = false;
  alignment: string = 'start';
  useAlternativeColor: boolean = false;

  printResult() {
    if (this.isIndeterminate) {
      return 'Maybe!';
    }
    return this.isChecked ? 'Yes!' : 'No!';
  }

  checkboxColor() {
    return this.useAlternativeColor ? 'primary' : 'accent';
  }


  // no checkbox nested

  tasks: Task[] = [
    {
      name: 'Reminders',
      completed: false,
      subtasks: [
        { name: 'Cook Dinner', completed: false },
        { name: 'Read the Material Design Spec', completed: false },
        { name: 'Upgrade Application to Angular', completed: false }
      ]
    },
    {
      name: 'Groceries',
      completed: false,
      subtasks: [
        { name: 'Organic Eggs', completed: false },
        { name: 'Protein Powder', completed: false },
        { name: 'Almond Meal Flour', completed: false }
      ]
    }
  ];

  allComplete(task: Task): boolean {
    let subtasks = task.subtasks;

    if (!subtasks) {
      return false;
    }

    return subtasks.every(t => t.completed) ? true
        : subtasks.every(t => !t.completed) ? false
        : task.completed;
  }

  someComplete(tasks: Task[]): boolean {
    // console.log('entrou no some completed') ;
    // console.log(tasks);
    const numComplete = tasks.filter(t => t.completed).length;
    return numComplete > 0 && numComplete < tasks.length;
  }

  setAllCompleted(tasks: Task[], completed: boolean) {
    // console.log('entrou no set all completed');
    tasks.forEach(t => t.completed = completed);
  }

  todos: boolean = false

  tarefas: any[] = [
    { name: 'Organic Eggs', completed: false },
    { name: 'Protein Powder', completed: false },
    { name: 'Almond Meal Flour', completed: false }
  ]

  allCheck(completado: boolean) {
    console.log('all check')
    this.tarefas.forEach(t => t.completed = completado)
  }

  verificaTodos(completado: boolean) {
    if (completado) {
      this.tarefas.every(t => t.completed == true) ? this.todos = true : this.todos = false
    } else {

    }
  }

}

