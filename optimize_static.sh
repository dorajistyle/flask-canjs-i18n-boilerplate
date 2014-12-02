#!/bin/sh
pushd `dirname $0` > /dev/null
SCRIPTPATH=`pwd -P`
guid=$(uuidgen | tr -d '\n-' | tr '[:upper:]' '[:lower:]')
guid=${guid:0:8}
today=$(date '+%Y%m%d')
guid=$today'-'$guid
#static_path="..\/application\/frontend\/static-build\/$guid"
#static_url="..\/static\/$guid"
echo "$guid"
extremely_very_old_guid=$(sed -n '/^VERY_OLD_GUID/ s/.*\= *//p' "$SCRIPTPATH/application/config/guid.py")
sed -i "s/^EXTREMELY_VERY_OLD_GUID = .*/EXTREMELY_VERY_OLD_GUID = $extremely_very_old_guid/" "$SCRIPTPATH/application/config/guid.py"
very_old_guid=$(sed -n '/^OLD_GUID/ s/.*\= *//p' "$SCRIPTPATH/application/config/guid.py")
sed -i "s/^VERY_OLD_GUID = .*/VERY_OLD_GUID = $very_old_guid/" "$SCRIPTPATH/application/config/guid.py"
old_guid=$(sed -n '/^GUID/ s/.*\= *//p' "$SCRIPTPATH/application/config/guid.py")
sed -i "s/^OLD_GUID = .*/OLD_GUID = $old_guid/" "$SCRIPTPATH/application/config/guid.py"
sed -i "s/^GUID = .*/GUID = '$guid'/" "$SCRIPTPATH/application/config/guid.py"
cd "$SCRIPTPATH/application/frontend/compiler/"
grunt static
grunt --gruntfile Gruntfile_uncss.js
cd "$SCRIPTPATH"
cd "$SCRIPTPATH/optimizer"
node "$SCRIPTPATH/optimizer/r.js" -o build.js
cd "$SCRIPTPATH"
sed -i -r "s/(\ ?|\ +),(\ ?|\ +)[a-zA-Z]\.log(Error|Json|Object|Trace|Debug|Info|Warn)(\ ?|\ +)\([^)]*\)(\ ?|\ +),(\ ?|\ +)/,/g" "$SCRIPTPATH/application/frontend/static-build/js/app.js"
sed -i -r "s/(\ ?|\ +),(\ ?|\ +)[a-zA-Z]\.log(Error|Json|Object|Trace|Debug|Info|Warn)(\ ?|\ +)\([^)]*\)(\ ?|\ +),?(\ ?|\ +);/;/g" "$SCRIPTPATH/application/frontend/static-build/js/app.js"
sed -i -r "s/(\ ?|\ +),?(\ ?|\ +)[a-zA-Z]\.log(Error|Json|Object|race|Debug|Info|Warn)(\ ?|\ +)\([^)]*\)(\ ?|\ +),?(\ ?|\ +);?//g" "$SCRIPTPATH/application/frontend/static-build/js/app.js"

#cd "$SCRIPTPATH/application/frontend/static-build/views"
#find . -name '*.mustache' -exec sed -i '/^\s∗\/\//d' {} \;
#find . -name '*.mustache' -exec sed -i 's/^[ \t]*//g; s/[ \t]*$//g;' {} \;
#find . -name '*.mustache' -exec sed -i ':a;N;$!ba;s/\n/ /g' {} \;
#cd '../locales'
cd "$SCRIPTPATH/application/frontend/static-build/locales"
find . -name '*.json' -exec sed -i '/^\s∗\/\//d' {} \;
find . -name '*.json' -exec sed -i 's/^[ \t]*//g; s/[ \t]*$//g;' {} \;
find . -name '*.json' -exec sed -i ':a;N;$!ba;s/\n/ /g' {} \;
find . -name '*.json' -exec sed -i 's/\"\s*:\s*\"/\":\"/g' {} \;
find . -name '*.json' -exec sed -i 's/\"\s*,\s*\"/\",\"/g' {} \;
find . -name '*.json' -exec sed -i 's/\s*{\s*/{/g' {} \;
find . -name '*.json' -exec sed -i 's/\s*}\s*/}/g' {} \;
popd > /dev/null
