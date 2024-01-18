# notepadqq-jsontools-extension - it supports json format and json validate functions

https://github.com/notepadqq/notepadqq/wiki/How-to-write-an-extension-with-Node.js

In order to install:
1. Install nvm
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash

2. Reload path:
source ~/.bashrc

3. Install node 0.12
nvm install 0.12

4. Switch to node 0.12
nvm use 0.12

5. Download notepadqq source from git repository
git clone git@github.com:notepadqq/notepadqq.git

6. Download json-tools source from git repository
git clone git@github.com:kopili/notepadqq-jsontools-ext.git

7. (Optional) Build the extension
cd notepadqq-jsontools-ext/
node /<path-to-your-repo>/notepadqq/src/extension_tools/pack.js . npm

8. Install the built extension named json-tools-1.0.0.nqqext
mkdir -p ~/.config/Notepadqq/extensions
node /<path-to-your-repo>/notepadqq/src/extension_tools/install.js json-tools-1.0.0.nqqext ~/.config/Notepadqq/extensions npm
