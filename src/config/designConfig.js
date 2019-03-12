export const SetProperty = (property, propValue) => {

    if(!propValue) return;

      if(propValue.constructor === Array){
        if(property==='--fontFamily'){
          document.documentElement.style.setProperty(property, propValue.map(f => {      
            return f.trim().match(/\s/g) !==null  ? "'"+f+"'" : f;
          }).join(','),"important");
        }      
        
      }else{
        document.documentElement.style.setProperty(property, propValue ,"important");
      }
  }

export const ApplyDesign = (styles) =>{
    
    if(!styles) return;

    // generalized way
    // when property name is same
    Object.keys(styles).forEach(function(key) {        
        SetProperty('--'+key, styles[key]);
    });

    // SetProperty('--fontColor',styles.fontColor);
    // SetProperty('--fontFamily',styles.fontFamily);
    // SetProperty('--backgroundColor',styles.backgroundColor); 

  }
