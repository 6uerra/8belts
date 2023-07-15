
module.exports = class TextUtility {
  constructor() {
  }

  async getRandomText(elements) {
    const texts = [];
  
    for (let i = 0; i < elements.length; i++) {
      const text = await elements[i].getText();
      texts.push(text);
    }
  
    const randomIndex = Math.floor(Math.random() * texts.length);
    const randomText = texts[randomIndex];
  
    return randomText;
  }

  async getHoursStartAndEnd (){
    const minimumHour = 6;
    const maxtime = 18; 
    let startHour, endHour;
    do {
      startHour = Math.floor(Math.random() * (maxtime - minimumHour + 1)) + minimumHour;
      endHour = startHour + 8;
    } while (endHour > maxtime);
 
    let minutos = Math.floor(Math.random() * 60);
    
    startHour = startHour > 12 ? startHour - 12 : startHour;
    endHour = endHour > 12 ? endHour - 12 : endHour;
  

    let startTime = startHour.toString().padStart(2, '0') + minutos.toString().padStart(2, '0') + 'am';
    let EndTime = endHour.toString().padStart(2, '0') + minutos.toString().padStart(2, '0') + 'pm';
  
    if (startHour >= 12) {
      startTime = startTime.replace('am', 'pm');
    }
  
    return [startTime, EndTime];
  }

 
  async getDateCurrent() {
      const fecha = new Date();
      const dia = fecha.getDate().toString().padStart(2, '0');
      const mes = (fecha.getMonth() + 1).toString().padStart(2, '0');
      const año = fecha.getFullYear();
  
      return dia+"/"+mes+"/"+año;
    }

  
}
