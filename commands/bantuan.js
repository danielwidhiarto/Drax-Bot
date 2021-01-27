module.exports = {
    name: 'bantuan',
    description: "sends the command list",
    async execute(message, args){
        await message.reply (`1. **%ping** - *Melihat Ping kalian*
                              2. **%youtube** - *Melihat Youtube Daniel*
                              3. **%danang** - *Melihat Quotes dari Danang*
                              4. **%tofel** - *Melihat Quotes dari Tofel*
                              5. **%fanto** - *Melihat Quotes dari Fanto*
                              6. **%danangrakitpc** - *Melihat Quotes dari Danang yang mau rakit PC*
                              7. **%panggilanku** - *Melihat nama panggilan kalian*
                              8. **%bangjago** - *Melihat muka Abang Jago*
                              9. **%sasageyo** - *Melihat cosplayer Sasageyo*
                              10. **%mainkan** - *Memutar musik*
                              11. **%pergi** - *Mengeluarkan Bot dari Voice Channel atau menghentikan musik*


                              `);
        }
    }