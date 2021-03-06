import { Component } from '@angular/core';
import {
  async,
  TestBed
} from '@angular/core/testing';

import { NewModule } from './new.module';

export function main() {
   describe('New component', () => {
    // Setting module for testing
    // Disable old forms

    beforeEach(() => {
      TestBed.configureTestingModule({
        declarations: [TestComponent],
        imports: [NewModule]
      });
    });

    it('should work',
      async(() => {
        TestBed
          .compileComponents()
          .then(() => {
            let fixture = TestBed.createComponent(TestComponent);
            let newDOMEl = fixture.debugElement.children[0].nativeElement;

              expect(newDOMEl.querySelectorAll('h2')[0].textContent).toEqual('Features');
          });
        }));
    });
}

@Component({
  selector: 'test-cmp',
  template: '<sd-new></sd-new>'
})
class TestComponent {}
