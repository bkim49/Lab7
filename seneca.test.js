const seneca = require('./seneca');

describe('seneca.isValidEmail()', function() {
  test('returns true for simple myseneca address', function() {
    var simpleEmail = 'someone@myseneca.ca';
    expect(seneca.isValidEmail(simpleEmail)).toBe(true);
  });

  test('returns false for a non-myseneca address', function() {
    var gmailAddress = 'someone@gmail.com';
    expect(seneca.isValidEmail(gmailAddress)).toBe(false);
  });

  //fail
  test('returns false for pass number', function() {
    var nonString = 123;
    expect(seneca.isValidEmail(nonString)).toBe(false);
  });
  test('returns false for pass boolean', function() {
    var nonString = true;
    expect(seneca.isValidEmail(nonString)).toBe(false);
  });
  test('returns falase for pass null', function (){
    var nonString = null;
    expect(seneca.isValidEmail(nonString)).toBe(false);
  });
  test('returns false for pass email contains leading whitespace', function (){
    var leadingWhiteSpace = ' someone@myseneca.ca';
    expect(seneca.isValidEmail(leadingWhiteSpace)).toBe(false);
  });


  test('returns true for a professor email', function (){
    var professorEmail = 'professor@senecacollege.ca';
    expect(seneca.isValidEmail(professorEmail)).toBe(true);
  });

  //fail
  test('returns true for old style Seneca address', function (){
    var oldStyleEmail = 'someone@senecac.on.ca';
    expect(seneca.isValidEmail(oldStyleEmail)).toBe(true);
  });
});

describe('seneca.formatSenecaEmail()', function() {
  test('adds @myseneca.ca to the end of name', function() {
    var name = "mshaw";
    expect(seneca.formatSenecaEmail(name)).toBe('mshaw@myseneca.ca');
  });
  test('returns false for name contains space', function (){
    var name = 'msh aw';
    expect(seneca.isValidEmail(name)).toBe(false);
  });
  test('returns false for name contains control characters', function (){
    var name = '@#mshaw'
    expect(seneca.isValidEmail(name)).toBe(false);
  });

  //fail
  test('returns false for name is null', function (){
    var name = null;
    expect(seneca.isValidEmail(name)).toBe(false);
  });
});
