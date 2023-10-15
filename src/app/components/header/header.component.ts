import { Component } from '@angular/core';
import { globalPaths } from 'src/app/utils/global-paths';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  airPlaneImage: string = globalPaths.s3Bucket.concat('airplane.png');
}
