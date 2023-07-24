import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-profile-picture',
  templateUrl: './profile-picture.component.html',
  styleUrls: ['./profile-picture.component.scss'],
})
export class ProfilePictureComponent {
  @Input() src: string =
    'https://s3-alpha-sig.figma.com/img/ad4d/4f60/501aab3e7a47c8b34bb3dd91ae0ae6cb?Expires=1691366400&Signature=gULHmYEKzGVeYhfU77ph0~-gz37oRn~WGPFyr~Pssuq3DD95zjmU1ii4MbqPSkt~aHqdBMHFsAZZYOrMcsN6UJPBCoWgwM9aZ-aFnmL7yywwiBrnGd96lgeTmgW8qAFwZwerwiydByl6xrH3LABt5FSoiDObPeh6KhpCgVrXuAW5siIbnmH9LF85ehzZ94eFL6Z4ggtS9ft13hYZ1FgHl4vp3~wl17rZ9ixiXuf0ZvC-3~MY0ywpWF1z8j-gN2E2UQM3ezfU5DK5BaVq1kwzzNqbj9tUmoJG15SF2YBtlkz0-vZ6l8mLVGMFGzMbkAMHQjDqXo84nvyxco2eNAgF-w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4';
  // @Input() type: ProfilePictureType = 'default';
}
