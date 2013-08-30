#!/bin/sh
cd './optimizer'
node ./r.js -o build.js
cd '../application/frontend/static-build/views'
find . -name '*.mustache' -exec sed -i '/^\s∗\/\//d' {} \;
find . -name '*.mustache' -exec sed -i 's/^[ \t]*//g; s/[ \t]*$//g;' {} \;
find . -name '*.mustache' -exec sed -i ':a;N;$!ba;s/\n/ /g' {} \;
cd '../locales'
find . -name '*.json' -exec sed -i '/^\s∗\/\//d' {} \;
find . -name '*.json' -exec sed -i 's/^[ \t]*//g; s/[ \t]*$//g;' {} \;
find . -name '*.json' -exec sed -i ':a;N;$!ba;s/\n/ /g' {} \;
