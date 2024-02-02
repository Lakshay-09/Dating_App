import { CanDeactivateFn } from '@angular/router';
import { MessagesComponent } from '../messages/messages.component';

export const preventUnsavedChangesGuard: CanDeactivateFn<MessagesComponent> = (component) => {

  if(component.editForm?.dirty){
     return confirm('Are you sure you want to continue? Any unsaved changes will be lost')
  }
  return true;
};
