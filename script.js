function downloadPDF(){

    const element=document.querySelector("#pdf-content");
    //console.log("element");

    const otp={
        margin: [10, 5, 15, 5], //[ariba, izquierda, abajo, derecha] en nm
        filename: "Hoja_de_vida_Samuel_Agudelo_Cifuentes.pdf",
        imagine: {type: "jpeg",quality:1},
        html2canvas:{
            scale: 2,
            useCORS: true,
            scro11Y:0
        },
        jsPDF:{
            unit: "mm",
            format: "a4",
            orientation: "portrait" // Orientacion vertical
        }
    {

        html2pdf(). set(otp). from(element). save();

        
    }

        
        