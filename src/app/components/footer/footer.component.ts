import { Component } from '@angular/core';
import { globalPaths } from 'src/app/utils/global-paths';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent { 
  linkedInImage: string = globalPaths.s3Bucket.concat('linkedin.svg');
}
