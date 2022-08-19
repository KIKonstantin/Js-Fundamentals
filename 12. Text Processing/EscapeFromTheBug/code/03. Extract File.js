function exctractFile(filePath) {
    let fileNameIndexStart = filePath.lastIndexOf("\\") + 1;
    let fileExctentionStart = filePath.lastIndexOf('.') + 1;
    let fileNameIndexEnd = fileExctentionStart - 1; 
    
    let fileName = filePath.substring(fileNameIndexStart, fileNameIndexEnd);
    let fileExtention = filePath.substring(fileExctentionStart);
    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${fileExtention}`);
}
exctractFile("C:\\Internal\\training-internal\\Template.pptx");
exctractFile("C:\\Projects\\Data-Structures\\LinkedList.cs");
