$("#AppartNumber").hide();
$("#FloorNumber").hide();
$("#BaseNumber").hide();
$("#ParkNumber").hide();
$("#CabNumber").hide();
$("#OccNumber").hide();
$("#HourNumber").hide();
$("#GradeType").hide();
$("#GradeCost").hide();
$("#RecNumber").hide();
$("#IncNumber").hide();
$("#InstallWithCabCost").hide();
$("#EstimTotalCost").hide();
 

$('#BuildingType').on('change',function () {
    //var optionValue = $(this).val();
     var TypeValue = $("#BuildingType option:selected").val();
    
    if(TypeValue=="Residential"){
                $("#AppartNumber").show();
                $("#FloorNumber").show();
                $("#BaseNumber").show();
                $("#ParkNumber").hide();
                $("#CabNumber").hide();
                $("#OccNumber").hide();
                $("#HourNumber").hide();
                $("#RecNumber").show();
                $("#GradeType").show();
                $("#GradeCost").show();
                $("#IncNumber").hide();
                $("#InstallWithCabCost").show();
                $("#EstimTotalCost").show();
                $("#AppartNumberV").keyup(function(){
                    residential();
                })


            };
    if(TypeValue=="Commercial"){
                $("#AppartNumber").hide();
                $("#FloorNumber").show();
                $("#BaseNumber").show();
                $("#ParkNumber").show();
                $("#CabNumber").show();
                $("#OccNumber").hide();
                $("#HourNumber").hide();
                $("#RecNumber").show();
                $("#GradeType").show();
                $("#GradeCost").show();
                $("#IncNumber").hide();
                $("#InstallWithCabCost").show();
                $("#EstimTotalCost").show();

                };
    if(TypeValue=="Corporate"){
                $("#AppartNumber").hide();
                $("#FloorNumber").show();
                $("#BaseNumber").show();
                $("#ParkNumber").show();
                $("#CabNumber").hide();
                $("#OccNumber").show();
                $("#HourNumber").hide();
                $("#RecNumber").show();
                $("#GradeType").show();
                $("#GradeCost").show();
                $("#IncNumber").hide();
                $("#InstallWithCabCost").show();
                $("#EstimTotalCost").show();

            };
    if(TypeValue=="Hybrid"){
                $("#AppartNumber").hide();
                $("#FloorNumber").show();
                $("#BaseNumber").show();
                $("#ParkNumber").show();
                $("#CabNumber").hide();
                $("#OccNumber").show(); 
                $("#HourNumber").show();
                $("#RecNumber").show();
                $("#GradeType").show();
                $("#GradeCost").show();
                $("#IncNumber").show();
                $("#InstallWithCabCost").show();
                $("#EstimTotalCost").show();

            };
    if(TypeValue==""){
                $("#AppartNumber").hide();
                $("#FloorNumber").hide();
                $("#BaseNumber").hide();
                $("#ParkNumber").hide();
                $("#CabNumber").hide();
                $("#OccNumber").hide();
                $("#HourNumber").hide();
                $("#RecNumber").hide();
                $("#GradeType").hide();
                $("#GradeCost").hide();
                $("#IncNumber").hide();
                $("#InstallWithCabCost").hide();
                $("#EstimTotalCost").hide();
            
            };
  
    
 });




            var FNV = document.getElementById('FloorNumberV');
            var ANV = document.getElementById('AppartNumberV');
            var BNV = document.getElementById('BaseNumberV');
            var PNV = document.getElementById('ParkNumberV');
            var CNV = document.getElementById('CabNumberV'); 
            var ONV = document.getElementById('OccNumberV');
            var HNV = document.getElementById('HourNumberV'); 
            var RNV = document.getElementById('RecNumberV');
            var GTV = document.getElementById('GradeTypeV');
            var GCV = document.getElementById('GradeCostV');
            var IWCCV = document.getElementById('InstallWithCabCostV');
            var ETC = document.getElementById('EstimTotalCostV');
           



 $(document).ready(function(){
     $("input[type='radio']").on('click', function(){
        var radioValue = $("input[name='GradeTypeV']:checked").val();
        if(radioValue=="7565"){
            GCV.value=radioValue;

            console.log(GCV.value);
            IWCCV.value=GCV.value*1.1;
            IWCCV.value=Math.round(IWCCV.value*100)/100

            console.log(IWCCV.value);
            ETC.value=IWCCV.value*RNV.value
            ETC.value=Math.round(ETC.value*100)/100

            console.log(ETC.value)
            }
        if(radioValue=="12345"){
            GCV.value=radioValue;
            accounting.formatNumber(GCV.value);
            console.log(GCV.value);
            IWCCV.value=GCV.value*1.13;
            IWCCV.value=Math.round(IWCCV.value*100)/100

            console.log(IWCCV.value);
            ETC.value=IWCCV.value*RNV.value
            ETC.value=Math.round(ETC.value*100)/100

            console.log(ETC.value)
            }
        if(radioValue=="15400"){
            GCV.value=radioValue;

            console.log(GCV.value);
            IWCCV.value=GCV.value*1.16;
            IWCCV.value=Math.round(IWCCV.value*100)/100

            console.log(IWCCV.value);
            ETC.value=IWCCV.value*RNV.value
            ETC.value=Math.round(ETC.value*100)/100

            console.log(ETC.value)
            }
        });
     });


         
        
 function commercial()
            
            {
            console.log("calcul commercial");
            RNV.value = CNV.value;
                 
            }          
 function residential()
            {
            console.log("calcul residential");
 
            var AAF = ANV.value/FNV.value;
            CNV.value = Math.ceil(AAF/6);
            console.log(CNV.value);   
            var COL = Math.ceil(FNV.value/20);
            console.log(COL); 
            RNV.value = CNV.value*COL;
            RNV.value = Math.ceil(RNV.value)    
            console.log(RNV.value);    
            } 

 function corbrid()
            {
            console.log("calcul corporate and hybrid");
            var SH = parseInt(FNV.value) + parseInt(BNV.value) ; 
            console.log(SH);
            var HALO =  ONV.value * SH ;
            console.log(HALO);  
            CNV.value = Math.ceil(HALO/1000);
            console.log(CNV.value);  
            var COL = Math.ceil(SH/20);   
            console.log(COL);    
            var DOOM= CNV.value/COL ;
            DOOM = Math.ceil(DOOM)  
            console.log(DOOM);     
            RNV.value = DOOM*COL
            RNV.value = Math.ceil(RNV.value)  
            console.log(RNV.value);     
            } 

