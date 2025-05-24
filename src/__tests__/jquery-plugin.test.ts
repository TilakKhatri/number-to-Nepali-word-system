import '../jquery-plugin';
import $ from 'jquery';

describe('jQuery nepaliNumberSystem plugin', () => {
  beforeAll(() => {
    document.body.innerHTML =
      '<div id="num">123</div><div id="largeNum">4567896789678.6788</div>';
  });

  it('should convert number to Nepali words in DOM', () => {
    $('#num').nepaliNumberSystem({ local: 'np' });
    expect($('#num').text()).toMatch(/एक सय तेइस|एक सय तेइस/);
  });

  it('should convert number to English words in DOM', () => {
    $('#num').text('123');
    $('#num').nepaliNumberSystem({ local: 'en' });
    expect($('#num').text()).toMatch(/One Hundred Twenty Three/);
  });

  it('should convert large number with decimals to Nepali words in DOM', () => {
    $('#largeNum').nepaliNumberSystem({ local: 'np' });
    const result = $('#largeNum').text();
    expect(result).toMatch(/रुपैयाँ/);
    expect(result).toMatch(/पैसा/);
    expect(result).toMatch(/खर्ब/);
    expect(result).toMatch(/अर्ब/);
    expect(result).toMatch(/करोड/);
  });

  it('should convert large number with decimals to English words in DOM', () => {
    $('#largeNum').text('4567896789678.6788');
    $('#largeNum').nepaliNumberSystem({ local: 'en' });
    const result = $('#largeNum').text();
    expect(result).toMatch(/Rupees/);
    expect(result).toMatch(/Paisa/);
    expect(result).toMatch(/Kharab/);
    expect(result).toMatch(/Arab/);
    expect(result).toMatch(/Crore/);
  });
});
