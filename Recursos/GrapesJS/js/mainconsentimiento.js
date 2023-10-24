const editorconsentimiento = grapesjs.init({
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

editorconsentimiento.Commands.add("set-device-desktop",{
  run: (editor)=> editorconsentimiento.setDevice("Desktop"),
});
editorconsentimiento.Commands.add("set-device-mobile",{
  run: (editor)=> editorconsentimiento.setDevice("Mobile"),
});

//proceso para eliminar la categoria extra y básico del blockManager
const bmm = editorconsentimiento.BlockManager;
const blockss = bmm.getAll();
const toRemovee = blockss.filter(block => block.get('category') === 'Forms');
toRemovee.forEach(block => bmm.remove(block.get('id')))

const blockManagerconsentimiento = editorconsentimiento.Blocks;
blockManagerconsentimiento.add('Title',{
  label: 'Title',
  content: `
              <div class="row">
                <div class="col">
                  <div class="textdiv"><center><b>Insert your title here</b></center>
                  </div>
                </div>
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
blockManagerconsentimiento.add('Text',{
  label: 'Text',
  content: `
              <div class="row">
                <div class="col">
                  <div class="textdiv">Insert your text here
                  </div>
                </div>
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
blockManagerconsentimiento.add('Text TC',{
  label: 'Text Two Column',
  content: `
              <div class="row">
                <div class="cell col">
                  <div class="textdiv">Insert your text here
                  </div>
                </div>
                <div class="cell col">
                  <div class="textdiv">Insert your text here
                  </div>
                </div>
              </div>
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
blockManagerconsentimiento.add('List',{
  label: 'List',
  content: `
              <div class="row">
                <div class="col">
                  <div class="textdiv">
                    <ul>
                      <li>List 1
                      </li>
                      <li>List 1
                      </li>
                      <li>List 1
                      </li>
                    </ul>
                  </div>
                </div>
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
            <i class="bi bi-list-task icon-grapes-phone"></i>
          </svg>`,
});
blockManagerconsentimiento.add('Seccion',{
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