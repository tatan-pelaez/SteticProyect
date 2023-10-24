import ConceptoHistService from "../../adherenciaServices/conceptoHistService.js";
import GrupoHistService from "../../adherenciaServices/GrupoHistService.js";
import cargaDinamicaDatosMaestros from "../../scripts/cargaDinamicaDatosMaestros.js";
import { typeButton, typeOption, typeTextarea } from "../../types/formTypes.js";
import { typeRotulo } from "../../types/gridTypes.js";
import conceptos from "./conceptos.js";
//import { Numerico } from "../../types/conceptTypes.js";
import { getTypeNumberConcepto } from "../../types/conceptTypes.js";
import camposCalculados from "../../scripts/camposCalculados.js";

export default function (editor) {
    const trm = editor.TraitManager;

    // Rasgo para consultar grupo ala base de datos
    trm.addType("grupos-options", {
        events: {
            keyup: "onChange"
        },

        onValueChange() {
            const { model, target } = this;
            const [id, nombre] = model.get('value').trim().split(":");

            // target.addAttributes({"data-idGrupo": id})
            const rotulo = target.components().models.find(el => el.attributes.type === typeRotulo);
       
            rotulo.set({
                content: nombre
            });
            target.set({
                idGrupoDB: parseInt(id)
            })
            target.view.render();
        },

        getInputEl() {
            const {target} = this;
            if (!this.$input) {
                console.log(this);
                const optionsArr = [];
                const options = this.target.components();
                this.$input = document.createElement("input");
                this.$input.setAttribute("list", GrupoHistService.idSelectorGrupos);

                GrupoHistService.listarGrupos();
            }
            return this.$input;
        }
    });

    // Rasgo para consultar conceptos a la base de datos
    trm.addType("conceptos-options", {
        events: {
            keyup: "onChange"
        },

        onClick() {
            console.log("click");
        },

        onValueChange() {
            const { model, target } = this;
            const [idConcept, type, nombre, codigo] = model.get('value').trim().split("::");

            // target.addAttributes({"data-idGrupo": id})
            const rotulo = target.components().models.find(el => el.attributes.type === typeRotulo);
            if (rotulo) {
                rotulo.set({
                    content: nombre
                });
            }
            target.set({
                idConceptoDB: parseInt(idConcept),
                nombreConcepto: nombre,
                codigoConcepto: codigo
            })
            //Atributo para campos calculados
            target.attributes.attributes["data-nombrecampo"] = codigo;
            target.view.render();

            //const { model, target } = this;
            //const [idConcept, type, nombre] = model.get('value').trim().split("::");
            ////const [idType, idConcept, nombre] = model.get('value').trim().split("::");

            //// target.addAttributes({"data-idGrupo": idConcept})
            //const rotulo = target.components().models.find(el => el.attributes.type === typeRotulo);
            //const elemento = target.components().models[1];
            //target.set({
            //    idConceptoDB: parseInt(idConcept)
            //});
            //target.components().reset(conceptos(type, idConcept, nombre))
            //target.view.render();
        },

        getInputEl() {
            const { target } = this;
            
            if (!this.$input) {
                console.log(this);
                const typeConcept = target.view.attr['data-type_concept'];
                console.log(typeConcept);

                const optionsArr = [];
                const options = this.target.components();

                this.$input = document.createElement("input");
                this.$input.setAttribute("list", ConceptoHistService.idSelectorConceptos);

                ConceptoHistService.listarConceptos(typeConcept);

                //const listConceptosJson = document.getElementById("listConceptosJson").innerHTML;
                //const listConceptos = JSON.parse(listConceptosJson);
                //console.log(listConceptos);
                //const filterJson = listConceptos.filter(concepto => concepto.Value.split("::")[1] == getTypeNumberConcepto(typeConcept));
                //this.$input = document.createElement("select");
                //filterJson.forEach(concepto => {
                //    const option = document.createElement("option");
                //    option.value = concepto.Value;
                //    option.innerHTML = concepto.Text;
                //    this.$input.appendChild(option);
                //});
                //console.log(filterJson);

                //this.$input = selectConceptMain.cloneNode(true);
                this.$input.classList.add("selectpicker");
                //this.$input.setAttribute("list", conceptos.idSelectorConceptos);

                //conceptos.listarConceptos();

            }
            return this.$input;
        }
    });
    //Trait de campo calculado // Formula
    trm.addType("campos-calc", {
        events: {
            keyup: "onChange"
        },

        onValueChange() {
            const { model, target } = this;
            const valueConfig = model.get('value').trim();
            const el = target.view.el;
            target.attributes.attributes["data-formula"] = valueConfig;

            if (valueConfig)
                el.setAttribute("disabled", true);
            camposCalculados.bind(el)({ sentence: valueConfig });
        },

        getInputEl() {
            if (!this.$input) {
                this.$input = document.createElement('textarea');
            }
            return this.$input;
        }
    });
    
}

