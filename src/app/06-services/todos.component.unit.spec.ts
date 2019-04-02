import { TodosComponent } from './todos.component';
import { TodoService } from './todo.service';
import { Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/empty';
import 'rxjs/add/observable/throw';

xdescribe('TodosComponent', () => {
  let component: TodosComponent;
  let service: TodoService;
  beforeEach(() => {
    service = new TodoService(null);
    component = new TodosComponent(service);
  });

  it('should initialize todos array with the values returned from service', () => {
    const data = [1, 2, 3];
      spyOn(service, 'getTodos').and.callFake(() => {
        return Observable.from([data]);
      });

      component.ngOnInit();

      expect(component.todos.length).toBe(3);
  });

  it('should call the add method to save todo data whenever new todo data is available', () => {
      const spy = spyOn(service, 'add').and.callFake(td => {
        return Observable.empty();
      });

      component.add();

      expect(spy).toHaveBeenCalled();
  });

  it('should add the returned todos object to todos array', () => {
    const todo = {id: 1};
    spyOn(service, 'add').and.returnValue(Observable.from([todo]));

    component.add();

    expect(component.todos.indexOf(todo)).toBeGreaterThan(-1);
  });

  it('should set the message property when server throws error while executing add method', () => {
    const message = 'Error from server while adding todos object';
    spyOn(service, 'add').and.returnValue(Observable.throw(message));

    component.add();

    expect(component.message).toBe(message);
  });

  it('should delete the todo item if user confirms the delete action', () => {
    spyOn(window, 'confirm').and.returnValue(true);
    const spy = spyOn(service, 'delete').and.returnValue(Observable.empty());

    component.delete(1);
    expect(spy).toHaveBeenCalledWith(1);
  });

  it('should NOT call delete method if user says cancel in confirmation box', () => {
    spyOn(window, 'confirm').and.returnValue(false);
    const spy = spyOn(service, 'delete').and.returnValue(Observable.empty());

    component.delete(1);
    expect(spy).not.toHaveBeenCalledWith();
  });

});