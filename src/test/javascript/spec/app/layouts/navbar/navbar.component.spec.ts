import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { of } from 'rxjs';

import { StoreTestModule } from '../../../test.module';
import { ProfileInfo } from '@store/layouts/profiles/profile-info.model';
import { NavbarComponent } from '@store/layouts/navbar/navbar.component';
import { AccountService } from '@store/core/auth/account.service';
import { ProfileService } from '@store/layouts/profiles/profile.service';

describe('Component Tests', () => {
  describe('Navbar Component', () => {
    let comp: NavbarComponent;
    let fixture: ComponentFixture<NavbarComponent>;
    let accountService: AccountService;
    let profileService: ProfileService;

    beforeEach(async(() => {
      TestBed.configureTestingModule({
        imports: [StoreTestModule],
        declarations: [NavbarComponent],
      })
        .overrideTemplate(NavbarComponent, '')
        .compileComponents();
    }));

    beforeEach(() => {
      fixture = TestBed.createComponent(NavbarComponent);
      comp = fixture.componentInstance;
      accountService = TestBed.get(AccountService);
      profileService = TestBed.get(ProfileService);
    });

    it('Should call profileService.getProfileInfo on init', () => {
      // GIVEN
      spyOn(profileService, 'getProfileInfo').and.returnValue(of(new ProfileInfo()));

      // WHEN
      comp.ngOnInit();

      // THEN
      expect(profileService.getProfileInfo).toHaveBeenCalled();
    });

    it('Should call accountService.isAuthenticated on authentication', () => {
      // WHEN
      comp.isAuthenticated();

      // THEN
      expect(accountService.isAuthenticated).toHaveBeenCalled();
    });
  });
});
