const editor = grapesjs.init({
  container: "#editor",
  fromElement: true,
  width: "auto",
  storageManager: false,
  plugins: ["gjs-blocks-form"],
  pluginsOpts: {
    "gjs-blocks-form": {},
  },
  blockManager: {
    appendTo: "#blockgrapes-container",
  },
  layerManager: {
    appendTo: "#layer-container",
  },
  traitManager: {
    appendTo: "#trait-container",
  },
  selectorManager: {
    appendTo: "#style-view",
  },
  styleManager: {
    appendTo: "#style-view",
    sectors: [
      {
        name: "Dimension",
        open: false,
        builProps: ["width","min-height","padding"],
        properties:[
          {
            type: "integer",
            name: "The Width",
            property: "width",
            units: ["px","%","rem"],
            defaults: "auto",
            min: 0,
          },
        ],
      }
    ],
  },
  panels: {
    defaults: [
      {
        id: "basic-actions",
        el: ".panel__basic__actions",
        buttons: [
          {
            id: "visibility",
            active: false,
            className: "btn-toggle-borders",
            label: "<i class='bi bi-border'></i>",
            command: "sw-visibility",
          },
          
        ],
      },
      {
        id: "panel-devices",
        el: ".panel__devices",
        buttons: [
          {
            id: "device-desktop",
            label: "<i class='bi bi-laptop'></i>",
            command: "set-device-desktop",
            active: true,
            togglable: false,
          },
          {
            id: "device-mobile",
            label: "<i class='bi bi-phone'></i>",
            command: "set-device-mobile",
          },
        ],
      },
    ],
  },
  deviceManager: {
    devices: [
      {
        name: "Desktop",
        width: "",
      },
      {
        name: "Mobile",
        width: "320px",
        widthMedia: "480px",
      },
    ],
  },
});

editor.Commands.add("set-device-desktop",{
  run: (editor)=> editor.setDevice("Desktop"),
});
editor.Commands.add("set-device-mobile",{
  run: (editor)=> editor.setDevice("Mobile"),
});

  script = function(props) {
    var formula = props['stitle'];
    var miArray = new Array();
    var letra = "";
    var position = 0;
    var lgtd = formula.length;
    for(var i=0; i<lgtd;i++){
      var caracter = formula.substring(i,i+1);
      var caracterr = formula.substring(i+1,i+2);
      var ascci = caracter.toUpperCase().charCodeAt(0);
      var asccii = caracterr.toUpperCase().charCodeAt(0);
      if(ascci > 64 && ascci < 91){
        if(asccii > 64 && asccii < 91){
          letra = letra+''+caracter;
          position = position;
        }else{
          letra = letra+''+caracter;
          if(!!document.getElementsByName(''+letra+'')[0] == true){
            miArray.splice(position,0,'0');
            jpm(letra,position, this);
          }
          position = position+1;
          letra = "";
        }
      }else{
        miArray.splice(position,0,caracter);
        position = position +1;
      }
    }

    function jpm(caracter,posicion, campo){
      var idinput = document.getElementsByName(''+caracter+'')[0].id;
      let txtInput = document.querySelector('#'+idinput+'');
      txtInput.addEventListener("keyup",()=>{
      var value = document.getElementsByName(''+caracter+'')[0].value;
        miArray.splice(posicion,1,''+value+'');
        var consulta = miArray[posicion];
        var cal = calculo(miArray);
        campo.value = cal;
      });
    }

    function calculo(formula){
      var long = formula.length;
      var form = "";
      for(var i = 0; i<long;i++){
        form = form+''+formula[i];
      }
      var calculo = new Function('return ' + form)();
      return calculo;
    }
};
editor.DomComponents.addType('textarea', {
  isComponent: el => el.tagName == 'TEXTAREA',
  model: {
      defaults: {
        traits: [
          'name',
          'id',
        ],
        attributes: { id: 'textarea',  name: 'nametextarea'},
      },
    },
});
editor.DomComponents.addType('input', {
    isComponent: el => el.tagName == 'INPUT',
    model: {
      defaults: {
        script,
        stitle: "",
        'script-props': ['stitle'],
        traits: [
          'name',
          'id',
          {
            type: 'text',
            name: "stitle",
            changeProp: true,
            label: 'Formula',
          },
          {
            type: 'select',
            label: 'Type',
            name: 'type',
            options: [
              { id: 'text', name: 'Text'},
              { id: 'email', name: 'Email'},
              { id: 'password', name: 'Password'},
              { id: 'number', name: 'Number'},
              { id: 'date', name: 'Date'},
            ]
          }
        ],
        attributes: { id: 'campos', type: 'text', name: 'namecampos'},
      },
    },
});

