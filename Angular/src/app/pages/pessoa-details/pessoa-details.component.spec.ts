import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { PessoaDetailsComponent } from "./PessoaDetailsComponent";

describe("PessoaDetailsComponent", () => {
  let component: PessoaDetailsComponent;
  let fixture: ComponentFixture<PessoaDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PessoaDetailsComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PessoaDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
