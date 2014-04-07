#!/bin/sh
guid=$(uuidgen | tr -d '\n-' | tr '[:upper:]' '[:lower:]')
static_url="..\/static\/$guid"
echo "$guid"
sed -i "s/^STATIC_GUID = .*/STATIC_GUID = '$guid'/" ./application/properties.py
#sed -i "s/^    dir: .*/    dir: '$static_path',/" ./optimizer/build.js
sed -i "s/^    \"baseUrl\": .*/    \"baseUrl\": \"$static_url\/js\",/" ./application/frontend/static/js/app.js
sed -i "s/^                            resGetPath: .*/                            resGetPath: '$static_url\/locales\/__lng__\/__ns__.json'};/" ./application/frontend/static/js/settings.js
cd './optimizer'
node ./r.js -o build.js
cd "../"

sed -i -r "s/(\ ?|\ +),(\ ?|\ +)[a-zA-Z]\.log(Error|Json|Object|Trace|Debug|Info|Warn)(\ ?|\ +)\([^)]*\)(\ ?|\ +),(\ ?|\ +)/,/g" ./application/frontend/static-build/js/app.js
sed -i -r "s/(\ ?|\ +),(\ ?|\ +)[a-zA-Z]\.log(Error|Json|Object|Trace|Debug|Info|Warn)(\ ?|\ +)\([^)]*\)(\ ?|\ +),?(\ ?|\ +);/;/g" ./application/frontend/static-build/js/app.js
sed -i -r "s/(\ ?|\ +),?(\ ?|\ +)[a-zA-Z]\.log(Error|Json|Object|race|Debug|Info|Warn)(\ ?|\ +)\([^)]*\)(\ ?|\ +),?(\ ?|\ +);?//g" ./application/frontend/static-build/js/app.js

#cd "./application/frontend/static-build/views"
#find . -name '*.mustache' -exec sed -i '/^\s∗\/\//d' {} \;
#find . -name '*.mustache' -exec sed -i 's/^[ \t]*//g; s/[ \t]*$//g;' {} \;
#find . -name '*.mustache' -exec sed -i ':a;N;$!ba;s/\n/ /g' {} \;
#cd '../locales'
cd './application/frontend/static-build/locales'
find . -name '*.json' -exec sed -i '/^\s∗\/\//d' {} \;
find . -name '*.json' -exec sed -i 's/^[ \t]*//g; s/[ \t]*$//g;' {} \;
find . -name '*.json' -exec sed -i ':a;N;$!ba;s/\n/ /g' {} \;
