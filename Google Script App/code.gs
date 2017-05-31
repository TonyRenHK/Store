/**
Domains: http://www.tonyren.ml/
Registration Date: 05/10/2016		Expiry date: 05/10/2017   

Link : https://script.google.com/macros/s/AKfycbxh3QJIMWk_1Ww2xOHf4agex4oOdVyXJHN_MoJ9ZYVVPeo0XzVu/exec
*/

//.setFaviconUrl('https://raw.githubusercontent.com/TonyRenHK/TonyRenHK.github.io/master/favicon.ico')
function doGet() {
    return HtmlService.createHtmlOutputFromFile('index')
        .setSandboxMode(HtmlService.SandboxMode.IFRAME).addMetaTag('viewport', 'width=device-width, initial-scale=1')
        .setTitle('SFDC');;
}




function LoadingData(filename) {
    //var filename = 'DB.json';
    var folderName = 'TonyApp';

    //focus to 'TonyApp' folder 
    var folder, FileId;

    var ContentData='';
    var folders = DriveApp.getFoldersByName(folderName); // replace by the right folder name, assuming there is only one folder with this name
    if (!folders.hasNext() || folders == null) {
        //folder no exist
        folder = DriveApp.createFolder(folderName);
    } else {
        //Have found folder
        while (folders.hasNext()) {
            folder = folders.next();
        }
    } // End of folder finding


    // file id finding
    var filesIterator = DriveApp.getFilesByName(filename);
    if (!filesIterator.hasNext() || filesIterator == null) {
        var TemplateContent = '[{"id":"0","parent":"#","text":"favorite","data":{"obj":{"asdf":"Tony"}}},{"id":"1","parent":"#","text":"Work"},{"id":"2","parent":"#","text":"Fun"},{"id":"3","parent":"#","text":"Study"}]';
        ContentData = TemplateContent;
        //create new file
        var newfile = DriveApp.createFile(filename, TemplateContent);
        // get new file id
        FileId = newfile.getId();
        var copyFile = DriveApp.getFileById(FileId);
        // copy to certain folder
        var tempfile = folder.addFile(copyFile);
        DriveApp.getRootFolder().removeFile(copyFile);

        FileId = tempfile.getId();
    } else {

        var file = filesIterator.next();
        FileId = file.getId();

        ContentData = file.getAs(MimeType.HTML).getDataAsString();
    } //  // end file id finding


    var ReturnObject = JSON.parse(ContentData);

    return ReturnObject;
}





/*
Get Link Title from URL
//Test Site: http://www.hknlc.org/ http://www.digdigme.com/
*/
function GetLinkTitle(inputLink) {
    var response = UrlFetchApp.fetch(inputLink);
    var title = response.getContentText().match("<title>(.*?)</title>")[1]; // Logger.log(title);
    return title;
}








function UpdateJSONFile(FileName,FileContent){
 var filesIterator = DriveApp.getFilesByName(FileName);
    while (filesIterator.hasNext()) {
        var file = filesIterator.next();//Logger.log(file.getAs(MimeType.HTML).getDataAsString());
        file.setContent(FileContent);
    }
  
  return 'OK';
}
















/******************************************************************************************************************************************/

function TestCreateFile() {
    DriveApp.createFile('DB.json', 'Hello, world!');
}



function findingFile() {
    var filesIterator = DriveApp.getFilesByName('DB.json');
    while (filesIterator.hasNext()) {
        var file = filesIterator.next();
        Logger.log(file.getAs(MimeType.HTML).getDataAsString());
        file.setContent('wwwwwwwwwwww');
    }
}
