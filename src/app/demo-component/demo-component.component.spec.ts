import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoComponentComponent } from './demo-component.component';

describe('DemoComponentComponent', () => {
  let component: DemoComponentComponent;
  let fixture: ComponentFixture<DemoComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DemoComponentComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(DemoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
// là một file testing được tạo ra bởi Angular CLI khi bạn tạo một component mới.
//  File này được sử dụng để viết các unit test cho component tương ứng, 
//  nhằm đảm bảo tính đúng đắn và chức năng hoạt động của component đó.
// Đoạn mã này sử dụng TestBed để tạo ra một instance của DemoComponentComponent và kiểm tra 
// xem component này có được tạo ra thành công hay không.