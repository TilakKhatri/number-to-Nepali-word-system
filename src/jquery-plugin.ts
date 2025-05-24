import $ from 'jquery';
import { convertNumberToWordsInNepaliSystem } from './index';

declare global {
  interface JQuery {
    nepaliNumberSystem(options?: { local?: 'np' | 'en' }): JQuery;
  }
}

$.fn.nepaliNumberSystem = function (options: { local?: 'np' | 'en' }) {
  const settings = $.extend(
    {
      local: 'np',
    },
    options
  );

  return this.each(function () {
    const $this = $(this);
    const num = $this.text().trim() || $this.val()?.toString().trim() || '0';
    const result = convertNumberToWordsInNepaliSystem(num, settings.local);
    $this.text(result);
  });
};