function chaos(){
    if(GCV.value=="7565"){

            IWCCV.value=GCV.value*1.1;
            IWCCV.value=Math.round(IWCCV.value*100)/100;

            console.log(IWCCV.value);
            ETC.value=IWCCV.value*RNV.value;
            ETC.value=Math.round(ETC.value*100)/100;

            console.log(ETC.value);
            }
        if(GCV.value=="12345"){

            IWCCV.value=GCV.value*1.13;
            IWCCV.value=Math.round(IWCCV.value*100)/100;

            console.log(IWCCV.value);
            ETC.value=IWCCV.value*RNV.value;
            ETC.value=Math.round(ETC.value*100)/100;

            console.log(ETC.value);
            }
        if(GCV.value=="15400"){

            IWCCV.value=GCV.value*1.16;
            IWCCV.value=Math.round(IWCCV.value*100)/100;

            console.log(IWCCV.value);
            ETC.value=IWCCV.value*RNV.value;
            ETC.value=Math.round(ETC.value*100)/100;

            console.log(ETC.value);
            }
}


$("input").on('keyup click',function () {
    //var optionValue = $(this).val();
     var TypeValue = $("#BuildingType option:selected").val();
    
    if(TypeValue=="Residential"){
        
            residential();
            chaos();
            }
    if(TypeValue=="Commercial"){
             
            commercial();
            chaos();
            }
    if(TypeValue=="Corporate"){
        
           corbrid();
           chaos();
            }
    if(TypeValue=="Hybrid"){
        
           corbrid();
           chaos();
            }
   
 });

//(function(e,c){"object"===typeof exports&&"undefined"!==typeof module?module.exports=c():"function"===typeof define&&define.amd?define(c):e.currency=c()})(this,function(){function e(b,a){if(!(this instanceof e))return new e(b,a);a=Object.assign({},m,a);var f=Math.pow(10,a.precision);this.intValue=b=c(b,a);this.value=b/f;a.increment=a.increment||1/f;a.groups=a.useVedic?n:p;this.s=a;this.p=f}function c(b,a){var f=2<arguments.length&&void 0!==arguments[2]?arguments[2]:!0,c=a.decimal,g=a.errorOnInvalid;
//var d=Math.pow(10,a.precision);var h="number"===typeof b;if(h||b instanceof e)d*=h?b:b.value;else if("string"===typeof b)g=new RegExp("[^-\\d"+c+"]","g"),c=new RegExp("\\"+c,"g"),d=(d*=b.replace(/\((.*)\)/,"-$1").replace(g,"").replace(c,"."))||0;else{if(g)throw Error("Invalid Input");d=0}d=d.toFixed(4);return f?Math.round(d):d}var m={symbol:"$",separator:",",decimal:".",formatWithSymbol:!1,errorOnInvalid:!1,precision:2,pattern:"!#",negativePattern:"-!#"},p=/(\d)(?=(\d{3})+\b)/g,n=/(\d)(?=(\d\d)+\d\b)/g;
//e.prototype={add:function(b){var a=this.s,f=this.p;return e((this.intValue+c(b,a))/f,a)},subtract:function(b){var a=this.s,f=this.p;return e((this.intValue-c(b,a))/f,a)},multiply:function(b){var a=this.s;return e(this.intValue*b/Math.pow(10,a.precision),a)},divide:function(b){var a=this.s;return e(this.intValue/c(b,a,!1),a)},distribute:function(b){for(var a=this.intValue,f=this.p,c=this.s,g=[],d=Math[0<=a?"floor":"ceil"](a/b),h=Math.abs(a-d*b);0!==b;b--){var k=e(d/f,c);0<h--&&(k=0<=a?k.add(1/f):k.subtract(1/
//f));g.push(k)}return g},dollars:function(){return~~this.value},cents:function(){return~~(this.intValue%this.p)},format:function(b){var a=this.s,c=a.pattern,e=a.negativePattern,g=a.formatWithSymbol,d=a.symbol,h=a.separator,k=a.decimal;a=a.groups;var l=(this+"").replace(/^-/,"").split("."),m=l[0];l=l[1];"undefined"===typeof b&&(b=g);return(0<=this.value?c:e).replace("!",b?d:"").replace("#","".concat(m.replace(a,"$1"+h)).concat(l?k+l:""))},toString:function(){var b=this.s,a=b.increment;return(Math.round(this.intValue/
//this.p/a)*a).toFixed(b.precision)},toJSON:function(){return this.value}};return e});




