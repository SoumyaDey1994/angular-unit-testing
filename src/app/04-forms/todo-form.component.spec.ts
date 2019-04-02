import { TodoFormComponent } from './todo-form.component';
import { FormBuilder } from '@angular/forms';

describe('TodoFormComponent', () => {
  let component: TodoFormComponent;

  beforeEach(() => {
    component = new TodoFormComponent(new FormBuilder());
  });

  it('should have controls name & email', () => {
    expect(component.form.controls.name).toBeTruthy();
    expect(component.form.controls.email).toBeTruthy();
  });

  it('should have required validator for control name', () => {
    const control = component.form.get('name');
    control.setValue('');
    expect(control.valid).toBeFalsy();
  });
});