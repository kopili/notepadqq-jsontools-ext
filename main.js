// First, require the module
var NotepadqqApi = require("notepadqq-api").NotepadqqApi;

// Connect to Notepadqq
NotepadqqApi.connect(function(api) {
    api.onWindowInitialization(function(window) {
        // Add a menu for JSON tools
        var jsonMenu = window.addExtensionMenu(api.extensionId, "JSON Tools");
        
        // Add menu items for Format and Validate JSON
        var formatItem = jsonMenu.addMenuItem("Format JSON");
        var validateItem = jsonMenu.addMenuItem("Validate JSON");

        // Handler for Format JSON
        formatItem.on("triggered", function() {
            var editor = window.currentEditor();
            try {
                var formattedJson = JSON.stringify(JSON.parse(editor.selectedText()), null, 4);
                editor.setSelectionsText([formattedJson]);
            } catch (e) {
                window.showMessageBox("Error", "Invalid JSON: " + e.message);
            }
        });

        // Handler for Validate JSON
        validateItem.on("triggered", function() {
            var editor = window.currentEditor();
            try {
                JSON.parse(editor.selectedText());
                window.showMessageBox("Success", "Valid JSON");
            } catch (e) {
                window.showMessageBox("Error", "Invalid JSON: " + e.message);
            }
        });
    });
});