editor.DomComponents.addType('image', {
    isComponent: el => el.tagName == 'IMAGE',
    model: {
      defaults: {
        traits: [
          'name',
          'src',
          'class',
        ],
        attributes: { class: 'img-fluid'},
      },
    },
});

const blockManager = editor.Blocks;
blockManager.add('checkbox',{
  label: 'Check 1C',
  content: `
              <div class="row">
                  <div class="cell col mb-1">
                    <div class="px-2 form-group">
                      <label>Text Label</label>
                      <div class="form-floating mb-2">
                        <div class="form-check form-check-inline">
                          <input class="form-check-input" type="checkbox" value="Opt 1">
                          <label class="form-check-label">Opt 1</label>
                        </div>
                        <div class="form-check form-check-inline">
                          <input class="form-check-input" type="checkbox" value="Opt 2">
                          <label class="form-check-label">Opt 2</label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            
            <style>
              .label{
                margin:0 0 0 0;
              }
              .form-group{
                margin:2px 10% 3px 10%;
              }
            </style>`,
  category: 'Forms',
  media: `<svg style="width:2px;height:2px">
            <i class="bi bi-check-square  icon-grapes-phone"></i>
        </svg>`,
});

blockManager.add('checkbox2',{
  label: 'Check 2C',
  content: `
              <div class="row">
                <div class="cell col">
                  <div class="px-2 form-group">
                      <label>Text Label</label>
                      <div class="form-floating mb-2">
                        <div class="form-check form-check-inline">
                          <input class="form-check-input" type="checkbox" name="genderDoctFrm" value="Opt 1">
                          <label class="form-check-label">Opt 1</label>
                        </div>
                        <div class="form-check form-check-inline">
                          <input class="form-check-input" type="checkbox" name="genderDoctFrm" value="Opt 2">
                          <label class="form-check-label">Opt 2</label>
                        </div>
                      </div>
                    </div>
                </div>
                <div class="cell col">
                  <div class="px-2 form-group">
                      <label>Text Label</label>
                      <div class="form-floating mb-2">
                        <div class="form-check form-check-inline">
                          <input class="form-check-input" type="checkbox" name="genderDoctFrm" value="Opt 1">
                          <label class="form-check-label">Opt 1</label>
                        </div>
                        <div class="form-check form-check-inline">
                          <input class="form-check-input" type="checkbox" name="genderDoctFrm" value="Opt 2">
                          <label class="form-check-label">Opt 2</label>
                        </div>
                      </div>
                    </div>
                </div>
              <div>            
            <style>
              .label{
                margin:0 0 0 0;
              }
              .form-group{
                margin:2px 10% 3px 10%;
              }
            </style>`,
  category: 'Forms',
  media: `<svg style="width:2px;height:2px">
            <i class="bi bi-card-checklist icon-grapes-phone"></i>
        </svg>`,
});

blockManager.add('checkbox3',{
  label: 'Checkbox 3C',
  content: `
              <div class="row">
                <div class="cell col">
                  <div class="px-2 form-group">
                      <label>Text Label</label>
                      <div class="form-floating mb-2">
                        <div class="form-check form-check-inline">
                          <input class="form-check-input" type="checkbox" value="Opt 1">
                          <label class="form-check-label">Opt 1</label>
                        </div>
                        <div class="form-check form-check-inline">
                          <input class="form-check-input" type="checkbox" value="Opt 2">
                          <label class="form-check-label">Opt 2</label>
                        </div>
                      </div>
                    </div>
                </div>
                <div class="cell col">
                  <div class="px-2 form-group">
                      <label>Text Label</label>
                      <div class="form-floating mb-2">
                        <div class="form-check form-check-inline">
                          <input class="form-check-input" type="checkbox" value="Opt 1">
                          <label class="form-check-label">Opt 1</label>
                        </div>
                        <div class="form-check form-check-inline">
                          <input class="form-check-input" type="checkbox" value="Opt 2">
                          <label class="form-check-label">Opt 2</label>
                        </div>
                      </div>
                    </div>
                </div>
                <div class="cell col">
                  <div class="px-2 form-group">
                      <label>Text Label</label>
                      <div class="form-floating mb-2">
                        <div class="form-check form-check-inline">
                          <input class="form-check-input" type="checkbox" value="Opt 1">
                          <label class="form-check-label">Opt 1</label>
                        </div>
                        <div class="form-check form-check-inline">
                          <input class="form-check-input" type="checkbox" value="Opt 2">
                          <label class="form-check-label">Opt 2</label>
                        </div>
                      </div>
                    </div>
                </div>
              <div>            
            <style>
              .label{
                margin:0 0 0 0;
              }
              .form-group{
                margin:2px 10% 3px 10%;
              }
            </style>`,
  category: 'Forms',
  media: `<svg style="width:2px;height:2px">
            <i class="bi bi-list-check icon-grapes-phone"></i>
        </svg>`,
});

