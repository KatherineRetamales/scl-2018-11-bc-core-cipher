describe('cipher', () => {

  it('debería ser un objeto', () => {
    assert.equal(typeof cipher, 'object');
  });

  describe('cipher.encode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.encode, 'function');
    });

    it('debería retornar "JHZH" para "CASA" con offest 33', () => {
    assert.equal(cipher.encode('CASA',33),'JHZH');
    });

    it('debería retornar "ZYCSMSYX DBOC ZEXDY MEKDBY" para "POSICION TRES PUNTO CUATRO" con offest 10', () => {
      assert.equal(cipher.encode('POSICION TRES PUNTO CUATRO',10),'ZYCSMSYX DBOC ZEXDY MEKDBY');
      });

    it('debería retornar " " para " " con offest 56', () =>{
    assert.equal(cipher.encode(' ',56),' ');
    });
  });

  describe('cipher.decode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.decode, 'function');
    });

    it('debería retornar "CASA" para "JHZH" con offest 33', () =>{
      assert.equal(cipher.decode('JHZH',33),'CASA');
    });

    it('debería retornar " " para " " con offest 56', () =>{
      assert.equal(cipher.decode(' ',56),' ');
      });
  });

});
