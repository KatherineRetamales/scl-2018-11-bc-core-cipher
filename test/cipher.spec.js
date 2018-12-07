describe('cipher', () => {

  it('debería ser un objeto', () => {
    assert.equal(typeof cipher, 'object');
  });

  describe('cipher.encode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.encode, 'function');
    });

    it('debería retornar "JHZH" para "CASA" con offest 33', () => {
      assert.equal(cipher.encode('CASA', 33), 'JHZH');
    });

    it('debería retornar "ZYCSMSYX DBOC ZEXDY MEKDBY" para "POSICION TRES PUNTO CUATRO" con offest 10', () => {
      assert.equal(cipher.encode('POSICION TRES PUNTO CUATRO', 10), 'ZYCSMSYX DBOC ZEXDY MEKDBY');
    });

    it('debería retornar "bifu wigi ymnum" para "hola como estas" con offest 20', () => {
      assert.equal(cipher.encode('hola como estas', 20), 'bifu wigi ymnum');
    });

    it('debería retornar " " para " " con offest 56', () => {
      assert.equal(cipher.encode(' ', 56), ' ');
    });

    it('debería retornar "ññññ" para "ññññ" con offest 78', () => {
      assert.equal(cipher.encode('ññññ', 78), 'ññññ');
    });

    it('debería retornar "Ñ" para "Ñ" con offest 14', () => {
      assert.equal(cipher.encode('Ñ', 14), 'Ñ');
    });

    it('debería retornar """$$))" para "++--##" con offest 6', () => {
      assert.equal(cipher.encode('++--##', 6), '""$$))');
    });

    it('debería retornar "234567" para "123456" con offest 10', () => {
      assert.equal(cipher.encode('123456', 10), '234567');
    });
  });

  describe('cipher.decode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.decode, 'function');
    });

    it('debería retornar "CASA" para "JHZH" con offest 33', () => {
      assert.equal(cipher.decode('JHZH', 33), 'CASA');
    });

    it('debería retornar "POSICION TRES PUNTO CUATRO" para "ZYCSMSYX DBOC ZEXDY MEKDBY" con offest 10', () => {
      assert.equal(cipher.decode('ZYCSMSYX DBOC ZEXDY MEKDBY', 10), 'POSICION TRES PUNTO CUATRO');
    });

    it('debería retornar "hola como estas" para "bifu wigi ymnum" con offest 20', () => {
      assert.equal(cipher.decode('bifu wigi ymnum', 20), 'hola como estas');
    });

    it('debería retornar " " para " " con offest 56', () => {
      assert.equal(cipher.decode(' ', 56), ' ');
    });

    it('debería retornar "ññññ" para "ññññ" con offest 78', () => {
      assert.equal(cipher.decode('ññññ', 78), 'ññññ');
    });

    it('debería retornar "Ñ" para "Ñ" con offest 14', () => {
      assert.equal(cipher.decode('Ñ', 14), 'Ñ');
    });

    it('debería retornar "++--##" para """$$))" con offest 6', () => {
      assert.equal(cipher.decode('""$$))', 6), '++--##');
    });

    it('debería retornar "123456" para "234567" con offest 10', () => {
      assert.equal(cipher.decode('234567', 10), '123456');
    });
  });

});
