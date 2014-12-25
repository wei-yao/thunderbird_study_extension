var msgCompose = {
send_event_handler: function () {  
  /* var msgcomposeWindow = document.getElementById( "msgcomposeWindow" );  
  var msg_type = msgcomposeWindow.getAttribute( "msgtype" );  
  
  // do not continue unless this is an actual send event  
  if( !(msg_type == nsIMsgCompDeliverMode.Now || msg_type == nsIMsgCompDeliverMode.Later) )  
    return;  
  
  // alter subject  
  // you should save changes to both message composition fields and subject widget  
  gMsgCompose.compFields.subject += " - foo";  
  document.getElementById("msgSubject").value = gMsgCompose.compFields.subject;  
    
  // alter other composition fields/headers  
  gMsgCompose.compFields.priority = "3";  
  if( gMsgCompose.compFields.otherRandomHeaders != "" )  
    gMsgCompose.compFields.otherRandomHeaders += "\n";  
  gMsgCompose.compFields.otherRandomHeaders += "X-Suspected-spam: 82\n";   */
    var editor = GetCurrentEditor();  
    var editor_type = GetCurrentEditorType(); 
  // alter body  
  var Application = Components.classes["@mozilla.org/steel/application;1"].getService(Components.interfaces.steelIApplication);
  
  Application.console.log(editor.outputToString('text/plain', 8));
  try {  
   // var editor = GetCurrentEditor();  
  //  var editor_type = GetCurrentEditorType();  
    editor.beginTransaction();  
    editor.beginningOfDocument(); // seek to beginning  
    if( editor_type == "textmail" || editor_type == "text" ) {  
      editor.insertText( "foo" );  
      editor.insertLineBreak();  
    } else {  
      editor.insertHTML( "<p>foo</p>" );  
    }  
    editor.endTransaction();  
  } catch(ex) {  
    Components.utils.reportError(ex);  
    return false;  
  }  
}  
};