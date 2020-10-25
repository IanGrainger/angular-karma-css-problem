import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { parse } from 'css';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'angular-karma-css-problem'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('angular-karma-css-problem');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain(
      'angular-karma-css-problem app is running!'
    );
  });

  it('shouldnt error looking for class', () => {
    const css = 'a-class-to-find';
    const ast = parse(`selector { ${css} }`, {
      silent: true,
    }).stylesheet;
    expect(ast.parsingErrors.length).toEqual(1);
  });
});
