
const getData = () => {

    const DOCS_URL = '1PB8Go8E1LHM9RC6P2RTQXQKY6mH5OXBgAlRdrjxHCB8';

  const result = fetch(`https://opensheet.vercel.app/${DOCS_URL}/1`, {
    method: 'GET',
  })

  console.log(result);

  result
    .then((response) => {
      if (!response.ok) {
        throw new Error('error')
      }

      return response.json()
    })
    .then((line) => {  
        let lineSort = line.filter(element => Object.keys(element).length !== 0 && element.constructor === Object)        
        console.log(lineSort);

        fillingTemplate(lineSort);
      
    })
    .catch((error) => {
      console.log(error)
    })
    .finally(() => { 
       
    })
}

function fillingTemplate(lines) {

    lines.forEach(line => {
        let linksHTML = document.querySelectorAll(`.link${line.number}`);
        linksHTML.forEach(link => {link.href = line.link;})      
        
        let typeHTML = document.querySelectorAll(`.type${line.number}`);
        typeHTML.forEach(type => {type.textContent = line.type;});   
        
        let brandNameHTML = document.querySelectorAll(`.brand-name${line.number}`);
        brandNameHTML.forEach(type => {type.textContent = line.brandName;}); 

        let imgHTML = document.querySelectorAll(`.img${line.number}`);
        imgHTML.forEach(type => {type.src = line.IMG;}); 

        let priceHTML = document.querySelectorAll(`.price${line.number}`);
        priceHTML.forEach(type => {
            type.innerHTML = line.priceOld === "" ? line.price : 
            `${line.price}&nbsp;&nbsp;<s style="color: #B3B3B3;">${line.priceOld}</s>`;
        });  
        
        let bannerLinks = document.querySelectorAll('a[href="https://brand');
        bannerLinks.forEach(link => {link.href = line.linkBanner;});

    });

    let titleHTML = document.querySelector(`.titleJS`);        
        titleHTML.textContent = lines[0].title;

        let imgBannerD = document.querySelector(`.img_dJS`);
        imgBannerD.src = lines[0].imgBannerD; 
        imgBannerD.alt = lines[0].alt; 

        let imgBannerM = document.querySelector(`.img_mJS`);
        imgBannerM.src = lines[0].imgBannerM; 
        imgBannerM.alt = lines[0].alt; 

        let messageHTML = document.querySelector(`.messageJS`);
        messageHTML.textContent = lines[0].text; 
        
}

getData();

// https://docs.google.com/spreadsheets/d/1154f_D8oPL-iVz_vRSOSzjo-x-ZVhVHCQ0QsxTlkVso/edit#gid=207443249

