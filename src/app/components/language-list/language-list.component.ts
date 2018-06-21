import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { unflatten } from 'flat';

@Component({
  selector: 'app-language-list',
  templateUrl: './language-list.component.html',
  styleUrls: ['./language-list.component.scss']
})
export class LanguageListComponent implements OnInit {
  subscribers: any[] = [];
  languageList: any[] = [];
  isLoading = true;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getLanguageList();
  }

  addLanguage(form) {
    console.log('form', form.value);

    const language = form.value;
    form.controls['title'].setErrors(null);
    form.controls['code'].setErrors(null);

    if (!language.title) {
      form.controls['title'].setErrors({'incorrect': true});
      return;
    }

    if (!language.code) {
      form.controls['code'].setErrors({'incorrect': true});
      return;
    }

    form.reset();

    this.subscribers.push(this.http
      .post('/api/language', language)
      .subscribe((response: any) => this.getLanguageList())
    );
  }

  getLanguageList() {
    this.isLoading = true;

    this.subscribers.push(this.http
      .get('/api/language/list')
      .subscribe((response: any) => {
        this.languageList = response.languageList;
        this.isLoading = false;
      })
    );
  }

  downloadLanguage(language) {
    this.isLoading = true;

    this.subscribers.push(this.http
      .get(`/api/language/${language._id}`)
      .subscribe((response: any) => {
        console.log('response', response);
        const languageObject = unflatten(response.languageObject);
        const dataStr = `data:text/json;charset=utf-8,${encodeURIComponent(JSON.stringify(languageObject, null, 2))}`;

        const a = document.createElement('a');
        a.href = dataStr;
        a.download = `comment_widget-${response.language.code}.json`;
        a.click();
        this.isLoading = false;
      })
    );
  }
}
