import { Component } from '@angular/core';
import { LanguageStore } from 'src/app/languages/translate.store';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  languages = [
    { key: 'kh', name: 'ភាសាខ្មែរ', icon: '../../../../assets/logo/cambodia_flag.svg' },
    { key: 'en', name: 'English', icon: '../../../../assets/logo/english_flag.svg' },
  ]

  constructor(
    public lang: LanguageStore,
  ){}

  onChangeLanguage(language:any) {
    this.lang.chooseLanguage(language?.key)
  }
}
