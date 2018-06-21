import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as flatten from 'flat';

@Component({
  selector: 'app-translation-list',
  templateUrl: './translation-list.component.html',
  styleUrls: ['./translation-list.component.scss']
})
export class TranslationListComponent implements OnInit, OnDestroy {
  translationObj: any = {};
  importObject: any;
  languageList: any = [];
  originKeyList: any = [];
  subscribers: any = [];
  importLanguage = '';
  isLoading = true;
  isShowImport = false;
  originKeyFilter = '';
  keyPressTimeout: any;

  constructor(private http: HttpClient) { }

  async ngOnInit() {
    await this.getLanguageList();
    await this.getOriginKeyList();
    await this.getTranslationList();
  }

  getTranslationList() {
    this.subscribers.push(this.http.get('/api/translation/list').subscribe(response => {
      this.translationObj = response;
      this.isLoading = false;
    }));
  }

  getLanguageList() {
    this.subscribers.push(
      this.http
        .get('/api/language/list')
        .subscribe((response: any) => this.languageList = response.languageList)
    );
  }

  getLanguageFilteredList() {
    return this.languageList.filter(language => language.isSelected);
  }

  getOriginKeyList() {
    this.subscribers.push(this.http.get('/api/originKey/list').subscribe(response => this.originKeyList = response));
  }

  getOriginKeyFilteredList() {
    return this.originKeyList.filter(originKey => originKey.title.search(this.originKeyFilter) > -1);
  }

  getTranslation(originKeyId, languageId) {
    const translationObjOriginKey = this.translationObj[originKeyId];

    if (!translationObjOriginKey) {
      return '';
    }

    if (!translationObjOriginKey[languageId]) {
      return '';
    }

    // console.log(translationObjOriginKey[languageId].translatedText)

    return translationObjOriginKey[languageId].translatedText;
  }

  getTranslationId(originKeyId, languageId) {
    // console.log('originKeyId', originKeyId);
    const translationObjOriginKey = this.translationObj[originKeyId];

    if (!translationObjOriginKey) {
      return '';
    }

    if (!translationObjOriginKey[languageId]) {
      return '';
    }

    return translationObjOriginKey[languageId]._id;
  }

  setTranslation(originKeyId, languageId, translationText) {
    const translationObj = this.translationObj;

    if (!translationObj[originKeyId]) {
      translationObj[originKeyId] = {};
    }

    if (!translationObj[originKeyId][languageId]) {
      translationObj[originKeyId][languageId] = {};
    }

    translationObj[originKeyId][languageId].translatedText = translationText;

    this.translationObj = translationObj;
  }

  setOriginKeyFilter(value) {
    clearTimeout(this.keyPressTimeout);

    this.keyPressTimeout = setTimeout(() => {
      this.originKeyFilter = value;
    }, 2);
  }

  toggleImportFile() {
    this.isShowImport = !this.isShowImport;
  }

  onChangeImportFile(event) {
    // console.log('event', event.target.files)

    const reader = new FileReader()

    reader.onload = async () => {
      const resultJson = flatten(JSON.parse(reader.result));
      this.importObject = resultJson;
    }

    reader.readAsText(event.target.files[0]);
  }

  async importFile() {
    const importLanguage = this.importLanguage;
    const importObject = this.importObject;

    if (!importLanguage) {
      return;
    }

    if (!importObject) {
      return;
    }

    this.isLoading = true;

    this.subscribers.push(await this.http.post('/api/translation/import', {
      language: importLanguage,
      translation: importObject
    }).subscribe(response => {
      this.getTranslationList();
      this.isShowImport = false;
    }));
  }

  async saveTranslation(form) {
    const formValue = form.value
    // console.log(formValue)

    if (!formValue) {
      return;
    }

    const translationList = []

    this.originKeyList.forEach(originKey => {
      this.languageList.forEach(language => {
        const translationElement = this.translationObj[originKey._id] && this.translationObj[originKey._id][language._id] || {};

        const translation: any = {
          originKey: originKey._id,
          language: language._id,
          translatedText: translationElement.translatedText || ''
        };

        if (translationElement._id) {
          translation._id = translationElement._id;
        }

        translationList.push(translation);
      });
    });

    this.isLoading = true;

    const translationListChunks = [];
    const chunk = 100;

    for (let i = 0, j = translationList.length; i < j; i += chunk) {
      translationListChunks.push(translationList.slice(i, i + chunk));
    }

    // console.log(translationListChunks.length)

    for (const translationListChunk of translationListChunks) {
      this.subscribers.push(await this.http.put('/api/translation', translationListChunk).subscribe());
    }

    await this.getTranslationList();

    // this.isLoading = false;
  }

  removeOriginKey(originKeyId) {
    if (!window.confirm('Delete origin key?')) {
      return;
    }

    this.subscribers.push(this.http
      .delete(`/api/originKey/${originKeyId}`)
      .subscribe(response => this.originKeyList = this.originKeyList.filter(originKey => originKey._id !== originKeyId)));
  }

  ngOnDestroy() {
    this.subscribers.forEach(subscriber => subscriber.unsubscribe());
  }
}
