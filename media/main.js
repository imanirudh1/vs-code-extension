(function () {
    const vscode = acquireVsCodeApi();
    console.log('Hello js')
    const button = document.getElementById('button');
    button.innerText="Hello btn js"
})()