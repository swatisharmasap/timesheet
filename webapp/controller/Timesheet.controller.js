sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("sap.com.timesheet.controller.Timesheet", {
            onInit: function () {
                var oJSONDATA={

                    Records:[
                        {
                        Day1:8,
                        Day2 :8,
                        Day3:8,
                        Day4:8,
                        Day5:8,
                        Day6:"",
                        Day7:"",
                    },

                    ] ,
                    ProjectName: [
                    {
                        ProjectID:"Project1",
                        ProjectName:"Project 1"
                    },
                    {
                        ProjectID:"Project2",
                        ProjectName:"Project 2"
                    },
                    {
                        ProjectID:"SickLeave",
                        ProjectName:"Sick Leave"
                    },
                    {
                        ProjectID:"EarnedLeave",
                        ProjectName:"Earned Leave"
                    }]
                };
                var oTimeSheetJSONModel = new sap.ui.model.json.JSONModel(oJSONDATA);
                this.getView().setModel(oTimeSheetJSONModel, "oTimeSheetJSONModel");
  },
  onCalculateData: function() {
    var oTimeSheetJSONModel = this.getView().getModel("oTimeSheetJSONModel");
    var modelData = oTimeSheetJSONModel.getData().Records;
    var grandTotal = 0;

    for(let i=0; i<modelData.length; i++){
        var row = modelData[i];
          grandTotal = grandTotal + row.Day1 + row.Day2 + row.Day3+row.Day4+row.Day5;

    }


   

    this.getView().byId("Grandtotalid").setText(grandTotal);
},

  onAdd:function(){
    var oTimeSheetJSONModel = this.getView().getModel("oTimeSheetJSONModel");

    var modelData = oTimeSheetJSONModel.getData();

    var orecordArray = modelData.Records;

    orecordArray.push({
   
    });

    modelData.Records = orecordArray;
    oTimeSheetJSONModel.setData(modelData);
  },
  onDelete:function(){
    var oTimeSheetJSONModel = this.getView().getModel("oTimeSheetJSONModel");
    var modelData = oTimeSheetJSONModel.getData();    
    var orecordArray = modelData.Records;
    orecordArray.pop();
    oTimeSheetJSONModel.setData(modelData)


},
onInputChange: function(oEvent) {
    var oInput = oEvent.getSource();
    var sValue = oInput.getValue();

    if (isNaN(parseFloat(sValue)) || !isFinite(sValue)) {
        oInput.setValueState(sap.ui.core.ValueState.Error);
        oInput.setValueStateText("Please enter a valid numeric value");
    } else {
        oInput.setValueState(sap.ui.core.ValueState.None);
    }
},
});
    
        
});

            
           
    
