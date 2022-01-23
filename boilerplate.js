const fs = require('fs');
const folderName = process.argv[2] || 'Project';

const data = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- Personal CSS -->
    <link rel="stylesheet" href="styles.css">

    <!-- Personal JS -->
    <script src="app.js" defer></script>

    <title>Document</title>
</head>
<body>
    
</body>
</html>`;

try{
    fs.mkdirSync(folderName);
    fs.writeFileSync(`${folderName}/index.html`,data);
    fs.writeFileSync(`${folderName}/app.js`,"");
    fs.writeFileSync(`${folderName}/styles.css`,"");
} catch (e){
    console.log("Something Went Wrong");
    console.log(e);
}