blockManager.add('Inputs',{
  label: 'Inputs',
  content: `
            <div class="row">
              <div class="col cells">
                  <div class="form-group">
                    <label class="label">Text Label</label>
                  </div>
                  <div class="form-group">
                    <input type="text" class="input-grapesuc form-control"/>
                  </div>
              </div>
            </div>

            <style>
              .input-grapesuc{
                width:100%;
                height:30px;
              }
              .label{
                margin:0 0 0 0;
              }
              .form-group{
                margin:2px 5% 3px 5%;
              }
            </style>`,
  category: 'Forms',
  media: `<svg style="width:2px;height:2px">
            <i class="bi bi-tablet-landscape icon-grapes-phone"></i>
          </svg>`,
});
blockManager.add('Textarea',{
  label: 'Textarea',
  content: `<div class="row">
              <div class="col cells">
                <div class="form-group">
                  <label class="label">Text Label</label>
                </div>
                <div class="form-group">
                  <textarea class="textarea form-control"></textarea>
                </div>
              </div>
            </div>
            <style>
              .textarea{
                width:100%;
                height:10%;
                border-radius:12px;
              }
              .form-group{
                margin:2px 10% 3px 10%;
              }
              .label{
                margin:0 0 0 0;
              }
            </style>
            `,
  category: 'Forms',
  media: `<svg style="width:2px;height:2px">
            <i class="bi bi-textarea-resize icon-grapes-phone"></i>
          </svg>`,
});

blockManager.add('InputsTC',{
  label: 'Inputs 2 Col',
  content: `
              <div class="row">
                <div class="cell col">
                  <div class="form-group">
                    <label class="label">Text Label</label>
                  </div>
                  <div class="form-group">
                    <input type="text" class="input-grapes form-control"/>
                   </div>
                </div>
                <div class="cell col">
                  <div class="form-group">
                    <label class="label">Text Label</label>
                  </div>
                  <div class="form-group">
                    <input type="text" class="input-grapes form-control"/>
                   </div>
                </div>
              <div>
              
            <style>
              .cell{
                width:8%;
                display:table-cell;
                height:65px;
              }
              @media (max-width: 768px){
                .cell{
                  width:100%;
                  display:block;
                }
              }
              .label{
                margin:0 0 0 0;
              }
              .input-grapes{
                width:100%;
                height:30px;
              }
              .form-group{
                margin:2px 5% 3px 5%;
              }
            </style>`,
  category: 'Forms',
  media: `<svg style="width:2px;height:2px">
            <i class="bi bi-layout-split icon-grapes-phone"></i>
          </svg>`,
});

blockManager.add('Text',{
  label: 'Text',
  content: `
              <div class="textdiv">Insert your text here
              </div>
              <style>
                .textdiv{
                  margin-top: 10px;
                  margin-bottom: 10px;
                  padding: 10px;
                }
              </style>
           `,
  category: 'Forms',
   media: `<svg style="width:2px;height:2px">
            <i class="bi bi-fonts icon-grapes-phone"></i>
          </svg>`,
});

blockManager.add('Seccion',{
  label: 'Seccion Div',
  content: `
              <div class="row hrstyle">
                <hr>
              <div>
              <style>
                .hrstyle{
                  margin-top: 10px;
                  margin-bottom: 10px;
                }
              </style>
           `,
  category: 'Forms',
  media: `<svg style="width:1px;height:1px">
            <i class="bi bi-arrows-expand icon-grapes-phone"></i>
          </svg>`,
});
