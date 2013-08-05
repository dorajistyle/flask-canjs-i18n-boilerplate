var config = module.exports;

config["Porposal Center tests"] = {
    rootPath: "../",
    environment: "browser", // or "node"
    libs: [
        "js/vendor/require.js",
        "js/require-config.js"
    ],
    resources: ["js/**/*.js", "locales/**/*.json"],
    sources: ["js/app/**/*.js"],
    tests: ["test/*-test.js"],
    extensions: [require("buster-amd")],
    "buster-amd": {
        pathMapper: function (path) {
            return path.
                // remove extension
                replace(/\.js$/, "").
                // replace leading slash with previous directory for test files
                replace(/^\//, "../");
        }
    }
};
