import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;

const addNewFile = (data, path, size) => {
  const [folder, name] = path.split("/", 2);
  console.log(`folder: ${folder} name: ${name}`);
  if (!data) {
    return;
  }
  if (folder && name) {
    console.log("folder " + folder);
    var dataItem = null;
    for (var i = 0; i < data.length; i++) {
      if (data[i].name === folder) {
        dataItem = data[i];
        dataItem.size += size;
        break;
      }
    }
    if (!dataItem) {
      dataItem = { name: folder, size, children: [] };
      data.push(dataItem);
    }
    addNewFile(dataItem.children, name, size);
  } else {
    data.push({ name: folder, size });
  }
};

const data = [];

const files = [
  { name: "hello/world.dat", size: 10 },
  { name: "hello/world/123/test.data", size: 44 },
  { name: "hello/hi.jpg", size: 1000 },
  { name: "test.bmp", size: 100 }
];

files.forEach((file) => {
  const { name, size } = file;
  addNewFile(data, name, size);
});
console.log(data);
